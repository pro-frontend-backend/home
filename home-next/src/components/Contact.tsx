import React from 'react'
import { Field } from 'formik'
import { Title, FormInput, ErrorLabel } from './styles'

const Contact = ({ errors, touched }) => {
  return (
    <>
      <Title>What is your contact information?</Title>
      <Field
        type="email"
        name="email"
        as={FormInput}
        placeholder="Email Address"
        margin="normal"
        error={touched.email && errors.email}
      />

      <Field name="phone" as={FormInput} type="tel" placeholder="Phone" />
      {errors.phone && touched.phone ? (
        <ErrorLabel>{errors.phone}</ErrorLabel>
      ) : null}
    </>
  )
}
export default Contact
