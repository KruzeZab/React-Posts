import React from 'react';

const SearchInput = () => {
  return (
    <div className="ui icon input">
      <input type="text" placeholder="Search..." autoFocus />
      <i className="search icon" />
    </div>
  );
};

export default SearchInput;
