import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <a
      href="https://www.linkedin.com/in/timhausweiler/"
      style={{ textDecoration: "none" }}
      class="preview-title"
      id="footer-container"
      target="_blank"
    >
      Made by <span>Tim Hausweiler</span> (2022)
    </a>
  );
}
