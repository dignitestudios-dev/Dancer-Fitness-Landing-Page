export interface Exercise {
  id: string;
  title: string;
  categories: string[];
  level: string;
  duration?: string;
  focus?: string;
  tags?: string[];
  description?: string;
  cues?: string[];
  modifications?: string;
  thumbnail?: string | null;
  video_url?: string | null;
  featured?: boolean;
}

export interface TrainingPlan {
  id: string;
  title: string;
  categories: string[];
  level: string;
  exercise_count: number;
  duration: string;
  tags: string[];
  summary: string;
  description: string;
  focus_areas: string[];
  exercises: string[];
  featured?: boolean;
}

export const SITE_CONFIG = {
  name: 'Dancer Fitness',
  logo: '/assets/logo.png',
  email: 'katie@dancer-fitness.com',
  founder: 'Katie Groven',
  youtubeWelcome: 'https://www.youtube.com/watch?v=wMa4LSSy6v4',
  youtubeChannel: 'https://www.youtube.com/channel/UC9bUMUNb-2sQLsLx6FFA-XQ',
  googleReviews: 'https://www.google.com/maps/place/Dancer-Fitness/@38.307673,-171.2086684,3z/data=!4m8!3m7!1s0x87f61f58a4d8e6bf:0xef8d67e379d9e905!8m2!3d46.423669!4d-129.9427086!9m1!1b1!16s%2Fg%2F11c1n1zkft',
  photoCredit: 'photo credit @rachelnoelstudios'
};

export const IMAGES = {
  heroPortrait: '/assets/homepage.jpg',
  studio: '/assets/home-box2.jpeg',
  founder: '/assets/katie-update2-01.png',
  coaches: '/assets/c2b0c0420_generated_image.png',
  categoryImages: {
    Strength: '/assets/b372872f7_generated_image.png',
    Power: '/assets/fb2678a7c_generated_image.png',
    Flexibility: '/assets/0272551a1_generated_image.png',
    Balance: '/assets/79a4c39c4_generated_image.png',
    Coaches: '/assets/c2b0c0420_generated_image.png',
    'Warm Up': '/assets/79a4c39c4_generated_image.png',
    'On Demand Workout': '/assets/b372872f7_generated_image.png',
    'Mini Dancers': '/assets/fb2678a7c_generated_image.png',
    Partners: '/assets/b372872f7_generated_image.png',
    Endurance: '/assets/fb2678a7c_generated_image.png'
  } as Record<string, string>
};

// Target links from dancer-fitness.com
export const DF_LINKS = {
  home: 'https://dancer-fitness.com/',
  exercises: 'https://dancer-fitness.com/exercises/',
  trainingPlans: 'https://dancer-fitness.com/training-plans/',
  membership: 'https://dancer-fitness.com/membership/',
  onDemand: 'https://dancer-fitness.com/watch-on-demand/',
  shop: 'https://dancer-fitness.com/shop/',
  signUp: 'https://dancer-fitness.com/sign-up/',
  login: 'https://dancer-fitness.com/login/',
  cart: 'https://dancer-fitness.com/cart/',
  about: 'https://dancer-fitness.com/about/',
  contact: 'https://dancer-fitness.com/contact-us/',
  trial: 'https://dancer-fitness.com/register/monthly/',
  monthly: 'https://dancer-fitness.com/register/monthly-w-out-trial/',
  yearly: 'https://dancer-fitness.com/register/yearly/',
  teamPro: 'https://dancer-fitness.com/register/team-pro/'
};

export function getMembershipUrl(planId: string) {
  switch (planId) {
    case 'trial':
      return DF_LINKS.trial;
    case 'monthly':
      return DF_LINKS.monthly;
    case 'yearly':
      return DF_LINKS.yearly;
    case 'team_pro':
      return DF_LINKS.teamPro;
    default:
      return DF_LINKS.membership;
  }
}

export const NAV_LINKS = [
  { label: 'Exercises', href: DF_LINKS.exercises, external: true, dfHref: DF_LINKS.exercises },
  { label: 'Training Plans', href: DF_LINKS.trainingPlans, external: true, dfHref: DF_LINKS.trainingPlans },
  { label: 'Membership', href: DF_LINKS.membership, external: true, dfHref: DF_LINKS.membership },
  { label: 'About', href: DF_LINKS.about, external: true, dfHref: DF_LINKS.about },
  { label: 'Contact', href: DF_LINKS.contact, external: true, dfHref: DF_LINKS.contact }
];

export const CATEGORIES = [
  'Strength',
  'Flexibility',
  'Power',
  'Balance',
  'Endurance',
  'Warm Up',
  'On Demand Workout',
  'Mini Dancers',
  'Partners'
];

export const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

export const BANNER_PILLS = [
  'Dance cleaner',
  'Dance sharper',
  'Jump higher',
  'Master new skills',
  'Gorgeous technique',
  'Dance longer with fewer injuries'
];

export const HERO_STATS = [
  { value: 'Hundreds', label: 'of dancer-specific exercises' },
  { value: 'Weekly', label: 'new videos and plans' },
  { value: 'All levels', label: 'beginner to advanced' }
];

export const DANCER_BULLETS = [
  'Hit your skills consistently, from the first eight count to the last',
  'Hold your leg above 90 degrees without gripping',
  'Improve turn out, extension and flexibility with intent',
  'Know which muscles drive cleaner turns, better extension and higher leaps'
];

export const COACHES_STATS = [
  { value: 'Hundreds', label: 'of exercises ready to pull up in class' },
  { value: 'Beginner → Advanced', label: 'so one plan fits a mixed team' },
  { value: 'Print & save', label: 'your own plans for any season' }
];

export const MEMBERSHIP_BENEFITS = [
  'Access to the members-only band page',
  'On demand workouts you can run in class',
  'Monthly group coaching calls with Katie',
  'Member-only discounts on courses, classes and equipment',
  'New exercises and training plans added weekly'
];

export const PRICING_TIERS = [
  {
    id: 'trial',
    name: 'Trial',
    price: '$1',
    unit: 'first week',
    blurb: 'Try one week for $1',
    detail: 'Full access to the library for seven days.',
    featured: false
  },
  {
    id: 'monthly',
    name: 'Monthly',
    price: '$20',
    unit: 'per month',
    blurb: '$20 / month',
    detail: 'Cancel anytime, keep your saved plans.',
    featured: false
  },
  {
    id: 'yearly',
    name: 'Yearly',
    price: '$199',
    unit: 'per year',
    blurb: 'Two months free',
    detail: 'The best value for working coaches.',
    featured: true
  },
  {
    id: 'team_pro',
    name: 'Team Pro',
    price: '$80',
    unit: 'per month',
    blurb: 'For studios and teams',
    detail: 'Up to 50 sub-accounts · 30-day trial',
    featured: false
  }
];

export const FEATURED_ON = [
  {
    name: 'More Than Dancers',
    url: 'https://www.morethandancers.com/team/miss-katie-peyton-groven',
    logo: '/assets/partner-morethandancers.png',
    width: 140,
    height: 60
  },
  {
    name: 'The Dance Boss Podcast',
    url: 'https://erinpride.com/podcast/dbp56',
    logo: '/assets/partner-danceboss.png',
    width: 180,
    height: 58
  },
  {
    name: 'Doctors for Dancers',
    url: 'https://doctorsfordancers.com/',
    logo: '/assets/partner-doctorsfordancers.png',
    width: 180,
    height: 50
  },
  {
    name: 'Dance Studio 411',
    url: 'https://dancestudio411.com/at-home-strength-training-and-injury-prevention-for-dancers/',
    logo: '/assets/partner-dancestudio411.png',
    width: 140,
    height: 56
  },
  {
    name: 'ApOLLA Performance',
    url: 'https://www.apollaperformance.com/blogs/news/cross-training-safely-at-home-katie-groven',
    logo: '/assets/partner-apolla.png',
    width: 170,
    height: 52
  },
  {
    name: 'Chelsea Pierotti - The Passion for Dance Podcast',
    url: 'https://www.chelseapierotti.com/ep-10-strength-training/',
    logo: '/assets/partner-chelseapierotti.png',
    width: 100,
    height: 100
  },
  {
    name: 'The Line Up',
    url: 'https://www.thelineup.com/',
    logo: '/assets/partner-thelineup.png',
    width: 120,
    height: 90
  },
  {
    name: 'Count Me In Podcast',
    url: 'https://www.countmeinpodcast.com/episodes/68-finding-your-strength-with-katie-groven',
    logo: '/assets/partner-countmein.png',
    width: 100,
    height: 100
  },
  {
    name: 'Larkspur Dance & Choreography',
    url: 'https://www.larkspurdance.com/lark-life/a-chat-with-katie-groven-of-dancer-fitness-ldcps3e12/',
    logo: '/assets/partner-larkspur.png',
    width: 100,
    height: 100
  }
];

export const TESTIMONIALS = [
  {
    quote: 'It makes planning warm ups and stretching so much easier! My dancers have been loving all the new things we have been trying. So far definitely worth it!',
    name: 'Becki Ball'
  },
  {
    quote: 'This resource really zones in on which muscle groups are used for different dance skills and provides exercises and training plans for different skills, technique, and tricks. I can personalize workout plans for specific dancers easily without doing too much prep work on my end — she did it all for me!',
    name: 'Libby Stronz'
  },
  {
    quote: 'Dancer-Fitness.Com has great training webinars for dance teachers and coaches. Its kicking their (and my) butts in the best way! I can already see improvement in their technique!',
    name: 'Kylie Krason'
  },
  {
    quote: 'Katie worked with me to create a plan to get our team into the weight room and work on things specific to our athletes! I use her program in EVERY practice!',
    name: 'Kate Schmalz'
  },
  {
    quote: "Katie has helped me to plan my dance classes more effectively, so there is always time for strength and flexibility. I asked Katie for help with my dancers who can't keep their leg up in a la second and now she has created a new training plan and cheat sheet for that.",
    name: 'Laila'
  },
  {
    quote: "I love how Katie breaks down individual exercises so that you don't need to spend a huge amount of time each day to see great benefits. The updates are awesome, and the email communications are informative and helpful.",
    name: 'SoDANCE Vernon'
  }
];

export const WHAT_STRENGTH_UNLOCKS = [
  'Stronger dancers',
  'Move with control',
  'Cleaner skills',
  'Better execution',
  'Higher scores',
  'More confidence'
];

export const TARGET_AREAS = [
  'Jumps & leaps',
  'Turns & kicks',
  'Flexibility',
  'Extension',
  'Endurance',
  'Strength',
  'Execution'
];

