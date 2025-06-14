
import { services } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Your Goals, Our Expertise</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">We provide tailored solutions to help you achieve your property ambitions.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-6 border-2 hover:border-secondary hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="mx-auto bg-secondary/10 rounded-full p-4 w-fit mb-4">
                    <service.icon className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-base mt-2">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
