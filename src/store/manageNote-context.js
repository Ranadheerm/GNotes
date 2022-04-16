import React, { useState, useEffect } from "react";

const ManageNoteContext = React.createContext({
  notesList: [],
  onAdd: (item) => {},
  onRemove: (id) => {},
});

export const ManageNoteContextProvider = (props) => {
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    const list = [
      { id: 0, header: "firstNote", body: "regarding firstNote" },
      { id: 1, header: "secondNote", body: "regarding secondNote" },
    ];
    setNoteList(list);
  }, []);

  const onAdd = (noteObj) => {
    const newList = noteList.concat(noteObj);
    setNoteList(newList);
  };

  const onRemove = (id) => {
    const newList = noteList.filter((item) => {
      return item.id !== id;
    });

    setNoteList(newList);
  };

  return (
    <ManageNoteContext.Provider
      value={{
        notesList: noteList,
        onAdd: onAdd,
        onRemove: onRemove,
      }}
    >
      {props.children}
    </ManageNoteContext.Provider>
  );
};

export default ManageNoteContext;
