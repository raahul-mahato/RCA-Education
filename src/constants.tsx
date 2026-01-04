import type {Course, NewsItem, Testimonial} from './types'
export const COURSES: Course[] = [
  {
    id: '1',
    title: 'SSC CGL Master Course 2024',
    category: 'SSC',
    price: '₹2,499',
    image: 'https://picsum.photos/seed/ssc/400/250',
    duration: '6 Months',
    tags: ['Maths', 'English', 'Reasoning', 'GK']
  },
  {
    id: '2',
    title: 'RRB NTPC & Group D Crash Course',
    category: 'Railway',
    price: '₹1,499',
    image: 'https://picsum.photos/seed/railway/400/250',
    duration: '3 Months',
    tags: ['Science', 'General Awareness', 'Maths']
  },
  {
    id: '3',
    title: 'WBCS Foundation Batch (Prelims + Mains)',
    category: 'WBCS',
    price: '₹4,999',
    image: 'https://picsum.photos/seed/wbcs/400/250',
    duration: '1 Year',
    tags: ['History', 'Geography', 'Polity', 'Economics']
  },
  {
    id: '4',
    title: 'KP Constable Special Batch',
    category: 'Police',
    price: '₹999',
    image: 'https://picsum.photos/seed/police/400/250',
    duration: '4 Months',
    tags: ['Mock Tests', 'Live Classes']
  },
  {
    id: '5',
    title: 'Banking Awareness & IBPS Special',
    category: 'Banking',
    price: '₹1,999',
    image: 'https://picsum.photos/seed/banking/400/250',
    duration: '5 Months',
    tags: ['Aptitude', 'Data Interpretation']
  },
  {
    id: '6',
    title: 'General Combined Batch (All Exams)',
    category: 'Combo',
    price: '₹3,499',
    image: 'https://picsum.photos/seed/combo/400/250',
    duration: '8 Months',
    tags: ['Comprehensive', 'All Subjects']
  }
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
