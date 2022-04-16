import { AddNote, RemoveNote } from "../Constants/NoteListConstant";

export const removeFromNoteList = (id) => (dispatch) => {
  dispatch({
    type: RemoveNote,
    payload: id,
  });
};

export const addToFromNoteList = (obj) => (dispatch) => {
  dispatch({
    type: AddNote,
    payload: obj,
  });
};
