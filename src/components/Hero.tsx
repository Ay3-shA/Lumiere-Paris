import React from 'react';
import { ArrowDown, Compass, Calendar, Star, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onPlanTripClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onPlanTripClick }) => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent text-white"
    >
      
      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20 text-center flex flex-col items-center">
        {/* Subtle Parisian Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-paris-gold-light text-xs uppercase tracking-[0.2em] font-medium mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <Sparkles className="w-3.5 h-3.5 text-paris-gold" />
          <span>Home</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white tracking-tight leading-[1.08] mb-6 max-w-4xl text-balance">
          Discover Paris, Your Way
        </h1>

        {/* Subheadline */}
        <div className="w-140 h-20 mx-auto rounded-2xl bg-white/3 backdrop-blur-sm px-3 py-2">
          <p className="font-serif italic text-lg sm:text-2xl lg:text-[26px] text-white font-normal tracking-wide max-w-3xl mb-4 text-balance">
            &ldquo;Experience the timeless beauty, culture, cuisine, and unforgettable moments of Paris.&rdquo;
          </p>
        </div>

        {/* Supporting text */}
        <div className="relative top-3 w-140 h-25 mx-auto rounded-2xl bg-black/3 backdrop-blur-sm px-3 py-2">
          <p className="font-sans text-sm sm:text-base lg:text-[17px] text-white/85 font-normal leading-relaxed max-w-2xl mb-10 text-balance">
            From iconic landmarks and charming neighborhoods to authentic French cuisine and hidden local gems, we create memorable Paris experiences designed around the way you want to travel.
          </p>
        </div>

        {/* Dual Call To Action Buttons */}
        <div className="relative top-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto mb-14">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-paris-charcoal font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-paris-gold-light active:scale-95 transition-all duration-200 shadow-xl cursor-pointer flex items-center justify-center gap-2.5"
          >
            <Compass className="w-4 h-4 text-paris-gold" />
            <span>Explore Paris</span>
          </button>

          <button
            onClick={onPlanTripClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/40 hover:border-white hover:bg-white/15 active:scale-95 transition-all duration-200 text-xs sm:text-sm uppercase tracking-wider font-semibold cursor-pointer flex items-center justify-center gap-2.5"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>Plan Your Trip</span>
          </button>
        </div>

        {/* Quick Social Proof & Trust Markers */}
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-10 pt-8 border-t border-white/15 text-center w-full max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-paris-gold fill-paris-gold" />
            </div>
            <div>
              <div className="text-base font-bold text-white tracking-tight">4.9 / 5 Rating</div>
              <div className="text-xs text-white/60">Over 3,800 Happy Guests</div>
            </div>
          </div>

          {/* <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-paris-gold" />
            </div>
            <div>
              <div className="text-base font-bold text-white tracking-tight">100% Tailored</div>
              <div className="text-xs text-white/60">Crafted to Your Travel Style</div>
            </div>
          </div> */}

          <div className="col-span-2 md:col-span-1 flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-paris-gold" />
            </div>
            <div>
              <div className="text-base font-bold text-white tracking-tight">Paris Born & Based</div>
              <div className="text-xs text-white/60">Local Insiders & Guides</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <button
        onClick={onExploreClick}
        aria-label="Scroll to experiences"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 p-2 text-white/60 hover:text-white transition-colors cursor-pointer animate-bounce"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
};
