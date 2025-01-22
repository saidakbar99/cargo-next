interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Dialog: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[600px] rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-8">
          Yangi Qabul Qiluvchi Qo’shish
        </h2>
        <form className="grid grid-cols-2 gap-3 gap-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Ism</label>
            <input
              type="text"
              value='Karim'
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Familiya</label>
            <input
              type="text"
              value='Salimov'
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Pasport raqami</label>
            <input
              type="text"
              value='AB 5765731'
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">PINFL</label>
            <input
              type="text"
              placeholder="PINFL"
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Telefon raqami</label>
            <input
              type="text"
              value='+998 98 465 44 77'
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Viloyat</label>
            <select className="w-full border rounded-lg p-2 text-sm">
              <option>Viloyatni tanlash</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Shahar</label>
            <select className="w-full border rounded-lg p-2 text-sm">
              <option>Shaharni tanlash</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Manzil</label>
            <input
              type="text"
              placeholder="Manzilni kiriting"
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>
        </form>
        <div className="flex justify-between mt-8">
          <button
            className="px-5 py-3 border border-lightGray rounded-80 w-full leading-none font-bold mr-6"
            onClick={onClose}
          >
            Bekor qilish
          </button>
          <button className="bg-orange px-5 py-3 rounded-80 text-white leading-none w-full font-bold">
            Saqlash
          </button>
        </div>
      </div>
    </div>
  );
};
