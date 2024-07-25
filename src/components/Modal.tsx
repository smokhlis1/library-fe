import BookForm from './BookForm';

type Props = {
  id?: string[];
  open: boolean;
  onClose: () => void;
};

const Modal = (props: Props) => {
  if (!props.open) return null;

  return (
    <div
      onClick={props.onClose}
      className="fixed inset-0 flex justify-center items-center bg-gray-300 bg-opacity-25 z-50 overflow-auto"
    >
      <div
        className="relative bg-white shadow-xl rounded-lg w-full max-w-md mx-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <button
            className="text-black hover:bg-gray-300 rounded-full p-2"
            onClick={props.onClose}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="mt-4">
          <BookForm id={props.id} />
        </div>
      </div>
    </div>
  );
};

export default Modal;