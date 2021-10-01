import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import RegisterForm from '../forms/RegisterForm';
import users from '../../apis/users';

const Register = () => {
  const onFormSubmit = async (formValues, { resetForm }) => {
    await users.post('/users', {
      ...formValues,
    });
    resetForm();
  };

  return (
    <div>
      <h3 className="ui header dividing">
        <i className="icon user plus" />
        User Register
      </h3>

      <RegisterForm onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default Register;
