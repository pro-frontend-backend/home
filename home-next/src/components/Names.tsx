import React from 'react'
import { Field } from 'formik'
import { Title, FormInput, ErrorLabel } from './styles'

const Names = ({ errors, touched }) => {
  return (
    <>
      <Title>What is your name?</Title>
      <Field
        as={FormInput}
        name="firstName"
        placeholder="First name"
        error={touched.firstName && errors.firstName}
      />
      {errors.firstName && touched.firstName ? (
        <ErrorLabel>{errors.firstName}</ErrorLabel>
      ) : null}

      <Field
        as={FormInput}
        name="lastName"
        placeholder="Last name"
        error={touched.lastName && errors.lastName}
      />
      {errors.lastName && touched.lastName ? (
        <ErrorLabel>{errors.lastName}</ErrorLabel>
      ) : null}
    </>
  )
}
export default Names
