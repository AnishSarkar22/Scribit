{ /* this is the dashboard after login */ }

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    navigate("/login");
  };

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          toast.success("Note deleted successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          toast.error("Failed to delete note.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
        getNotes();
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`, {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  //   const createNote = (e) => {
  //     e.preventDefault();
  //     api
  //       .post("/api/notes/", { content, title })
  //       .then((res) => {
  //         if (res.status === 201) alert("Note created!");
  //         else alert("Failed to make note.");
  //         getNotes();
  //       })
  //       .catch((err) => alert(err));
  //   };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) {
          toast.success("Note created successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          // Clear form after successful creation
          setTitle("");
          setContent("");
        } else {
          toast.error("Failed to create note.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
        getNotes();
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`, {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <div className="container">
      <ToastContainer />
      <header className="header">
        <h1>My Notes</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>

      <div className="content">
        <section className="notes-section">
          {/* <h2>Your Notes</h2> */}
          <div className="notes-grid">
            {notes.map((note) => (
              <Note note={note} onDelete={deleteNote} key={note.id} />
            ))}
          </div>
        </section>

        <section className="create-note-section">
          <h2>Create a Note</h2>
          <form onSubmit={createNote} className="create-note-form">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Enter note title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                name="content"
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter note content"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Create Note
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Home;
