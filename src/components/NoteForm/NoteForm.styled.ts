import styled from 'styled-components';

const FormStyles = styled.form`
position:relative;
  width: 600px;
  margin: 0 auto;
`;

const MessageStyles = styled.textarea`

width: 100%;
height: 110px;
margin: 0 0 20px 0;
  padding: 20px;
  resize: none;
border: 2px solid black;
`;

const ButtonStyles = styled.button`
position:absolute;
top:120px;
left:570px;
padding: 5px;
color:white;
border: 2px solid black;
background-color:black;
`


export { FormStyles, MessageStyles,ButtonStyles };
