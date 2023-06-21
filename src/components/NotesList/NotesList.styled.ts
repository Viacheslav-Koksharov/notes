import styled from 'styled-components';

const ListStyles = styled.ul`
  width: 600px;
  margin: 0 auto;
`;

const ItemStyles = styled.li`
  position:relative;
  margin: 0 0 40px 0;
  padding: 20px;
  border: 2px solid black;
`;

const TextStyles = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const ContainerStyles = styled.div`
  position:absolute;
  display:flex;
  top:-22px;
  left:-22px;
  justify-content: center;
  align-items: center;
`;

const AvatarStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  padding: 5px;
  font-weight: 600;
  color:white;
  border: 2px solid #A28E00;
  border-radius: 50%;
  background-color:#A28E00;
`;

const AuthorStyles = styled.p`
  margin-left: -10px;
  min-width: 150px;
  padding: 5px;
  font-weight: 600;
  color: #211D00;
  border: 2px solid #A28E00;
  background-color:#A28E00;
`;

const ButtonStyles = styled.button`
  position:absolute;
  display:flex;
  top:-12px;
  left:585px;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 5px;
  font-weight: 600;
  color:white;
  border: 2px solid #A28E00;
  border-radius: 50%;
  background-color:#A28E00;
`;

export { ListStyles, ItemStyles,ContainerStyles,AvatarStyles,AuthorStyles,TextStyles,ButtonStyles };
