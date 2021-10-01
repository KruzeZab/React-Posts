import React from 'react';
import LoginForm from '../forms/LoginForm';

const Login = () => {
  return (
    <div>
      <h3 class="ui header dividing">
        <i className="icon user" />
        User Login
      </h3>

      <LoginForm />
    </div>
  );
};

export default Login;
