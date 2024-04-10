import { useId } from "react";
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
      username: values.username,
      number: values.number,
    });
    actions.resetForm;
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" id={nameId} name="username" />
        <label htmlFor={numberId}>Number</label>
        <Field type="phone" id={numberId} name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
