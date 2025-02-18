import PropTypes from "prop-types";

export function Card({ children }) {
  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow-lg">{children}</div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export function CardContent({ children }) {
  return <div className="p-2">{children}</div>;
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};
