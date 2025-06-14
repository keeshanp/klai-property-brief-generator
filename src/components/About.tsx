
import { values } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/418397f0-8df1-454a-80e5-0a23ef4f78ff.png"
              alt="Keeshan Pillay"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Personal Approach to Property</h2>
            <p className="mb-6 text-lg">
              Hi, I'm Keeshan Pillay, founder of KLAP Property Group. I'm passionate about helping you achieve your financial goals through strategic property investment, focusing on key growth areas in the North East of England. My goal is not just to find you a property, but to build a personalised plan for your long-term wealth, focusing on sustainable strategies that deliver both capital appreciation and reliable rental yields.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-2">The Meaning Behind KLAP</h3>
                <p className="text-primary-foreground/80">
                  KLAP isn't just an acronym; it's a tribute to the heart of my company—my three amazing children, Kiran, Liam, and Amaya Pillay. They are the constant reminder of why I embarked on this journey: to create a future where my own family thrives, and where I can empower others to do the same.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-2">My Background</h3>
                <p className="text-primary-foreground/80">
                  As a sourcing company, our focus is helping investors interested in the North East of England. With over £1.2 million in personally sourced property deals, I am a highly experienced deal sourcing specialist and a member of the prestigious Sourced Property Network. My expertise spans numerous UK property strategies, and I have a track record of delivering consistent and proven results for investors.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
            <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                    <div key={index} className="text-center">
                        <h4 className="text-2xl font-bold text-secondary">{value.title}</h4>
                        <p className="mt-2 text-primary-foreground/80">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
