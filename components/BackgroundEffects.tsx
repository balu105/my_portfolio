
import React, { useEffect, useRef } from 'react';

const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    
    // Create particles
    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100); // Responsive count

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      
      // Draw grid manually for better control than CSS
      ctx.strokeStyle = 'rgba(30, 41, 59, 0.3)';
      ctx.lineWidth = 0.5;
      
      // Update and draw particles
      ctx.fillStyle = 'rgba(6, 182, 212, 0.3)'; // Cyan tint
      
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect particles if close
        /* Optional: Draw lines between particles close to each other
        particles.forEach((p2) => {
           const dx = p.x - p2.x;
           const dy = p.y - p2.y;
           const dist = Math.sqrt(dx*dx + dy*dy);
           if (dist < 100) {
              ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - dist/100)})`;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
           }
        });
        */
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Ambient gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cyan-500/5 rounded-full blur-[100px] animate-pulse"></div>
    </div>
  );
};

export default BackgroundEffects;
