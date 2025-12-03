import { useEffect, useState } from "react";
import { X } from "lucide-react";

export interface SplashScreenProps {
  onComplete?: () => void;
  duration?: number;
}

export const SplashScreen = ({ onComplete, duration = 3000 }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldSkip, setShouldSkip] = useState(false);

  useEffect(() => {
    if (shouldSkip) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete, shouldSkip]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-dh-black flex items-center justify-center overflow-hidden">
      {/* Animated smoke background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-dh-gold rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      </div>


      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo with radial glow */}
        <div className="relative mb-8 animate-scale-up">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-dh-gold/20 to-transparent blur-2xl scale-150"></div>

          {/* Logo placeholder */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full 
bg-[#4b473b] flex items-center justify-center">
             <img 
    src="https://i.ibb.co/YFRKNpcJ/dh-removebg-preview.webp"      
    alt="Dark Hunnters Logo"
    className="w-full h-full object-contain"
/>
        </div>

        {/* Sword sweep effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-16 animate-sword-sweep">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-dh-gold/40 to-transparent blur-lg"></div>
        </div>

        {/* Team name with staggered reveal */}
       

        {/* Tagline with fade in */}
        <p
          className="text-dh-white text-lg md:text-2xl mt-6 font-body tracking-wide animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          Born to Hunt. Built to Win.
        </p>
      </div>
    </div>
    </div>
  );
};
