import AuthLayout from "@/components/AuthLayout"
import { Button } from "@/components/ui/Button"

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
            className="border border-lightGray py-3 px-[14px] rounded-lg w-full"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="password" className="text-sm mb-1.5 text-black font-semibold">
            Parol
          </label>
          <input
            id="password"
            type="password"
            className="border border-lightGray py-3 px-4 rounded-lg w-full"
            placeholder="example@gmail.com"
          />
        </div>
        <p className="text-gray-300 ml-3 mb-6">Parolni unutdingizmi?
          <span className="text-orange font-semibold"> Qayta tiklash</span>
        </p>
        <Button className="w-full" variant="orange" text="Kirish" />
        <Button className="w-full mt-2" variant="secondary" text="Google orqali kirish" />
        <p className="text-center mt-6 text-gray-300">Avval ro’yxatdan o’tganmisiz?
          <span className="text-orange font-bold"> Ro’yxatdan o’tish</span>
        </p>
      </div>
    </AuthLayout>
  )
}

export default SignIn