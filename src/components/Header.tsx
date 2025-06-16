
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Research", href: "/research" },
    { name: "Publications", href: "/publications" },
    { name: "Outreach", href: "/outreach" },
    { name: "Contact", href: "/contact" },
  ];

  const handleCVDownload = () => {
    // In a real implementation, this would link to an actual CV file
    console.log("CV download initiated");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name with Photo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30">
              <img 
                src="/lovable-uploads/27a5480b-30f3-4e01-82c6-b65fe251899e.png" 
                alt="Daksh Bhatt" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold text-cosmic">Daksh Bhatt</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-foreground hover:text-primary transition-colors relative ${
                  location.pathname === item.href ? "text-primary" : ""
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 cosmic-gradient rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CV Download Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleCVDownload}
              className="cosmic-gradient text-white hover:opacity-90 transition-opacity animate-pulse-glow"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-foreground hover:text-primary transition-colors ${
                    location.pathname === item.href ? "text-primary" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
