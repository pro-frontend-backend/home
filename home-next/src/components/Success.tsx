import React from 'react'

const Success = ({ values }) => {
  return (
    <>
      {values &&
        Object.keys(values).map((key) => (
          <label key={key}>
            {key}: {values[key]}
          </label>
        ))}
    </>
  )
}
export default Success
