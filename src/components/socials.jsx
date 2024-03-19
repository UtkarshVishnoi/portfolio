import "./styles/socials.css";

export default function Socials({ custClass }) {
  return (
    <div className={`social-div ${custClass || ""}`}>
      <img src="imgs/github.svg" alt="github" className="social-logo" />
      <img src="imgs/insta.svg" alt="instagram" className="social-logo" />
      <img src="imgs/linkedin.svg" alt="linked in" className="social-logo" />
    </div>
  );
}
