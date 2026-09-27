import React from 'react';
import { MapPin, Compass, ArrowRight, Coffee } from 'lucide-react';
import { Destination } from '../types';
import { DESTINATIONS_DATA } from '../data/parisData';

interface DestinationsProps {
  onSelectDestination: (destination: Destination) => void;
  onExploreAll: () => void;
}

export const Destinations: React.FC<DestinationsProps> = ({
  onSelectDestination,
  onExploreAll,
}) => {
  return (
    <section
      id="destinations"
      className="py-24 sm:py-32 bg-transparent text-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-paris-stone border border-[#E5DFC5] text-paris-gold-dark text-sm uppercase tracking-[0.18em] font-medium mb-5">
            <MapPin className="w-4 h-4" />
            <span>Quartiers & Neighborhoods</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-tight mb-5 text-balance">
            There&apos;s More to Paris Than the Eiffel Tower
          </h2>

          <p className="font-sans text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-6 text-balance">
            Paris is a city of neighborhoods, and every district has its own
            personality and story.
          </p>

          <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto text-balance">
            Walk through the artistic streets of Montmartre, explore the
            historic heart of Île de la Cité, enjoy the cafés of
            Saint-Germain-des-Prés, or take a relaxing stroll along the Seine.
            From grand landmarks to hidden streets filled with character,
            every corner offers something worth discovering.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {DESTINATIONS_DATA.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="group bg-paris-cream rounded-3xl overflow-hidden border border-paris-stone hover:border-paris-gold/50 transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
            >

              {/* Card Image */}
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

                {/* Arrondissement Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-paris-charcoal text-xs font-semibold tracking-wider uppercase shadow-xs">
                    {dest.arrondissement}
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">

                  <span className="text-xs uppercase tracking-widest text-paris-gold-light font-medium block mb-1">
                    {dest.atmosphere}
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {dest.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">

                <div>
                  <p className="font-sans text-base text-paris-charcoal/75 leading-relaxed mb-6">
                    {dest.shortDesc}
                  </p>


                </div>

                {/* Card Action */}
                <div className="flex items-center justify-between pt-5 border-t border-paris-stone text-sm font-semibold text-paris-charcoal group-hover:text-paris-gold-dark transition-colors">

                  <div className="flex items-center gap-2 text-paris-charcoal/60">
                    <Coffee className="w-4 h-4" />
                    <span>{dest.bestCafes[0]}</span>
                  </div>

                  <div className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    <span>View District Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Destinations CTA */}
        <div className="text-center">
          <button
            onClick={onExploreAll}
            className="px-9 py-4 rounded-full bg-paris-charcoal text-white hover:bg-paris-gold hover:text-paris-charcoal transition-all duration-300 text-sm sm:text-base font-semibold uppercase tracking-wider shadow-md hover:shadow-lg active:scale-95 cursor-pointer inline-flex items-center gap-3"
          >
            <Compass className="w-5 h-5 text-paris-gold" />
            <span>Explore Destinations</span>
          </button>
        </div>

      </div>
    </section>
  );
};