import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import { CONTACT_CARDS } from '../data/parisData';

interface ContactProps {
  onPlanTripClick?: () => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const [parisTime, setParisTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      };
      setParisTime(new Intl.DateTimeFormat('fr-FR', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-transparent text-white py-24 sm:py-32"
    >

      {/* 2. MINIMALIST CONTENT (Zero Form, Low Noise) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-paris-stone border border-[#E5DFC5] text-paris-gold-dark text-sm uppercase tracking-[0.18em] font-medium mb-5">
          <Sparkles className="w-4 h-4" />
          <span>CONTACT</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4 text-balance">
          Connect With Our Paris Concierge
        </h2>

        {/* Subtitle */}
        <div className="relative w-fit mx-auto">
          <div className="relative top-6 w-130 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm px-3 py-2">

            <p className="relative font-sans text-base sm:text-lg lg:text-xl text-white leading-relaxed max-w-2xl mx-auto text-balance">
              Direct, discreet, and personal travel curation for your Parisian journey. Reach us directly across time zones.
            </p>
          </div>
        </div>

        {/* Live Paris Status Pill */}
        <div className="relative top-13 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-xs text-white/90 mb-12">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold">{parisTime ? `${parisTime} CET` : 'Paris Time'}</span>
          <span className="text-white/30">•</span>
          <span className="text-[#E8D8C3]">Atelier Desks Active</span>
        </div>

        {/* Contact Cards */}
        <div className="relative top-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {CONTACT_CARDS.map((card) => (
            <a
              key={card.id}
              href={card.href}
              target={card.id === 'salon' ? '_blank' : undefined}
              rel={card.id === 'salon' ? 'noopener noreferrer' : undefined}
              className="group p-8 rounded-3xl bg-[#F7F4EE] border border-[#EFEAE1] hover:border-[#C5A880]/50 hover:bg-[#FDFBF7] transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between text-left"
            >
              <div>

                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-white border border-[#EFEAE1] flex items-center justify-center mb-7 shadow-xs text-[#9E7D52] group-hover:scale-110 group-hover:border-[#C5A880]/40 transition-all duration-300">
                  <card.icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-[27px] font-bold text-[#1A1A1A] mb-4 tracking-tight group-hover:text-[#9E7D52] transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-base text-[#1A1A1A]/75 leading-relaxed mb-5">
                  {card.description}
                </p>

                {/* Details */}
                <p className="font-sans text-sm text-[#1A1A1A]/60 leading-relaxed pt-4 border-t border-[#EFEAE1]">
                  {card.details}
                </p>
              </div>

              {/* Contact Stat */}
              <div className="pt-7 mt-5">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#9E7D52] bg-[#F0EAE1]/70 px-3.5 py-1.5 rounded-full">
                  {card.stat}
                </span>
              </div>

            </a>
          ))}
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