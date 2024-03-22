import "./socials.css";

export default function Socials({ custClass }) {
  return (
    <div className={`social-div ${custClass || ""}`}>
      <a href="https://github.com/UtkarshVishnoi" target="_blank">
        <img src="imgs/github.svg" alt="github" className="social-logo" />
      </a>
      <a href="https://www.instagram.com/utkarsh._.vishnoi/" target="_blank">
        <img src="imgs/insta.svg" alt="instagram" className="social-logo" />
      </a>
      <a
        href="https://www.linkedin.com/in/utkarsh-vishnoi-2351a2275"
        target="_blank"
      >
        <img src="imgs/linkedin.svg" alt="linked in" className="social-logo" />
      </a>
    </div>
  );
}
