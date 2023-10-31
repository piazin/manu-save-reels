import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type Props = {
  isLoading: boolean;
};

export const DownloadButton = ({ isLoading }: Props) => {
  return (
    <Button
      className="bg-pink-600 hover:bg-pink-600/70 dark:text-white"
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Baixando
        </>
      ) : (
        <>Baixar reels</>
      )}
    </Button>
  );
};
