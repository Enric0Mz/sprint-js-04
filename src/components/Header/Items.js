import React from 'react';
import { Link } from 'react-router-dom';

function Items() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to="/main" className="nav-link">
          Poluição
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">
          Quem somos?
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/problems" className="nav-link">
          Problemas
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/faq" className="nav-link">
          Junte-se a nós
        </Link>
      </li>
    </ul>
  );
}

export default Items;
