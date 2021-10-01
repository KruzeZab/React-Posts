import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { links } from '../../data/Links';

import logo from '../../images/logo192.png';
import SearchInput from './SearchInput';

const Header = () => {
  // Show Login and signup buttons
  const renderAuthButtons = (
    <>
      <div className="item">
        <Link to="/auth/login" className="ui basic button">
          <i className="icon user" />
          Log In
        </Link>
      </div>
      <div className="item">
        <Link to="/auth/register" className="ui primary button">
          <i className="icon user plus" />
          Sign Up
        </Link>
      </div>
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
        {links.map(({ path, text, className }) => {
          return (
            <NavLink key={path} to={path} className={className}>
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
