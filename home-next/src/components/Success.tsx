import React from 'react'
import { SuccessTitle, Label, Container } from './styles'

const Success = ({ values }) => {
  return (
    <>
      <SuccessTitle>Congrats! You've signed up</SuccessTitle>
      <Container>
        <Label>
          Name: {values.firstName} {values.lastName}
        </Label>
        <Label>Email: {values.email}</Label>
        <Label>Phone: {values.phone}</Label>
        <Label>Salary: {values.salary}</Label>
      </Container>
    </>
  )
}
export default Success
