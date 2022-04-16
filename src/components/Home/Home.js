import React, { useState } from "react";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFromNoteList,
  removeFromNoteList,
} from "../../store/Actions/NoteListAction";

const Home = (props) => {
  const ctx = useSelector((state) => state.NoteList);
  const { noteList } = ctx;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  toast.configure();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    if (body.trim() === "" && title.trim() === "") {
      toast.warning("Please add text in body or title atleast", {
        autoClose: 3000,
      });
      return;
    }
    const newNote = {
      id: v4(),
      header: title,
      body: body,
    };
    dispatch(addToFromNoteList(newNote));
    toast.success("successfully added", { autoClose: 3000 });

    setTitle("");
    setBody("");
  };
  const deleteHandler = (id) => {
    dispatch(removeFromNoteList(id));
  };
  const clearNote = () => {
    setTitle("");
    setBody("");
  };
  return (
    <div className="container">
      <div className=" row  bd-highlight" style={{ height: "100vh" }}>
        <div className="col  col-xl-4  border-end border-dark">
          {noteList && noteList.length === 0 && (
            <p className="h5 text-info">Add notes to display</p>
          )}
          <ul className="list-group">
            {noteList &&
              noteList.map((item) => {
                return (
                  <li key={item.id} className="list-group-item">
                    <div className="d-flex bd-highlight">
                      <div className="flex-grow-1 bd-highlight">
                        <p className="h5">{item.header}</p>
                      </div>
                      <div className="bd-highlight">
                        <button
                          onClick={() => {
                            deleteHandler(item.id);
                          }}
                          className="border-0 bg-white"
                        >
                          <p className="h5 text-secondary">x</p>
                        </button>
                      </div>
                    </div>

                    <div className="row">
                      <p>{item.body}</p>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="col  col-xl-7 mt-3">
          <div className="row">
            <div className="col d-flex justify-content-end">
              <button
                onClick={clearNote}
                type="button"
                className="btn btn-outline-secondary"
              >
                + Add Note
              </button>
            </div>
          </div>
          <div className="row">
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label htmlFor="Title" className="form-label">
                  Title:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Title"
                  value={title}
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                ></input>

                <label htmlFor="Body" className="form-label">
                  Body:
                </label>
                <textarea
                  value={body}
                  onChange={(event) => {
                    setBody(event.target.value);
                  }}
                  className="form-control"
                  id="Body"
                  rows="5"
                ></textarea>
              </div>
              <div className=" d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
