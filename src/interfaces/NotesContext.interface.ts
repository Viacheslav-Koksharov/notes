import { INotes } from 'interfaces/Notes.interface';

interface INotesContextProps {
    children?: React.ReactNode;
}

interface INotesContext {
    notes: INotes[];
    setNotes: (notes: INotes[]) => void;
}

export type { INotesContextProps, INotesContext };
