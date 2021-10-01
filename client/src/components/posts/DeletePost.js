import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';

const DeletePost = () => {
  const actions = (
    <>
      <button
        onClick={() => console.log('Deleted')}
        className="ui button negative"
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </>
  );

  return (
    <Modal
      title="My Modal"
      content="Modal Content"
      actions={actions}
    />
  );
};

export default DeletePost;
