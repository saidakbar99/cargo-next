import Image from "next/image";
import AboutUsImage from '../../../../public/images/about_us_image.png';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoreDialog: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[900px] rounded-xl p-[30px] shadow-lg">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Заголовок</h2>
          <button
            onClick={onClose}
            className="text-xl"
          >
            <img src="/svgs/cross.svg" alt="X" />
          </button>
        </div>
        <div className="mt-6">
          <span className="text-gray-300">
            Мы - команда профессионалов и специалистов, которые работают с любыми типами грузов и организовываем поставки из любой точки мира под различными таможенными
          </span>
          <Image className="my-6" width={800} height={400} src={AboutUsImage} alt="dialog image" />
          <span className="text-gray-300">
            Наша компания всегда старается гарантировать сроки доставки грузов. Налаженная работа позволяет нам сокращать время ожидания совместной дозагрузки, что соответственно влияет на скорость доставки грузов.
          </span>
          <button className="flex items-center bg-orange px-8 py-5 rounded-80 text-white leading-none font-semibold mt-9">
            Веб-сайт
            <img className="ml-[14px]" src="/svgs/link_icon.svg" alt="link icon" />
          </button>
        </div>
      </div>
    </div>
  );
};
