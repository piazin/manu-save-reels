import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";

interface Response {
  reelsLink: {
    download_link: string;
    thumbnail_link: string;
  };
}

const formSchema = z.object({
  reelsUrl: z
    .string({ required_error: "A url não pode ser vazia" })
    .regex(new RegExp(/^https:\/\/www\.instagram\.com/i), {
      message: "Url invalida",
    }),
});

export function SearchSection() {
  const [reelsLink, setReelsLink] = useState<Response>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reelsUrl: "",
    },
  });

  async function onSubmit({ reelsUrl }: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const res = await fetch("http://localhost:3000/reels", {
      method: "POST",
      body: JSON.stringify({ reelsUrl }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = (await res.json()) as Response;
    setReelsLink(data);
    setIsLoading(false);
  }

  return (
    <div className="w-[666px] h-[666px] flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          <FormField
            control={form.control}
            name="reelsUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Vídeo Url</FormLabel>
                <FormControl>
                  <Input placeholder="cole aqui" {...field} />
                </FormControl>
                <FormDescription>
                  cole o link do video que deseja baixar
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="bg-pink-600 hover:bg-pink-600/70"
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
        </form>
      </Form>
      <iframe
        className="hidden"
        src={reelsLink?.reelsLink.download_link}
      ></iframe>
    </div>
  );
}
