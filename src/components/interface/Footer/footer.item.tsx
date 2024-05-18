import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

interface FooterItemProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  children: React.ReactNode;
}

interface FooterItemLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  label: string;
}

export const FooterItem = ({ children, ...rest }: FooterItemProps) => {
  return (
    <li className={cn(["flex items-center", rest.className])}>{children}</li>
  );
};

export const FooterItemIcon = ({ Icon }: { Icon: LucideIcon }) => {
  const { theme } = useTheme();

  return (
    <Icon
      className="mr-2 h-4 w-4"
      color={theme == "dark" ? "#fff" : "#1e1e1e"}
    />
  );
};

export const FooterItemLink = ({ label, ...rest }: FooterItemLinkProps) => {
  return (
    <a
      {...rest}
      target="_blank"
      rel="external"
      className={cn(["cursor-pointer", rest.className])}
    >
      {label}
    </a>
  );
};
