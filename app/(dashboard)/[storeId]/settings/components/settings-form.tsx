
'use client'
import Heading from "@/components/heading";
import { Separator } from "@/components/ui/separator";
import { Trash } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import Alert from "@/components/modals/alert-modal";
import {ApiAlert} from "@/components/ui/api-alert";

import { Store } from "@prisma/client"
interface SettingsFormProps {
    initialData: Store;
};
import {useOrigin}  from "@/hooks/use-origin";


import { useParams, useRouter } from "next/navigation"
import { toast } from "react-hot-toast";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react";
import axios from "axios";

const formSchema = z.object({
    name: z.string().min(2),
});

type SettingsFormValues = z.infer<typeof formSchema>




const SettingsForm: React.FC<SettingsFormProps> = ({
    initialData
}) => {
    const origin = useOrigin();
    


    const params = useParams();
    const router = useRouter();
  

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);





    const form = useForm<SettingsFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
    });
    


    const onSubmit = async (value: SettingsFormValues) => {
        try {
            setLoading(true);
            console.log(value)
             await axios.patch(`/api/store/${params.storeId}`, value);
             toast.success('Store updated.');      
             router.refresh();
  
            }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
        

       
    }


    const deleteStore = async () => {
        try {
            setLoading(true);
          await axios.delete(`/api/store/${params.storeId}`);
            router.push('/');
            toast.success('Store deleted.');
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }





    return (
        <div className="flex flex-col space-y-4">
             <Alert 
      isOpen={open} 
      onClose={() => setOpen(false)}
      onConfirm={deleteStore}
      loading={loading}
    />

            

            <div className="flex flex-row justify-between">
                <Heading title='Settings' text='Manage your store settings' />
                <button
                    disabled={loading}
                    className="mx-4"
                    onClick={() => setOpen(true)}
              >
                    <Trash size={24} color="red" />
                </button>




            </div>





            <div className="flex flex-row justify-center">
                <Separator className=" w-[95%]" />
            </div>



            <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)}>

                    <div className="flex flex-row items-center space-x-4 pl-4">
                        <div>
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...form.register("name")} className="w-[200px]" />
                                </FormControl>
                                <FormDescription>
                                    change the store name
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        </div>
                        <div>
                            <Button disabled={loading} className="ml-5" type="submit" >
                                Save
                            </Button>
                        </div> </div>
                </form>
            </Form>
            <Separator className=" w-[95%]" />
            <ApiAlert 
        
            title="NEXT_PUBLIC_API_URL" 
            variant="public" 
            description={`${origin}/api/${params.storeId}`}
          />












        </div>


    
    )
}



export default SettingsForm