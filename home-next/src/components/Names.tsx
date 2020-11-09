import React from 'react'
import { Field } from 'formik'

const Names = ({ errors, touched }) => {
  return (
    <>
      <h3>What is your name?</h3>
      <Field
        name="firstName"
        placeholder="First name"
        error={touched.firstName && errors.firstName}
      />
      {errors.firstName && touched.firstName ? (
        <div>{errors.firstName}</div>
      ) : null}

      <Field
        name="lastName"
        placeholder="Last name"
        error={touched.lastName && errors.lastName}
      />
      {errors.lastName && touched.lastName ? (
        <div>{errors.lastName}</div>
      ) : null}
    </>
  )
}
export default Names
