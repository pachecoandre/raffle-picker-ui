import Button from "components/Button";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../state";
import { Nav } from "./styles";
const NavBar = () => {
  const { resetState } = useGlobalContext();
  const handleLogout = () => resetState();

  return (
    <Nav>
      <Link to={"/"}>Home</Link>
      <Button onClick={handleLogout}>Log out</Button>
    </Nav>
  );
};

export default NavBar;
