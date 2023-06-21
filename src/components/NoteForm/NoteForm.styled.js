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
  top:90px;
  left:570px;
  width: 60px;
  height: 40px;
  padding: 5px;
  color:white;
  border: 2px solid olive;
  background-color: olive;
`;

export { FormStyles, MessageStyles,ButtonStyles };
