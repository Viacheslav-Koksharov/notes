import instance from 'servises/axiosConfig';

const BASE_URL = "https://dummyjson.com/comments";

const getNotes = () => {
  return instance.get(BASE_URL);
};

const postNote = (note:{}) => {
  return instance.post(BASE_URL + "/add", note);
};

const deleteNote = (id:number) => {
  return instance.delete(BASE_URL + `/${id}`);
};
export { getNotes,postNote,deleteNote}
