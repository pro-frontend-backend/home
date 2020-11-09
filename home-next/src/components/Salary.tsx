import React from 'react'
import { Field } from 'formik'
import { Title, Label, Container } from './styles'

const Salary = () => {
  return (
    <>
      <Title>What is your salary?</Title>
      <Container>
        <Label>
          <Field type="radio" name="salary" value="0 - 1.000" />0 - 1.000
        </Label>
        <Label>
          <Field type="radio" name="salary" value="1.000 - 2.000" />
          1.000 - 2.000
        </Label>
        <Label>
          <Field type="radio" name="salary" value="2.000 - 3.000" />
          2.000 - 3.000
        </Label>
        <Label>
          <Field type="radio" name="salary" value="3.000 - 4.000" />
          3.000 - 4.000
        </Label>
        <Label>
          <Field type="radio" name="salary" value="More than 4.000" />
          More than 4.000
        </Label>
      </Container>
    </>
  )
}
export default Salary
