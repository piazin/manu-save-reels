import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ButtonRootProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ButtonRoot = ({ children, ...rest }: ButtonRootProps) => {
  return (
    <Button
      className={cn([
        "bg-pink-600 hover:bg-pink-600/70 dark:text-white disabled:cursor-wait",
        rest.className,
      ])}
      {...rest}
    >
      {children}
    </Button>
  );
};
