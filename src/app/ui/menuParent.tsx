'use client'

import Modal from '@/app/ui/components/modal';
import MenuTop from './components/menuTop';
import MenuLeft from './components/menuLeft';
import data from '@/app/lib/data.json';
import { useState } from 'react';

export default function MenuParent() {

  const [showModal, setShowModal] = useState(false);  
  const { menuTopData, menuLeftData} = data;

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  return (
    <div className='menu-parent pt-4'>
        
        {/* Modal add items */}
        <Modal showModalState={showModal} toggleModal={toggleModal}/>

        {/* Menu top */}
        <div className='div1 p-1 bg-gray-500'>
          <MenuTop menuData={menuTopData} toggleModal={toggleModal} />
        </div>

        {/* Menu Left */}
        <div className='div2 p-1 bg-red-500 justify-self-end'>
          <MenuLeft menuData={menuLeftData} toggleModal={toggleModal} />
        </div>

        {/* Content */}
        <div className='div3 p-1 bg-green-400'>3</div>
      </div>
  );
}