// eslint-disable-next-line react/prop-types
const Button = ({ type, message, handleAddToast }) => {
  return (
    <button
      onClick={() => handleAddToast(message, type)}
      className={` text-white  font-bold py-2 px-4 rounded active:scale-95 transition-transform ${
        type === "Error Toast"
          ? "bg-red-500 hover:bg-red-600"
          : type === "Warning Toast"
          ? "bg-yellow-500 hover:bg-yellow-600"
          : type === "Success Toast"
          ? "bg-green-500 hover:bg-green-600"
          : "bg-cyan-500 hover:bg-cyan-600"
      }`}
    >
      {type}
    </button>
  );
};

export default Button;
