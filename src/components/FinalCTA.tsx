
import { MapPin, Phone} from 'lucide-react';
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

        {/* Subtle Kicker */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-paris-gold-light text-xs uppercase tracking-[0.2em] font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5 text-paris-gold" />
          <span>Begin Your Journey</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6 text-balance">
          Ready to Experience Paris?
        </h2>

        {/* Text */}
        <div className="relative w-fit mx-auto">
          <div className="w-130 mx-auto rounded-2xl bg-black/5 backdrop-blur-md px-3 py-2">
          
            <p className="relative font-sans text-base sm:text-lg lg:text-xl text-white leading-relaxed max-w-2xl mx-auto text-balance">
              Your Paris adventure starts here. Choose your experiences, build your itinerary, and get ready to discover one of the world's most captivating cities.
            </p>
          </div>
        </div>

        {/* Dual Call-to-Action Buttons */}
        <div className="relative top-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
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

        {/* Direct Contact reassurance */}
        <div className="mt-12 relative top-3.5 text-sm sm:text-base text-white/90 flex flex-wrap items-center justify-center gap-x-27 gap-y-4">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-white shrink-0" />
            Parisian Concierge Office: Place Vendôme, 75001 Paris
          </span>

          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-white shrink-0" />
            Direct Phone: +33 (0)1 42 68 50 00
          </span>
        </div>

      </div>
    </section>
  );
};
