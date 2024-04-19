'use client'

import { PlusCircleIcon } from '@heroicons/react/24/outline';

export default function MenuLeft({menuData, toggleModal}: {menuData: {id: number; label: string}[], toggleModal: () => void}) {
  return(
    <span className="inline-flex flex-col overflow-hidden rounded-md borde shadow-sm">
      {menuData?.map((item) => (
        <button
          key={item.id}
          className="inline-block px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-200 focus:relative"
        >
          {item.label}
        </button>
      ))}
      <button
        className="inline-block px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-200 focus:relative"
        onClick={toggleModal}
      >
        <PlusCircleIcon className="h-6 w-6 inline"/>
      </button>
    </span>
  );
}