import PropTypes from "prop-types";
import { Trash2, Edit } from "lucide-react";

export function IconButton({ type, onClick }) {
  const Icon = type === "edit" ? Edit : Trash2;

  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
    >
      <Icon className="w-5 h-5 text-white" />
    </button>
  );
}

IconButton.propTypes = {
  type: PropTypes.oneOf(["edit", "delete"]).isRequired,
  onClick: PropTypes.func.isRequired,
};
