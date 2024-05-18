import React from "react";
import { cn } from "@/lib/utils";

interface FooterContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  children: React.ReactNode;
}

export const FooterContent = ({ children, ...rest }: FooterContentProps) => {
  return (
    <ul
      {...rest}
      className={cn(["dark:text-white flex gap-4", rest.className])}
    >
      {children}
    </ul>
  );
};
