import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-paris-cream rounded-3xl p-6 sm:p-9 text-paris-charcoal shadow-2xl border border-paris-stone max-h-[85vh] overflow-y-auto font-sans">
        <button
          onClick={onClose}
          aria-label="Close legal modal"
          className="absolute top-5 right-5 p-2 rounded-full text-paris-charcoal/60 hover:text-paris-charcoal hover:bg-paris-stone transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-6 h-6 text-paris-gold-dark" />
              <h3 className="font-serif text-2xl font-bold text-paris-charcoal">
                Privacy Policy
              </h3>
            </div>
            <p className="text-xs text-paris-charcoal/60">Last updated: March 2026 · Compliant with EU GDPR Regulations</p>

            <div className="text-xs sm:text-sm text-paris-charcoal/80 space-y-3 leading-relaxed">
              <p>
                At Lumière Paris Voyages, we take the confidentiality and privacy of our discerning travelers with utmost seriousness. This policy outlines how we safeguard your personal information when inquiring, booking, or experiencing our bespoke travel services.
              </p>
              <h4 className="font-bold text-paris-charcoal text-sm pt-2">1. Data Collection & Purpose</h4>
              <p>
                We only gather personal details strictly necessary to design and execute your travel itinerary—including travel dates, preferences, dietary requirements, and direct contact details for concierge communication.
              </p>
              <h4 className="font-bold text-paris-charcoal text-sm pt-2">2. Secure Storage & Non-Disclosure</h4>
              <p>
                Your data is stored on encrypted European servers and is never sold, traded, or shared with third parties, except verified hospitality partners (e.g. licensed guides, private drivers, boutique hotels) directly involved in your trip.
              </p>
              <h4 className="font-bold text-paris-charcoal text-sm pt-2">3. Your Rights</h4>
              <p>
                Under European Union GDPR law, you maintain the right to inspect, correct, or request the total deletion of your personal data at any moment by contacting our Data Protection Officer at privacy@lumiereparis.com.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-6 h-6 text-paris-gold-dark" />
              <h3 className="font-serif text-2xl font-bold text-paris-charcoal">
                Terms &amp; Conditions
              </h3>
            </div>
            <p className="text-xs text-paris-charcoal/60">French Travel & Tourism Code · License IM075190042</p>

            <div className="text-xs sm:text-sm text-paris-charcoal/80 space-y-3 leading-relaxed">
              <p>
                Welcome to Lumière Paris Voyages SAS. By engaging our concierge and booking custom Paris experiences, you acknowledge and agree to the following conditions:
              </p>
              <h4 className="font-bold text-paris-charcoal text-sm pt-2">1. Bespoke Itinerary Proposals</h4>
              <p>
                All initial proposals and quotes are complimentary. Reservations for private guides, skip-the-line museum admissions, and private boat charters are confirmed upon deposit receipt.
              </p>
              <h4 className="font-bold text-paris-charcoal text-sm pt-2">2. Flexible Cancellation & Rescheduling</h4>
              <p>
                We understand travel plans evolve. Cancellations made more than 14 days before your scheduled experience receive a 100% refund or full credit transfer to future Paris dates without penalty.
              </p>
              <h4 className="font-bold text-paris-charcoal text-sm pt-2">3. Professional Liability & Guarantees</h4>
              <p>
                Lumière Paris is fully registered with Atout France and holds comprehensive professional liability insurance through Hiscox Europe, guaranteeing traveler safety and peace of mind.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-paris-stone text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-paris-charcoal text-white text-xs font-semibold uppercase tracking-wider hover:bg-paris-gold transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
