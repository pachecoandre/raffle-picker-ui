import Button from "components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../state";
import { Nav } from "./styles";

const NavBar = () => {
  const { resetState } = useGlobalContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("t");
    resetState();
    navigate("/login");
  };

  return (
    <Nav>
      <Link to={"/"}>Home</Link>
      <Button onClick={handleLogout}>Log out</Button>
    </Nav>
  );
};

export default NavBar;
