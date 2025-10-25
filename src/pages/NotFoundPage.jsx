// src/pages/NotFoundPage.jsx
import { Link } from 'react-router-dom';
import '../styles.css';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found ❌</p>
      <Link to="/" className="home-btn">
        Go back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;