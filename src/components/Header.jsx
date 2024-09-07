import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <div className="termos">
      <Link to="/">Política Privacidade</Link>
      <Link to="/terms">Termos e Condições</Link>
    </div>
  );
};

export default Header;
