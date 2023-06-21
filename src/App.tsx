import Container from 'components/Container';
import NotesList from 'components/NotesList/NotesList';
import NoteForm from 'components/NoteForm/NoteForm';
import { NotesProvider } from 'context/NotesContextProvider';

const App: React.FC = () => {
  return (
    <NotesProvider>
      <Container>
        <NotesList />
        <NoteForm />
      </Container>
    </NotesProvider>
  );
};

export default App;
