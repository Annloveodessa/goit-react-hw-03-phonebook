import React, { Component } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './ContactForm.module.css'; // Импорт стилей

class ContactForm extends Component {
  validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[a-zA-Z'-\s]+$/,
        'Name may contain only letters, apostrophe, dash and spaces.'
      )
      .required('Name is required'),
    number: Yup.string()
      .matches(
        /^[0-9\s+()-]+$/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required('Number is required'),
  });

  handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    this.props.onAddContact(name, number);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={this.handleSubmit}
        validationSchema={this.validationSchema}
      >
        {({ errors, touched }) => (
          <Form className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className={styles.inputField}
                required
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="number" className={styles.label}>
                Phone number
              </label>
              <Field
                type="tel"
                name="number"
                placeholder="Phone number"
                className={styles.inputField}
                required
              />
              <ErrorMessage
                name="number"
                component="div"
                className={styles.error}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default ContactForm;
