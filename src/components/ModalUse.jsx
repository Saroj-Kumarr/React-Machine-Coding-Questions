import { useState } from "react";
import Modal from "./Modal";

const ModalUse = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
        <p className="text-gray-700">
          This is a simple modal component styled with Tailwind CSS.
        </p>
      </Modal>
    </div>
  );
};

export default ModalUse;
