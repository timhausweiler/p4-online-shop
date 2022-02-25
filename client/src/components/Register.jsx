import { useState } from 'react'
import { registerUser } from '../services/users'
import { useNavigate } from 'react-router-dom'

export default function Register(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const navigate = useNavigate()

  return (

    <form onSubmit={async (e) => {
      e.preventDefault()
      const user = {
        username,
        first_name: firstName,
        last_name: lastName,
        email,
        password
      }
      const resp = await registerUser(user)
      props.setCurrentUser(resp)
      navigate('/')
    }}>

      <input type='text' onChange={(e) => setUsername(e.target.value) } value={username} />
      <input type='text' onChange={(e) => setFirstName(e.target.value) } value={firstName} />
      <input type='text' onChange={(e) => setLastName(e.target.value) } value={lastName} />
      <input type='text' onChange={(e) => setEmail(e.target.value) } value={email} />
      <input type='password' onChange={ (e) => setPassword(e.target.value)} value={password} />
      <button>Sign Up</button>
    </form>
  )
}
