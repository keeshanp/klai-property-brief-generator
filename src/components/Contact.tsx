import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Chatbot from "./Chatbot";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    phone: z.string().min(10, { message: "Please enter a valid phone number." }),
    interest: z.enum(["selling", "investing"], { required_error: "Please select your interest."}),
    message: z.string().optional(),
});

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userName, setUserName] = useState("");
  const [interest, setInterest] = useState<'selling' | 'investing'>('investing');
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: "",
        email: "",
        phone: "",
        interest: undefined,
        message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    setUserName(data.name);
    setInterest(data.interest);
    setIsSubmitted(true);
    toast({
        title: "Form submitted successfully!",
        description: "Thank you for your interest. Let's chat more about your goals.",
    });
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{isSubmitted ? "Let's Talk" : "Ready to Take the Next Step?"}</h2>
            <p className="text-lg text-muted-foreground mt-2">{isSubmitted ? "Let's get some more details to assist you." : "Get in touch today for a confidential, no-obligation chat about your property goals."}</p>
        </div>
        <div className="max-w-4xl mx-auto">
        {isSubmitted ? (
            <Chatbot userName={userName} interest={interest} />
        ) : (
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Direct Contact</h3>
                    <p className="text-muted-foreground mb-6">Feel free to reach out to us via phone or email, or use the form to send us a message.</p>
                    <div className="space-y-4">
                        <p><strong>Phone:</strong> [Placeholder Phone]</p>
                        <p><strong>Email:</strong> [Placeholder Email]</p>
                    </div>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="Your Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input type="tel" placeholder="Your Phone Number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="interest"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>I am interested in...</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select an option" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="selling">Selling my property</SelectItem>
                                            <SelectItem value="investing">Investing in property</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message <span className="text-muted-foreground/80">(Optional)</span></FormLabel>
                                <FormControl>
                                <Textarea placeholder="Tell us a bit about your goals..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-yellow-400 text-primary font-bold">Submit</Button>
                    </form>
                </Form>
            </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
