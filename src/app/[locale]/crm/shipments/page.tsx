"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import CrmLayout from "@/components/CrmLayout"
import NoData from "@/components/NoData";
import { FilterButton } from "@/components/ui/FilterButton";
import { ShipmentCard } from "@/components/ShipmentCard";

export interface IShipment {
  boxes_quantity: number;
  date_prepared: string;
  goods: IShipmentGood[];
  id: number;
  payment_tr: string | null;
  payment_uz: string | null;
  receiver_address: string;
  receiver_name: string;
  sender_address: string;
  status: number;
  weight: string;
}

export interface IShipmentGood {
  goods_name: string;
  quantity: number;
}

const filterButtons = [
  {
    name_en: 'all',
    name: 'Barcha jo’natmalar',
    id: 1,
  },
  {
    name_en: 'active',
    name: 'Faol',
    id: 2,
  },
  {
    name_en: 'delivered',
    name: 'Yetkazib berilganlar',
    id: 3,
  }
]

const Shipments = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [shipments, setShipments] = useState<IShipment[]>([]);

  const fetchData = async (filter: string) => {
    const token = localStorage.getItem("access_token");
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}customer/sendings/${filter}`,
        {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        }
      );

      setShipments(response.data.data)

    } catch (error) {
      console.log(error)
    }
  }

  const handleFilterClick = (active_filter: string) => {
    setActiveFilter(active_filter);
    fetchData(active_filter);
  };

  useEffect(() => {
    fetchData('all');
  }, [])

  return (
    <CrmLayout activeMenu='shipments'>
      <div className="p-4 lg:p-6">
        <h3 className="text-2xl font-bold">Jo’natmalar</h3>
        <div className="flex mt-6">
          {filterButtons.map((filter) => (
            <div key={filter.id} onClick={() => handleFilterClick(filter.name_en)}>
              <FilterButton
                className="mr-3 max-[500px]:w-full"
                variant={activeFilter === filter.name_en ? 'active' : ''}
                text={filter.name}
              />
            </div>
          ))}
        </div>
        {shipments.length ? (
          shipments.map((shipment:IShipment) => (
            <ShipmentCard key={shipment.id} {...shipment} />
          ))
        ) : (
          <NoData pageName="jo'natmalar" />
        )}
      </div>
    </CrmLayout>
  )
}

export default Shipments;
