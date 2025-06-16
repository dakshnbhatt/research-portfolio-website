import { useEffect, useState } from "react";
import GalaxyCollision from "@/components/GalaxyCollision";
import TypedMessage from "@/components/TypedMessage";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const welcomeMessages = [
    "Welcome to the cosmos...",
    "Exploring the universe...",
    "One discovery at a time...",
    "Journey through space..."
  ];

  return (
    <div className="min-h-screen relative overflow-hidden star-field">
      {/* Galaxy Collision Animation - moved much higher up to be near the buttons */}
      <div className="absolute inset-0" style={{ top: '-60vh' }}>
        <GalaxyCollision />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className={`text-center transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <TypedMessage messages={welcomeMessages} speed={150} delay={3000} />
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Astrophysics student passionate about unraveling the mysteries of the universe
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="cosmic-gradient text-white hover:opacity-90 transition-opacity animate-pulse-glow">
              <Link to="/research">
                Explore My Research
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white transition-all">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 transition-all duration-1000 delay-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center text-muted-foreground">
            <p className="text-sm mb-2">Scroll to explore</p>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>
      
      {/* Additional Content Section - positioned to start where simulation begins */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4" style={{ marginTop: '40vh' }}>
        <div className="max-w-6xl mx-auto">
          {/* About My Journey Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-cosmic mb-8">
              About My Journey
            </h2>
          </div>
          
          {/* Main Content with Photo - Updated layout 1/3 photo, 2/3 text */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-12">
            {/* Photo Section - 1/3 of the space */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 animate-pulse-glow">
                  <img 
                    src="/lovable-uploads/27a5480b-30f3-4e01-82c6-b65fe251899e.png" 
                    alt="Daksh Bhatt - Astrophysics Student" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative cosmic elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 cosmic-gradient rounded-full animate-float opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 cosmic-gradient rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            {/* Text Content - 2/3 of the space */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                My fascination with the universe began not through equations or telescopes, but through stories. I first encountered Halley's Comet as a tale of longing—Edmund Halley glimpsing his cosmic love, only to wait 76 years to see her again. Or Altair and Vega, lovers separated by a sea of stars. These stories made the cosmos feel deeply human, and in turn, made me feel like I belonged to it.
              </p>
              
              <p className="text-lg text-foreground/70 leading-relaxed">
                As I grew, that poetic wonder evolved into an insatiable curiosity. Astrophysics became a playground—an infinite puzzle where every discovery opened the door to another mystery. Research, for me, is a quest to figure things out. I'm driven by the thrill of peeling back layers of reality and finding the logic behind the light.
              </p>

              <p className="text-lg text-foreground/70 leading-relaxed">
                My path hasn't been easy. As an international student, getting research funded has been a challenge—but every obstacle has only sharpened my drive. And every breakthrough, no matter how small, has felt hard-earned and meaningful.
              </p>

              <p className="text-lg text-foreground/70 leading-relaxed">
                Currently, I study how starlight from galaxies is altered as it passes through cosmic dust—asking how this subtle veiling changes what we know about the universe. But beyond the data, my goal is simple: I want others to feel what I feel when I look at the night sky. I want them to sense the stardust in their bones. To feel connected, curious, and alive.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                This is more than science. It's a story we're all part of. And I'm here to help tell it.
              </p>
            </div>
          </div>
          
          {/* Research Focus Cards - Updated with real information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-border animate-float">
              <h3 className="text-xl font-semibold text-primary mb-3">Research Focus</h3>
              <p className="text-foreground/70">
                Galaxy formation, stellar dynamics, and computational astrophysics
              </p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-border animate-float" style={{animationDelay: '0.5s'}}>
              <h3 className="text-xl font-semibold text-primary mb-3">Current Work</h3>
              <p className="text-foreground/70">
                Conducting stellar photometry and dust attenuation studies in nearby galaxies with Prof. Daniella Calzetti
              </p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-border animate-float" style={{animationDelay: '1s'}}>
              <h3 className="text-xl font-semibold text-primary mb-3">Future Goals</h3>
              <p className="text-foreground/70">
                PhD in Astrophysics and researching galaxy evolution of high redshift galaxies
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer - Reduced size and updated content */}
      <footer className="relative z-10 py-8 px-4 bg-background/90 backdrop-blur-sm border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-3">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <p className="text-foreground/60">
              © 2025 Daksh Bhatt. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Exploring the cosmos, one discovery at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
