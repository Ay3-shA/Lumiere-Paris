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

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7F4EE] border border-[#EFEAE1] text-[#9E7D52] text-sm uppercase tracking-[0.18em] font-medium mb-5">
            <Sparkles className="w-4 h-4" />
            <span>Curated Activities</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-bold text-white tracking-tight leading-tight mb-5">
            Experiences You&apos;ll Love
          </h2>

          <p className="font-sans text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto text-balance">
            Discover Paris through experiences created for curious travelers,
            first-time visitors, couples, families, and explorers.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-9">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'bg-[#F7F4EE] text-[#1A1A1A]/70 hover:text-[#1A1A1A] hover:bg-[#EFEAE1]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((experience, index) => {
            return (
              <div
                key={experience.id}
                className={`group bg-[#F7F4EE] rounded-3xl overflow-hidden border border-[#EFEAE1] hover:border-[#C5A880]/40 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 ${
                  index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >

                {/* Image Container */}
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? 'h-72 sm:h-96' : 'h-64 sm:h-72'
                  }`}
                >
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  {/* Category */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#1A1A1A] text-xs font-semibold tracking-wider uppercase shadow-xs">
                      {experience.category}
                    </span>
                  </div>

                  {/* Duration / Rating */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white text-sm">
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <Clock className="w-4 h-4 text-[#E8D8C3]" />
                      <span>{experience.duration}</span>
                    </div>

                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <Star className="w-4 h-4 text-[#C5A880] fill-[#C5A880]" />
                      <span>4.9</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                  <div>

                    <h3 className="font-serif text-2xl sm:text-[29px] font-bold text-[#1A1A1A] mb-3 tracking-tight group-hover:text-[#9E7D52] transition-colors">
                      {experience.title}
                    </h3>

                    <p className="text-sm uppercase tracking-wider text-[#9E7D52] font-semibold mb-4">
                      {experience.tagline}
                    </p>

                    <p className="font-sans text-base text-[#1A1A1A]/75 leading-relaxed mb-7">
                      {experience.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-7 pt-4 border-t border-[#EFEAE1]">
                      {experience.highlights.slice(0, 2).map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2.5 text-sm text-[#1A1A1A]/70"
                        >
                          <span className="text-[#C5A880] font-bold text-base">
                            •
                          </span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between pt-5 border-t border-[#EFEAE1]">
                    <div>
                      <span className="text-xs text-[#1A1A1A]/50 block mb-1">
                        Pricing
                      </span>
                      <span className="text-sm font-semibold text-[#1A1A1A]">
                        {experience.priceEstimate}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectExperience(experience)}
                      className="px-5 py-3 rounded-full bg-[#1A1A1A] text-white hover:bg-[#C5A880] hover:text-[#1A1A1A] transition-all duration-200 text-sm font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-xs active:scale-95"
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
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#F0F4F8] border border-[#D5E1EA] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">

          <div>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2">
              Looking for a custom combination of experiences?
            </h4>

            <p className="text-base text-[#4A6B82] max-w-xl leading-relaxed">
              Tell our Parisian concierges what inspires you, and we’ll weave
              these into a seamless, day-by-day bespoke journey.
            </p>
          </div>

          <button
            onClick={onPlanTripClick}
            className="px-7 py-4 rounded-full bg-[#4A6B82] text-white hover:bg-[#385265] transition-colors text-sm font-semibold uppercase tracking-wider shrink-0 cursor-pointer shadow-sm"
          >
            Build Custom Itinerary
          </button>
        </div>

      </div>
    </section>
  );
};