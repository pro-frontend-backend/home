import React from 'react'
import { Field } from 'formik'

const Salary = () => {
  return (
    <>
      <h3>What is your salary?</h3>
      <label>
        <Field type="radio" name="salary" value="0 - 1.000" />0 - 1.000
      </label>
      <label>
        <Field type="radio" name="salary" value="1.000 - 2.000" />
        1.000 - 2.000
      </label>
      <label>
        <Field type="radio" name="salary" value="2.000 - 3.000" />
        2.000 - 3.000
      </label>
      <label>
        <Field type="radio" name="salary" value="3.000 - 4.000" />
        3.000 - 4.000
      </label>
      <label>
        <Field type="radio" name="salary" value="More than 4.000" />
        More than 4.000
      </label>
    </>
  )
}
export default Salary
