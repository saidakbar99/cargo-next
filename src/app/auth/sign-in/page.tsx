import Link from "next/link"
import AuthLayout from "@/components/AuthLayout"
import { Button } from "@/components/ui/Button"
import { SocialButton } from "@/components/ui/SocialButton"

const SignIn = () => {
  return (
    <AuthLayout backgroundImage="/images/sign_in.png">
      <div className="px-40">
        <h3 className="text-4xl text-black font-bold text-center">Kirish</h3>
        <h5 className="mt-2 text-gray-300 text-center">Shaxsiy ma’lumotlaringizni kiriting </h5>
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
        <div className="flex flex-col my-3">
          <label htmlFor="password" className="text-sm mb-1.5 text-black font-semibold">
            Parol
          </label>
          <input
            id="password"
            type="password"
            className="border border-lightGray py-3 px-4 rounded-lg w-full text-sm"
            placeholder="Parol"
          />
        </div>
        <p className="text-gray-300 ml-3 mb-6">
          Parolni unutdingizmi?
          <Link href='/auth/recovery'>
            <span className="text-orange font-semibold"> Qayta tiklash</span>
          </Link>
        </p>
        <Link href='/crm/shipments'>
          <Button className="w-full px-5 py-2.5 text-base" variant="orange" text="Kirish" />
        </Link>
        <SocialButton />
        <p className="text-center mt-6 text-gray-300">
          Avval ro’yxatdan o’tmaganmisiz?
          <Link href='/auth/sign-up'>
            <span className="text-orange font-bold"> Ro’yxatdan o’tish</span>
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}

export default SignIn