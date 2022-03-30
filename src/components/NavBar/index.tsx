import { Link } from "react-router-dom";
import { useUserContext } from "../../state";
const NavBar = () => {
  const { resetState } = useUserContext();
  const handleLogout = () => resetState();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px",
        backgroundColor: "#eeeeee",
      }}
    >
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <button onClick={handleLogout}>Log out</button>
    </nav>
  );
};

export default NavBar;
