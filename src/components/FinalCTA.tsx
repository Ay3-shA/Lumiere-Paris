

import React from 'react';
import { Calendar, Mail, Sparkles} from 'lucide-react';

interface FinalCTAProps {
  onStartPlanning: () => void;
  onContactUs: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onStartPlanning,
  onContactUs,
}) => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-transparent text-white">

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6 text-balance">
          Ready to Experience Paris?
        </h2>

        {/* Text */}
        <div className="relative w-fit mx-auto">
          <div className="relative top-6 w-130 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm px-3 py-2">
          
            <p className="relative font-sans text-base sm:text-lg lg:text-xl text-white leading-relaxed max-w-2xl mx-auto text-balance">
              Your Paris adventure starts here. Choose your experiences, build your itinerary, and get ready to discover one of the world's most captivating cities.
            </p>
          </div>
        </div>

        {/* Dual Call-to-Action Buttons */}
        <div className="relative top-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
          <button
            onClick={onStartPlanning}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-white text-paris-charcoal font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-paris-gold-light active:scale-95 transition-all duration-200 shadow-2xl cursor-pointer flex items-center justify-center gap-2.5"
          >
            <Calendar className="w-4 h-4 text-paris-gold" />
            <span>Start Planning Your Trip</span>
          </button>

          <button
            onClick={onContactUs}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/30 hover:border-white hover:bg-white/20 active:scale-95 transition-all duration-200 text-xs sm:text-sm uppercase tracking-wider font-semibold cursor-pointer flex items-center justify-center gap-2.5"
          >
            <Mail className="w-4 h-4 text-white" />
            <span>Contact Us</span>
          </button>
        </div>

      </div>
    </section>
  );
};
