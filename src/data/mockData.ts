export interface Expert {
  id: string;
  name: string;
  title: string;
  image: string;
  rating: number;
  reviewCount: number;
  tagline: string;
  yearsExperience: number;
  hourlyRate: number;
  industry: string;
  skills: string[];
  about: string;
  services: {
    project: { description: string; startingPrice: number };
    mentorship: { description: string; startingPrice: number };
  };
  experience: {
    role: string;
    company: string;
    years: string;
    description: string;
  }[];
  reviews: {
    id: string;
    client: string;
    rating: number;
    comment: string;
    project: string;
    date: string;
  }[];
  location: string;
}

export const mockExperts: Expert[] = [
  {
    id: '1',
    name: 'Dr. Margaret Chen',
    title: 'Retired Chief Engineer, 35+ Years',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMzYyODk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviewCount: 47,
    tagline: 'Aerospace systems expert specializing in complex project delivery',
    yearsExperience: 35,
    hourlyRate: 250,
    industry: 'Engineering',
    skills: ['Systems Engineering', 'Project Management', 'Aerospace', 'Quality Assurance', 'Team Leadership'],
    about: 'With over 35 years of experience in aerospace engineering, I have led teams on mission-critical projects for NASA and major defense contractors. My expertise spans systems design, quality assurance, and cross-functional team leadership. I am passionate about mentoring the next generation of engineers and helping companies solve their most complex technical challenges.',
    services: {
      project: {
        description: 'Comprehensive engineering consulting for complex systems design, quality assurance, and project delivery. Ideal for aerospace, defense, and high-reliability engineering projects.',
        startingPrice: 5000
      },
      mentorship: {
        description: '1-on-1 mentorship sessions for engineers looking to advance their careers, develop leadership skills, or navigate complex technical challenges.',
        startingPrice: 200
      }
    },
    experience: [
      {
        role: 'Chief Systems Engineer',
        company: 'Boeing Aerospace Division',
        years: '2005-2020',
        description: 'Led engineering teams of 50+ engineers on critical aerospace projects. Managed $100M+ project budgets.'
      },
      {
        role: 'Senior Engineering Manager',
        company: 'Lockheed Martin',
        years: '1995-2005',
        description: 'Oversaw quality assurance and systems integration for defense projects.'
      },
      {
        role: 'Systems Engineer',
        company: 'NASA Jet Propulsion Laboratory',
        years: '1988-1995',
        description: 'Contributed to multiple Mars rover missions and satellite programs.'
      }
    ],
    reviews: [
      {
        id: 'r1',
        client: 'AeroTech Solutions',
        rating: 5,
        comment: 'Dr. Chen provided invaluable guidance on our satellite systems project. Her deep expertise and clear communication saved us months of development time.',
        project: 'Satellite Communication System Review',
        date: '2024-10-15'
      },
      {
        id: 'r2',
        client: 'Defense Dynamics Inc.',
        rating: 5,
        comment: 'Exceptional technical knowledge and professionalism. Highly recommend for any complex engineering challenge.',
        project: 'Quality Assurance Consulting',
        date: '2024-09-03'
      }
    ],
    location: 'Seattle, WA'
  },
  {
    id: '2',
    name: 'Robert Williams',
    title: 'Former CFO, Fortune 500, 30+ Years',
    image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzdWl0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMzkxNjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5.0,
    reviewCount: 62,
    tagline: 'Financial strategy and M&A expert with proven Fortune 500 track record',
    yearsExperience: 30,
    hourlyRate: 300,
    industry: 'Finance & Business',
    skills: ['Financial Strategy', 'M&A', 'IPO Preparation', 'Risk Management', 'Board Advisory'],
    about: 'As a former CFO of multiple Fortune 500 companies, I bring extensive experience in financial strategy, mergers and acquisitions, and corporate governance. I have successfully led companies through IPOs, major acquisitions, and financial restructuring. Now I help growth-stage companies and established firms navigate complex financial decisions.',
    services: {
      project: {
        description: 'Strategic financial consulting for M&A, IPO preparation, financial restructuring, and board advisory services.',
        startingPrice: 8000
      },
      mentorship: {
        description: 'Executive coaching for CFOs, finance leaders, and entrepreneurs on financial strategy and career development.',
        startingPrice: 300
      }
    },
    experience: [
      {
        role: 'Chief Financial Officer',
        company: 'Global Tech Corp (Fortune 100)',
        years: '2010-2020',
        description: 'Led financial operations for $50B technology company. Oversaw successful $5B acquisition.'
      },
      {
        role: 'CFO',
        company: 'Midwest Manufacturing Inc.',
        years: '2003-2010',
        description: 'Took company public (IPO) and managed post-IPO growth strategy.'
      },
      {
        role: 'VP of Finance',
        company: 'Continental Financial Group',
        years: '1993-2003',
        description: 'Built financial planning and analysis division from ground up.'
      }
    ],
    reviews: [
      {
        id: 'r3',
        client: 'TechStart Ventures',
        rating: 5,
        comment: 'Robert helped us prepare for our Series B fundraising and provided invaluable insights on financial modeling and investor relations.',
        project: 'Series B Preparation Consulting',
        date: '2024-11-01'
      }
    ],
    location: 'New York, NY'
  },
  {
    id: '3',
    name: 'Dr. James Patterson',
    title: 'Retired Cardiologist, 28+ Years',
    image: 'https://images.unsplash.com/photo-1627776880991-808c5996527b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbmdpbmVlciUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzM5MTY0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviewCount: 38,
    tagline: 'Healthcare operations and clinical excellence consultant',
    yearsExperience: 28,
    hourlyRate: 200,
    industry: 'Healthcare & Medicine',
    skills: ['Clinical Operations', 'Healthcare Strategy', 'Patient Safety', 'Medical Training', 'Quality Improvement'],
    about: 'Board-certified cardiologist with nearly three decades of clinical practice and healthcare administration experience. I have served as Chief of Cardiology at a major teaching hospital and have extensive expertise in clinical operations, patient safety protocols, and medical staff training.',
    services: {
      project: {
        description: 'Healthcare consulting for hospitals, clinics, and medical startups. Focus on clinical operations, patient safety, and quality improvement.',
        startingPrice: 4000
      },
      mentorship: {
        description: 'Career mentorship for medical professionals, residents, and healthcare administrators.',
        startingPrice: 180
      }
    },
    experience: [
      {
        role: 'Chief of Cardiology',
        company: 'University Medical Center',
        years: '2008-2023',
        description: 'Led cardiology department of 45 physicians. Implemented new patient safety protocols reducing readmissions by 30%.'
      },
      {
        role: 'Attending Cardiologist',
        company: 'Memorial Hospital',
        years: '1995-2008',
        description: 'Provided clinical care and supervised cardiology fellows.'
      }
    ],
    reviews: [
      {
        id: 'r4',
        client: 'HealthTech Innovations',
        rating: 5,
        comment: 'Dr. Patterson provided critical insights for our cardiac monitoring device. His clinical perspective was exactly what we needed.',
        project: 'Medical Device Clinical Consultation',
        date: '2024-10-20'
      }
    ],
    location: 'Boston, MA'
  },
  {
    id: '4',
    name: 'Professor Linda Martinez',
    title: 'Professor Emerita, Education, 32+ Years',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMzYyODk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviewCount: 54,
    tagline: 'Curriculum design and educational leadership specialist',
    yearsExperience: 32,
    hourlyRate: 150,
    industry: 'Education & Academia',
    skills: ['Curriculum Development', 'Educational Leadership', 'Teacher Training', 'Assessment Design', 'EdTech Integration'],
    about: 'Former Dean of Education with expertise in curriculum design, teacher professional development, and educational technology integration. Published author of multiple textbooks and research papers on modern pedagogy.',
    services: {
      project: {
        description: 'Educational consulting for schools, districts, and EdTech companies. Curriculum design, teacher training programs, and assessment strategy.',
        startingPrice: 3000
      },
      mentorship: {
        description: 'Mentoring for educators, administrators, and EdTech entrepreneurs on career development and educational innovation.',
        startingPrice: 150
      }
    },
    experience: [
      {
        role: 'Dean, School of Education',
        company: 'State University',
        years: '2012-2024',
        description: 'Led faculty of 120+ across 8 departments. Redesigned entire teacher preparation curriculum.'
      },
      {
        role: 'Professor of Education',
        company: 'State University',
        years: '1992-2012',
        description: 'Taught graduate and undergraduate courses. Published 40+ peer-reviewed papers.'
      }
    ],
    reviews: [
      {
        id: 'r5',
        client: 'LearnNow EdTech',
        rating: 5,
        comment: 'Professor Martinez helped us design our K-12 math curriculum. Her expertise in pedagogy and assessment was invaluable.',
        project: 'Curriculum Development Consulting',
        date: '2024-11-05'
      }
    ],
    location: 'Austin, TX'
  },
  {
    id: '5',
    name: 'David Kumar',
    title: 'Former CTO, Tech Startups, 25+ Years',
    image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzdWl0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMzkxNjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviewCount: 71,
    tagline: 'Startup technology strategy and engineering leadership expert',
    yearsExperience: 25,
    hourlyRate: 280,
    industry: 'Technology',
    skills: ['Technology Strategy', 'Software Architecture', 'Team Building', 'Product Development', 'Cloud Infrastructure'],
    about: 'Veteran CTO with experience scaling engineering teams from 5 to 200+ engineers. Successfully led three startups through acquisition. Expert in cloud architecture, product development, and building high-performing engineering cultures.',
    services: {
      project: {
        description: 'CTO advisory for startups and scaleups. Technology strategy, architecture reviews, team building, and due diligence for investors.',
        startingPrice: 6000
      },
      mentorship: {
        description: 'Executive coaching for CTOs, VPs of Engineering, and technical founders on leadership and technology strategy.',
        startingPrice: 250
      }
    },
    experience: [
      {
        role: 'Chief Technology Officer',
        company: 'CloudScale (acquired by Microsoft)',
        years: '2015-2022',
        description: 'Built engineering team from 12 to 180. Led company through acquisition.'
      },
      {
        role: 'VP of Engineering',
        company: 'DataFlow Systems',
        years: '2008-2015',
        description: 'Scaled infrastructure to handle 100M+ daily users.'
      },
      {
        role: 'Senior Software Architect',
        company: 'Oracle',
        years: '1999-2008',
        description: 'Led architecture for enterprise database products.'
      }
    ],
    reviews: [
      {
        id: 'r6',
        client: 'NextGen AI',
        rating: 5,
        comment: 'David helped us restructure our engineering organization and improve our development velocity by 40%. Outstanding expertise.',
        project: 'Engineering Organization Consulting',
        date: '2024-10-28'
      }
    ],
    location: 'San Francisco, CA'
  },
  {
    id: '6',
    name: 'Sandra Morrison',
    title: 'Retired Partner, Big 4 Consulting, 27+ Years',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMzYyODk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5.0,
    reviewCount: 45,
    tagline: 'Business transformation and change management specialist',
    yearsExperience: 27,
    hourlyRate: 320,
    industry: 'Finance & Business',
    skills: ['Strategy Consulting', 'Change Management', 'Digital Transformation', 'Operations', 'Leadership Development'],
    about: 'Former Partner at a Big 4 consulting firm with deep expertise in business transformation, change management, and operational excellence. Led consulting engagements for Fortune 500 clients across multiple industries.',
    services: {
      project: {
        description: 'Strategic consulting for business transformation, change management, and operational improvement initiatives.',
        startingPrice: 7500
      },
      mentorship: {
        description: 'Executive mentorship for consultants and business leaders navigating organizational change and career advancement.',
        startingPrice: 280
      }
    },
    experience: [
      {
        role: 'Senior Partner',
        company: 'Deloitte Consulting',
        years: '2010-2024',
        description: 'Led global practice for digital transformation. Managed $200M+ in annual consulting revenue.'
      },
      {
        role: 'Managing Director',
        company: 'Deloitte Consulting',
        years: '2003-2010',
        description: 'Grew regional practice from $20M to $150M in revenue.'
      },
      {
        role: 'Senior Manager',
        company: 'Deloitte Consulting',
        years: '1997-2003',
        description: 'Led consulting engagements for Fortune 500 clients.'
      }
    ],
    reviews: [
      {
        id: 'r7',
        client: 'Regional Bank Corp',
        rating: 5,
        comment: 'Sandra guided our digital transformation initiative. Her strategic insights and change management expertise were game-changing.',
        project: 'Digital Transformation Strategy',
        date: '2024-09-15'
      }
    ],
    location: 'Chicago, IL'
  }
];

export const industries = [
  { name: 'Engineering', icon: 'cog', count: 234 },
  { name: 'Healthcare & Medicine', icon: 'heart-pulse', count: 187 },
  { name: 'Education & Academia', icon: 'graduation-cap', count: 156 },
  { name: 'Finance & Business', icon: 'trending-up', count: 298 },
  { name: 'Technology', icon: 'cpu', count: 312 },
  { name: 'Legal', icon: 'scale', count: 89 }
];

export const testimonials = [
  {
    id: '1',
    quote: 'ElderExpert connected us with a retired aerospace engineer who solved a problem our team had been stuck on for months. The ROI was immediate.',
    author: 'Sarah Chen',
    role: 'CEO, AeroTech Solutions',
    company: 'AeroTech Solutions'
  },
  {
    id: '2',
    quote: "As a retired CFO, I love being able to stay engaged with the business world on my own terms. The platform makes it easy to find meaningful projects.",
    author: 'Robert Williams',
    role: 'Former CFO, Fortune 500',
    company: 'ElderExpert Expert'
  },
  {
    id: '3',
    quote: 'The mentorship I received from a 30-year veteran in my field was transformational. It accelerated my career in ways I never imagined.',
    author: 'Michael Rodriguez',
    role: 'Senior Product Manager',
    company: 'Tech Startup'
  }
];
