import { useDispatch } from "react-redux";
import { toggleModal } from "@/app/state/features/modal/modal.slice";

const useOpenModal = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(toggleModal());
  };

  return openModal;
};

export default useOpenModal;
