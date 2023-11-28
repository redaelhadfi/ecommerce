

import { auth } from '@clerk/nextjs';
import prismadb from '@/lib/prismadb';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

import Settings from './components/settings-form';

const SettingsPage = async ({
    params
  }: {
    params: { storeId: string }
  }) => {



    const { userId } = auth();
  
    if (!userId) {
      redirect('/sign-in');
    }
  
    const store = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId
      }
    });
  
    if (!store) {
      redirect('/');
    }
   




    return (
       <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
            <Settings initialData={store} />
   
        </div>

        </div>
    )
}

export default SettingsPage