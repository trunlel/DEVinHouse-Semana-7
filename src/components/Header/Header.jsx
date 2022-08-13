import "./header.css";
import logoBobLanches from "../../assets/logoBobLanches.png";

export const Header = () => {
  return (
    <div className="header">
      <img src={logoBobLanches} alt="Bob Lanches" className="logo" />

      <nav className="nav">
        <ul className="ul">
          <li>Hamburguers</li>
          <li>Prensados</li>
          <li>Cachorros Quentes</li>
          <li>Bebidas</li>
        </ul>
      </nav>
    </div>
  );
};
