import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import prismadb from '@/lib/prismadb';

import Modal from '@/providers/modal-provider';


export default async function Setuplayout(
    {children} : {children: React.ReactNode}
){
    return(
    
        <div >

       {children}
       <Modal />
        </div>

    )
}

    
