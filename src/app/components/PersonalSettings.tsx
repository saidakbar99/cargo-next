export const PersonalSettings = () => {
  return (
    <form className="grid grid-cols-2 gap-x-3 gap-y-6 mt-9">
      <div className="col-span-1">
        <label htmlFor="name" className="block text-sm font-medium">
          Ism
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      <div className="col-span-1">
        <label htmlFor="surname" className="block text-sm font-medium">
          Familiya
        </label>
        <input
          id="surname"
          name="surname"
          type="text"
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      <div className="col-span-1">
        <label htmlFor="date" className="block text-sm font-medium">
          Tug’ilgan sa’na
        </label>
        <input
          id="date"
          name="date"
          type="text"
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      <div className="col-span-1">
        <label htmlFor="sex" className="block text-sm font-medium">
          Jinsi
        </label>
        <input
          id="sex"
          name="sex"
          type="text"
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      <div className="col-span-1">
        <label htmlFor="telephone" className="block text-sm font-medium">
          Telefon raqami
        </label>
        <input
          id="telephone"
          name="telephone"
          type="text"
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      <div className="col-span-1">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="text"
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
      <button 
        className='px-5 py-2 bg-orange rounded-80 text-white font-bold mt-3'
      >
        Saqlash
      </button>
    </form>
  )
}