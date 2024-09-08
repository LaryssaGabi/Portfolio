import { Header } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";

function Headers() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
        <Header>
          <button
            onClick={() => navigate("/")}
            className={location.pathname === "/" ? "active" : ""}
          >
            About
          </button>
          <button
            onClick={() => navigate("/resume")}
            className={location.pathname === "/resume" ? "active" : ""}
          >
            Resume
          </button>
          <button
            onClick={() => navigate("/project")}
            className={location.pathname === "/project" ? "active" : ""}
          >
            Portfolio
          </button>
        </Header>
    </>
  );
}

export default Headers;
