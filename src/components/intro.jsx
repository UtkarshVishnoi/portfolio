import "./styles/intro.css";

export default function Intro() {
  return (
    <div id="main-intro-div">
      <div id="intro-div">
        <div id="intro-head">
          <p id="front-intro-text">Hi, I am</p>
          <p id="back-intro-text">FULL STACK DEVELOPER</p>
        </div>
        <div className="image-center">
          <div id="back-name-div">
            <p id="back-name-left">UTKARSH</p>
            <p id="back-name-spacer"></p>
            <p id="back-name-right">VISHNOI</p>
          </div>
          <img src="imgs/user.svg" alt="profile picture" id="intro-dp" />
        </div>
      </div>
      <div id="social-div">
        <img src="imgs/github.svg" alt="github" className="social-logo" />
        <img src="imgs/insta.svg" alt="instagram" className="social-logo" />
        <img src="imgs/linkedin.svg" alt="linked in" className="social-logo" />
      </div>
    </div>
  );
}
