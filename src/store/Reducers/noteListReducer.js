import { AddNote, RemoveNote } from "../Constants/NoteListConstant";

export const noteListReducer = (state = { noteList: [] }, action) => {
  switch (action.type) {
    case AddNote:
      return {
        ...state,
        noteList: [...state.noteList, action.payload],
      };
    case RemoveNote:
      return {
        ...state,
        noteList: state.noteList.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
