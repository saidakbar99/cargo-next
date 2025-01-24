import Link from "next/link"
import AuthLayout from "@/components/AuthLayout"
import { SocialButton } from "@/components/ui/SocialButton"

const SignUp = () => {
  return (
    <AuthLayout backgroundImage="/images/sign_up.png">
      <div className="px-8 lg:px-40 w-full">
        <h3 className="text-2xl lg:text-4xl font-bold lg:text-center mt-6 lg:mt-0">Ro’yxatdan o’tish</h3>
        <h5 className="mt-2 text-gray-300 lg:text-center text-sm lg:text-base">Shaxsiy ma’lumotlaringizni kiriting</h5>
        <div className="flex flex-col mt-10 lg:mt-6">
          <label htmlFor="email" className="text-sm mb-1.5 font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border border-lightGray py-3 px-[14px] rounded-lg w-full text-sm"
            placeholder="Pochtangiz"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="telephone" className="text-sm mb-1.5 font-semibold">
            Telefon raqam
          </label>
          <input
            id="telephone"
            type="tel"
            className="border border-lightGray py-3 px-[14px] rounded-lg w-full text-sm"
            placeholder="Raqamingiz"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="password" className="text-sm mb-1.5 font-semibold">
            Parol
          </label>
          <input
            id="password"
            type="password"
            className="border border-lightGray py-3 px-[14px] rounded-lg w-full text-sm"
            placeholder="Parol yarating"
          />
        </div>
        <span className="text-gray-300 text-xs text-left mt-2">Kamida 8 ta symbol ishlatilishi kerak</span>
        <div className="flex flex-col mt-3">
          <label htmlFor="password" className="text-sm mb-1.5 font-semibold">
            Parolni qaytatdan kiriting
          </label>
          <input
            id="password"
            type="password"
            className="border border-lightGray py-3 px-[14px] rounded-lg w-full text-sm"
            placeholder="Parol"
          />
        </div>
        <button className="rounded-80 text-center font-semibold items-center w-full px-5 py-3 mt-6 bg-orange text-white">
          Ro’yxatdan o’tish
        </button>
        <SocialButton />
        <span className="text-center mt-6 text-gray-300">
          Avval ro’yxatdan o’tganmisiz?
          <Link href='/auth/sign-in'>
            <span className="text-orange font-bold"> Kirish</span>
          </Link>
        </span>
      </div>
    </AuthLayout>
  )
}

export default SignUp