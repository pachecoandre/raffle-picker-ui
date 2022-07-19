import { Link } from "react-router-dom";
import { useGlobalContext } from "../../state";
import { Nav } from "./styles";
const NavBar = () => {
  const { resetState } = useGlobalContext();
  const handleLogout = () => resetState();

  return (
    <Nav>
      <Link to={"/"}>Home</Link>
      <button onClick={handleLogout}>Log out</button>
    </Nav>
  );
};

export default NavBar;
