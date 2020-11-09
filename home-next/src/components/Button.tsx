import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  padding: 1rem;
  font-weight: bold;
  color: rgb(255, 255, 255);
  background: rgb(122, 196, 85);
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px,
    rgba(182, 182, 182, 0.5) 0px 1px 2px;
  border-radius: 6.25rem;
  &:hover {
    transform: scale(1.05);
  }
`

const StepButton = ({ step }) => {
  if (step < 3)
    return (
      <Button variant="contained" color="primary" type="submit">
        Continue
      </Button>
    )
  else if (step === 3)
    return (
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    )
  return <></>
}

export default StepButton
