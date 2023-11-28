import { UserButton } from "@clerk/nextjs"
import ComboboxDemo from "@/components/Store-switcher"
import {MainNav} from "@/components/main-nav"

import prismadb from '@/lib/prismadb';








export default async function navbar() {

    const stors =await prismadb.store.findMany()

    // console.log(stors);


   



    return (






        
        <nav className="  flex items-center flex-wrap border-b-2 border-gray-100 px-4 h-[80px] pt-0 mt-0 w-full z-50">
                <div>

                    <ComboboxDemo items={stors} />
  
                </div>
                <div className="flex-1 flex justify-start space-x-4 px-7">
                    <MainNav />
                </div>
                <div className="justify-end flex-1 flex space-x-4 px-7"> 
                    <UserButton />
                </div>
            </nav>
   
    )
}