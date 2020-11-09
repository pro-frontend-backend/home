import React from 'react'
import { Field } from 'formik'

//TODO phone validation
const Contact = ({ errors, touched }) => {
  return (
    <>
      <h3>What is your contact information?</h3>
      <Field
        type="email"
        name="email"
        placeholder="Email Address"
        margin="normal"
        error={touched.email && errors.email}
      />

      <Field name="phone" type="tel" placeholder="Phone" />
    </>
  )
}
export default Contact
