import PropTypes from "prop-types";
import Button from "./ui/Button";
import Input from "./ui/Input";

export default function NoteForm({
  title,
  body,
  tags,
  setTitle,
  setBody,
  setTags,
  handleAddNote,
  editId,
}) {
  return (
    <div className="space-y-4 bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-xl font-semibold text-white text-center"></h2>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="bg-gray-800 text-white border-gray-600 focus:ring-2 focus:ring-white"
      />
      <Input
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Note Body"
        className="bg-gray-800 text-white border-gray-600 focus:ring-2 focus:ring-white"
      />
      <Input
        value={tags.join(",")}
        onChange={(e) => setTags(e.target.value.split(","))}
        placeholder="Tags (comma separated)"
        className="bg-gray-800 text-white border-gray-600 focus:ring-2 focus:ring-white"
      />
      <Button
        onClick={handleAddNote}
        className="bg-white text-black hover:bg-gray-200 w-full py-2 rounded-lg font-semibold transition"
      >
        {editId ? "Update" : "Add"}
      </Button>
    </div>
  );
}

NoteForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  setTitle: PropTypes.func.isRequired,
  setBody: PropTypes.func.isRequired,
  setTags: PropTypes.func.isRequired,
  handleAddNote: PropTypes.func.isRequired,
  editId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.null,
  ]),
};
