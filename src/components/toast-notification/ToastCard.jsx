/* eslint-disable react/prop-types */

import { TiDelete } from "react-icons/ti";

const ToastCard = ({ toast, handleRemoveToast }) => {
  return (
    <div
      className={`${
        toast.type === "Success Toast"
          ? "bg-green-500"
          : toast.type === "Error Toast"
          ? "bg-red-500"
          : toast.type === "Warning Toast"
          ? "bg-yellow-500"
          : "bg-teal-500"
      } text-white toast-container font-bold py-2 px-4 rounded flex justify-between items-center gap-4 shadow-lg`}
    >
      <p>{toast.message}</p>
      <TiDelete
        onClick={() => handleRemoveToast(toast.id)}
        className="cursor-pointer hover:text-gray-300"
      />
    </div>
  );
};

export default ToastCard;
