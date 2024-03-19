import "./styles/footer.css";
import Socials from "./socials.jsx";

export default function Footer() {
  return (
    <div id="footer-div">
      <Socials custClass={"footer-socials"} />
      <div id="social-names">
        <p>UtkarshVishnoi</p>
        <p>utkarsh._.vishnoi</p>
        <p>Utkarsh Vishnoi</p>
      </div>
      <div id="copyright">
        <p>Copyright &#169; 2023 - 2024</p>
        <p>Utkarsh Vishnoi, Inc. - All Rights Reserved</p>
      </div>
    </div>
  );
}
