import { useState, useEffect } from 'react';
import { getNotes } from 'servises/api';
import { INotes } from 'interfaces/Notes.interface';
import {
  ListStyles,
  ItemStyles,
  ContainerStyles,
  AvatarStyles,
  AuthorStyles,
  TextStyles,
  ButtonStyles,
} from 'components/NotesList/NotesList.styled';

const NotesList = () => {
  const [response, setResponse] = useState<INotes>();

  useEffect(() => {
    getNotes().then(response => setResponse(response.data.comments));
  }, []);

  window.localStorage.setItem('comments', JSON.stringify(response));

  const avatar = (str: string) => {
    const newStr = str[0].toUpperCase();
    return newStr;
  };

  const deleteNote = (_: React.SyntheticEvent, id: number) => {
    const posts = JSON.parse(window.localStorage.getItem('comments') || '{}');
    setResponse(posts.filter((post: { id: number }) => post.id !== id));
  };

  return (
    <ListStyles>
      {response &&
        response.map((note: INotes) => (
          <ItemStyles key={note.id}>
            <ContainerStyles>
              <AvatarStyles>{avatar(note.user.username)}</AvatarStyles>
              <AuthorStyles>{note.user.username}</AuthorStyles>
            </ContainerStyles>
            <TextStyles>{note.body}</TextStyles>
            <ButtonStyles onClick={e => deleteNote(e, note.id)}>X</ButtonStyles>
          </ItemStyles>
        ))}
    </ListStyles>
  );
};

export default NotesList;
