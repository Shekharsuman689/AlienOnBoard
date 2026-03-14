import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 bg-background py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-lg font-bold">
          <span className="text-primary">Alien</span>OnBoard
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
          <Link to="/buy" className="hover:text-primary transition-colors">Buy</Link>
          <Link to="/enquire" className="hover:text-primary transition-colors">Contact</Link>
          <Link to="/sustainability" className="hover:text-primary transition-colors">Sustainability</Link>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 AlienOnBoard. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
