import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`work`}>Work</Link>
        </li>
        <li>
          <Link to={`contact`}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
