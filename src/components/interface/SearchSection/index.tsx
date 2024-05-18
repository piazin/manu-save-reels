import * as z from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/interface/Button";
import { useReels } from "./use-reels";

const formSchema = z.object({
  reelsUrl: z
    .string({ required_error: "A url não pode ser vazia" })
    .regex(new RegExp(/^https:\/\/www\.instagram\.com/i), {
      message: "Url invalida",
    }),
});

export function SearchSection() {
  const { fetchReel, isLoading, reelsLink } = useReels();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reelsUrl: "",
    },
  });

  return (
    <div className="w-[666px] h-[666px] flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(async (data) => {
            await fetchReel(data.reelsUrl);
            form.resetField("reelsUrl");
          })}
          className="w-full space-y-8"
        >
          <FormField
            control={form.control}
            name="reelsUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Url do Vídeo</FormLabel>
                <FormControl>
                  <Input
                    placeholder="url"
                    {...field}
                    className="dark:bg-white text-slate-950"
                  />
                </FormControl>
                <FormDescription>
                  cole o link do video que deseja baixar
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button.Root disabled={isLoading}>
            {isLoading ? (
              <Button.Loader>Baixando</Button.Loader>
            ) : (
              <Button.Label>Baixar</Button.Label>
            )}
          </Button.Root>
        </form>
      </Form>

      <iframe
        className="hidden"
        src={
          //@ts-ignore
          reelsLink?.reels.reelsUrl
        }
      ></iframe>
    </div>
  );
}
