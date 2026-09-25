export interface Experience {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  fullDetails: string;
  image: string;
  duration: string;
  groupSize: string;
  highlights: string[];
  inclusions: string[];
  bestTime: string;
  priceEstimate: string;
}

export interface Destination {
  id: string;
  name: string;
  frenchName: string;
  arrondissement: string;
  atmosphere: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  highlights: string[];
  bestCafes: string[];
  walkingTime: string;
}

export interface TripPlanInquiry {
  travelStyle: string[];
  dates: string;
  duration: string;
  travelers: number;
  selectedNeighborhoods: string[];
  selectedExperiences: string[];
  budgetTier: 'comfort' | 'premium' | 'luxury';
  fullName: string;
  email: string;
  specialRequests: string;
}
