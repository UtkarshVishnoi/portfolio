import "./footer.css";
import Socials from "../socials/socials.jsx";

export default function Footer() {
  return (
    <div id="footer-div">
      <Socials custClass={"footer-socials"} />
      <div id="social-names">
        <a href="https://github.com/UtkarshVishnoi" target="_blank">
          UtkarshVishnoi
        </a>
        <a href="https://www.instagram.com/utkarsh._.vishnoi/" target="_blank">
          utkarsh._.vishnoi
        </a>
        <a
          href="https://www.linkedin.com/in/utkarsh-vishnoi-2351a2275"
          target="_blank"
        >
          Utkarsh Vishnoi
        </a>
      </div>
      <div id="copyright">
        <p>Copyright &#169; 2023 - 2024</p>
        <p>Utkarsh Vishnoi, Inc. - All Rights Reserved</p>
      </div>
    </div>
  );
}
