import PropTypes from "prop-types";
import { Edit, Trash2, Eye } from "lucide-react";
import Button from "./ui/Button";
import { Card, CardContent } from "./ui/Card";

export default function NoteList({
  notes,
  handleEditNote,
  handleDeleteNote,
  handleViewNote,
}) {
  return (
    <div className="space-y-2">
      {notes.map((note) => (
        <Card key={note.id} className="bg-gray-900 text-white border-gray-700">
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">{note.title}</h2>
              <p className="text-gray-400">{note.body}</p>
              <p className="text-sm text-gray-500">
                Tags: {note.tags.join(", ")}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleViewNote(note.id)}
              >
                <Eye className="text-blue-400 hover:text-white" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleEditNote(note)}
              >
                <Edit className="text-gray-400 hover:text-white" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleDeleteNote(note.id)}
              >
                <Trash2 className="text-red-500 hover:text-red-700" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  handleEditNote: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleViewNote: PropTypes.func.isRequired,
};
