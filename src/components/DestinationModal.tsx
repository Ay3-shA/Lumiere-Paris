import React, { useState } from 'react';
import { X, MapPin, Coffee, Compass, ArrowRight, Sparkles, Check } from 'lucide-react';
import { Destination } from '../types';
import { DESTINATIONS_DATA } from '../data/parisData';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onSelectDestination: (dest: Destination) => void;
  onPlanNeighborhoodTrip: (neighborhoodId: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onSelectDestination,
  onPlanNeighborhoodTrip,
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#FDFBF7] rounded-3xl p-6 sm:p-9 text-[#1A1A1A] shadow-2xl border border-[#EFEAE1] max-h-[90vh] overflow-y-auto font-sans">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close district guide"
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Header Image */}
        <div className="relative -mx-6 sm:-mx-9 -mt-6 sm:-mt-9 h-64 sm:h-80 overflow-hidden mb-6">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-black/30 to-black/50" />

          <div className="absolute bottom-4 left-6 sm:left-9 right-6 sm:right-9">
            <span className="px-3 py-1 rounded-full bg-white/90 text-[#1A1A1A] text-[10px] uppercase font-bold tracking-wider inline-block mb-2">
              {destination.arrondissement}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">
              {destination.name}
            </h3>
            <p className="text-xs text-[#9E7D52] font-semibold uppercase tracking-wider">
              {destination.atmosphere}
            </p>
          </div>
        </div>

        {/* District Selector Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 border-b border-[#EFEAE1]">
          {DESTINATIONS_DATA.map((d) => (
            <button
              key={d.id}
              onClick={() => onSelectDestination(d)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                d.id === destination.id
                  ? 'bg-[#1A1A1A] text-white'
                  : 'bg-[#F7F4EE] text-[#1A1A1A]/70 hover:bg-[#EFEAE1]'
              }`}
            >
              {d.name}
            </button>
          ))}
        </div>

        {/* Long Narrative Description */}
        <div className="space-y-4 mb-6">
          <h4 className="font-serif text-xl font-bold text-[#1A1A1A]">
            Quartier Story &amp; Atmosphere
          </h4>
          <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
            {destination.longDesc}
          </p>
        </div>

        {/* Two-Column Grid: Highlights & Favorite Cafes */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {/* Highlights */}
          <div className="p-5 rounded-2xl bg-[#F7F4EE] border border-[#EFEAE1]">
            <h5 className="text-xs uppercase tracking-wider font-bold text-[#9E7D52] mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Must-Visit Landmarks</span>
            </h5>
            <div className="space-y-2">
              {destination.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#1A1A1A]/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Best Cafes & Bistros */}
          <div className="p-5 rounded-2xl bg-[#F7F4EE] border border-[#EFEAE1]">
            <h5 className="text-xs uppercase tracking-wider font-bold text-[#9E7D52] mb-3 flex items-center gap-1.5">
              <Coffee className="w-3.5 h-3.5" />
              <span>Beloved Cafés &amp; Bistros</span>
            </h5>
            <div className="space-y-2">
              {destination.bestCafes.map((c, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#1A1A1A]/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A6B82] shrink-0" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-[#EFEAE1] text-[11px] text-[#1A1A1A]/60">
              Recommended walking exploration: <strong>{destination.walkingTime}</strong>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#EFEAE1]">
          <div>
            <span className="text-[11px] text-[#1A1A1A]/60 block">Want to explore {destination.name} with a private local guide?</span>
            <span className="text-xs font-semibold text-[#1A1A1A]">Included in all customized Lumière Paris itineraries</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onPlanNeighborhoodTrip(destination.id);
            }}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#1A1A1A] text-white hover:bg-[#C5A880] hover:text-[#1A1A1A] transition-colors text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
          >
            <Compass className="w-4 h-4" />
            <span>Include in My Trip Plan</span>
          </button>
        </div>
      </div>
    </div>
  );
};
