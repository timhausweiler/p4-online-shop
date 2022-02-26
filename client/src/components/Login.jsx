import { useState } from "react";
import { loginUser } from "../services/users";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const user = {
          username,
          password,
        };
        const resp = await loginUser(user);
        props.setCurrentUser(resp);

        navigate("/");
      }}
    >
      <h2>Log in to your account.</h2>
      <br />
      <h5>Username</h5>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        className="user-input-field"
      />
      <h5>password</h5>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="user-input-field"
      />
      <br />
      <br />
      <button>Login</button>
    </form>
  );
}
