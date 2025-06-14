
import { Button } from "@/components/ui/button";

const Book = () => {
  return (
    <section id="book" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn My Proven Strategies</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get ready to master the art of property investment. In my upcoming book, I share the exact strategies I use to find and secure high-yield deals across the UK. Register for exclusive updates and be the first to know when it launches.
            </p>
            <Button size="lg" asChild className="bg-secondary hover:bg-yellow-400 text-primary font-bold text-lg">
              <a href="https://ukpropertydealfinder.online/" target="_blank" rel="noopener noreferrer">
                Register for Free Updates
              </a>
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-96 bg-primary text-primary-foreground rounded-lg shadow-2xl flex flex-col items-center justify-center p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-center">UK Property Deal Finder</h3>
                <div className="w-16 h-1 bg-secondary my-4"></div>
                <p className="text-center text-sm">Your guide to finding high-yield deals</p>
                <p className="text-secondary font-bold mt-auto">Keeshan Pillay</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
