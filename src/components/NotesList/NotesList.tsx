import { useContext} from 'react';
import { INotes } from 'interfaces/Notes.interface';
import { NotesContext } from 'context/NotesContextProvider';
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

  const avatar = (str: string) => {
    const newStr = str[0].toUpperCase();
    return newStr;
  };

  const deleteNote = (_: React.SyntheticEvent, id: number) => {
    const posts = JSON.parse(window.localStorage.getItem('comments') || '[]');
    setNotes(posts.filter((post: { id: number }) => post.id !== id));
  };

  return (
    <ListStyles>
      {notes &&
        notes.map((note: INotes) => (
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
