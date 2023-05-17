import Nav from "./Nav";

import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <div className="Navbar">
        <img src={logo} alt="Logo" />
        <Nav />
    </div>
  );
}

export default Navbar;
