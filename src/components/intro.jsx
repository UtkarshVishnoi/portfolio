import { useEffect } from "react";
import "./styles/intro.css";

export default function Intro() {
  function introTyper() {
    const introTextElem = document.querySelector("#back-intro-text");
    const hobbyArr = ["FULL STACK DEVELOPER", "PHOTOGRAPHER"];
    let i = 0,
      j = 0,
      flag = true;

    setInterval(() => {
      if (i == hobbyArr.length) i = 0;
      if (flag) {
        introTextElem.innerHTML = hobbyArr[i].substring(0, j++);
        if (j === hobbyArr[i].length) {
          flag = false;
        }
      } else {
        introTextElem.innerHTML = hobbyArr[i].substring(0, j--);
        if (j === 0) {
          i++;
          flag = true;
        }
      }
    }, 140);
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
