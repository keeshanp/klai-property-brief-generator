
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2965&auto=format&fit=crop"
        alt="Modern property investment in North East England"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          Expert Property Deal Sourcing in North East England
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up">
          Unlock high-yield investment opportunities in the North East with our expert deal sourcing services. As featured in our book and blog, we specialise in BTL, BRRR, and property flips for serious investors. We also provide fast, hassle-free cash sales for homeowners.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-secondary hover:bg-yellow-400 text-primary font-bold text-lg w-full sm:w-auto">
            <a href="#contact">Get My Free Offer</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary font-bold text-lg w-full sm:w-auto">
            <a href="#services">Explore Investments</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
