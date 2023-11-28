import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




// The provided code defines a function cn that takes an arbitrary number of class values as arguments and returns a merged CSS class string. It utilizes both clsx and twMerge from their respective packages to achieve this functionality.

