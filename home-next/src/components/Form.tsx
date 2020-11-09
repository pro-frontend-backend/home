import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import Names from './Names'
import Contact from './Contact'
import Salary from './Salary'
import Success from './Success'
import Button from './Button'
import { ProgressIndicator } from './styles'

const doFormStep = (step: number, values: any, errors: any, touched: any) => {
  switch (step) {
    case 1:
      return <Names errors={errors} touched={touched} />
    case 2:
      return <Contact errors={errors} touched={touched} />
    case 3:
      return <Salary />
    case 4:
      return <Success values={values} />
    default:
      return <Names errors={errors} touched={touched} />
  }
}

const style = {
  display: 'flex',
  flexDirection: 'column' as 'column',
}

const MultistepForm = () => {
  const [step, setStep] = useState(1)
  const formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    salary: '0 - 1.000',
  }
  const handleSubmit = () => setStep((step) => step + 1)
  const validate = (values: any) => {
    let errors = {} as any
    if (!values.firstName) errors.firstName = 'Required'
    if (!values.lastName) errors.lastName = 'Required'
    // if (!values.email) errors.email = 'Required'
    // if (!values.phone) errors.phone = 'Required'

    return errors
  }

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ ...formData }}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {({ values, errors, touched }) => (
          <Form style={style}>
            {doFormStep(step, values, errors, touched)}
            {step < 3 ? (
              <ProgressIndicator>Step: {step}/3</ProgressIndicator>
            ) : null}
            <Button step={step} />
          </Form>
        )}
      </Formik>
    </>
  )
}
export default MultistepForm
