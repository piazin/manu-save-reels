import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function Header() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="flex items-center justify-between p-4 bg-slate-50 dark:bg-zinc-950 h-[10vh]">
      <h1 className="font-semibold">
        <span className="text-pink-600 text-xl font-bold">Manu</span> Save Reels
      </h1>
      <Button
        className="bg-slate-200/50 hover:bg-slate-200 dark:bg-slate-200 dark:hover:bg-slate-300"
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      >
        <Moon className="h-4 w-4" color="#db2777" />
      </Button>
    </header>
  );
}
