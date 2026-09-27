import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, CheckCircle2, Clock, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Trip Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-paris-cream rounded-3xl p-6 sm:p-9 text-paris-charcoal shadow-2xl border border-paris-stone max-h-[90vh] overflow-y-auto font-sans">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close contact modal"
          className="absolute top-5 right-5 p-2 rounded-full text-paris-charcoal/60 hover:text-paris-charcoal hover:bg-paris-stone transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-widest text-paris-gold-dark font-semibold">
                Direct Parisian Concierge
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-paris-charcoal mt-1">
                Contact Lumière Paris
              </h3>
              <p className="text-xs sm:text-sm text-paris-charcoal/70 mt-1">
                Speak directly with our local travel designers to begin planning your bespoke journey.
              </p>
            </div>

            {/* Quick Contact Info Cards */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-2xl bg-paris-warm border border-paris-stone">
                <div className="flex items-center gap-2 text-xs font-bold text-paris-charcoal mb-1">
                  <Phone className="w-3.5 h-3.5 text-paris-gold-dark" />
                  <span>Telephone</span>
                </div>
                <div className="text-xs text-paris-charcoal/70">+33 (0)1 42 68 50 00</div>
                <div className="text-[10px] text-paris-charcoal/50">9 AM – 7 PM CET (Mon–Sat)</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-paris-warm border border-paris-stone">
                <div className="flex items-center gap-2 text-xs font-bold text-paris-charcoal mb-1">
                  <MapPin className="w-3.5 h-3.5 text-paris-gold-dark" />
                  <span>Office Address</span>
                </div>
                <div className="text-xs text-paris-charcoal/70">14 Place Vendôme</div>
                <div className="text-[10px] text-paris-charcoal/50">75001 Paris, France</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-paris-charcoal/80 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vivienne & Paul Laurent"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-paris-warm border border-paris-stone rounded-xl py-2.5 px-3.5 text-sm text-paris-charcoal focus:outline-none focus:border-paris-gold"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-paris-charcoal/80 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. vivienne@laurent.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-paris-warm border border-paris-stone rounded-xl py-2.5 px-3.5 text-sm text-paris-charcoal focus:outline-none focus:border-paris-gold"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-paris-charcoal/80 mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-paris-warm border border-paris-stone rounded-xl py-2.5 px-3.5 text-sm text-paris-charcoal focus:outline-none focus:border-paris-gold"
                >
                  <option value="Trip Inquiry">Custom Paris Itinerary Inquiry</option>
                  <option value="Private Tour">Private Guided Tour Questions</option>
                  <option value="Special Celebration">Honeymoon or Anniversary Planning</option>
                  <option value="VIP Access">Private Museum or Dining Reservations</option>
                  <option value="Other">General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-paris-charcoal/80 mb-1">
                  How May We Help You? *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about your upcoming travel dates, party size, or questions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-paris-warm border border-paris-stone rounded-xl py-2 px-3 text-sm text-paris-charcoal focus:outline-none focus:border-paris-gold"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-paris-charcoal text-white font-semibold text-xs uppercase tracking-wider hover:bg-paris-gold hover:text-paris-charcoal transition-colors shadow-sm"
                >
                  Send Message to Concierge
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#F0EAE1] flex items-center justify-center text-paris-gold-dark">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-paris-charcoal">
              Message Received
            </h3>
            <p className="text-sm text-paris-charcoal/80 max-w-md mx-auto leading-relaxed">
              Merci, <span className="font-semibold text-paris-charcoal">{name || 'Guest'}</span>. Our Paris concierge team has received your inquiry regarding <span className="font-semibold text-paris-charcoal">{subject}</span>. We will respond to <span className="font-semibold text-paris-charcoal">{email}</span> within 2 hours during European business hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-paris-charcoal text-white text-xs font-semibold uppercase tracking-wider hover:bg-paris-gold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
