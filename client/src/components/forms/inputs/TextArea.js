import React from 'react';
import { Field, useField } from 'formik';
import './Input.css';

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const checkError = meta.touched && meta.error;
  const className = `field ${checkError ? 'error' : ''}`;

  return (
    <div className={className}>
      <label htmlFor={props.id}>{label}</label>

      <Field {...field} {...props} as="textarea" />
      {checkError ? <div className="error">{meta.error}</div> : null}
    </div>
  );
};

export default TextArea;
