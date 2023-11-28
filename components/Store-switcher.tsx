"use client"

import {useStoremodal} from "@/hooks/use-store-modal"
import { Plus } from 'lucide-react';


import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



import { redirect, useParams } from "next/navigation"
import { useRouter } from 'next/navigation';


type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps {
    items: Record<string, any>[];
  }
  



export default   function ComboboxDemo( {items=[]}: StoreSwitcherProps
) {
  const storeModal = useStoremodal();



  const { push } = useRouter();
  const { storeId } = useParams()

  
const [open, setOpen] = React.useState(false)
  
const [value, setValue] = React.useState(storeId)

const formatedItems = items.map((item) => (
    {
      value: item.id,
      label: item.name,
    }
 )
    );



    








  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? formatedItems.find((item) => item.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search item..." />
          <CommandEmpty>No item found.</CommandEmpty>
          <CommandGroup>
            {formatedItems.map((item) => (
              <CommandItem
                key={item.value}
                value={item.label}
                onSelect={() => {
push(`/${item.value}`);
                  setValue(item.value)
                  setOpen(false)
                
              

                
                }}
              >

                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === item.label ? "opacity-100" : "opacity-0"
                  )}
                />
                {item.label}
              </CommandItem>
            ))}

            <CommandItem
                key="new"
                value="new"
                onSelect={() => {
                  setOpen(true)
                  storeModal.onOpen()
              
                }}
              >

                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === "new" ? "opacity-100" : "opacity-0"
                  )}
                />
                
 Add new store<Plus className="ml-2 h-4 w-4 shrink-0 opacity-50" />
             </CommandItem>
            
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}









// "use client"

// import * as React from "react"
// import { Check, ChevronsUpDown } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
// } from "@/components/ui/command"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// const frameworks = [
//   {
//     value: "next.js",
//     label: "Next.js",
//   },
//   {
//     value: "sveltekit",
//     label: "SvelteKit",
//   },
//   {
//     value: "nuxt.js",
//     label: "Nuxt.js",
//   },
//   {
//     value: "remix",
//     label: "Remix",
//   },
//   {
//     value: "astro",
//     label: "Astro",
//   },
// ]

// export default function ComboboxDemo() {
//   const [open, setOpen] = React.useState(false)
//   const [value, setValue] = React.useState("")

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-[200px] justify-between"
//         >
//           {value
//             ? frameworks.find((framework) => framework.value === value)?.label
//             : "Select framework..."}
//           <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-[200px] p-0">
//         <Command>
//           <CommandInput placeholder="Search framework..." />
//           <CommandEmpty>No framework found.</CommandEmpty>
//           <CommandGroup>
//             {frameworks.map((framework) => (
//               <CommandItem
//                 key={framework.value}
//                 value={framework.value}
//                 onSelect={(currentValue) => {
//                   setValue(currentValue === value ? "" : currentValue)
//                   setOpen(false)
//                 }}
//               >
//                 <Check
//                   className={cn(
//                     "mr-2 h-4 w-4",
//                     value === framework.value ? "opacity-100" : "opacity-0"
//                   )}
//                 />
//                 {framework.label}
//               </CommandItem>
//             ))}
//           </CommandGroup>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   )
// }
