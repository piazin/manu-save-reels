import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="dark:bg-zinc-900 bg-slate-50 h-[10vh] flex items-center justify-center p-5">
      <ul className="dark:text-white flex gap-4">
        <li className="flex items-center">
          <Github className="mr-2 h-4 w-4" color="#000" />
          <a href="https://github.com/piazin" target="_blank" rel="external">
            piazin
          </a>
        </li>

        <li className="flex items-center">
          <Linkedin className="mr-2 h-4 w-4" color="#000" />
          <a
            href="https://www.linkedin.com/in/lucas-souza-929096222/"
            target="_blank"
            rel="external"
          >
            lucas souza
          </a>
        </li>
      </ul>
    </footer>
  );
};
