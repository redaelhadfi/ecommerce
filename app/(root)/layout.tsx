import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import prismadb from '@/lib/prismadb';
import Modal from '@/providers/modal-provider';



export default async function Setuplayout(
    {children} : {children: React.ReactNode}
){


  

  const {userId}=  auth();
    if (!userId) {
        redirect('/sign-in');
    }
    
    const store = await prismadb.store.findFirst({
        where: {
            userId: {
                equals: userId
            }
        }
    })
    const storeId = store?.id;
    if (store) {
          
          redirect(`/${storeId}`);
    }

    







    return(

        <div >
                 <Modal /> 

        {children}
        </div>
    )




}


    

