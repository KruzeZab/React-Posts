import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import TextInput from './inputs/TextInput';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(4, 'Username should be at least 4 characters')
    .max(16, 'Username should be no more than 16 characters')
    .required('Username is required')
    .matches(
      /^[a-z0-9_]+$/,
      'Only letters, digits, - and _ allowed!'
    ),
  password: Yup.string()
    .trim()
    .min(6, 'Password should be at least 8 characters')
    .required('Password is required'),
});

const onFormSubmit = values => {
  console.log(values);
};

const LoginForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onFormSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="ui form">
            <div className="field">
              <TextInput
                name="username"
                id="username"
                label="Username"
                type="text"
                placeholder="Enter username"
                autoFocus
              />
            </div>

            <div className="field">
              <TextInput
                name="password"
                id="password"
                label="Password"
                type="password"
                placeholder="Enter password"
              />
            </div>

            <button
              className="ui primary button"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Please wait...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
