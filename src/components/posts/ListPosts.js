import React from 'react';
import { Link } from 'react-router-dom';

const ListPosts = () => {
  const truncateChars = text => {
    return text.length > 80 ? text.substring(0, 60) + '...' : text;
  };

  const renderAdmin = (
    <div className="right floated" style={{ display: 'flex' }}>
      <button className="ui mini primary button">Edit</button>
      <button className="ui mini red button">Delete</button>
    </div>
  );

  return (
    <>
      <h3 className="ui header dividing">All Posts</h3>
      <div className="ui relaxed divided list">
        <div className="item">
          <img
            className="ui avatar image"
            src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
            alt="user name profile"
          />
          <div className="content">
            <Link to="/posts/:id" className="header">
              {truncateChars('Semantic-Org/Semantic-UI')}
            </Link>
            <div className="description">Updated 10 mins ago</div>
          </div>
          {renderAdmin}
        </div>
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

export default ListPosts;
