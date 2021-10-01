import React from 'react';
import RegisterForm from '../forms/RegisterForm';

const Login = () => {
  return (
    <div>
      <h3 class="ui header dividing">
        <i className="icon user plus" />
        User Register
      </h3>

      <RegisterForm />
    </div>
  );
};

export default Login;
