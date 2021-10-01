import React from 'react';
import { Link } from 'react-router-dom';

const SingleListPost = () => {
  const truncateChars = text => {
    return text.length > 80 ? text.substring(0, 60) + '...' : text;
  };

  const renderAdmin = (
    <div className="right floated" style={{ display: 'flex' }}>
      <Link to="/posts/edit/1" className="ui mini primary button">
        Edit
      </Link>
      <Link to="/posts/delete/1" className="ui mini red button">
        Delete
      </Link>
    </div>
  );

  return (
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
  );
};

export default SingleListPost;
