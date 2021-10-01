import React from 'react';
import PostForm from '../forms/PostForm';

const AddPost = () => {
  return (
    <div>
      <h3 class="ui header dividing">
        <i class="pencil alternate icon" />
        Create Post
      </h3>

      <PostForm />
    </div>
  );
};

export default AddPost;
