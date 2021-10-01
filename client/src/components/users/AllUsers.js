import React from 'react';
import SingleListUser from './SingleListUser';

const AllUsers = () => {
  return (
    <>
      <h3 className="ui header dividing">
        <i className="icon users" />
        All Users
      </h3>
      <div className="ui middle aligned selection list divided">
        <SingleListUser />
        <SingleListUser />
        <SingleListUser />
      </div>

      {/*
      <div className="ui placeholder ">
        <div className="image header">
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>*/}
    </>
  );
};

export default AllUsers;
