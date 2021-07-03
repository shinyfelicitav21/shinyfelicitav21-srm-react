
import React, { Component } from 'react'
import { Formik } from "formik";
import React,{useState} from 'react'
export default class FormicYup extends Component {   

    constructor() { 
const form = () => {
    const intialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  }

  const submitForm = () => {
    console.log(formValues);
  };

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Cannot be blank.";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format.";
    }
    if (!values.password) {
      errors.password = "Cannot be blank.";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters.";
    }
    return errors;
  };
    
useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [formErrors]);

  return (
    <div className="container">
      <h1>LOGIN</h1>
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className="success-msg">Login was successfull.</span>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            className={formErrors.email && "input-error"}
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>
        <div className="form-row">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
            className={formErrors.password && "input-error"}
          />
          {formErrors.password && (
            <span className="error">{formErrors.password}</span>
          )}
        </div>
        <button type="submit">LOG IN</button>
      </form>
    </div>
  );
    }
}
const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname is required."),

  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Lastname is required."),

  phoneNumber: Yup.string()
    .required("Phone number is required.")
    .matches(
/^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
      "Invalid phone number."
    ),

  email: Yup.string().email().required("Email is required."),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short,should be 6 chars minimum."),
});

const initialValues = {
  email: "",
  password: ""
};
const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid Email.";
  }
  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 4) {
    errors.password = "Password too short";
  }
  return errors;
};
const submitForm = (values) => {
  console.log(values);
}
const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty
        } = formik;
        return (
            <div className="container">
              <h1>LOGIN</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="email">Email : </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? 
                    "input-error" : null}
                  />
                  {errors.email && touched.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>

                <div className="form-row">
                  <label htmlFor="password">Password : </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password ? 
                     "input-error" : null}
                  />
                  {errors.password && touched.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className={dirty && isValid ? "" : "disabled-btn"}
                  disabled={!(dirty && isValid)}>
                  Sign In
                </button>
              </form>
            </div>
        );
      }}
    </Formik>
  );
};