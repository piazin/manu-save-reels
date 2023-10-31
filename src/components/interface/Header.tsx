import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-slate-50 h-[10vh]">
      <h1 className="font-semibold">
        <span className="text-pink-600 text-xl font-bold">Manu</span> Save Reels
      </h1>
      <Button className="bg-slate-200/50 hover:bg-slate-200">
        <Moon className="h-4 w-4" color="#db2777" />
      </Button>
    </header>
  );
}
