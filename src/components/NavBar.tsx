import { Link } from "react-router-dom";
import { useUserContext } from "../state/context";
const NavBar = () => {
  const { resetState } = useUserContext();
  const handleLogout = () => {
    resetState();
  };
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <span>{" | "}</span>
      <Link to={"/about"}>About</Link>
      <span>{" | "}</span>
      <button onClick={handleLogout}>Log out</button>
    </nav>
  );
};

export default NavBar;
