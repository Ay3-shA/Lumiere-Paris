import React from 'react';
import { Calendar, Mail, Sparkles, PhoneCall, ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onStartPlanning: () => void;
  onContactUs: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartPlanning, onContactUs }) => {
  return (
    <section data-final-cta className="relative py-28 sm:py-36 overflow-hidden bg-transparent text-white">
      {/* Subtle vignette over scroll animation */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/40" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Subtle Kicker */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E8D8C3] text-xs uppercase tracking-[0.2em] font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Begin Your Journey</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6 text-balance">
          Ready to Experience Paris?
        </h2>

        {/* Text */}
        <p className="font-sans text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
          Your Paris adventure starts here. Choose your experiences, build your itinerary, and get ready to discover one of the world&apos;s most captivating cities.
        </p>

        {/* Dual Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
          <button
            onClick={onStartPlanning}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-white text-[#1A1A1A] font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#E8D8C3] active:scale-95 transition-all duration-200 shadow-2xl cursor-pointer flex items-center justify-center gap-2.5"
          >
            <Calendar className="w-4 h-4 text-[#C5A880]" />
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

        {/* Direct Contact reassurance */}
        <div className="mt-12 text-xs text-white/60 flex flex-wrap items-center justify-center gap-6">
          <span>Parisian Concierge Office: Place Vendôme, 75001 Paris</span>
          <span>•</span>
          <span>Direct Phone: +33 (0)1 42 68 50 00</span>
          <span>•</span>
          <span>Avg. Response Time &lt; 2 Hours</span>
        </div>
      </div>
    </section>
  );
};
