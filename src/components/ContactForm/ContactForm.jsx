import { useId } from "react";

import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
export default function ContactForm({ forSubmit }) {
  const nameId = useId();
  const numberId = useId();
  const initialValues = {
    username: "",
    number: "",
  };

  const ValidSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too short")
      .max(50, "Too long")
      .trim()
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
      .min(2, "Too short")
      .max(16, "Too long"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={forSubmit}
      validationSchema={ValidSchema}
    >
      <Form className={css.mainForm}>
        <div className={css.formContainer}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" id={nameId} name="username" />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>
        <div className={css.formContainer}>
          <label htmlFor={numberId}>Number</label>
          <Field type="tel" id={numberId} name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button type="submit" className={css.btnContact}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
