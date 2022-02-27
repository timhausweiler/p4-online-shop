import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Link
      to="https://www.linkedin.com/in/timhausweiler/"
      style={{ textDecoration: "none" }}
      className="preview-title"
    >
      Tim Hausweiler (2022)
    </Link>
  );
}
