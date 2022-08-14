import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <p className="copy">© Bob Lanches LTDA.</p>
        <div className="social">
          <i className="icons">
            <BsFacebook />
          </i>
          <i className="icons">
            <BsWhatsapp />
          </i>
          <i className="icons">
            <BsInstagram />
          </i>
        </div>

        <div className="endereco">
          <p>Palhoça, Santa Catarina</p>
          <hr />
          <p>190 R. Nossa Sra. dos Navegantes</p>
          <hr />
          <p>(48) 9 9801-5805</p>
          <br />
        </div>
      </div>
    </footer>
  );
};
