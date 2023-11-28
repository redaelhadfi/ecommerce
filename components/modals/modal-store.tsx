'use client'
import { Modal } from '@/components/ui/modal';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation';
import axios from 'axios';


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { useEffect, useState } from 'react';

import { useStoremodal } from '@/hooks/use-store-modal';







const StoreModal = () => {

    const router = useRouter();

    const all = useStoremodal()
    const { isOpen, onOpen, onClose } = all;


    const formSchema = z.object({
        name: z.string().min(2).max(50),
    });



    const [loading, setLoading] = useState(false);

//define from 

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })



    async function onSubmit(values: z.infer<typeof formSchema>) {
       try {
        setLoading(true);
const res=await axios.post('/api/store',values)
setLoading(false);
router.refresh();
onClose();
router.push(`/${res.data.id}`);


       }
       catch(error) {
        console.log(error);
       }
      }

    return (
        <Modal title='store' description='create your store' isOpen={isOpen} onClose={onClose}>
           <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='p-4'>
        <FormItem>
            <FormLabel>name</FormLabel>
            <FormField
                name="name"
                control={form.control}
                 
                render={({ field }) => (
                    <Input
                        {...field}
                        placeholder="name"
                        type="text"
                        autoComplete="name"
                    />
                )}
            />
           
           < FormMessage>{form.formState.errors.name?.message}</FormMessage>
        </FormItem>
        </div>
        <div className='flex justify-end'>
        <Button 
        disabled={loading}
         type="submit"
         >
            Submit
        </Button>
       </div>

        </form> 
    </Form>
        </Modal>
    );

};

export default StoreModal;