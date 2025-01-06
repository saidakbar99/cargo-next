"use client"

import { useState } from "react";
import CrmLayout from "@/components/CrmLayout"
import NoData from "@/components/NoData";
import { FilterButton } from "@/components/ui/FilterButton";
import { ShipmentCard } from "@/components/ShipmentCard";

const mockData = [
  {
    id: 40189496,
    status: 4,
    weight: 2000,
    package_count: 2,
    turkeyAddress: 'UNALAN MAH. LIBADIYE CAD. NO:80 G BLOK, USKUDAR',
    uzbekistanAddress: 'Toshkent shahar, Yunusobod tumani, Ahmad Donish 44A',
    clientName: 'Karim Salimov',
    date: "2024-12-20T00:00:00.000Z",
    items: [
      {
        id: 1231231256731,
        name: 'Apple Headphone',
        item_amount: 4500000,
        quantity: 1
      },
      {
        id: 123125677651231,
        name: 'Samsung S21',
        item_amount: 8000000,
        quantity: 1
      },
      {
        id: 123125766556731,
        name: 'Logitech G403',
        item_amount: 1000000,
        quantity: 2
      },
    ],
  },
  {
    id: 77561783,
    status: 2,
    weight: 500,
    package_count: 1,
    turkeyAddress: 'Istanbul. LIBSSADSADIYE CADSAD. NO:81111 A BLOK, TASCSKUDAR',
    uzbekistanAddress: 'Andijon shahar, Yunusobod tumani, Ahmad Donish 44A',
    clientName: 'Karim Salimov',
    date: "2025-06-12T00:00:00.000Z",
    items: [
      {
        id: 123125766545671,
        name: 'Apple Headphone',
        item_amount: 4500000,
        quantity: 1
      },
      {
        id: 123115236643342731,
        name: 'Apple Headphone',
        item_amount: 4500000,
        quantity: 1
      },
      {
        id: 1231257624363462346,
        name: 'Samsung S21',
        item_amount: 8000000,
        quantity: 1
      },
      {
        id: 12317089779878,
        name: 'Logitech G403',
        item_amount: 1000000,
        quantity: 2
      },
    ],
  },
  {
    id: 97123383,
    status: 1,
    weight: 7000,
    package_count: 3,
    turkeyAddress: 'Berek. LIBSSADSADIYE CADSAD. NO:81111 A BLOK, TASCSKUDAR',
    uzbekistanAddress: 'Buxoro shahar, Yunusobod tumani, Ahmad Donish 44A',
    clientName: 'Karim Salimov',
    date: "2022-01-01T00:00:00.000Z",
    items: [
      {
        id: 123198689676,
        name: 'Apple Headphone',
        item_amount: 4500000,
        quantity: 1
      },
      {
        id: 6387935847269,
        name: 'Apple Headphone',
        item_amount: 4500000,
        quantity: 1
      },
      {
        id: 1231278888888234,
        name: 'Samsung S21',
        item_amount: 8000000,
        quantity: 1
      },
      {
        id: 123112312322256731,
        name: 'Logitech G403',
        item_amount: 1000000,
        quantity: 2
      },
      {
        id: 123195674362112312,
        name: 'Apple Macbook',
        item_amount: 15000000,
        quantity: 1
      },
    ],
  },
]

const filterButtons = ['Barcha jo’natmalar', 'Faol', 'Yetkazib berilganlar']

const Shipments = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Barcha jo’natmalar');

  if (!mockData.length) {
    return <NoData pageName="jo'natmalar" />
  }

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    // fetchData(filter);
  };

  return (
    <CrmLayout activeMenu='shipments'>
      <div className="p-6 h-full">
        <h3 className="text-2xl font-bold">Jo’natmalar</h3>
        <div className="flex mt-6">
          {filterButtons.map((filter) => (
            <div key={filter} onClick={() => handleFilterClick(filter)}>
              <FilterButton
                className="mr-3"
                variant={activeFilter === filter ? 'active' : ''}
                text={filter}
              />
            </div>
          ))}
        </div>
        {mockData.map((item:any) => (
          <ShipmentCard key={item.id} shipment={item} />
        ))}
      </div>
    </CrmLayout>
  )
}

export default Shipments;
