
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>© {new Date().getFullYear()} KLAP Property Group LTD</p>
        <p className="text-primary-foreground/70 mt-2">
          Company Registration Number: [Placeholder] | Registered Office Address: [Placeholder]
        </p>
        <div className="mt-4 flex justify-center items-center space-x-4">
            <a href="#" className="text-secondary hover:underline">Privacy Policy</a>
            <span className="text-primary-foreground/50">|</span>
            <a href="https://www.klappropertygroup.com/blog" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Blog</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
