
import { Facebook, Instagram, Linkedin, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6 flex justify-center items-center space-x-6">
          <a href="https://www.linkedin.com/company/klap-porperty-group-ltd/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary-foreground/80 hover:text-secondary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61561366897119" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-foreground/80 hover:text-secondary transition-colors">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/klappropertygroup/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/80 hover:text-secondary transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="https://x.com/KLAPProperty" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-primary-foreground/80 hover:text-secondary transition-colors">
            <X className="h-6 w-6" />
          </a>
        </div>
        <div className="flex justify-center items-center gap-8 mb-8">
            {/* TODO: Replace these divs with your <img> tags for PRS and ICO logos */}
            <div className="h-12 w-28 bg-gray-700/50 rounded flex items-center justify-center text-xs text-primary-foreground/60 font-semibold">PRS Logo</div>
            <div className="h-12 w-28 bg-gray-700/50 rounded flex items-center justify-center text-xs text-primary-foreground/60 font-semibold">ICO Logo</div>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} KLAP Property Group LTD</p>
        <p className="text-primary-foreground/70 mt-2 text-sm">
          Company Registration Number: [Placeholder] | Registered Office Address: [Placeholder]
        </p>
        <div className="mt-4 flex justify-center items-center space-x-4 text-sm">
            <a href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</a>
            <span className="text-primary-foreground/50">|</span>
            <a href="/terms-of-service" className="text-secondary hover:underline">Terms of Service</a>
            <span className="text-primary-foreground/50">|</span>
            <a href="https://www.klappropertygroup.com/blog" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Blog</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
