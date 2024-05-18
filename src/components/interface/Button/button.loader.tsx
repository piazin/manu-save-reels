import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonLoaderProps {
  children?: React.ReactNode;
}

export const ButtonLoader = ({ children }: ButtonLoaderProps) => {
  return (
    <>
      <Loader2 className={cn([children && "mr-2", "h-4 w-4 animate-spin"])} />
      {children}
    </>
  );
};
