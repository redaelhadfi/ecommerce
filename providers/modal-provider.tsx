'use client'
import StoreModal from '@/components/modals/modal-store';


import { useEffect,useState } from 'react';

export default function Modal() {
   const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }
    , []);
    if (!isMounted) return null;







  return (
    <div className='p-4'>
      <StoreModal />
    </div>
  );
}

