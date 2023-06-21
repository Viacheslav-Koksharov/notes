import { useEffect, useState,useRef } from 'react';
import { postNote } from 'servises/api';
import {
  FormStyles,
  MessageStyles,
  ButtonStyles,
} from 'components/NoteForm/NoteForm.styled';

const NoteForm = () => {
  const [message, setMessage] = useState('');
  const [data, setData] = useState(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (data) {
      postNote(data).then((response) => {
        const arr = window.localStorage.getItem('comments')
        if(arr && response.data){
          const arr1=JSON.parse(arr)
          arr1.push(response.data)
          window.localStorage.setItem("comments", JSON.stringify(arr1));
        }
      });
    }
  }, [data])

useEffect(() => {
    const title = titleRef.current;

    if (title && localStorage.getItem('message') !== null) {
      setMessage(localStorage.getItem("message"));
    }
  }, []);

  const submitForm = (e) => {
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

  const handleChange = (e) =>{
    setMessage(e.target.value);
  }
  const saveText =(e)=>{
    window.localStorage.setItem("message", e.target.value);
  }

  const resetForm = () => {
    setMessage('');
    window.localStorage.removeItem("message");
  };

  return (
    <FormStyles onSubmit={submitForm}>
      <label>
        <MessageStyles
          ref={titleRef}
          name='message'
          value={message}
          placeholder='Enter your message here...'
          onChange={handleChange}
          onInput={saveText}
        />
      </label>
      <ButtonStyles type='submit'>Send</ButtonStyles>
    </FormStyles>
  );
};

export default NoteForm;
