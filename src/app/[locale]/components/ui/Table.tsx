import { useTranslations } from 'next-intl';
import { IShipmentGood } from '../../crm/shipments/page';

interface TableProps {
  data: IShipmentGood[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const t = useTranslations();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">{t('goodsColumn1')}</th>
            <th className="px-4 py-2 border">{t('goodsColumn2')}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.goods_name + item.quantity} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2 border">{item.goods_name}</td>
              <td className="px-4 py-2 border">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
