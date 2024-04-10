import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Field, Form } from "formik";
export default function ContactForm({ onSubmit }) {
  const nameId = useId();
  const numberId = useId();
  const initialValues = {
    username: "",
    number: "",
  };
  const handleSubmit = (values, actions) => {
    console.log(values.username, values.number);
    onSubmit({
      id: Date.now(),
      name: values.username,
      number: values.number,
    });
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.mainForm}>
        <div className={css.formContainer}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" id={nameId} name="username" />
        </div>
        <div className={css.formContainer}>
          <label htmlFor={numberId}>Number</label>
          <Field type="tel" id={numberId} name="number" />
        </div>
        <button type="submit" className={css.btnContact}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
