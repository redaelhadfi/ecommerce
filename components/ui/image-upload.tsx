"use client";

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ImagePlus, Trash } from 'lucide-react';

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}
import { CldUploadWidget } from 'next-cloudinary';
import exp from 'constants';

const ImageUpload=()=>{
 return(
<CldUploadWidget uploadPreset="<Your Upload Preset>">
  {({ open }) => {
    return (
      <button onClick={() => open()}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>)
}
 


export default ImageUpload;