import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import users from '../../apis/users';
import TextInput from './inputs/TextInput';

const initialValues = {
  username: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(4, 'Username should be at least 4 characters')
    .max(16, 'Username should be no more than 16 characters')
    .required('Username is required')
    .matches(/^[a-z0-9_]+$/, 'Only letters, digits, - and _ allowed!')
    .test(
      'username-backend-validation',
      'Username Taken!',
      async username => {
        const { data } = await users.get(`/users`, {
          params: { username },
        });
        return !data.length;
      }
    ),
  email: Yup.string()
    .trim()
    .email()
    .required('Email is required')
    .test('email-backend-validation', 'Email Taken!', async email => {
      const { data } = await users.get(`/users`, {
        params: { email },
      });
      console.log(data);
      return !data.length;
    }),
  password: Yup.string()
    .trim()
    .min(6, 'Password should be at least 8 characters')
    .required('Password is required'),
});

const RegisterForm = ({ onFormSubmit }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
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
                name="email"
                id="email"
                label="Email"
                type="text"
                placeholder="Email"
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
              {isSubmitting ? 'Please wait...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
