
import prismadb from '@/lib/prismadb';






export default async function dashboard(   params: {
  params: {
  storeId: string;
  }}) {

   const storeId=params.params.storeId


    const store = await prismadb.store.findFirst({
        where: {
           
                id:storeId
   
        }
    })  

    


   

  if (!store) {


    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold'>Welcome to the Dashboard</h1>
            <p className='text-lg'>This is the dashboard for your store.</p>
            <p className='text-lg bg-red-500'>You don t have a store yet.</p>
        </div>
    )

    }


    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold'>Welcome to the Dashboard</h1>
            <p className='text-lg'>This is the dashboard for your store.</p>
          <p className='text-lg'>Your store id is {store.id}</p>
        </div>
    )
}

