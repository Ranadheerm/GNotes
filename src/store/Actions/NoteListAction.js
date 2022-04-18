import { AddNote, RemoveNote, UpdateNote } from "../Constants/NoteListConstant";

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

export const updateNoteListItem = (obj) => (dispatch) => {
  dispatch({
    type: UpdateNote,
    payload: obj,
  });
};
