interface ButtonLabelProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const ButtonLabel = ({ children, ...rest }: ButtonLabelProps) => {
  return <p {...rest}>{children}</p>;
};
