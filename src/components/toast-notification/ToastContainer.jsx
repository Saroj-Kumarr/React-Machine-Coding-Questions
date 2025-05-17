import { useState } from "react";
import ToastCard from "./ToastCard";
import Button from "../Button";

const ToastContainer = () => {
  const [toastList, setToastList] = useState([]);

  const handleAddToast = (message, type) => {
    const id = new Date().getTime();
    const newToasts = [...toastList, { id, message, type }];
    setToastList(newToasts);
    setTimeout(() => handleRemoveToast(id), 3000);
  };

  const handleRemoveToast = (id) => {
    setToastList((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <div>
      <div className="fixed top-4 right-4 flex flex-col gap-2">
        {toastList.map((toast) => (
          <ToastCard
            toast={toast}
            key={toast.id}
            handleRemoveToast={() => handleRemoveToast(toast.id)}
          />
        ))}
      </div>

      <div className="flex gap-4 mt-80 items-center gap-2">
        <Button
          message="This is a success message."
          type="Success Toast"
          handleAddToast={handleAddToast}
        />
        <Button
          message="This is an error message."
          type="Error Toast"
          handleAddToast={handleAddToast}
        />
        <Button
          message="This is a warning message."
          type="Warning Toast"
          handleAddToast={handleAddToast}
        />
        <Button
          message="This is information message"
          type="Info Toast"
          handleAddToast={handleAddToast}
        />
      </div>
    </div>
  );
};

export default ToastContainer;
