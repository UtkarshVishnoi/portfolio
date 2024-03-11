import "./styles/navbar.css";

export default function Navbar() {
  return (
    <>
      <nav id="navbar">
        <div id="nav-main">
          <div className="nav-links">Utkarsh Vishnoi</div>
        </div>
        <div id="nav-side">
          <div className="nav-links">Home</div>
          <div className="nav-links">CV</div>
          <div className="nav-links">Contact Me</div>
        </div>
      </nav>
    </>
  );
}
