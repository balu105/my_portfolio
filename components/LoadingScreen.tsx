import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onFinished: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setFadeOut(true), 500);
          setTimeout(onFinished, 1200);
          return 100;
        }
        return prev + 1;
      });
    }, 12);

    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <div className={`fixed inset-0 z-[9999] bg-brand-dark flex flex-col items-center justify-center transition-opacity duration-1000 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="flex flex-col items-center max-w-xs w-full px-6">
        <div className="mb-16 text-center animate-pulse">
          <h1 className="text-3xl font-black tracking-tighter text-white">
            K.C. <span className="text-brand-cyan-500">BALAJI</span>
          </h1>
          <p className="text-[9px] uppercase tracking-[0.5em] text-brand-lavender mt-2">Systems Engineering</p>
        </div>

        <div className="w-full h-px bg-brand-purple/20 relative overflow-hidden">
          <div 
            className="h-full bg-brand-cyan-500 transition-all duration-100 ease-out shadow-[0_0_10px_#00b4d8]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-6 flex flex-col items-center">
          <span className="text-[10px] font-bold text-brand-cyan-500 tracking-widest">{progress}%</span>
          <p className="text-[8px] uppercase tracking-[0.3em] text-gray-500 mt-4 animate-pulse">Establishing Connection</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;