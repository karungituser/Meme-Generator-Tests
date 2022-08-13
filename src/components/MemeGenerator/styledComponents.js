import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  padding: 30px;
`
export const MemeGeneratorContainer = styled.div`
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }
`

export const Heading = styled.h1`
  font-family: 'Open Sans';
  color: #35469c;
  font-size: 30px;
  @media screen and (min-width: 768px) {
    font-size: 38px;
  }
`

export const CustomLabel = styled.label`
  font-family: 'Open Sans';
  color: #7e858e;
  font-size: 16px;
`
export const CustomInput = styled.input`
  color: #5a7184;
  background-color: #ffffff;
  font-family: 'Open Sans';
  border: 1px solid #7e858e;
  padding: 7px;
  border-radius: 7px;
  margin-top: 7px;
  margin-bottom: 7px;
`
export const CustomOption = styled.option`
  font-size: 14px;
`
export const CustomSelect = styled.select`
  color: #1e293b;
  background-color: #ffffff;
  font-family: 'Open Sans';
  border: 1px solid #7e858e;
  padding: 7px;
`
export const GenerateButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
  outline: none;
  margin-top: 7px;
  border: none;
  width: 140px;
  border-radius: 8px;
`
export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 48%;
  }
`
export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  padding-top: 15px;
  height: 300px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    width: 48%;
    height: 400px;
  }
`
export const TextContent = styled.p`
  font-family: 'Open Sans';
  color: #ffffff;
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600;
`
