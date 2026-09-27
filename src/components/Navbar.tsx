import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Compass, MapPin, Calendar, Phone, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenTripPlanner: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTripPlanner, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['experiences', 'destinations', 'why-us', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-paris-cream/95 backdrop-blur-md border-b border-paris-stone py-3.5 shadow-sm'
            : 'bg-linear-to-b from-black/60 via-black/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="group flex items-center gap-2.5 transition-transform duration-200"
          >
            <div className="flex flex-col">
              <span
                className={`font-serif text-2xl sm:text-[26px] font-bold tracking-tight transition-colors ${
                  isScrolled ? 'text-paris-charcoal' : 'text-white'
                }`}
              >
                Lumière Paris
              </span>
              <span
                className={`text-[9px] uppercase tracking-[0.25em] font-sans font-medium -mt-1 transition-colors ${
                  isScrolled ? 'text-paris-gold' : 'text-paris-gold-light'
                }`}
              >
                Voyages d&apos;Exception
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-xs uppercase tracking-[0.14em] font-medium transition-colors relative py-1 cursor-pointer ${
                isScrolled
                  ? activeSection === 'home'
                    ? 'text-paris-gold font-semibold'
                    : 'text-paris-charcoal/80 hover:text-paris-charcoal'
                  : activeSection === 'home'
                  ? 'text-paris-gold-light font-semibold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Home
              {activeSection === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-paris-gold rounded-full" />
              )}
            </button>

            <button
              onClick={() => scrollToSection('experiences')}
              className={`text-xs uppercase tracking-[0.14em] font-medium transition-colors relative py-1 cursor-pointer ${
                isScrolled
                  ? activeSection === 'experiences'
                    ? 'text-paris-gold font-semibold'
                    : 'text-paris-charcoal/80 hover:text-paris-charcoal'
                  : activeSection === 'experiences'
                  ? 'text-paris-gold-light font-semibold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Experiences
              {activeSection === 'experiences' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-paris-gold rounded-full" />
              )}
            </button>

            <button
              onClick={() => scrollToSection('destinations')}
              className={`text-xs uppercase tracking-[0.14em] font-medium transition-colors relative py-1 cursor-pointer ${
                isScrolled
                  ? activeSection === 'destinations'
                    ? 'text-[#C5A880] font-semibold'
                    : 'text-[#1A1A1A]/80 hover:text-[#1A1A1A]'
                  : activeSection === 'destinations'
                  ? 'text-[#E8D8C3] font-semibold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Destinations
              {activeSection === 'destinations' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A880] rounded-full" />
              )}
            </button>

            <button
              onClick={() => scrollToSection('why-us')}
              className={`text-xs uppercase tracking-[0.14em] font-medium transition-colors relative py-1 cursor-pointer ${
                isScrolled
                  ? activeSection === 'why-us'
                    ? 'text-[#C5A880] font-semibold'
                    : 'text-[#1A1A1A]/80 hover:text-[#1A1A1A]'
                  : activeSection === 'why-us'
                  ? 'text-[#E8D8C3] font-semibold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              About Us
              {activeSection === 'why-us' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A880] rounded-full" />
              )}
            </button>

            <button
              onClick={() => {
                onOpenContact();
              }}
              className={`text-xs uppercase tracking-[0.14em] font-medium transition-colors relative py-1 cursor-pointer ${
                isScrolled
                  ? 'text-[#1A1A1A]/80 hover:text-[#1A1A1A]'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action: Plan Your Trip CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenTripPlanner}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-sm flex items-center gap-2 cursor-pointer ${
                isScrolled
                  ? 'bg-[#1A1A1A] text-white hover:bg-[#C5A880] hover:text-[#1A1A1A]'
                  : 'bg-white text-[#1A1A1A] hover:bg-[#E8D8C3] hover:text-[#1A1A1A]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Plan Your Trip</span>
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenTripPlanner}
              className={`px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
                isScrolled ? 'bg-[#1A1A1A] text-white' : 'bg-white text-[#1A1A1A]'
              }`}
            >
              Plan Trip
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                isScrolled
                  ? 'text-[#1A1A1A] hover:bg-[#EFEAE1]'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm sm:hidden animate-in fade-in duration-200">
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#FDFBF7] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6 pt-4">
              <div className="flex items-center justify-between pb-4 border-b border-[#EFEAE1]">
                <div>
                  <span className="font-serif text-xl font-bold text-[#1A1A1A]">Lumière Paris</span>
                  <p className="text-[10px] uppercase tracking-widest text-[#C5A880]">Discover Paris, Your Way</p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full text-[#1A1A1A]/70 hover:bg-[#EFEAE1]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => scrollToSection('home')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium text-[#1A1A1A] hover:bg-[#F7F4EE] flex items-center justify-between"
                >
                  <span>Home</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                </button>
                <button
                  onClick={() => scrollToSection('experiences')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium text-[#1A1A1A] hover:bg-[#F7F4EE] flex items-center justify-between"
                >
                  <span>Experiences</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                </button>
                <button
                  onClick={() => scrollToSection('destinations')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium text-[#1A1A1A] hover:bg-[#F7F4EE] flex items-center justify-between"
                >
                  <span>Destinations</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                </button>
                <button
                  onClick={() => scrollToSection('why-us')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium text-[#1A1A1A] hover:bg-[#F7F4EE] flex items-center justify-between"
                >
                  <span>About Us</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium text-[#1A1A1A] hover:bg-[#F7F4EE] flex items-center justify-between"
                >
                  <span>Contact Concierge</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EFEAE1] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTripPlanner();
                }}
                className="w-full py-3.5 px-6 rounded-full bg-[#1A1A1A] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#C5A880] transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Plan Your Trip</span>
              </button>
              <div className="text-center text-xs text-[#1A1A1A]/60">
                <span>Direct Concierge: +33 (0)1 42 68 50 00</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
