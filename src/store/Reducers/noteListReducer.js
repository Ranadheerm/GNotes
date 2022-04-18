import { AddNote, RemoveNote, UpdateNote } from "../Constants/NoteListConstant";

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
    case UpdateNote:
      return {
        ...state,
        noteList: state.noteList.map((item) => {
          if (item.id === action.payload.id) {
            item.header = action.payload.header;
            item.body = action.payload.body;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
