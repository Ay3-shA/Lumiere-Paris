import { Phone, Mail, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';

import { Experience, Destination } from '../types';

import heroEiffel from '../assets/images/paris_hero_eiffel_1790325777186.jpg';
import nightSeine from '../assets/images/paris_night_seine_1790325792393.jpg';
import louvreCulture from '../assets/images/paris_louvre_culture_1790325806974.jpg';
import bistroCuisine from '../assets/images/paris_bistro_cuisine_1790325818085.jpg';
import montmartreStreet from '../assets/images/paris_montmartre_street_1790325829547.jpg';
import versaillesPalace from '../assets/images/paris_versailles_palace_1790505911054.png';


export const PARIS_IMAGES = {
  heroEiffel,
  nightSeine,
  louvreCulture,
  bistroCuisine,
  montmartreStreet,
};

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 'iconic-paris',
    title: 'Iconic Paris',
    category: 'Essential Heritage',
    tagline: 'The grand monuments and timeless vistas of the City of Light',
    description: "Discover famous landmarks, historic avenues, and the sights that make Paris one of the world's most beloved cities.",
    fullDetails: "Experience the monumental grandeur of Paris with VIP skip-the-line privileges and private chauffeured transport. Ascend to panoramic viewpoints overlooking the Eiffel Tower from the Trocadéro, stroll along the majestic Champs-Élysées, admire the Arc de Triomphe, and witness the architectural splendor of the Place de la Concorde with a licensed art historian guide.",
    image: heroEiffel,
    duration: '4 to 6 Hours',
    groupSize: 'Private (1-6 guests)',
    highlights: [
      'Private access views of the Eiffel Tower & Champ de Mars',
      'Exclusive passage through Place Vendôme & Palais Garnier',
      'Panoramic perspective from Pont Alexandre III',
      'Dedicated historian storyteller & luxury transport'
    ],
    inclusions: [
      'Private Mercedes sedan/van with chauffeur',
      'Certified Parisian guide & historian',
      'Skip-the-line monument entries',
      'Champagne toast at Trocadéro terrace'
    ],
    bestTime: 'Morning or Late Afternoon',
    priceEstimate: 'From €190 / guest',
  },
  {
    id: 'paris-by-night',
    title: 'Paris by Night',
    category: 'Romance & Evening',
    tagline: 'When streetlamps glow and the Eiffel Tower sparkles against twilight',
    description: "Experience the magic of Paris after sunset, when illuminated landmarks, lively streets, and riverside views create an unforgettable atmosphere.",
    fullDetails: "As golden twilight blankets the capital, Paris transforms into an enchanting dreamscape. Glide down the Seine aboard a private Riva yacht or mahogany river launch with chilled French champagne. Watch the hourly sparkle of the Eiffel Tower reflect in the gentle river current, followed by candlelit drinks in a secret rooftop garden overlooking the illuminated gothic spires.",
    image: nightSeine,
    duration: '3.5 Hours',
    groupSize: 'Private or Couples',
    highlights: [
      'Private twilight Seine cruise past Notre-Dame and the Louvre',
      'Prime viewing spot for the 10:00 PM Eiffel Tower sparkle show',
      'Illuminated Pont des Arts and Pont Neuf river reflections',
      'Nightcap at an intimate Saint-Germain jazz lounge'
    ],
    inclusions: [
      'Exclusive boat cruise with private skipper',
      'Premier Cru Champagne & artisanal Petrossian caviar snacks',
      'Evening city transfer to your hotel or dining venue'
    ],
    bestTime: '8:30 PM – Midnight',
    priceEstimate: 'From €240 / guest',
  },
  {
    id: 'art-and-culture',
    title: 'Art & Culture',
    category: 'Masterpieces & History',
    tagline: 'From Mona Lisa to Monet’s Water Lilies and hidden royal salons',
    description: "Explore museums, galleries, historic buildings, and the artistic heritage that has shaped Paris for generations.",
    fullDetails: "Unlock private salons and curator-led walkthroughs of the world's most celebrated collections. Step through the glass pyramid of the Louvre to marvel at the Winged Victory of Samothrace without the crowds, contemplate the Impressionist light at Musée d'Orsay inside a gilded former railway palace, and admire Rodin's sculptures nestled within quiet rose gardens.",
    image: louvreCulture,
    duration: '4 Hours',
    groupSize: 'Small Group or Private',
    highlights: [
      'Curator-led fast track into the Louvre and Musée d\'Orsay',
      'Secret courtyards of the Palais-Royal and Daniel Buren columns',
      'Rodin Sculpture Garden & historic Hôtel Biron estate',
      'Private gallery introductions in Saint-Germain'
    ],
    inclusions: [
      'All priority museum admissions & headset whisper systems',
      'Art historian and accredited museum lecturer',
      'Artisan tea & French macarons at a historic café'
    ],
    bestTime: 'Wednesdays & Fridays (Late Openings)',
    priceEstimate: 'From €175 / guest',
  },
  {
    id: 'food-and-wine',
    title: 'Food & Wine',
    category: 'Gastronomy & Terroir',
    tagline: 'From morning warm baguettes to sommelier-led grand cru tastings',
    description: "Taste the flavors of France and discover the cafés, bakeries, restaurants, and culinary traditions that define Parisian life.",
    fullDetails: "Embark on a sensory feast through historic Parisian market streets. Meet multi-generational affineurs (cheese masters) in deep limestone aging cellars, sample warm golden croissants straight from copper ovens, and savor AOC French cheeses paired with Burgundy and Bordeaux wines guided by a master sommelier.",
    image: bistroCuisine,
    duration: '4.5 Hours',
    groupSize: 'Max 8 guests',
    highlights: [
      'Behind-the-counter tasting at century-old boulangeries',
      'Guided cheese cellar tasting with paired French natural wines',
      'Artisanal chocolate & praline atelier visit in Le Marais',
      'Seated gourmet lunch at a classic Parisian brasserie'
    ],
    inclusions: [
      'Over 10 curated regional tastings & pairings',
      'Expert culinary guide & sommelier',
      'Sommelier booklet with wine pairing notes',
      'Take-home pastry box from an award-winning pâtissier'
    ],
    bestTime: '10:00 AM – 2:30 PM',
    priceEstimate: 'From €210 / guest',
  },
  {
    id: 'hidden-paris',
    title: 'Hidden Paris',
    category: 'Off the Beaten Path',
    tagline: 'Quiet cobblestones, secret covered passages, and tranquil courtyards',
    description: "Step beyond the usual tourist routes and discover charming neighborhoods, quiet streets, local shops, and lesser-known places.",
    fullDetails: "Diverge from the beaten path into the authentic soul of Paris. Wander through 19th-century glass-roofed Covered Passages filled with antique bookstores and clockmakers, uncover tucked-away garden courtyards in the Marais, discover Roman ruins hidden behind leafy Latin Quarter squares, and visit local craft workshops preserving centuries of French savoir-faire.",
    image: montmartreStreet,
    duration: '3.5 Hours',
    groupSize: 'Private (1-6 guests)',
    highlights: [
      'Galerie Vivienne and Passage des Panoramas glass arcades',
      'Hidden 17th-century courtyard gardens of the Marais',
      'Arènes de Lutèce: Ancient 1st-century Roman amphitheater',
      'Quiet artisan studios in Belleville & Canal Saint-Martin'
    ],
    inclusions: [
      'Local neighborhood insider guide',
      'Specialist boutique access & artisan introductions',
      'Espresso & tarte tatin stop at a hidden neighborhood salon'
    ],
    bestTime: 'Morning or Afternoon',
    priceEstimate: 'From €160 / guest',
  },
  {
    id: 'royal-versailles',
    title: 'Royal Versailles & Gardens',
    category: 'Royal Heritage',
    tagline: 'The golden Hall of Mirrors, Grand Fountains & Marie Antoinette’s estate',
    description: "Step into the French royal court with private access to the Sun King's palace, musical fountain gardens, and the tranquil Queen’s Hamlet.",
    fullDetails: "Journey just outside Paris in chauffeured comfort to the golden grandeur of the Château de Versailles. Walk through the sparkling Hall of Mirrors, visit the King’s Grand Apartments with a certified royal historian, stroll among Le Nôtre’s classical sculpted fountains, and explore Marie Antoinette’s pastoral Queen's Hamlet with a private electric golf cart and gourmet lunch.",
    image: versaillesPalace,
    duration: 'Full Day (6-7 Hours)',
    groupSize: 'Private (1-6 guests)',
    highlights: [
      'Private morning access to the Hall of Mirrors & Royal Chapel',
      'Grand Canal electric boat or golf cart exploration',
      'Marie Antoinette’s Queen’s Hamlet & Petit Trianon retreat',
      'Gourmet royal lunch at Ducasse restaurant inside the palace'
    ],
    inclusions: [
      'Private round-trip Mercedes transfer from your Paris hotel',
      'All-access Passport château & estate tickets with fast track',
      'Accredited national palace lecturer & guide',
      'Three-course French lunch paired with fine wines'
    ],
    bestTime: 'Tuesdays through Sundays (Fountain Shows)',
    priceEstimate: 'From €260 / guest',
  },

];

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'montmartre',
    name: 'Montmartre',
    frenchName: 'Montmartre & Sacré-Cœur',
    arrondissement: '18th Arrondissement',
    atmosphere: 'Bohemian, Romantic & Village-Like',
    shortDesc: 'Artistic hilltop streets, historic cabarets, vineyard corners, and sweeping city vistas.',
    longDesc: 'Perched on the highest hill of Paris, Montmartre retains the feel of an authentic artist village. Wander past the legendary windmills of the Moulin de la Galette, find Picasso and Renoir’s old haunts around Place du Tertre, explore the historic Clos Montmartre vineyard, and gaze upon the white domes of the Sacré-Cœur Basilica overlooking the entire Paris panorama.',
    image: montmartreStreet,
    highlights: ['Sacré-Cœur Basilica Dome', 'Clos Montmartre Vineyard', 'Place du Tertre Artists', 'Rue de l\'Abreuvoir & La Maison Rose'],
    bestCafes: ['Café des Deux Moulins', 'La Boîte aux Lettres', 'Hardware Société'],
    walkingTime: '2 to 3 Hours',
  },
  {
    id: 'saint-germain-des-pres',
    name: 'Saint-Germain-des-Prés',
    frenchName: 'Saint-Germain-des-Prés',
    arrondissement: '6th Arrondissement',
    atmosphere: 'Intellectual, Chic & Quintessentially Left Bank',
    shortDesc: 'Historic literary cafés, luxury boutiques, art galleries, and the Luxembourg Gardens.',
    longDesc: 'The historic heart of French existentialism and literary brilliance. Sit where Hemingway, Jean-Paul Sartre, and Simone de Beauvoir debated ideas at Café de Flore and Les Deux Magots. Browse world-class modern art galleries, discover refined antique dealers on Rue de Seine, and unwind under the chestnut trees of the majestic Jardin du Luxembourg.',
    image: bistroCuisine,
    highlights: ['Café de Flore & Les Deux Magots', 'Jardin du Luxembourg & Medici Fountain', 'Church of Saint-Germain-des-Prés', 'Place Furstenberg courtyard'],
    bestCafes: ['Café de Flore', 'Les Deux Magots', 'Café Louise'],
    walkingTime: '2.5 Hours',
  },
  {
    id: 'le-marais',
    name: 'Le Marais',
    frenchName: 'Le Marais',
    arrondissement: '3rd & 4th Arrondissements',
    atmosphere: 'Historic, Vibrant, Fashion-Forward & Atmospheric',
    shortDesc: 'Aristocratic 17th-century mansions, Place des Vosges, concept stores, and Jewish quarter.',
    longDesc: 'Spanning medieval lanes and Renaissance palaces, Le Marais is one of the city\'s most captivating districts. Admire the perfect red-brick symmetry of Place des Vosges where Victor Hugo lived, discover the contemporary Picasso Museum in the Hôtel Salé, sample legendary falafel on Rue des Rosiers, and explore cutting-edge French designer ateliers in historic courtyards.',
    image: louvreCulture,
    highlights: ['Place des Vosges & Victor Hugo House', 'Picasso Museum (Hôtel Salé)', 'Rue des Rosiers Jewish Quarter', 'Marché des Enfants Rouges'],
    bestCafes: ['Carelle Place des Vosges', 'Boot Café', 'Fragments Paris'],
    walkingTime: '3 Hours',
  },
  {
    id: 'ile-de-la-cite',
    name: 'Île de la Cité',
    frenchName: 'Île de la Cité & Saint-Louis',
    arrondissement: '1st & 4th Arrondissements',
    atmosphere: 'Historic, Monumental, River-Flanked & Sacred',
    shortDesc: 'The ancient cradle of Paris, Notre-Dame, jewel-like Sainte-Chapelle, and Pont Neuf.',
    longDesc: 'Rising gently from the Seine, Île de la Cité is where Paris was born over two millennia ago. Marvel at the soaring Gothic spires and restoration of Notre-Dame Cathedral, step into the radiant kaleidoscope of 13th-century stained glass at Sainte-Chapelle, and stroll across the Pont Neuf—the oldest standing bridge in Paris—to the tranquil weeping willows of Square du Vert-Galant.',
    image: nightSeine,
    highlights: ['Notre-Dame Cathedral & Parvis', 'Sainte-Chapelle Stained Glass Windows', 'Conciergerie Royal Palace', 'Pont Neuf & Square du Vert-Galant'],
    bestCafes: ['Au Vieux Paris d\'Arcole', 'Les Deux Palais', 'Café Saint-Régis'],
    walkingTime: '2 Hours',
  },
  {
    id: 'latin-quarter',
    name: 'Latin Quarter',
    frenchName: 'Quartier Latin',
    arrondissement: '5th Arrondissement',
    atmosphere: 'Scholarly, Youthful, Medieval & Lively',
    shortDesc: 'Sorbonne University, the grand Panthéon, Shakespeare & Company, and winding alleyways.',
    longDesc: 'Named for the Latin language once spoken by medieval scholars from across Europe, this vibrant district pulses with intellectual energy. Browse the floor-to-ceiling poetry shelves at legendary Shakespeare and Company bookshop, marvel at the monumental dome and Foucault pendulum inside the Panthéon, and wander along the bustling bistro terraces of Rue Mouffetard.',
    image: montmartreStreet,
    highlights: ['The Panthéon & Crypt of French Heroes', 'Shakespeare and Company Bookstore', 'Historic Sorbonne University Quadrangle', 'Rue Mouffetard Market Street'],
    bestCafes: ['Café Panthéon', 'Shakespeare and Company Café', 'Le Verre à Pied'],
    walkingTime: '2.5 Hours',
  },
  {
    id: 'champs-elysees',
    name: 'Champs-Élysées',
    frenchName: 'Avenue des Champs-Élysées',
    arrondissement: '8th Arrondissement',
    atmosphere: 'Grand, Glamorous, Prestigious & Monumental',
    shortDesc: 'The world\'s most famous avenue, Arc de Triomphe, Grand Palais, and haute couture.',
    longDesc: 'Extending from the Place de la Concorde to the monumental Arc de Triomphe, the Champs-Élysées represents the grand ceremonial axis of Paris. Admire the soaring glass vault of the Grand Palais, stroll down neighboring Avenue Montaigne for the pinnacle of Parisian haute couture, and ascend to the roof terrace of the Arc de Triomphe for unmatched starburst views of twelve grand boulevards radiating outwards.',
    image: heroEiffel,
    highlights: ['Arc de Triomphe Observation Terrace', 'Grand Palais & Petit Palais Fine Arts', 'Haute Couture on Avenue Montaigne', 'Historic Ladurée Flagship Macaron Salon'],
    bestCafes: ['Ladurée Champs-Élysées', 'Café Joyeux', 'Fouquet\'s Paris'],
    walkingTime: '2 Hours',
  },
];

export const WHY_US_FEATURES = [
  {
    id: 'local-expertise',
    title: 'Local Expertise',
    description: "Discover Paris with recommendations and experiences shaped by local knowledge.",
    details: "Our licensed guides and itinerary planners are born and raised in Paris or longtime residents with intimate access to private venues, chefs, and cultural curators.",
    stat: '15+ Years in Paris',
  },

  {
    id: 'easy-planning',
    title: 'Easy Planning',
    description: "Make your Paris trip simple with clear planning and carefully organized experiences.",
    details: "Skip the queues, avoid booking hassles, and receive a personal interactive digital concierge app with daily route maps and confirmed reservation passes.",
    stat: 'Zero Hassle Guarantee',
  },
  {
    id: 'memorable-moments',
    title: 'Memorable Moments',
    description: "From iconic sights to unexpected discoveries, create memories you'll take home with you.",
    details: "A private sunrise boat on the Seine, a quiet toast overlooking the sparkling Eiffel Tower, or sharing laughs with a Montmartre artist—moments you'll cherish forever.",
    stat: '4.9/5 Guest Satisfaction',
  },
];

export const CONTACT_CARDS = [
  {
    id: 'telephone',
    title: 'Direct Line',
    description:
      'Speak directly with our Paris concierge team for personal travel assistance and immediate guidance.',
    details: 'Toll-Free: +1 (800) 849-PARIS',
    stat: '+33 (0)1 42 68 50 00',
    href: 'tel:+33142685000',
    icon: Phone,
  },
  {
    id: 'email',
    title: 'Direct Email',
    description:
      'Send us your Paris travel questions, preferences, or itinerary requests and our team will respond personally.',
    details: 'Response under 2 hours',
    stat: 'concierge@lumiereparis.com',
    href: 'mailto:concierge@lumiereparis.com?subject=Curated%20Parisian%20Journey%20Inquiry',
    icon: Mail,
  },
  {
    id: 'salon',
    title: 'Private Salon',
    description:
      'Visit our Paris concierge office at Place Vendôme for a private conversation about your journey.',
    details: '75001 Paris, France',
    stat: '14 Place Vendôme',
    href: 'https://maps.google.com/?q=14+Place+Vendome+75001+Paris+France',
    icon: MapPin,
  },
];