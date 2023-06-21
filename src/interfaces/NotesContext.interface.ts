import { INotes } from 'interfaces/Notes.interface';

interface INotesContextProps {
    children?: React.ReactNode;
}

interface INotesContext {
    notes: INotes| undefined;
    setNotes: (notes: INotes| undefined) => void;
}

export type { INotesContextProps, INotesContext };
