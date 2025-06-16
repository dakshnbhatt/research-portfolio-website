
import { useEffect, useRef } from "react";

// Physics particle class for the galaxy simulation
class PhysicsParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  origin: { x: number; y: number };
  mass: number;
  size: number;

  constructor(x: number, y: number, vx: number, vy: number, color: string, origin: { x: number; y: number }) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.origin = origin;
    this.mass = 1;
    // Varied star sizes for more realistic appearance
    this.size = 1.2 + Math.random() * 3.0; // Size range from 1.2 to 4.2
  }

  // Optimized gravitational attraction
  attractTo(center: { x: number; y: number }) {
    const G = 0.1;
    const SOFTENING = 50;
    const dx = center.x - this.x;
    const dy = center.y - this.y;
    const distSq = dx * dx + dy * dy + SOFTENING;
    const force = G * this.mass / distSq;
    const dist = Math.sqrt(distSq);

    this.vx += force * dx / dist;
    this.vy += force * dy / dist;
  }

  update() {
    this.attractTo(this.origin);
    this.x += this.vx;
    this.y += this.vy;
    
    // Apply slight damping for stability
    this.vx *= 0.999;
    this.vy *= 0.999;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.shadowBlur = 8;
    ctx.shadowColor = this.color;
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}

const GalaxyCollision = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<PhysicsParticle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Optimized physics constants
    const NUM_PARTICLES_PER_GALAXY = 250; // 500 total particles
    const galaxyRadius = 120;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create a 4-armed spiral galaxy with realistic spiral arm structure
    const createSpiralGalaxy = (cx: number, cy: number, direction: { vx: number; vy: number }) => {
      const particles: PhysicsParticle[] = [];
      const numArms = 4; // Four spiral arms as requested
      
      for (let i = 0; i < NUM_PARTICLES_PER_GALAXY; i++) {
        // Create spiral structure
        const armIndex = Math.floor(Math.random() * numArms);
        const armAngle = (armIndex * 2 * Math.PI) / numArms;
        
        // Logarithmic spiral parameters
        const t = Math.random() * 4 * Math.PI; // How far along the spiral
        const spiralTightness = 0.3;
        const radius = (t / (4 * Math.PI)) * galaxyRadius + Math.random() * 20;
        
        // Calculate spiral position
        const spiralAngle = armAngle + t * spiralTightness;
        const x = cx + radius * Math.cos(spiralAngle) + (Math.random() - 0.5) * 30;
        const y = cy + radius * Math.sin(spiralAngle) + (Math.random() - 0.5) * 30;

        // Orbital velocity based on distance from center (Keplerian motion)
        const distFromCenter = Math.sqrt((x - cx) * (x - cx) + (y - cy) * (y - cy));
        const orbitalSpeed = Math.sqrt(0.1 * 100 / (distFromCenter + 10)) * 0.8;
        
        // Tangential velocity components
        const angleToCenter = Math.atan2(y - cy, x - cx);
        const vx = -orbitalSpeed * Math.sin(angleToCenter) + direction.vx + (Math.random() - 0.5) * 0.1;
        const vy = orbitalSpeed * Math.cos(angleToCenter) + direction.vy + (Math.random() - 0.5) * 0.1;

        // More varied purple colors for realistic star appearance
        const expandedPurplePalette = [
          "#d0bfff", // lilac
          "#b19cd9", // light amethyst
          "#cdb4db", // lavender blush
          "#d8b4f8", // soft orchid
          "#e0c3fc", // periwinkle mist
          "#c8a8e9", // light purple
          "#ddbfe8", // pale lavender
          "#b794d6", // medium purple
          "#e5d4f1", // very light purple
          "#a584c4", // darker amethyst
          "#c39bd3", // light wisteria
          "#bb8fce", // medium orchid
          "#af7ac5", // medium slate blue
          "#a569bd", // rebecca purple
          "#9b59b6"  // darker purple
        ];
        const color = expandedPurplePalette[Math.floor(Math.random() * expandedPurplePalette.length)];
        particles.push(new PhysicsParticle(x, y, vx, vy, color, { x: cx, y: cy }));
      }
      
      return particles;
    };

    // Initialize galaxy positions for collision
    const center1 = { x: canvas.width * 0.3, y: canvas.height * 0.5 };
    const center2 = { x: canvas.width * 0.7, y: canvas.height * 0.5 };

    // Create both spiral galaxies with collision velocities
    const galaxy1 = createSpiralGalaxy(center1.x, center1.y, { vx: 0.3, vy: 0 });
    const galaxy2 = createSpiralGalaxy(center2.x, center2.y, { vx: -0.3, vy: 0 });
    
    particlesRef.current = [...galaxy1, ...galaxy2];

    // Optimized animation loop with performance controls
    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      if (currentTime - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      // Clear canvas with deep purple background (no overlay)
      ctx.fillStyle = "#131322"; // Deep purple background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      // Batch update and render particles
      ctx.shadowBlur = 0; // Disable shadow for performance during batch operations
      
      particles.forEach(particle => {
        particle.update();
      });

      // Render all particles in one pass
      particles.forEach(particle => {
        particle.draw(ctx);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ 
          background: "#131322", // Deep purple background
        }}
      />
    </div>
  );
};

export default GalaxyCollision;
