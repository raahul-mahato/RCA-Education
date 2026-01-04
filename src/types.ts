
export interface Course {
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
  duration: string;
  tags: string[];
}

export interface NewsItem {
  id: number;
  text: string;
  date: string;
}

export interface Testimonial {
  id: number;
  name: string;
  exam: string;
  comment: string;
  avatar: string;
}

export const AppRoute = {
  HOME : 'home',
  COURSES : 'courses',
  MOCK_TESTS : 'mock-tests',
  STUDY_MATERIAL : 'study-material',
  ABOUT : 'about',
  CONTACT : 'contact',
  LOGIN : 'login'
} as const;
export type AppRoute = typeof AppRoute[keyof typeof AppRoute];