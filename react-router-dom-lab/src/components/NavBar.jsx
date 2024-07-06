import { Link } from 'react-router-dom';
import './css/NavBar.css'

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mailboxes">Mailboxes</Link>
        </li>
        <li>
          <Link to="/mailboxes/new">New Mailbox</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
