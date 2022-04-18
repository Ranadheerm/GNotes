import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import {
  addToFromNoteList,
  removeFromNoteList,
  updateNoteListItem,
} from "../../store/Actions/NoteListAction";

const Home = (props) => {
  const ctx = useSelector((state) => state.NoteList);
  const { noteList } = ctx;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState(null);
  toast.configure();
  const dispatch = useDispatch();
  const validate = () => {
    if (id !== null) {
      return id;
    } else {
      return v4();
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (body.trim() === "" && title.trim() === "") {
      toast.warning("Please add text in body or title atLeast", {
        autoClose: 3000,
      });
      return;
    }

    const newNote = {
      id: validate(),
      header: title,
      body: body,
    };
    if (id !== null) {
      dispatch(updateNoteListItem(newNote));
      toast.success("successfully updated", { autoClose: 3000 });
    } else {
      dispatch(addToFromNoteList(newNote));
      toast.success("successfully added", { autoClose: 3000 });
    }

    setTitle("");
    setBody("");
    setId(null);
  };

  const deleteHandler = (id, event) => {
    dispatch(removeFromNoteList(id));
    event.stopPropagation();
    clearNote();
  };

  const updateHandler = (id, event) => {
    const note = noteList.find((item) => {
      return item.id === id;
    });
    if (note) {
      setTitle(note.header);
      setBody(note.body);
      setId(id);
    }
    event.stopPropagation();
  };

  const clearNote = () => {
    setId(null);
    setTitle("");
    setBody("");
  };

  return (
    <div className="container">
      <div className=" row  bd-highlight" style={{ height: "100vh" }}>
        <div className="rana col-12 col-sm-5  col-xl-4 bor-div">
          {noteList && noteList.length === 0 && (
            <p className="h5 text-info">Add notes to display</p>
          )}
          <ul className="list-group">
            {noteList &&
              noteList.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="list-group-item"
                    onClick={(event) => {
                      updateHandler(item.id, event);
                    }}
                  >
                    <div className="d-flex bd-highlight">
                      <div className="flex-grow-1 bd-highlight">
                        <p className="h5">{item.header}</p>
                      </div>
                      <div className="bd-highlight">
                        <button
                          onClick={(event) => {
                            deleteHandler(item.id, event);
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
        <div className="col-12 col-sm-6  col-xl-7 mt-3">
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
