import { Link } from 'react-router-dom';

function Navbar({ links }) {
  return (
    <nav className='navbar'>
      <ul>
        {links.map((link, index) => (
          <li key={index}>

            <Link
              to={link === 'Home' ? '/' : `/${link}`}
              aria-label={link === 'Home' ? 'page' : undefined}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;