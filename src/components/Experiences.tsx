
import React, { useState } from 'react';
import { Clock, ArrowRight, Sparkles, Star } from 'lucide-react';
import { Experience } from '../types';
import { EXPERIENCES_DATA } from '../data/parisData';

interface ExperiencesProps {
  onSelectExperience: (experience: Experience) => void;
  onPlanTripClick: () => void;
}

export const Experiences: React.FC<ExperiencesProps> = ({
  onSelectExperience,
  onPlanTripClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Essential Heritage',
    'Romance & Evening',
    'Masterpieces & History',
    'Gastronomy & Terroir',
    'Off the Beaten Path',
  ];

  const filtered =
    selectedCategory === 'All'
      ? EXPERIENCES_DATA
      : EXPERIENCES_DATA.filter(
          (exp) => exp.category === selectedCategory
        );

  return (
    <section
      id="experiences"
      className="py-24 sm:py-32 bg-transparent text-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-paris-warm border border-paris-stone text-paris-gold-dark text-sm uppercase tracking-[0.18em] font-medium mb-5">
            <Sparkles className="w-4 h-4" />
            <span>Experiences</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-bold text-white tracking-tight leading-tight mb-5">
            Experiences You&apos;ll Love
          </h2>

          <div className="w-150 mx-auto rounded-2xl bg-white/2 backdrop-blur-sm px-3 py-2">
            <p className="font-sans text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto text-balance">
              Discover Paris through experiences created for curious travelers,
              first-time visitors, couples, families, and explorers.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-9">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-paris-charcoal text-white shadow-sm'
                    : 'bg-paris-warm text-paris-charcoal/70 hover:text-paris-charcoal hover:bg-paris-stone'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((experience) => {
            return (
              <div
                key={experience.id}
                className="group bg-paris-warm rounded-3xl overflow-hidden border border-paris-stone hover:border-paris-gold/40 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1"
              >

                {/* Image Container */}
                <div className="relative overflow-hidden h-64 sm:h-72">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />

                  {/* Category */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-paris-charcoal text-xs font-semibold tracking-wider uppercase shadow-xs">
                      {experience.category}
                    </span>
                  </div>

                  {/* Duration / Rating */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white text-sm">
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <Clock className="w-4 h-4 text-paris-gold-light" />
                      <span>{experience.duration}</span>
                    </div>

                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <Star className="w-4 h-4 text-paris-gold fill-paris-gold" />
                      <span>4.9</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                  <div>

                    <h3 className="font-serif text-2xl sm:text-[29px] font-bold text-paris-charcoal mb-3 tracking-tight group-hover:text-paris-gold-dark transition-colors">
                      {experience.title}
                    </h3>

                    <p className="text-sm uppercase tracking-wider text-paris-gold-dark font-semibold mb-4">
                      {experience.tagline}
                    </p>
                    

                  </div>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between pt-5 border-t border-paris-stone">
                    <div>
                      <span className="text-xs text-paris-charcoal/50 block mb-1">
                        Pricing
                      </span>
                      <span className="text-sm font-semibold text-paris-charcoal">
                        {experience.priceEstimate}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectExperience(experience)}
                      className="px-5 py-3 rounded-full bg-paris-charcoal text-white hover:bg-paris-gold hover:text-paris-charcoal transition-all duration-200 text-sm font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-xs active:scale-95"
                    >
                      <span>Discover More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-paris-blue-light border border-[#D5E1EA] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">

          <div>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-paris-charcoal mb-2">
              Looking for a custom combination of experiences?
            </h4>

            <p className="text-base text-paris-blue max-w-xl leading-relaxed">
              Tell our Parisian concierges what inspires you, and we’ll weave
              these into a seamless, day-by-day bespoke journey.
            </p>
          </div>

          <button
            onClick={onPlanTripClick}
            className="px-7 py-4 rounded-full bg-paris-blue text-white hover:bg-[#385265] transition-colors text-sm font-semibold uppercase tracking-wider shrink-0 cursor-pointer shadow-sm"
          >
            Build Custom Itinerary
          </button>
        </div>

      </div>
    </section>
  );
};