import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import { useHistory } from 'react-router-dom';

const Modal = ({ title, content, actions, isOpen }) => {
  const modalRef = useRef(null);

  const history = useHistory();

  const onDismiss = event => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target)
    ) {
      history.push('/');
    }
  };

  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={onDismiss}
    >
      <div
        className="ui standard modal visible active"
        ref={modalRef}
      >
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
