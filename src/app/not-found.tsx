import Link from "next/link"

const NotFound = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <img className="filter grayscale" src="/images/404.png" width={642} height={481} alt="404 image" />
      <h3 className="text-xl font-bold mt-6">Sahifa topilmadi</h3>
      <p className="text-gray-300 font-medium mt-3">Afsuski, siz qidirayotgan sahifa topilmadi</p>
      <Link href='/'>
        <button className="mt-6 bg-orange text-white px-5 py-3 rounded-80 font-bold w-[271px]">
          Bosh sahifaga qaytish
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
