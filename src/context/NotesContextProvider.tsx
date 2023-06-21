import {  createContext } from "react";
import {
  INotesContextProps, INotesContext
} from "interfaces/NotesContext.interface";
import useLocalStorage from "servises/useLocalStorage";

const NotesContext = createContext<INotesContext>({
  notes: [],
  setNotes: () => {},
});

const NotesProvider = ({ children }: INotesContextProps) => {
  const [notes, setNotes] = useLocalStorage("comments");

  const sampleNotesContext: INotesContext = {
    notes,
    setNotes,
  };

  return (
    <NotesContext.Provider value={sampleNotesContext}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };
