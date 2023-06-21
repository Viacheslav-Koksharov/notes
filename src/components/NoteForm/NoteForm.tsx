import { useEffect, useState } from 'react';
import { postNote } from 'servises/api';
import {
  FormStyles,
  MessageStyles,
  ButtonStyles,
} from 'components/NoteForm/NoteForm.styled';

const NoteForm = () => {
  const [message, setMessage] = useState('');
  const [data, setData] = useState<object | null>(null);

  useEffect(() => {
    if (data) {
      postNote(data).then((response) => {
        const arr = window.localStorage.getItem('comments')

        if(arr && response.data){
          const arr1=JSON.parse(arr)
          arr1.push(response.data)
          window.localStorage.setItem("comments", JSON.stringify(arr1));
          // console.log(arr1)
        }
       
      });
    }
  }, [data])

  const submitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const randomPostId = Math.floor(Math.random() * (150 - 1) + 1);
    const randomUserId = Math.floor(Math.random() * (100 - 1) + 1);

    const userData = {
      body: message,
      postId:randomPostId,
      userId: randomUserId,
  }
  setData(userData)
    resetForm();
  };

  const resetForm = () => {
    setMessage('');
  };

  return (
    <FormStyles onSubmit={submitForm}>
      <label>
        <MessageStyles
          name='message'
          value={message}
          placeholder='Enter your message here...'
          onChange={e => setMessage(e.target.value)}

        ></MessageStyles>
      </label>
      <ButtonStyles type='submit'>Send</ButtonStyles>
    </FormStyles>
  );
};

export default NoteForm;
