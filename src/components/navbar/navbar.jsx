import "./navbar.css";

export default function Navbar() {
  function toggleMenu() {
    const hamElem = document.querySelector(".nav-side-links");
    if (hamElem.style.display === "flex") hamElem.style.display = "none";
    else hamElem.style.display = "flex";
  }

  return (
    <>
      <nav id="navbar">
        <div id="nav-main">
          <div className="nav-links">Utkarsh Vishnoi</div>
        </div>
        <div className="nav-side">
          <div id="nav-ham" onClick={toggleMenu}>
            <img src="./imgs/ham.svg" alt="hamburger" id="ham-icon" />
          </div>
        </div>
        <div className="nav-side nav-side-links">
          <div className="nav-links side-links">Home</div>
          <div className="nav-links side-links">CV</div>
          <div className="nav-links side-links">Contact Me</div>
        </div>
      </nav>
    </>
  );
}
