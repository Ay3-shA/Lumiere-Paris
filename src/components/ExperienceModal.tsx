import React from 'react';
import { X, Clock, Users, Check, Calendar, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceModalProps {
  experience: Experience | null;
  onClose: () => void;
  onBookExperience: (experienceId: string) => void;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({
  experience,
  onClose,
  onBookExperience,
}) => {
  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-3xl p-6 sm:p-9 text-[#1A1A1A] shadow-2xl border border-[#EFEAE1] max-h-[90vh] overflow-y-auto font-sans">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Header Image */}
        <div className="relative -mx-6 sm:-mx-9 -mt-6 sm:-mt-9 h-64 sm:h-72 overflow-hidden mb-6">
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-paris-cream via-black/30 to-black/50" />

          <div className="absolute bottom-4 left-6 sm:left-9 right-6 sm:right-9">
            <span className="px-3 py-1 rounded-full bg-white/90 text-paris-charcoal text-[10px] uppercase font-bold tracking-wider inline-block mb-2">
              {experience.category}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-paris-charcoal tracking-tight">
              {experience.title}
            </h3>
          </div>
        </div>

        {/* Details Meta */}
        <div className="flex flex-wrap items-center gap-4 py-3 border-y border-paris-stone text-xs text-paris-charcoal/70 mb-6">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-paris-gold-dark" />
            <span>Duration: <strong>{experience.duration}</strong></span>
          </div>
          <div>•</div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-paris-gold-dark" />
            <span>Group Size: <strong>{experience.groupSize}</strong></span>
          </div>
          <div>•</div>
          <div>Estimated: <strong className="text-paris-charcoal">{experience.priceEstimate}</strong></div>
        </div>

        {/* Full Details Description */}
        <div className="space-y-4 mb-6">
          <h4 className="font-serif text-xl font-bold text-paris-charcoal">
            About This Experience
          </h4>
          <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
            {experience.fullDetails}
          </p>
        </div>

        {/* Highlights */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs uppercase tracking-wider font-bold text-[#9E7D52]">
            Key Highlights
          </h4>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {experience.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-[#1A1A1A]/80 bg-[#F7F4EE] p-3 rounded-xl border border-[#EFEAE1]">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Inclusions */}
        <div className="space-y-3 mb-8">
          <h4 className="text-xs uppercase tracking-wider font-bold text-[#9E7D52]">
            What&apos;s Included
          </h4>
          <div className="space-y-2">
            {experience.inclusions.map((inc, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-[#1A1A1A]/80">
                <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>{inc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#EFEAE1]">
          <div>
            <span className="text-[11px] text-[#1A1A1A]/60 block">Ready to experience this?</span>
            <span className="text-xs font-semibold text-[#1A1A1A]">Can be combined with other Parisian highlights</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookExperience(experience.id);
            }}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#1A1A1A] text-white hover:bg-[#C5A880] hover:text-[#1A1A1A] transition-colors text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Add to Custom Trip</span>
          </button>
        </div>
      </div>
    </div>
  );
};
