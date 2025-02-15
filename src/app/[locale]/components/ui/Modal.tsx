interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[600px] rounded-xl p-6 shadow-lg max-sm:w-[96%] mx-auto">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-xl"
          >
            <img src="/svgs/cross.svg" alt="X" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
