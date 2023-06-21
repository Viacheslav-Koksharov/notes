import Container from 'components/Container';
import NotesList from 'components/NotesList/NotesList';
import NoteForm from 'components/NoteForm/NoteForm';

const App: React.FC = () => {
  return (
    <Container>
      <NotesList />
      <NoteForm />
    </Container>
  );
};

export default App;
