
import { processSteps } from "@/lib/data";

const Process = () => {
  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Simple 4-Step Process</h2>
          <p className="text-lg text-muted-foreground mt-2">A clear and transparent journey from start to finish.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative bg-background p-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-secondary text-primary rounded-full font-bold text-2xl border-4 border-background">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
