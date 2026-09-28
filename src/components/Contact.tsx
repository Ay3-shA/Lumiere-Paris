import React, { useState, useEffect } from 'react';
import {
  Phone,
  MapPin,
  MessageSquare,
  Check,
  Navigation,
  Coffee,
  Building,
  ArrowRight
} from 'lucide-react';

interface ContactProps {
  onPlanTripClick: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onPlanTripClick }) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [selectedConsultationHotel, setSelectedConsultationHotel] = useState<string>('The Ritz Paris');
  const [consultationRequested, setConsultationRequested] = useState(false);
  const [parisTime, setParisTime] = useState<string>('');

  // Live Paris Time (CET/CEST)
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

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleRequestConsultation = () => {
    setConsultationRequested(true);
    setTimeout(() => setConsultationRequested(false), 5000);
  };

  const curators = [
    {
      name: 'Éléonore de Saint-Clair',
      title: 'Head of Private Journeys & VIP Access',
      expertise: 'Palace Hotel Stays, Private Louvre & Versailles Fast-Track',
      languages: 'French, English, Italian',
      email: 'eleonore@lumiereparis.com',
    },
    {
      name: 'Jean-Baptiste Moreau',
      title: 'Chief Sommelier & Gastronomy Director',
      expertise: 'Michelin Table Curation, Private Champagne Caves, Terroir Tastings',
      languages: 'French, English',
      email: 'jb.moreau@lumiereparis.com',
    },
    {
      name: 'Camille Laurent',
      title: 'Cultural Historian & Neighborhood Curator',
      expertise: 'Hidden Covered Passages, Left Bank Literary Salons, Artist Studios',
      languages: 'French, English, Spanish',
      email: 'camille@lumiereparis.com',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-transparent text-white relative overflow-hidden"
    >
      {/* Background Architectural Watermark */}
      <div
        aria-hidden="true"
        className="absolute top-12 right-0 -mr-20 pointer-events-none opacity-[0.03] select-none text-[320px] font-serif leading-none text-white"
      >
        Paris
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* ========================================================================= */}
        {/* 1. SECTION HEADER */}
        {/* ========================================================================= */}

        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">

          <p className="text-paris-gold-light text-sm uppercase tracking-[0.18em] font-medium mb-5">
            Contact
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-tight mb-5 text-balance">
            Ready to Experience Paris?
          </h2>

          <p className="font-sans text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto text-balance">
            Your Paris adventure starts here. Choose your experiences, build your itinerary, and get ready to discover one of the world's most captivating cities.
          </p>

          {/* Live Paris Clock & Atelier Status Pill */}
          <div className="inline-flex items-center gap-2 mt-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

            <span className="font-semibold">
              {parisTime ? `${parisTime} CET` : '09:30 CET'} Paris Time
            </span>

            <span className="text-white/30">|</span>

            <span className="text-paris-gold-light font-medium">
              Place Vendôme Salon Open &amp; Direct Desks Active
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. DIRECT COMMUNICATION CHANNELS (ZERO FORMS) */}
        {/* ========================================================================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

          {/* Card 1: Direct Phone */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#FDFBF7] border border-[#EFEAE1] shadow-xs hover:shadow-xl hover:border-[#C5A880]/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F7F4EE] border border-[#EFEAE1] flex items-center justify-center text-[#9E7D52] mb-5 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>

              <span className="text-xs uppercase tracking-wider text-[#9E7D52] font-semibold block mb-2">
                Telephone &amp; Direct Desk
              </span>

              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] tracking-tight mb-3">
                Paris Head Office
              </h3>

              <p className="font-sans text-sm text-[#1A1A1A]/75 leading-relaxed mb-5">
                Speak directly with an accredited Parisian travel designer for live availability and reservations.
              </p>

              <div className="text-sm font-bold text-[#1A1A1A] font-mono tracking-tight mb-1">
                +33 (0)1 42 68 50 00
              </div>

              <div className="text-xs text-[#1A1A1A]/50 mb-6">
                US/Canada Toll-Free: +1 (800) 849-PARIS
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-[#EFEAE1]">
              <a
                href="tel:+33142685000"
                className="w-full py-3 px-4 rounded-full bg-[#1A1A1A] text-white hover:bg-[#C5A880] hover:text-[#1A1A1A] transition-colors text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Concierge Now</span>
              </a>

              <button
                onClick={() => copyToClipboard('+33 1 42 68 50 00', 'phone')}
                className="w-full py-1.5 text-xs text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors cursor-pointer text-center"
              >
                {copiedItem === 'phone' ? '✓ Copied Number' : 'Copy Telephone Number'}
              </button>
            </div>
          </div>

          {/* Card 2: Direct WhatsApp Concierge */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#FDFBF7] border border-[#EFEAE1] shadow-xs hover:shadow-xl hover:border-[#C5A880]/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-5 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>

              <span className="text-xs uppercase tracking-wider text-emerald-700 font-semibold block mb-2">
                Instant Messaging
              </span>

              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] tracking-tight mb-3">
                WhatsApp VIP Concierge
              </h3>

              <p className="font-sans text-sm text-[#1A1A1A]/75 leading-relaxed mb-5">
                Chat in real time with our on-the-ground Paris liaisons for quick questions, photos, and instant bookings.
              </p>

              <div className="text-sm font-bold text-[#1A1A1A] font-mono tracking-tight mb-1">
                +33 6 12 34 56 78
              </div>

              <div className="text-xs text-emerald-700/80 mb-6 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Average reply: Under 15 minutes</span>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-[#EFEAE1]">
              <a
                href="https://wa.me/33612345678?text=Bonjour%20Lumiere%20Paris,%20I%20would%20like%20to%20inquire%20about%20a%20curated%20Parisian%20journey."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => copyToClipboard('+33 6 12 34 56 78', 'whatsapp')}
                className="w-full py-1.5 text-xs text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors cursor-pointer text-center"
              >
                {copiedItem === 'whatsapp' ? '✓ Copied WhatsApp' : 'Copy WhatsApp Number'}
              </button>
            </div>
          </div>

          {/* Card 3: Place Vendôme Private Salon */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#FDFBF7] border border-[#EFEAE1] shadow-xs hover:shadow-xl hover:border-[#C5A880]/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F7F4EE] border border-[#EFEAE1] flex items-center justify-center text-[#9E7D52] mb-5 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>

              <span className="text-xs uppercase tracking-wider text-[#9E7D52] font-semibold block mb-2">
                In-Person Consultations
              </span>

              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] tracking-tight mb-3">
                Place Vendôme Salon
              </h3>

              <p className="font-sans text-sm text-[#1A1A1A]/75 leading-relaxed mb-5">
                14 Place Vendôme, 75001 Paris. 1st Arrondissement private salons overlooking the monument.
              </p>

              <div className="text-sm font-medium text-[#1A1A1A] mb-1">
                Open Mon–Sat: 9:00 AM – 7:30 PM
              </div>

              <div className="text-xs text-[#1A1A1A]/50 mb-6">
                Tea, champagne &amp; route mapping by appointment
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-[#EFEAE1]">
              <a
                href="https://maps.google.com/?q=14+Place+Vendome+75001+Paris+France"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-full bg-[#1A1A1A] text-white hover:bg-[#C5A880] hover:text-[#1A1A1A] transition-colors text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>

              <button
                onClick={() => copyToClipboard('14 Place Vendôme, 75001 Paris, France', 'address')}
                className="w-full py-1.5 text-xs text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors cursor-pointer text-center"
              >
                {copiedItem === 'address' ? '✓ Copied Address' : 'Copy Salon Address'}
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. IN-SUITE HOTEL CONCIERGE VISIT (LUXURY SERVICE) */}
        {/* ========================================================================= */}

        <div className="p-8 sm:p-10 rounded-3xl bg-[#F0F4F8] border border-[#D5E1EA] mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center lg:text-left">
            <span className="text-xs uppercase tracking-wider text-[#4A6B82] font-semibold">
              Complimentary In-Destination Service
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
              Private In-Suite Hotel Consultations
            </h3>

            <p className="font-sans text-sm sm:text-base text-[#1A1A1A]/75 leading-relaxed">
              Already arriving in Paris or staying at a partner palace hotel? Our senior curator will come directly to your hotel lounge or private suite with customized route maps, museum passes, and sommelier tasting menus.
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3">
            <select
              value={selectedConsultationHotel}
              onChange={(e) => setSelectedConsultationHotel(e.target.value)}
              className="w-full sm:w-64 bg-white border border-[#D5E1EA] rounded-full py-3 px-4 text-sm font-medium text-[#1A1A1A] focus:outline-none focus:border-[#4A6B82]"
            >
              <option value="The Ritz Paris (Place Vendôme)">The Ritz Paris (Place Vendôme)</option>
              <option value="Hôtel de Crillon (Place de la Concorde)">Hôtel de Crillon (Place de la Concorde)</option>
              <option value="Le Bristol Paris (Rue du Faubourg Saint-Honoré)">Le Bristol Paris (Faubourg Saint-Honoré)</option>
              <option value="Le Meurice (Rue de Rivoli)">Le Meurice (Rue de Rivoli)</option>
              <option value="Four Seasons George V (Champs-Élysées)">Four Seasons George V</option>
              <option value="Hôtel Plaza Athénée (Avenue Montaigne)">Hôtel Plaza Athénée</option>
              <option value="Other Boutique Residence / Villa">Other Boutique Residence / Villa</option>
            </select>

            <button
              onClick={handleRequestConsultation}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#4A6B82] text-white hover:bg-[#385265] transition-colors text-sm font-semibold uppercase tracking-wider shrink-0 cursor-pointer shadow-xs flex items-center justify-center gap-2"
            >
              {consultationRequested ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Consultation Arranged</span>
                </>
              ) : (
                <>
                  <Coffee className="w-4 h-4" />
                  <span>Request In-Suite Visit</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. MEET YOUR PERSONAL PARISIAN CURATORS */}
        {/* ========================================================================= */}

        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#9E7D52] font-semibold block mb-2">
                The Curators
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                Your Dedicated Travel Designers
              </h3>
            </div>

            <p className="text-xs text-[#1A1A1A]/60 max-w-md">
              Every Lumière Paris itinerary is architected by native residents with private cultural and culinary access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {curators.map((curator, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-3xl bg-[#FDFBF7] border border-[#EFEAE1] hover:border-[#C5A880]/40 transition-all duration-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#F7F4EE] border border-[#EFEAE1] flex items-center justify-center font-serif font-bold text-xs text-[#9E7D52]">
                      {curator.name.charAt(0)}
                    </span>

                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F7F4EE] text-[#1A1A1A]/70 font-medium">
                      {curator.languages}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-[#1A1A1A] tracking-tight mb-2">
                    {curator.name}
                  </h4>

                  <div className="text-sm text-[#9E7D52] font-semibold mb-3">
                    {curator.title}
                  </div>

                  <p className="font-sans text-sm text-[#1A1A1A]/75 leading-relaxed mb-5">
                    Specialty: {curator.expertise}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFEAE1] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#1A1A1A]/60 truncate">
                    {curator.email}
                  </span>

                  <a
                    href={`mailto:${curator.email}?subject=Consultation%20with%20${encodeURIComponent(curator.name)}`}
                    className="p-1.5 rounded-full hover:bg-[#F7F4EE] text-[#1A1A1A] hover:text-[#9E7D52] transition-colors"
                    title={`Email ${curator.name}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. GETTING TO PLACE VENDÔME & TRANSPORTATION */}
        {/* ========================================================================= */}

        <div className="p-8 sm:p-10 rounded-3xl bg-[#FDFBF7] border border-[#EFEAE1]">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#9E7D52]" />
            <span>Finding The Atelier &amp; Metro Access</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-[#1A1A1A]/80">

            <div className="space-y-1">
              <div className="font-bold text-[#1A1A1A] text-base mb-1">
                Metro Stations
              </div>

              <div>• <strong>Tuileries</strong> (Line 1) — 3 min walk</div>
              <div>• <strong>Concorde</strong> (Lines 1, 8, 12) — 5 min walk</div>
              <div>• <strong>Opéra</strong> (Lines 3, 7, 8, RER A) — 6 min walk</div>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-[#1A1A1A] text-base mb-1">
                Chauffeur &amp; Parking
              </div>

              <div>• Private Valet Parking directly on Place Vendôme</div>
              <div>• Underground Parking: Indigo Place Vendôme</div>
              <div>• VIP Mercedes pickup available upon request</div>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-[#1A1A1A] text-base mb-1">
                Neighborhood Landmarks
              </div>

              <div>• Directly opposite <strong>The Ritz Paris</strong></div>
              <div>• 2 min stroll to <strong>Jardin des Tuileries</strong></div>
              <div>• 5 min walk to <strong>Palais Garnier</strong></div>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-[#1A1A1A] text-base mb-1">
                Accreditations
              </div>

              <div>• French Tourism Ministry License IM075190042</div>
              <div>• Atout France Certified Travel Operator</div>
              <div>• Full Professional Liability via Hiscox Europe</div>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-[#EFEAE1] flex flex-col sm:flex-row items-center justify-between gap-4">

            <span className="text-sm text-[#1A1A1A]/70 text-center sm:text-left">
              Prefer an interactive itinerary proposal before speaking with us?
            </span>

            <button
              onClick={onPlanTripClick}
              className="px-7 py-4 rounded-full bg-[#1A1A1A] text-white hover:bg-[#C5A880] hover:text-[#1A1A1A] transition-colors text-sm font-semibold uppercase tracking-wider cursor-pointer shadow-xs"
            >
              Open Interactive Itinerary Studio
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};