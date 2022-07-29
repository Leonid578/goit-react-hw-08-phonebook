import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormBox = styled(Form)`
  margin: 10px auto;
  padding: 20px;
  width: 240px;
  background-color: pink;
  border-radius: 5px;

  animation-name: opacity2;
  animation-duration: 1000ms;

  @keyframes opacity2 {
    0% {opacity: 0}
    100% {opacity: 1}
  }
}
`
export const Input = styled(Field)`
width: 250px;
padding: 3px 10px;
margin-top: 10px;
box-shadow: 1px 1px 7px rgb(160, 160, 160);
border-radius: 8px;
margin-left: auto;
margin-right: auto;
display: block;
margin-bottom: 15px;
  //   display: flex;
  // justyfy-content: space-between;
`   
