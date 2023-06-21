
interface INotes {
  map(arg0: (note: INotes) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  id: number;
  body: string;
  postId: number;
  user: {
      id: number;
      username:string;
  };
}

export type { INotes };
