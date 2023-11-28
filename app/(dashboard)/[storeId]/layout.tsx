import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import prismadb from '@/lib/prismadb';
import Navbar from '@/components/NavBar';


import { Modal } from '@/components/ui/modal';

export default async function Setuplayout(
    {
        children,
        params
      }: {
        children: React.ReactNode
        params: { id: string }
      }
){


    
    return(
        <div className='py-0'>
            <Navbar />
       {children }
        </div>
    )
}

    

