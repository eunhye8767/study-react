import { v4 as uuidv4 } from "uuid";
import { addToast as add, removeToast } from "../store/toastSlice";
import { useDispatch } from "react-redux";

const useToast = () => {
  const dispatch = useDispatch();

  // toasts 삭제
  const deleteToast = (id) => {
    dispatch(removeToast(id));
  };

  // toasts 추가
  const addToast = (toast) => {
    const id = uuidv4();
    const toastWithId = { ...toast, id };

    dispatch(add(toastWithId));

    setTimeout(() => {
      dispatch(removeToast(id));
    }, 5000);
  };

  // 객체로 변환해서 return 하면 순서에 상관없이 사용이 가능하다.
  // 배열일 경우, 순서를 지켜서 가져와야 하는 불편함이 있다.
  return { addToast, deleteToast };
};

export default useToast;
