import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import TextInput from './inputs/TextInput';
import TextArea from './inputs/TextArea';

const initialValues = {
  title: '',
  description: '',
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required('You must provide title.'),
  description: Yup.string().required('You must provide description.'),
});

const onFormSubmit = values => {
  console.log(values);
};

// And now we can use these
const PostForm = () => {
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
                name="title"
                id="title"
                label="Title"
                type="text"
                placeholder="Enter title"
                autoFocus
              />
            </div>

            <div className="field">
              <TextArea
                name="description"
                id="description"
                label="Description"
                type="text"
                placeholder="Enter description"
              />
            </div>

            <button
              className="ui primary button"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Please wait...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PostForm;
