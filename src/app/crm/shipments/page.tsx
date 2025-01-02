"use client"

import { useState } from "react";
import CrmLayout from "@/components/CrmLayout"
import NoData from "@/components/NoData";
import { FilterButton } from "@/components/ui/FilterButton";

const mockData = [
  {},
]

const filterButtons = ['Barcha jo’natmalar', 'Faol', 'Yetkazib berilganlar']

const Shipments = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Barcha jo’natmalar');
  const isEmpty = false

  if (isEmpty) {
    return <NoData pageName="jo'natmalar" />
  }

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    // fetchData(filter);
  };

  return (
    <CrmLayout activeMenu='shipments'>
      <div className="p-6 text-black h-full">
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
      </div>
    </CrmLayout>
  )
}

export default Shipments;
