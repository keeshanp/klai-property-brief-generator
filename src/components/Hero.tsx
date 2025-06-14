
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2965&auto=format&fit=crop"
        alt="Modern UK property"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          Your Trusted Partner in Property
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up">
          We are a sourcing company helping investors find high-yield opportunities in the North East of England, and provide fast, hassle-free cash sales for homeowners across the UK.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-secondary hover:bg-yellow-400 text-primary font-bold text-lg w-full sm:w-auto">
            Get My Free Offer
          </Button>
          <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary font-bold text-lg w-full sm:w-auto">
            Explore Investments
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
