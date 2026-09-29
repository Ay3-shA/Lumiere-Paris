import React, { useState } from 'react';
import { X, Calendar, Users, MapPin, Sparkles, CheckCircle2, ArrowRight, Compass } from 'lucide-react';
import { EXPERIENCES_DATA, DESTINATIONS_DATA } from '../data/parisData';

interface TripPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedExperienceId?: string;
  preselectedDestinationId?: string;
}

export const TripPlannerModal: React.FC<TripPlannerModalProps> = ({
  isOpen,
  onClose,
  preselectedExperienceId,
  preselectedDestinationId,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [travelDates, setTravelDates] = useState('');
  const [duration, setDuration] = useState('');
  const [partySize, setPartySize] = useState('');
  const [travelStyle, setTravelStyle] = useState<string[]>([]);
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<string[]>([]);
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
  const [budgetTier, setBudgetTier] = useState<'comfort' | 'premium' | 'luxury' | ''>('');

  // Contact State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  const toggleStyle = (style: string) => {
    setTravelStyle(prev =>
      prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]
    );
  };

  const toggleNeighborhood = (id: string) => {
    setSelectedNeighborhoods(prev =>
      prev.includes(id) ? prev.filter(n => n !== id) : [...prev, id]
    );
  };

  const toggleExperience = (id: string) => {
    setSelectedExperiences(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }

    if (!email.trim()) {
      setFormError('Please enter your email address.');
      return;
    }

    setFormError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  const travelStylesList = [
    'First-Time Visitor',
    'Romantic & Scenic',
    'Art & Cultural Deep-Dive',
    'Gastronomy & Wine',
    'Family Adventure',
    'Hidden & Secret Paris',
    'Luxury & Haute Couture',
    'Slow Leisurely Pace',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-paris-cream rounded-3xl p-6 sm:p-10 text-paris-charcoal shadow-2xl border border-paris-stone max-h-[90vh] overflow-y-auto font-sans">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close trip planner"
          className="absolute top-5 right-5 p-2 rounded-full text-paris-charcoal/60 hover:text-paris-charcoal hover:bg-paris-stone transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-paris-warm border border-paris-stone text-paris-gold-dark text-[11px] uppercase tracking-widest font-semibold mb-2">
                <Sparkles className="w-3 h-3" />
                <span>Plan Your Trip</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-paris-charcoal">
                Design Your Paris Journey
              </h3>
              <p className="text-xs sm:text-sm text-paris-charcoal/70 mt-1">
                Tell us your travel desires, and our Parisian concierges will curate a custom daily itinerary.
              </p>
            </div>

            {/* Stepper indicators */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-paris-stone">
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${step >= 1 ? 'bg-paris-charcoal text-white' : 'bg-paris-stone text-paris-charcoal/60'}`}>1</span>
                <span className="text-xs font-medium hidden sm:inline">Preferences</span>
              </div>
              <div className="h-0.5 w-8 bg-paris-stone" />
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${step >= 2 ? 'bg-paris-charcoal text-white' : 'bg-paris-stone text-paris-charcoal/60'}`}>2</span>
                <span className="text-xs font-medium hidden sm:inline">Experiences & Quartiers</span>
              </div>
              <div className="h-0.5 w-8 bg-paris-stone" />
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${step >= 3 ? 'bg-paris-charcoal text-white' : 'bg-paris-stone text-paris-charcoal/60'}`}>3</span>
                <span className="text-xs font-medium hidden sm:inline">Concierge Review</span>
              </div>
            </div>

            {/* Step 1: Dates & Styles */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-paris-charcoal/80 mb-2">
                      Estimated Travel Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-paris-charcoal/40" />
                      <input
                        type="date"
                        value={travelDates}
                        onChange={(e) => setTravelDates(e.target.value)}
                        className="w-full bg-paris-warm border border-paris-stone rounded-xl py-2.5 pl-10 pr-3 text-sm text-paris-charcoal focus:outline-none focus:border-paris-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-paris-charcoal/80 mb-2">
                      Trip Duration
                    </label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full bg-paris-warm border border-paris-stone rounded-xl py-2.5 px-3.5 text-sm text-paris-charcoal focus:outline-none focus:border-paris-gold"
                    >
                      <option value="2-3 Days">2–3 Days (Weekend Getaway)</option>
                      <option value="4-5 Days">4–5 Days (Classic Paris)</option>
                      <option value="6-7 Days">6–7 Days (Full Immersive Paris)</option>
                      <option value="8+ Days">8+ Days (Paris & Versailles / Champagne)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-paris-charcoal/80 mb-2">
                    Party / Travelers
                  </label>
                  <select
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                    className="w-full bg-paris-warm border border-paris-stone rounded-xl py-2.5 px-3.5 text-sm text-paris-charcoal focus:outline-none focus:border-paris-gold"
                  >
                    <option value="Solo Traveler">Solo Traveler</option>
                    <option value="Couple (2 Adults)">Couple / Romantic (2 Guests)</option>
                    <option value="Family with Children">Family with Children</option>
                    <option value="Small Group of Friends (3-6)">Small Group of Friends (3-6 Guests)</option>
                    <option value="Private VIP Delegation">Private Delegation / Corporate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-paris-charcoal/80 mb-2">
                    What Inspires You? (Select multiple)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {travelStylesList.map((style) => (
                      <button
                        key={style}
                        type="button"
                        onClick={() => toggleStyle(style)}
                        className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all ${
                          travelStyle.includes(style)
                            ? 'bg-paris-charcoal text-white border-paris-charcoal shadow-xs'
                            : 'bg-paris-warm text-paris-charcoal/80 border-paris-stone hover:border-paris-gold/50'
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-full bg-paris-charcoal text-white font-semibold text-xs uppercase tracking-wider hover:bg-paris-gold hover:text-paris-charcoal transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>Next: Choose Highlights</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Experiences & Quartiers */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-paris-charcoal/80 mb-2">
                    Select Preferred Experiences
                  </label>
                  <div className="space-y-2">
                    {EXPERIENCES_DATA.map((exp) => (
                      <div
                        key={exp.id}
                        onClick={() => toggleExperience(exp.id)}
                        className={`p-3 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                          selectedExperiences.includes(exp.id)
                            ? 'bg-paris-charcoal text-white border-paris-charcoal'
                            : 'bg-paris-warm text-paris-charcoal border-paris-stone hover:border-paris-gold'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={exp.image}
                            alt=""
                            className="w-12 h-12 rounded-xl object-cover"
                          />
                          <div>
                            <div className="text-sm font-bold">{exp.title}</div>
                            <div className={`text-xs ${selectedExperiences.includes(exp.id) ? 'text-white/70' : 'text-paris-charcoal/60'}`}>
                              {exp.duration} · {exp.category}
                            </div>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={selectedExperiences.includes(exp.id)}
                          onChange={() => {}}
                          className="w-4 h-4 rounded text-paris-gold"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-paris-charcoal/80 mb-2">
                    Which Neighborhoods Draw Your Curiosity?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {DESTINATIONS_DATA.map((dest) => (
                      <button
                        key={dest.id}
                        type="button"
                        onClick={() => toggleNeighborhood(dest.id)}
                        className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                          selectedNeighborhoods.includes(dest.id)
                            ? 'bg-paris-charcoal text-white border-paris-charcoal'
                            : 'bg-paris-warm text-paris-charcoal border-paris-stone hover:border-paris-gold'
                        }`}
                      >
                        <div>{dest.name}</div>
                        <div className={`text-[10px] ${selectedNeighborhoods.includes(dest.id) ? 'text-white/70' : 'text-paris-charcoal/50'}`}>
                          {dest.arrondissement}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs font-semibold uppercase tracking-wider text-paris-charcoal/70 hover:text-paris-charcoal"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-6 py-3 rounded-full bg-paris-charcoal text-white font-semibold text-xs uppercase tracking-wider hover:bg-paris-gold hover:text-paris-charcoal transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>Next: Concierge Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Traveler Info & Final Submit */}
            {step === 3 && (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="p-4 rounded-2xl bg-paris-blue-light border border-[#D5E1EA] text-xs text-paris-charcoal space-y-1">
                  <div className="font-bold text-paris-blue uppercase tracking-wider">Itinerary Summary:</div>
                  <div>Duration: <strong>{duration}</strong></div>
                  <div>Selected Experiences: <strong>{selectedExperiences.length} chosen</strong></div>
                  <div>Quartiers of Interest: <strong>{selectedNeighborhoods.length} neighborhoods</strong></div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-paris-charcoal/80 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Charlotte & James Sinclair"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-paris-warm border border-paris-stone rounded-xl py-2.5 px-3.5 text-sm text-paris-charcoal focus:outline-none focus:border-paris-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-paris-charcoal/80 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. charlotte@sinclair.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-paris-warm border border-paris-stone rounded-xl py-2.5 px-3.5 text-sm text-paris-charcoal focus:outline-none focus:border-paris-gold"
                  />
                </div>

                {formError && (
                  <div className="rounded-xl bg-paris-warm border border-paris-gold/50 px-4 py-3 text-sm text-paris-gold-dark">
                    {formError}
                  </div>
                )}

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-paris-charcoal/80 mb-1">
                    Special Wishes or Requirements (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Dietary preferences, special anniversary surprise, mobility considerations, favorite wine regions..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-paris-warm border border-paris-stone rounded-xl py-2 px-3 text-sm text-paris-charcoal focus:outline-none focus:border-paris-gold"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs font-semibold uppercase tracking-wider text-paris-charcoal/70 hover:text-paris-charcoal"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-paris-charcoal text-white font-semibold text-xs uppercase tracking-wider hover:bg-paris-gold hover:text-paris-charcoal transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <CheckCircle2 className="w-4 h-4 text-paris-gold" />
                    <span>Submit Itinerary Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#F0EAE1] flex items-center justify-center text-paris-gold-dark">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-paris-charcoal">
              Merci Beaucoup, {fullName || 'Traveler'}!
            </h3>
            <p className="text-sm text-paris-charcoal/80 max-w-md mx-auto leading-relaxed">
              We have received your custom Paris journey request for <span className="font-semibold text-paris-charcoal">{duration}</span>. Our Parisian travel designer will review your selected experiences and email your tailored itinerary proposal to <span className="font-semibold text-paris-charcoal">{email}</span> within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-paris-charcoal text-white text-xs font-semibold uppercase tracking-wider hover:bg-paris-gold transition-colors"
              >
                Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
