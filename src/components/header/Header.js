import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { navbarLinks, navbarButtons } from '../../data/Links';

import logo from '../../images/logo192.png';
import SearchInput from './SearchInput';

const Header = () => {
  // Show Login and signup buttons
  const renderAuthButtons = (
    <>
      {navbarButtons.map(({ path, text, className, icon }) => (
        <div className="item" key={path}>
          <Link to={path} className={className}>
            <i className={`icon ${icon}`} />
            {text}
          </Link>
        </div>
      ))}
    </>
  );

  return (
    <div className="ui mini menu" style={{ marginBottom: '25px' }}>
      <div className="container ui">
        {/* Logo */}
        <Link to="/" className="header item">
          <img
            className="ui avatar image"
            src={logo}
            alt="react posts logo"
          />
          React Posts
        </Link>
        {/* Logo Ends */}

        {/* Nav Links */}
        {navbarLinks.map(({ path, text, className }) => {
          return (
            <NavLink key={path} to={path} className={className} exact>
              {text}
            </NavLink>
          );
        })}
        {/* Nav Links Ends */}

        <div className="right menu">
          <div className="item">
            <SearchInput />
          </div>
          {renderAuthButtons}
        </div>
      </div>
    </div>
  );
};

export default Header;
