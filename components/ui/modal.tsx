'use client'
import { Dialog , DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription 
} from "@/components/ui/dialog";

//   this component is a modal that can be used to display a message to the user


interface ModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void; 
    children?: React.ReactNode;
}

export const Modal:React.FC<ModalProps> = ({title, description, isOpen, onClose, children}) => {

   const onChange =(open: boolean) => {

    if (open) {
        onClose();
    }
  };
    return (
        <Dialog  open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
                {description}
      
            </DialogDescription>

            {children}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
}
    