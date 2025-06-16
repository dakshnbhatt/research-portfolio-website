
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

interface ResearchCardProps {
  title: string;
  description: string;
  fullContent: string;
  date: string;
  institution?: string;
  media?: {
    type: "image" | "document";
    url: string;
    alt?: string;
  }[];
  links?: {
    title: string;
    url: string;
  }[];
}

const ResearchCard = ({ 
  title, 
  description, 
  fullContent, 
  date, 
  institution, 
  media = [], 
  links = [] 
}: ResearchCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-float">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-cosmic text-xl mb-2">{title}</CardTitle>
            {institution && (
              <p className="text-sm text-muted-foreground mb-1">{institution}</p>
            )}
            <p className="text-sm text-accent">{date}</p>
          </div>
        </div>
        <CardDescription className="text-foreground/80">
          {description}
        </CardDescription>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="space-y-4">
          <div className="prose prose-invert max-w-none">
            <p className="text-foreground/90 leading-relaxed">{fullContent}</p>
          </div>
          
          {media.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-primary font-semibold">Media & Resources</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {media.map((item, index) => (
                  <div key={index} className="bg-muted/20 rounded-lg p-4">
                    {item.type === "image" ? (
                      <img 
                        src={item.url} 
                        alt={item.alt || "Research media"} 
                        className="w-full h-auto rounded-md"
                      />
                    ) : (
                      <div className="flex items-center space-x-2">
                        <ExternalLink className="w-5 h-5 text-accent" />
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-accent transition-colors"
                        >
                          View Document
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {links.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-primary font-semibold">Related Links</h4>
              <div className="flex flex-wrap gap-2">
                {links.map((link, index) => (
                  <Button key={index} variant="outline" size="sm" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      {link.title}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      )}
      
      <div className="px-6 pb-4">
        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-primary hover:text-accent transition-colors"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-2" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-2" />
              Read More
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};

export default ResearchCard;
