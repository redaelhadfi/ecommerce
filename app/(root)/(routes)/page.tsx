
"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

import { useStoremodal } from "@/hooks/use-store-modal";

const SetupPage = () => {
  const onOpen = useStoremodal((state) => state.onOpen);
  const isOpen = useStoremodal((state) => state.isOpen);

  useEffect(() => {
  
      onOpen();
    
  }, [isOpen, onOpen]);

  return null;
};
 
export default SetupPage;