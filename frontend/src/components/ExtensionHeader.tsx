import React from 'react';
import { Link } from 'react-router-dom';

const ExtensionHeader: React.FC = () => {
  return (
    <header className="extension-header">
      <div className="header-content">
        <h1>Security Extension</h1>
        <nav className="nav-menu">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/analysis">Link Analysis</Link>
        </nav>
      </div>
    </header>
  );
};

export default ExtensionHeader;
