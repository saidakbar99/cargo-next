interface ShipmentStatusesProps {
  activeStatus: number;
}

const statuses = [
  { label: "Qabul qilindi", icon: "/svgs/check.svg" },
  { label: "Yo’lda Turkiya", icon: "/svgs/truck.svg" },
  { label: "Yo’lda O’zbekiston", icon: "/svgs/airplane.svg" },
  { label: "Yetkizib berildi", icon: "/svgs/box_tick.svg" },
];

export const ShipmentStatuses: React.FC<ShipmentStatusesProps> = ({ activeStatus }) => {
  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {statuses.map((status, index) => {
        index++
        let borderColor = "border-lightGray";
        let textColor = "text-gray-300";
        let icon = status.icon;

        if (index < activeStatus) {
          textColor = "text-black";
        } else if (index === activeStatus) {
          borderColor = "border-orange";
          textColor = "text-orange";
          icon = status.icon.replace(".svg", "_active.svg");
        }

        if (index === statuses.length && index === activeStatus) {
          borderColor = "bg-green-100";
          textColor = "text-green";
          icon = status.icon.replace(".svg", "_active.svg");
        }

        return (
          <button
            key={index}
            className={`px-4 py-2 flex items-center border border-lightGray rounded-80  first:ml-0 ${borderColor} ${textColor}`}
          >
            <img src={icon} alt={`${status.label} Icon`} width={20} height={20} />
            <span className="text-xs font-semibold ml-2">{status.label}</span>
          </button>
        );
      })}
    </div>
  );
};