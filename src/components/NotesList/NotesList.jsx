import { useContext} from 'react';
import { NotesContext } from 'context/NotesContextProvider';
import ScrollTopButton from 'components/ScrollTopButton';
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
  const {notes, setNotes}= useContext(NotesContext);

  const avatar = (str) => {
    const newStr = str[0].toUpperCase();
    return newStr;
  };

  const deleteNote = (_, id) => {
    const posts = JSON.parse(window.localStorage.getItem('comments'));
    setNotes(posts.filter((post) => post.id !== id));
  };

  return (<>
    <ListStyles>
      {notes &&
        notes.map((note) => (
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
    <ScrollTopButton />
    </>
  );
};

export default NotesList;
