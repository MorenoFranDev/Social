import { Form, Formik, Field } from "formik";

export const Login = () => {
  return (
    <Formik initialValues={{ username: "", password: "" }} onSubmit={values => console.log(values)}>
        {({errors})=>(
      <Form>
        <Field name="username" placeholder="username"/>
        {errors.username}
        <Field name="password" placeholder="password"/>
        {errors.password}
      </Form>)}
    </Formik>
  );
};
