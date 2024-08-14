import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ onSubmit }) => {
  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Must be at least 3 characters').max(50, 'Must be 50 characters or less').required('Required'),
    number: Yup.string().min(3, 'Must be at least 3 characters').max(50, 'Must be 50 characters or less').required('Required'),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="div" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;