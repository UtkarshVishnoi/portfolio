import { useEffect } from "react";
import "./styles/intro.css";

export default function Intro() {
  function introTyper() {
    const introTextElem = document.querySelector("#back-intro-text");
    let txt = "FULL STACK DEVELOPER",
      i = 0,
      flag = true;

    setInterval(() => {
      if (flag) {
        introTextElem.innerHTML = txt.substring(0, i++);
        if (i === txt.length) {
          flag = false;
        }
      } else {
        introTextElem.innerHTML = txt.substring(0, i--);
        if (i === 0) flag = true;
      }
    }, 120);
  }

  useEffect(() => {
    setTimeout(() => {
      introTyper();
    }, 3000);
  }, []);

  return (
    <div id="main-intro-div">
      <div id="intro-div">
        <div id="intro-head">
          <p id="front-intro-text">Hi, I am</p>
          <p id="back-intro-text"></p>
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
