import React, { useState } from 'react';
import { ScrollCanvas } from './components/ScrollCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experiences } from './components/Experiences';
import { Destinations } from './components/Destinations';
import { WhyUs } from './components/WhyUs';
import { FinalCTA } from './components/FinalCTA';

import { TripPlannerModal } from './components/TripPlannerModal';
import { ExperienceModal } from './components/ExperienceModal';
import { DestinationModal } from './components/DestinationModal';
import { ContactModal } from './components/ContactModal';
import { LegalModal } from './components/LegalModal';

import { Experience, Destination } from './types';
import { DESTINATIONS_DATA } from './data/parisData';

export default function App() {
  // Modal states
  const [isTripPlannerOpen, setIsTripPlannerOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Preselection for trip planner
  const [plannerPreselectedExpId, setPlannerPreselectedExpId] = useState<string | undefined>();
  const [plannerPreselectedDestId, setPlannerPreselectedDestId] = useState<string | undefined>();

  const handleOpenTripPlanner = (expId?: string, destId?: string) => {
    setPlannerPreselectedExpId(expId);
    setPlannerPreselectedDestId(destId);
    setIsTripPlannerOpen(true);
  };

  const handleScrollTo = (id: string) => {
    if (id === 'contact') {
      setIsContactOpen(true);
      return;
    }

    const el = document.getElementById(id);

    if (el) {
      const yOffset = -80;
      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  const handleExploreAllDestinations = () => {
    setSelectedDestination(DESTINATIONS_DATA[0]);
  };

  return (
    <div className="relative min-h-screen bg-transparent text-paris-charcoal font-sans selection:bg-paris-gold/30 selection:text-[#1A1A1A]">
      
      {/* Animated background synchronized to website scroll */}
      <ScrollCanvas />

      {/* Sticky Navigation */}
      <Navbar
        onOpenTripPlanner={() => handleOpenTripPlanner()}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">

        {/* 1. Hero Section — Discover Paris */}
        <Hero
          onExploreClick={() => handleScrollTo('experiences')}
          onPlanTripClick={() => handleOpenTripPlanner()}
        />

        {/* 2. Experiences Section — Experiences You'll Love */}
        <Experiences
          onSelectExperience={(exp) => setSelectedExperience(exp)}
          onPlanTripClick={() => handleOpenTripPlanner()}
        />

        {/* 3. Explore Paris Section — There's More to Paris Than the Eiffel Tower */}
        <Destinations
          onSelectDestination={(dest) => setSelectedDestination(dest)}
          onExploreAll={handleExploreAllDestinations}
        />

        {/* 4. Why Travel With Us — Your Paris, Made Simple */}
        <WhyUs />

        {/* 5. Plan Your Paris Adventure — Ready to Experience Paris? */}
        <FinalCTA
          onStartPlanning={() => handleOpenTripPlanner()}
          onContactUs={() => setIsContactOpen(true)}
        />
      </main>

      {/* Interactive Modals */}

      <TripPlannerModal
        isOpen={isTripPlannerOpen}
        onClose={() => setIsTripPlannerOpen(false)}
        preselectedExperienceId={plannerPreselectedExpId}
        preselectedDestinationId={plannerPreselectedDestId}
      />

      <ExperienceModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
        onBookExperience={(expId) => {
          handleOpenTripPlanner(expId);
        }}
      />

      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onSelectDestination={(dest) => setSelectedDestination(dest)}
        onPlanNeighborhoodTrip={(destId) => {
          handleOpenTripPlanner(undefined, destId);
        }}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}