import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="register-master-container">
        <div className="register-container">
          {" "}
          <img
            src="https://www.shareicon.net/data/512x512/2016/11/22/854956_search_512x512.png"
            alt="store-logo"
            className="register-logo"
          />
          <h2 className="register-text-container">
            Keep me updated about devices, news, tips, and offers from the
            Google Store.
          </h2>
          <Link to={`/register`}>
            <button className="register-button">Sign up</button>
          </Link>
        </div>
      </div>
      <a
        href="https://www.linkedin.com/in/timhausweiler/"
        style={{ textDecoration: "none" }}
        className="preview-title footer"
        target="_blank"
        rel="noreferrer"
      >
        Made by <span>Tim Hausweiler</span> (2022)
      </a>
    </>
  );
}
