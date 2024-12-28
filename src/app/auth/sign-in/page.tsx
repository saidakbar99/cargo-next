import AuthLayout from "@/components/AuthLayout"
import { Button } from "@/components/ui/Button"

const SignIn = () => {
  return (
    <AuthLayout backgroundImage="/images/sign_in.png">
      <div className="p-24 w-full">
        <div className="flex flex-col mb-6">
          <label htmlFor="name" className="text-sm mb-1.5 text-black font-semibold">
            Имя
          </label>
          <input
            id="name"
            type="text"
            className="border border-lightGray py-3 px-4 rounded-lg w-full"
            placeholder="Ваше имя"
          />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="telephone" className="text-sm mb-1.5 text-black font-semibold">
            Номер телефона
          </label>
          <input
            id="telephone"
            type="text"
            className="border border-lightGray py-3 px-4 rounded-lg w-full"
            placeholder="+998 99 989 88  99"
          />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="message" className="text-sm mb-1.5 text-black font-semibold">
            Сообщение
          </label>
          <textarea
            id="message"
            className="border border-lightGray py-3 px-4 rounded-lg w-full resize-none"
            rows={5}
          >
          </textarea>
        </div>
        <div className="flex mb-8">
          <input type="checkbox" className=" w-5 h-5 cursor-pointer accent-orange rounded-md" />
          <span className="text-gray ml-3">Вы соглашаетесь с политикой конфиденциальности.</span>
        </div>
        <Button className="w-full" variant="orange" text="Отправить сообщение" />
      </div>
    </AuthLayout>
  )
}

export default SignIn