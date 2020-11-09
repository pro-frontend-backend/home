import styled from 'styled-components'

export const Title = styled.h3`
  margin-bottom: 0;
`

export const ErrorLabel = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: red;
`

export const FormInput = styled.input`
  padding: 10px;
  margin-top: 20px;
`

export const Label = styled.label`
  margin: 5px 0;
`

export const Container = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`

export const ProgressIndicator = styled.div`
  text-align: center;
  margin: 10px 0;
`

export const SuccessTitle = styled.h3`
  margin-bottom: 0;
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`
