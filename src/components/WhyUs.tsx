import React from 'react';
import {
  Compass,
  Sparkles,
  CalendarCheck,
  HeartHandshake,
  ShieldCheck,
  Quote,
} from 'lucide-react';
import { WHY_US_FEATURES } from '../data/parisData';

export const WhyUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'local-expertise': (
      <Compass className="w-7 h-7 text-paris-gold-dark" />
    ),
    'tailored-experiences': (
      <Sparkles className="w-7 h-7 text-paris-gold-dark" />
    ),
    'easy-planning': (
      <CalendarCheck className="w-7 h-7 text-paris-gold-dark" />
    ),
    'memorable-moments': (
      <HeartHandshake className="w-7 h-7 text-paris-gold-dark" />
    ),
  };

  return (
    <section
      id="why-us"
      className="py-24 sm:py-32 bg-transparent text-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-paris-warm border border-paris-stone text-paris-gold-dark text-sm uppercase tracking-[0.18em] font-medium mb-5">
            <ShieldCheck className="w-4 h-4" />
            <span>About Us</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-tight mb-5">
            Your Paris, Made Simple
          </h2>

          <div className="w-130 mx-auto rounded-2xl bg-black/2 backdrop-blur-sm px-3 py-2">
            <p className="font-sans text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto text-balance">
              Planning a trip should be exciting, not stressful. We help you
              experience Paris with carefully planned itineraries, memorable
              activities, and local insight.
            </p>
          </div>
        </div>

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {WHY_US_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group p-8 rounded-3xl bg-paris-warm border border-paris-stone hover:border-paris-gold/50 hover:bg-paris-cream transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
            >

              <div>

                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-white border border-paris-stone flex items-center justify-center mb-7 shadow-xs group-hover:scale-110 group-hover:border-paris-gold/40 transition-all duration-300">
                  {iconMap[feature.id]}
                </div>

                <h3 className="font-serif text-2xl sm:text-[27px] font-bold text-paris-charcoal mb-4 tracking-tight group-hover:text-paris-gold-dark transition-colors">
                  {feature.title}
                </h3>

                <p className="font-sans text-base text-paris-charcoal/75 leading-relaxed mb-5">
                  {feature.description}
                </p>

                <p className="font-sans text-sm text-paris-charcoal/60 leading-relaxed pt-4 border-t border-paris-stone">
                  {feature.details}
                </p>
              </div>

              {/* Stat Pill */}
              <div className="pt-7 mt-5">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-paris-gold-dark bg-[#F0EAE1]/70 px-3.5 py-1.5 rounded-full">
                  {feature.stat}
                </span>
              </div>

            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-tight leading-tight mb-8 text-center">
            What Our Guests Say
        </h2>

        {/* Guest Voices */}
        <div className="p-8 sm:p-12 rounded-3xl bg-paris-charcoal text-white relative overflow-hidden">

          <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none">
            <Quote className="w-36 h-36" />
          </div>

          <div className="relative z-10 grid md:grid-cols-3 gap-8">

            <div className="space-y-3">
              <div className="flex text-paris-gold text-base">
                ★★★★★
              </div>

              <p className="font-serif italic text-lg sm:text-xl text-white/90 leading-relaxed">
                &ldquo;Our twilight Seine boat tour and private Louvre morning
                were the highlight of our European honeymoon. Flawless
                planning.&rdquo;
              </p>

              <div className="text-sm text-white/60 pt-2">
                — Eleanor & Thomas W., New York
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex text-paris-gold text-base">
                ★★★★★
              </div>

              <p className="font-serif italic text-lg sm:text-xl text-white/90 leading-relaxed">
                &ldquo;Walking through Montmartre with our guide felt like
                discovering a secret village with a knowledgeable lifelong
                friend.&rdquo;
              </p>

              <div className="text-sm text-white/60 pt-2">
                — Marcus K., Sydney
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex text-paris-gold text-base">
                ★★★★★
              </div>

              <p className="font-serif italic text-lg sm:text-xl text-white/90 leading-relaxed">
                &ldquo;Traveling with three teenagers seemed daunting, but
                every bakery stop and museum skip was timed with
                perfection.&rdquo;
              </p>

              <div className="text-sm text-white/60 pt-2">
                — The Dupont-Aris Family, Toronto
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};