
import { useState } from "react";
import ResearchCard from "@/components/ResearchCard";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

interface ResearchExperience {
  id: number;
  title: string;
  institution: string;
  duration: string;
  description: string;
  skills: string[];
  link?: string;
}

const Research = () => {
  const researchExperiences: ResearchExperience[] = [
    {
      id: 1,
      title: "Stellar Photometry and Dust Attenuation Studies",
      institution: "University of Massachusetts, Amherst - Calzetti Group",
      duration: "Feb 2025 - Present",
      description: "Conducting stellar photometry and dust attenuation studies in nearby galaxies, focusing on the M33 galaxy. Automated aperture photometry on over 1,200 stellar clusters in multi-band imaging using custom Python code, incorporating a centering algorithm to improve flux accuracy. Constructed U-B vs. V-I color-color diagrams to assess the influence of interstellar dust on observed stellar populations and their optical colors.",
      skills: ["Python", "Astropy", "Aperture Photometry", "Color-Color Diagrams", "Data Analysis"],
    },
    {
      id: 2,
      title: "nEXO Experiment - Neutrinoless Double Beta Decay Research",
      institution: "University of Massachusetts, Amherst - Pocar Group", 
      duration: "May 2024 - Dec 2024",
      description: "Worked on the R&D phase of the nEXO experiment, a next-generation search for neutrinoless double beta decay in xenon-136 using a 5-ton liquid xenon time projection chamber (TPC). Modeled photon transport efficiency in liquid xenon detectors using GPU-accelerated optical simulations with Chroma, focusing on geometries relevant to the nEXO experiment. Analyzed the effects of CAD tessellation resolution on light collection by SiPMs, isolating artifacts from surface triangulation and comparing performance of curved versus flat reflectors.",
      skills: ["GPU Computing", "Chroma", "Optical Simulations", "CAD Modeling", "Monte Carlo Methods"],
    },
    {
      id: 3,
      title: "Dark Matter Detection Research",
      institution: "University of Massachusetts, Amherst - Hertel Group",
      duration: "Feb 2023 - May 2023", 
      description: "Joined the Hertel Group during freshman year to support early-stage experimental development in low-temperature dark matter detection using novel target media such as liquid helium. Designed and built a prototype mechanical switch to control cryogenic detector hardware developed at UMass without introducing additional heat to the low-temperature environment. Repurposed LEGO components—leveraging their ABS plastic and precision interlocking design—to achieve reliable, non-conductive actuation suitable for delicate experimental setups.",
      skills: ["Cryogenic Systems", "Mechanical Design", "Experimental Physics", "Hardware Development", "Problem Solving"],
    },
  ];

  return (
    <div className="min-h-screen pt-20 star-field">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-cosmic mb-6">
            Research Portfolio
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Exploring the cosmos through computational astrophysics, stellar dynamics, and galactic evolution studies.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center items-center gap-4">
            <Button 
              asChild 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              <a 
                href="https://www.linkedin.com/in/daksh-bhatt-388478369/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              <a 
                href="https://github.com/dakshnbhatt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Research Experiences Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {researchExperiences.map((experience, index) => (
            <ResearchCard 
              key={experience.id}
              title={experience.title}
              description={experience.description}
              fullContent={`${experience.description} Skills utilized: ${experience.skills.join(', ')}.`}
              date={experience.duration}
              institution={experience.institution}
              links={[]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
