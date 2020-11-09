import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px;
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
