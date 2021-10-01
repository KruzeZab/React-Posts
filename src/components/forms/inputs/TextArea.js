import React from 'react';
import { Field, useField } from 'formik';
import './Input.css';

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id}>{label}</label>

      <Field {...field} {...props} as="textarea" />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextArea;
