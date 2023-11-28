'use client'



import { create } from "zustand";

interface useStoreModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}



export  const useStoremodal=create<useStoreModalProps>((set) => (
    {
        isOpen: false,
        onOpen: () => set({ isOpen: true }),
        onClose: () => set({ isOpen: false }),


    }
));


