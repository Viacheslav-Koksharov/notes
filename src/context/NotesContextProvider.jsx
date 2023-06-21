import {  createContext } from "react";
import useLocalStorage from "servises/useLocalStorage";

const NotesContext = createContext({
  notes: [],
  setNotes: () => {},
});

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useLocalStorage("comments");

  const sampleNotesContext = {
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
