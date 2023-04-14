import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const useToast = () => {
  const [, setToastsRerender] = useState(false);
  const toasts = useRef([]);

  // toasts 삭제
  const deleteToast = (id) => {
    const filteredToasts = toasts.current.filter((toast) => {
      return toast.id !== id;
    });

    toasts.current = filteredToasts;
    setToastsRerender((prev) => !prev);
  };

  // toasts 추가
  const addToast = (toast) => {
    const id = uuidv4();
    const toastWithId = { ...toast, id };

    toasts.current = [...toasts.current, toastWithId];
    setToastsRerender((prev) => !prev);

    setTimeout(() => {
      deleteToast(id);
    }, 5000);
  };

  return [toasts.current, addToast, deleteToast];
};

export default useToast;
