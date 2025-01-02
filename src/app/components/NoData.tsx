interface NoDataProps {
  pageName: string;
} 

const NoData: React.FC<NoDataProps> = ({ pageName }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="w-20 h-20 bg-white rounded-2xl flex justify-center items-center">
        <img src="/svgs/empty_archive.svg" alt="Empty Icon" />
      </div>
      <span className="mt-8 text-lg font-semibold text-black text-center max-w-[287px]">
        Hozirchalik hech qanday {pageName} mavjud emas
      </span>
    </div>
  )
}

export default NoData