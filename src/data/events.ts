export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  participants: string;
  formLink: string;
  category: string;
  categoryColor: string;
  gallery?: string[];
  contentBlocks?: string[];
}

export const eventsData: Event[] = [
  {
    id: 1,
    title: 'Innovation Hackathon 2026',
    date: 'March 15–16, 2026',
    time: '48 Hours',
    location: 'MAC Auditorium, IIT Roorkee',
    image: '/Ankit-7/images/event-hackathon.jpg',
    description: 'A 48-hour coding marathon where participants build innovative solutions to real-world problems. Prizes worth Rs. 5 lakhs.',
    participants: '500+',
    formLink: '#register',
    category: 'Technical',
    categoryColor: 'bg-orange-500',
  },
  {
    id: 2,
    title: 'Leadership Summit',
    date: 'April 5, 2026',
    time: '10:00 AM – 5:00 PM',
    location: 'Senate Hall, IIT Roorkee',
    image: '/Ankit-7/images/event-seminar.jpg',
    description: 'Learn from industry leaders and entrepreneurs about building successful careers and businesses.',
    participants: '1,000+',
    formLink: '#register',
    category: 'Seminar',
    categoryColor: 'bg-blue-500',
  },
  {
    id: 3,
    title: 'Village Outreach Program',
    date: 'February 20, 2026',
    time: '9:00 AM – 4:00 PM',
    location: 'Nearby Villages, Roorkee',
    image: '/Ankit-7/images/event-outreach.jpg',
    description: 'Teaching digital literacy and basic education to underprivileged children in nearby villages.',
    participants: '200+',
    formLink: '#register',
    category: 'Social',
    categoryColor: 'bg-green-500',
  },
  {
    id: 4,
    title: 'Research Showcase',
    date: 'May 10, 2026',
    time: '11:00 AM – 6:00 PM',
    location: 'LHC Complex, IIT Roorkee',
    image: '/Ankit-7/images/event-research.jpg',
    description: 'Showcase your research projects to faculty, industry experts, and fellow students.',
    participants: '300+',
    formLink: '#register',
    category: 'Academic',
    categoryColor: 'bg-purple-500',
  },
  {
    id: 5,
    title: 'Cultural Fest — Udgam',
    date: 'March 28–30, 2026',
    time: '3 Days',
    location: 'Convocation Ground, IIT Roorkee',
    image: '/Ankit-7/images/memory-cultural.jpg',
    description: 'Three days of cultural celebrations featuring music, dance, drama, art exhibitions, and food festivals.',
    participants: '10,000+',
    formLink: '#register',
    category: 'Cultural',
    categoryColor: 'bg-pink-500',
  },
  {
    id: 6,
    title: 'Green Campus Drive',
    date: 'April 22, 2026',
    time: '8:00 AM – 12:00 PM',
    location: 'IIT Roorkee Campus',
    image: '/Ankit-7/images/memory-tree.jpg',
    description: 'Join us in planting 1,000+ trees across the campus. Contribute to making our campus greener.',
    participants: '800+',
    formLink: '#register',
    category: 'Environmental',
    categoryColor: 'bg-teal-500',
  },
];
