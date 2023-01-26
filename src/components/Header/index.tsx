import "./style.css";
import participant from "../../assets/participante.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-image" role="img" aria-label="Drawer logo"></div>
      <img
        className="participant"
        src={participant}
        alt="Participant with a gift on their hand"
      />
    </header>
  );
};

export default Header;
