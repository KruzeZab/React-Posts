import React from 'react';
import PostForm from '../forms/PostForm';

const AddPost = () => {
  return (
    <div>
      <h3 className="ui header dividing">
        <i className="pencil alternate icon" />
        Create Post
      </h3>

      <PostForm />
    </div>
  );
};

export default AddPost;
