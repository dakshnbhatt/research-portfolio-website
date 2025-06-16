
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Calendar, Users, GraduationCap, Presentation } from "lucide-react";

// Interface for teaching experience
interface TeachingExperience {
  id: number;
  title: string;
  course: string;
  description: string;
  date: string;
  supervisor: string;
  type: "teaching" | "presentation";
}

const Outreach = () => {
  // Teaching experiences from CV
  const [experiences] = useState<TeachingExperience[]>([
    {
      id: 1,
      title: "Teaching Assistant - Introduction to Mechanics",
      course: "PHYS131",
      description: "Assisted students with labs and office hours, guided problem-solving in mechanics, graded assignments and exams, and led review sessions to reinforce conceptual understanding.",
      date: "Sept 2024 - Dec 2024",
      supervisor: "Prof. Hanh Hatch",
      type: "teaching"
    },
    {
      id: 2,
      title: "Teaching Assistant - Weather and Astronomy", 
      course: "ASTRON105",
      description: "Conducted weekly office hours and graded assignments for a general education course introducing 120+ non-major students to weather phenomena through basic physics and astronomy.",
      date: "Feb 2024 - May 2024",
      supervisor: "Prof. Don Candela",
      type: "teaching"
    },
    {
      id: 3,
      title: "Lab Assistant - Exploring the Universe",
      course: "ASTRON100", 
      description: "Assisted first-year astronomy majors during lab sessions, helping students navigate Stellarium software and apply core astronomy concepts through hands-on simulations.",
      date: "Sept 2023 - May 2025",
      supervisor: "Prof. Stephen Schneider",
      type: "teaching"
    }
  ]);

  return (
    <div className="min-h-screen pt-20 star-field">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-cosmic mb-6">
            Outreach & Teaching
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Sharing the wonders of astrophysics through teaching, presentations, and educational outreach.
          </p>
        </div>

        {/* Conference Presentation Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-cosmic mb-8 text-center">Conference Presentations</h2>
          
          <Card className="bg-card/30 backdrop-blur-sm border-border overflow-hidden animate-float">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Poster Image */}
                <div className="relative aspect-video bg-muted">
                  <img
                    src="/lovable-uploads/df33818b-0cd2-4053-891c-ed1106b3d019.png"
                    alt="APS DNP Conference Poster - Effect of Surface Resolution on Ray-Tracing Optical Simulations"
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Presentation Info */}
                <div className="p-8 space-y-6">
                  <h3 className="text-2xl font-semibold text-cosmic">
                    Effect of Surface Resolution on Ray-Tracing Optical Simulations
                  </h3>
                  
                  <p className="text-foreground/80 leading-relaxed">
                    Presented research on optical simulation fidelity in LXe environments using Chroma. Demonstrated how surface tessellation in CAD-generated geometries affects photon transport efficiency predictions, with implications for detector modeling in the nEXO experiment.
                  </p>
                  
                  {/* Metadata */}
                  <div className="space-y-3 text-sm text-foreground/70">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      <span>October 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Presentation className="w-4 h-4 mr-2 text-primary" />
                      <span>American Physics Society, Division of Nuclear Physics - CEU</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      <span>Physics Research Community</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Teaching Experience Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-cosmic mb-8 text-center">Teaching Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.filter(exp => exp.type === "teaching").map((experience, index) => (
              <Card key={experience.id} className="bg-card/30 backdrop-blur-sm border-border hover:bg-card/40 transition-all duration-300 animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <GraduationCap className="w-8 h-8 text-primary flex-shrink-0" />
                    <span className="text-xs font-medium text-accent bg-accent/20 px-2 py-1 rounded-full">
                      {experience.course}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-cosmic">
                    {experience.title}
                  </h3>
                  
                  <p className="text-foreground/80 leading-relaxed text-sm">
                    {experience.description}
                  </p>
                  
                  {/* Metadata */}
                  <div className="space-y-2 text-xs text-foreground/70 pt-4 border-t border-border">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-2 text-primary" />
                      <span>{experience.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-2 text-primary" />
                      <span>Supervisor: {experience.supervisor}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Plans Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-card/20 backdrop-blur-sm border-border border-dashed">
            <CardContent className="p-6 text-center">
              <div className="space-y-4">
                <Play className="w-12 h-12 mx-auto text-foreground/40" />
                <div className="text-foreground/60">
                  <p className="font-medium mb-2">Future Outreach Plans</p>
                  <div className="text-sm space-y-1">
                    <p>Planning to create educational content and presentations</p>
                    <p>Developing astronomy outreach programs for local communities</p>
                    <p>Working on making astrophysics accessible to broader audiences</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Outreach;
