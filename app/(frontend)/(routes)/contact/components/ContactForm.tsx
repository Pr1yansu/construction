"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Container from "@/components/ui/container";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  massage: z.string().nonempty({ message: "Message is required" }),
  email: z.string().email({ message: "Invalid email address" }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  const { toast } = useToast();

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      variant: "success",
      title: "Success",
      description: "Your message has been sent successfully",
    });
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong",
      });
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Container>
        <div className="relative">
          <div className="absolute z-[3] top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-black/30 rounded-md overflow-hidden">
            <h3 className="relative sm:text-5xl text-3xl font-semibold text-white">
              Contact Us
            </h3>
          </div>
          <Image
            src={"/assets/images/pexels-photomix-company-224924.jpg"}
            height={500}
            width={500}
            alt="contact"
            className="w-full h-96 object-cover object-top group-hover:scale-125 duration-300 transform cursor-pointer mb-4"
          />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12 gap-2">
              <div className="sm:col-span-7 col-span-12">
                <div>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name :</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter name ..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email :</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter email ..." {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="sm:col-span-5 col-span-12">
                <FormField
                  control={form.control}
                  name="massage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Massage :</FormLabel>
                      <FormControl>
                        <Textarea
                          className="h-40"
                          placeholder="Massage ..."
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Button className="mt-4" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </Container>
    </div>
  );
};

export default ContactForm;
