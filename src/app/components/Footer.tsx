import Image from 'next/image'
import Logo from '../../../public/svgs/cargo.svg'

export const Footer = () => {
  return (
    <footer className="bg-black mt-[140px] pt-16 pb-12">
      <div className="mx-auto w-[1216px] p-4 py-8 flex">
        <div className="w-[320px]">
          <Image className='mb-6' src={Logo} alt="Logo" />
          <span className='text-white font-medium'>Создавайте удивительные цифровые впечатления, которые делают мир более счастливым.</span>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-4 gap-8 px-4 py-8 ">
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="#" className=" hover:underline">About</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Careers</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Brand Center</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Blog</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4 hover:underline">Discord Server</li>
                    <li className="mb-4 hover:underline">
                        <a href="#" className="hover:underline">Twitter</a>
                    </li>
                    <li className="mb-4 hover:underline">
                        <a href="#" className="hover:underline">Facebook</a>
                    </li>
                    <li className="mb-4 hover:underline">
                        <a href="#" className="hover:underline">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Licensing</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">iOS</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Android</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Windows</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">MacOS</a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}