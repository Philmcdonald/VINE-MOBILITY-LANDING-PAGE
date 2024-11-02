import { useDispatch } from "react-redux";
import { toggleModal } from "@/app/state/features/modal/modal.slice";

const useOpenModal = (type: string) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(toggleModal({ type }));
  };

  return openModal;
};

export default useOpenModal;
