import Link from "next/link"
import AuthLayout from "@/components/AuthLayout"
import { Button } from "@/components/ui/Button"
import { SocialButton } from "@/components/ui/SocialButton"

const SignUp = () => {
  return (
    <AuthLayout backgroundImage="/images/sign_up.png">
      <div className="px-40">
        <h3 className="text-4xl text-black font-bold text-center">Ro’yxatdan o’tish</h3>
        <h5 className="mt-2 text-gray-300 text-center">Shaxsiy ma’lumotlaringizni kiriting</h5>
        <div className="flex flex-col mt-6">
          <label htmlFor="email" className="text-sm mb-1.5 text-black font-semibold">
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
          <label htmlFor="telephone" className="text-sm mb-1.5 text-black font-semibold">
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
          <label htmlFor="password" className="text-sm mb-1.5 text-black font-semibold">
            Parol
          </label>
          <input
            id="password"
            type="password"
            className="border border-lightGray py-3 px-[14px] rounded-lg w-full text-sm"
            placeholder="Parol yarating"
          />
        </div>
        <p className="text-gray-300 text-xs text-left mt-2">Kamida 8 ta symbol ishlatilishi kerak</p>
        <div className="flex flex-col mt-3">
          <label htmlFor="password" className="text-sm mb-1.5 text-black font-semibold">
            Parolni qaytatdan kiriting
          </label>
          <input
            id="password"
            type="password"
            className="border border-lightGray py-3 px-[14px] rounded-lg w-full text-sm"
            placeholder="Parol"
          />
        </div>
        <Button className="w-full px-5 py-2.5 text-base mt-6" variant="orange" text="Ro’yxatdan o’tish" />
        <SocialButton />
        <p className="text-center mt-6 text-gray-300">
          Avval ro’yxatdan o’tganmisiz?
          <Link href='/auth/sign-in'>
            <span className="text-orange font-bold"> Kirish</span>
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}

export default SignUp