import React from 'react';

import SingleListPost from './SingleListPost';

const ListPosts = () => {
  return (
    <>
      <h3 className="ui header dividing">All Posts</h3>
      <SingleListPost />

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
