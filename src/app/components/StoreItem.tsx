export interface StoreItemProps {
  id: number;
  storeName: string;
  description: string;
  icon: string;
}

export const StoreItem: React.FC<StoreItemProps> = ({storeName, description, icon}) => {
  return (
    <div className="border border-grayBorder rounded-xl flex p-6 mb-4">
      <div className='min-w-[120px] min-h-[120px] bg-storeLogoBg rounded-md mr-6 flex justify-center items-center'>
        <img src={icon} alt="Store Logo" />
      </div>
      <div>
        <h4 className="text-xl font-bold mb-3">{storeName}</h4>
        <span>{description}</span>
      </div>
    </div>
  )
}