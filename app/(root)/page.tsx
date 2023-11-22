'use client'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
// import { UserButton} from "@clerk/nextjs";
import {UserButton,} from "@clerk/nextjs";
import Modal from '@/providers/modal-provider';

export default function Home() {
  return (

    <div className='p-4'>
    <Modal />
        <UserButton afterSignOutUrl='/' />
      
        </div>

   )
}
