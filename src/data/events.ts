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

import sacPainting1 from '@/assets/events/sac_painting/Sac painting competetion/IMG-20250803-WA0018.jpg';
import sacPainting2 from '@/assets/events/sac_painting/Sac painting competetion/IMG_20250802_105216.jpg';
import sacPainting3 from '@/assets/events/sac_painting/Sac painting competetion/IMG_20250803_185530816.jpg';
import sacPainting4 from '@/assets/events/sac_painting/Sac painting competetion/IMG_20250803_192117.jpg';
import sacPainting5 from '@/assets/events/sac_painting/Sac painting competetion/IMG_20250803_200110058.jpg';

import bloodDonation1 from '@/assets/events/blood_donation/Blood Donation/20260123_165543.jpg';
import bloodDonation2 from '@/assets/events/blood_donation/Blood Donation/IMG-20260123-WA0161.jpg';
import bloodDonation3 from '@/assets/events/blood_donation/Blood Donation/IMG_20260123_112106.jpg';
import bloodDonation4 from '@/assets/events/blood_donation/Blood Donation/IMG_20260123_151359.jpg';

import shivaji1 from '@/assets/events/shivaji_jayanti/Chhatrapati Shivaji Jayanti/IMG_4815.jpg';

import maatiNiti1 from '@/assets/events/maati_niti/Maati Niti/1760596583985.jpg';
import maatiNiti2 from '@/assets/events/maati_niti/Maati Niti/20251015_115306.jpg';
import maatiNiti3 from '@/assets/events/maati_niti/Maati Niti/20251015_170101.jpg';
import maatiNiti4 from '@/assets/events/maati_niti/Maati Niti/IMG20251015104849.jpg';
import maatiNiti5 from '@/assets/events/maati_niti/Maati Niti/IMG_20251015_141527916.jpg';
import maatiNiti6 from '@/assets/events/maati_niti/Maati Niti/PHOTO-2025-10-15-22-48-57.jpg';

import posterBloodDonation from '@/assets/posters_extracted/Posters/Frame 1171277710.png';
import posterMaatiNiti from '@/assets/posters_extracted/Posters/MaatiNiti.png';
import posterVandeMataram from '@/assets/posters_extracted/Posters/vande Matram.jpeg';
import posterShivaji from '@/assets/posters_extracted/Posters/Chhatrapati Shivaji Maharaj Jayanti 2025.png';

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
  {
    id: 7,
    title: 'Blood Donation Camp',
    date: 'TBD',
    time: 'TBD',
    location: 'IIT Roorkee',
    image: posterBloodDonation,
    description: 'Join us for a noble cause and donate blood to save lives. Please follow all Do\'s and Don\'ts before donating.',
    participants: 'Open for all',
    formLink: '#register',
    category: 'Social',
    categoryColor: 'bg-red-500',
    gallery: [bloodDonation1, bloodDonation2, bloodDonation3, bloodDonation4],
  },
  {
    id: 8,
    title: 'Maati-Niti: Soil for Sustainability',
    date: '15 October 2025',
    time: '9:00 AM – 9:00 PM',
    location: 'MAC, IIT Roorkee',
    image: posterMaatiNiti,
    description: 'A day-long event featuring Maati-Mela, Clay Logue (Panel Discussion), and Kalpmitti Workshop.',
    participants: 'Open for all',
    formLink: '#register',
    category: 'Environmental',
    categoryColor: 'bg-amber-600',
    gallery: [maatiNiti1, maatiNiti2, maatiNiti3, maatiNiti4, maatiNiti5, maatiNiti6],
  },
  {
    id: 9,
    title: '150 Years of Vande Mataram',
    date: '18 May 2026',
    time: '5:00 PM – 6:00 PM',
    location: 'MAC Auditorium, IIT Roorkee',
    image: posterVandeMataram,
    description: 'Proudly celebrating 150 years of Vande Mataram with a Guest Lecture, Interactive Quiz, and Recitation.',
    participants: '200 Limited Seats',
    formLink: '#register',
    category: 'Patriotic',
    categoryColor: 'bg-orange-500',
  },
  {
    id: 10,
    title: 'Painting Competition',
    date: '3 August 2025',
    time: '3:00 PM – 6:00 PM',
    location: 'SAC Building',
    image: sacPainting1,
    description: 'Showcase your creativity and win exciting prizes in this Painting Competition.',
    participants: 'Limited Seats',
    formLink: '#register',
    category: 'Art',
    categoryColor: 'bg-rose-500',
    gallery: [sacPainting1, sacPainting2, sacPainting3, sacPainting4, sacPainting5],
  },
  {
    id: 11,
    title: 'Chhatrapati Shivaji Maharaj Jayanti',
    date: '21st February',
    time: '5:30 PM',
    location: 'MAC Audi',
    image: posterShivaji,
    description: 'Cultural program on the auspicious occasion of Chhatrapati Shivaji Maharaj Jayanti.',
    participants: 'Open for all',
    formLink: '#register',
    category: 'Cultural',
    categoryColor: 'bg-orange-600',
    gallery: [shivaji1],
  }
];
