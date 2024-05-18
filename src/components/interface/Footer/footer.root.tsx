import React from "react";
import { cn } from "@/lib/utils";

interface FooterRootProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children: React.ReactNode;
}

export const FooterRoot = ({ children, ...rest }: FooterRootProps) => {
  return (
    <footer
      {...rest}
      className={cn([
        "dark:bg-zinc-950 bg-slate-50 h-[10vh] flex items-center justify-center p-5",
        rest.className,
      ])}
    >
      {children}
    </footer>
  );
};
