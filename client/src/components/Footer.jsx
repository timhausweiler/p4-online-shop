import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Link
      to="https://www.linkedin.com/in/timhausweiler/"
      style={{ textDecoration: "none" }}
      className="preview-title"
      id="footer-container"
    >
      Made by <span>Tim Hausweiler</span> (2022)
    </Link>
  );
}
