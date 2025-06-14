
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Take the Next Step?</h2>
            <p className="text-lg text-muted-foreground mt-2">Get in touch today for a confidential, no-obligation chat about your property goals.</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-semibold mb-4">Direct Contact</h3>
                <p className="text-muted-foreground mb-6">Feel free to reach out to us via phone or email.</p>
                <div className="space-y-4">
                    <p><strong>Phone:</strong> [Placeholder Phone]</p>
                    <p><strong>Email:</strong> [Placeholder Email]</p>
                </div>
            </div>
            <form className="space-y-4">
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" placeholder="Your Name" />
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your Email" />
                </div>
                <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="Your Phone Number" />
                </div>
                <div>
                    <Label htmlFor="interest">I am interested in...</Label>
                    <Select>
                        <SelectTrigger id="interest">
                            <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="selling">Selling my property</SelectItem>
                            <SelectItem value="investing">Investing in property</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-yellow-400 text-primary font-bold">Submit</Button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
