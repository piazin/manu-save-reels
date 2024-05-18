import { Github, Linkedin } from "lucide-react";
import { Footer } from "@/components/interface/Footer";

export const FooterSection = () => {
  return (
    <Footer.Root>
      <Footer.Content>
        <Footer.Item>
          <Footer.Icon Icon={Github} />
          <Footer.Link label="piazin" href="https://github.com/piazin" />
        </Footer.Item>

        <Footer.Item>
          <Footer.Icon Icon={Linkedin} />
          <Footer.Link
            label="lucas souza"
            href="https://www.linkedin.com/in/lucas-souza-929096222/"
          />
        </Footer.Item>
      </Footer.Content>
    </Footer.Root>
  );
};
