import type {Course, NewsItem, Testimonial} from './types'
export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Combined Foundation Batch 2026',
    category: 'Combo',
    price: '₹1,499',
    image: 'https://appx-content-v2.classx.co.in/paid_course3/2026-01-02-0_9068946901066892.jpeg',
    link: 'https://rcaeducation.akamai.net.in/new-courses/110-combined-foundation-2026',
    duration: '8 Months',
    tags: ['Comprehensive', 'All Subjects']
  },
  {
    id: '2',
    title: 'PSC SPECIAL 2026',
    category: 'WBPSC',
    price: '₹1,499',
    image: 'https://appx-content-v2.classx.co.in/paid_course3/2026-01-02-0_7980988374505505.jpeg',
    link: 'https://rcaeducation.akamai.net.in/new-courses/111-psc-special-2026',
    duration: '8 Months',
    tags: ['Science', 'General Awareness', 'Maths', 'English']
  },
  {
    id: '3',
    title: 'WBP & KP 2026 (Prelims + Mains)',
    category: 'Police',
    price: '₹1,499',
    image: 'https://appx-content-v2.classx.co.in/paid_course3/2026-01-02-0_7581271926569991.jpeg',
    link: 'https://rcaeducation.akamai.net.in/new-courses/112-wbp-kp-special-2026',
    duration: '1 Year',
    tags: ['History', 'Geography', 'Polity', 'Economics', 'Maths', 'Reasoning']
  },
  {
    id: '4',
    title: 'SSC Special (CGL, CHSL & MTS) 2026',
    category: 'SSC',
    price: '₹1,499',
    image: 'https://appx-content-v2.classx.co.in/paid_course3/2026-01-02-0_9137430183145794.jpeg',
    link: 'https://rcaeducation.akamai.net.in/new-courses/114-ssc-special-cgl-chsl-mts-2026',
    duration: '12 Months',
    tags: ['Mock Tests', 'Live Classes']
  },
  {
    id: '5',
    title: 'Railway Special 2026 (All Exams)',
    category: 'Railway',
    price: '₹1,999',
    image: 'https://appx-content-v2.classx.co.in/paid_course3/2026-01-02-0_828858186154489.jpeg',
    link: 'https://rcaeducation.akamai.net.in/new-courses/113-railway-special-2026',
    duration: '8 Months',
    tags: ['Comprehensive', 'All Subjects']
  },
  // {
    // id: '6',
    // title: 'Banking Awareness & IBPS Special',
    // category: 'Banking',
    // price: '₹1,999',
    // image: 'https://picsum.photos/seed/banking/400/250',
    // link: 'https://rcaeducation.akamai.net.in/new-courses/110-combined-foundation-2026',
    // duration: '5 Months',
    // tags: ['Aptitude', 'Data Interpretation']
  // },
];

export const NEWS_ITEMS: NewsItem[] = [
  { id: 1, text: "SSC CGL 2024 Tier 1 Admit Card Released!", date: "Oct 24" },
  { id: 2, text: "New Batch for WBPSC Food SI starts from November 1st.", date: "Oct 22" },
  { id: 3, text: "Special 20% Discount on Online Test Series for limited time.", date: "Oct 20" },
  { id: 4, text: "Download Current Affairs Monthly PDF - October 2023.", date: "Oct 18" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    exam: "Selected in RRB NTPC",
    comment: "RCA Education's faculty is top-notch. The shortcut methods in Maths saved my time during exams.",
    avatar: "https://i.pravatar.cc/150?u=rahul"
  },
  {
    id: 2,
    name: "Priya Das",
    exam: "WBCS Executive",
    comment: "The study material is comprehensive and covers both prelims and mains in detail.",
    avatar: "https://i.pravatar.cc/150?u=priya"
  },
  {
    id: 3,
    name: "Amit Kumar",
    exam: "SSC CGL Inspector",
    comment: "Regular mock tests and performance analysis helped me identify my weak areas.",
    avatar: "https://i.pravatar.cc/150?u=amit"
  }
];
