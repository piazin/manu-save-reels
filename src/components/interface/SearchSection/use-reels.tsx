import { useState } from "react";

interface Response {
  reels: {
    downloadLink: string;
    thumbnailLink: string;
  };
}

export const useReels = () => {
  const [reelsLink, setReelsLink] = useState<Response | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchReel(reelsUrl: string) {
    setIsLoading(true);
    try {
      const res = await fetch("https://insta-save-api.onrender.com/reels", {
        method: "POST",
        body: JSON.stringify({ reelsUrl }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = (await res.json()) as Response;
      setReelsLink(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    fetchReel,
    reelsLink,
    isLoading,
  };
};
