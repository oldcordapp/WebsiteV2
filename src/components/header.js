import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Clyde } from "../assets/clyde.svg";
import { ReactComponent as Chirp } from "../assets/chirp.svg";
import { ReactComponent as GitHub } from "../assets/github.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="headerInner">
        <Logo />
        <ul className="headerNav">
          <li className="listItem">Download</li>
          <li className="listItem">Bot Portal</li>
        </ul>
        <ul className="headerNavRight">
          <li className="listItem">
            <Chirp className="listItem-socials" />
          </li>
          <li className="listItem">
            <Clyde className="listItem-socials" />
          </li>
          <li className="listItem">
            <GitHub className="listItem-socials" />
          </li>
          <li className="listItem openButton">Open Selector</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
