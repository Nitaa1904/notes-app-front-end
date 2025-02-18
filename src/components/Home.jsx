import axios from "axios";
import { useEffect, useState } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import NoteDetail from "./NoteDetail";

const API_URL = "http://localhost:5000/notes";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [editId, setEditId] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await axios.get(API_URL);
    setNotes(response.data.data.notes);
  };

  const handleAddNote = async () => {
    if (!title || !body) return;
    if (editId) {
      await axios.put(`${API_URL}/${editId}`, { title, body, tags });
    } else {
      await axios.post(API_URL, { title, body, tags });
    }
    setTitle("");
    setBody("");
    setTags([]);
    setEditId(null);
    fetchNotes();
  };

  const handleDeleteNote = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchNotes();
  };

  const handleEditNote = (note) => {
    setTitle(note.title);
    setBody(note.body);
    setTags(note.tags);
    setEditId(note.id);
  };

  const handleViewNote = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    setSelectedNote(response.data.data.note);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="max-w-2xl w-full space-y-4">
        <h1 className="text-3xl font-bold text-center">Note App</h1>
        <NoteForm
          title={title}
          body={body}
          tags={tags}
          setTitle={setTitle}
          setBody={setBody}
          setTags={setTags}
          handleAddNote={handleAddNote}
          editId={editId}
        />
        <NoteList
          notes={notes}
          handleEditNote={handleEditNote}
          handleDeleteNote={handleDeleteNote}
          handleViewNote={handleViewNote}
        />
        {selectedNote && (
          <NoteDetail
            note={selectedNote}
            onClose={() => setSelectedNote(null)}
          />
        )}
      </div>
    </div>
  );
}
