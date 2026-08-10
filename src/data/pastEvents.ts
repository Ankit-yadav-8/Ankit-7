import tiranga1 from '@/assets/events/tiranga/DSC_2493.JPG';
import tiranga3 from '@/assets/events/tiranga/DSC_2511.JPG';
import tiranga4 from '@/assets/events/tiranga/DSC_2563.JPG';
import tiranga5 from '@/assets/events/tiranga/DSC_2482.JPG';
import tiranga6 from '@/assets/events/tiranga/DSC_2590.JPG';
import tiranga7 from '@/assets/events/tiranga/DSC_2603.JPG';

import sansad3 from '@/assets/events/chhatrasansad/img3.jpg';
import sansad5 from '@/assets/events/chhatrasansad/img5.jpg';

import convention1 from '@/assets/events/national_convention/national convention/145D6B17-DAFA-43DE-B3AE-0803284DB9CB.JPG.jpeg';
import convention2 from '@/assets/events/national_convention/national convention/15ED8C24-0CC7-41D5-A1F7-76C4CEBF4F16.JPG.jpeg';
import convention3 from '@/assets/events/national_convention/national convention/4EA2188B-C484-4256-A4C0-C152ED7A788D.JPG.jpeg';

import revivingBharat1 from '@/assets/events/reviving_bharat/Reviving Bharat/Photo from AMAN SWARAJ.jpg';
import revivingBharat2 from '@/assets/events/reviving_bharat/Reviving Bharat/WhatsApp Image 2024-09-18 at 21.31.01.jpeg';

import shivaji1 from '@/assets/events/shivaji_jayanti/Chhatrapati Shivaji Jayanti/IMG_4815.jpg';

import negotiation1 from '@/assets/events/negotiation_workshop/Negotiation Workshop/IMG_20250222_182419.jpg';
import negotiation2 from '@/assets/events/negotiation_workshop/Negotiation Workshop/IMG_20250222_182909.jpg';

import maatiNiti1 from '@/assets/events/maati_niti/Maati Niti/1760596583985.jpg';
import maatiNiti2 from '@/assets/events/maati_niti/Maati Niti/20251015_115306.jpg';
import maatiNiti3 from '@/assets/events/maati_niti/Maati Niti/20251015_170101.jpg';
import maatiNiti4 from '@/assets/events/maati_niti/Maati Niti/IMG20251015104849.jpg';
import maatiNiti5 from '@/assets/events/maati_niti/Maati Niti/IMG_20251015_141527916.jpg';
import maatiNiti6 from '@/assets/events/maati_niti/Maati Niti/PHOTO-2025-10-15-22-48-57.jpg';

import nydPainting1 from '@/assets/events/nyd_painting/National Youth Day Painting Competition/20260118_133524.jpg';
import nydPainting2 from '@/assets/events/nyd_painting/National Youth Day Painting Competition/20260118_133823.jpg';
import nydPainting3 from '@/assets/events/nyd_painting/National Youth Day Painting Competition/20260118_143319.jpg';

import bloodDonation1 from '@/assets/events/blood_donation/Blood Donation/20260123_165543.jpg';
import bloodDonation2 from '@/assets/events/blood_donation/Blood Donation/IMG-20260123-WA0161.jpg';
import bloodDonation3 from '@/assets/events/blood_donation/Blood Donation/IMG_20260123_112106.jpg';
import bloodDonation4 from '@/assets/events/blood_donation/Blood Donation/IMG_20260123_151359.jpg';

import posterNationalConvention from '@/assets/posters_extracted/Posters/Ceremonial Welcome.jpeg';
import posterRamMandir from '@/assets/posters_extracted/Posters/WhatsApp Image 2026-08-10 at 1.26.16 AM.jpeg';
import posterSansadMain from '@/assets/posters_extracted/Posters/93e25206-f776-4e9e-9273-73d57fc240fb.jpeg';
import posterSansad1 from '@/assets/posters_extracted/Posters/Think_India_IITR_Chhatra Sansad.png';
import posterSansad2 from '@/assets/posters_extracted/Posters/Instagram post - 933.png';
import posterSansad3 from '@/assets/posters_extracted/Posters/Chhatra Sansad 3.0 poster.jpg';
import posterVoterAwareness from '@/assets/posters_extracted/Posters/Event Poster.png';
import posterDSTLecture from '@/assets/posters_extracted/Posters/rfo.png';
import posterTirangaMain from '@/assets/posters_extracted/Posters/Tiranga yatra.png';
import posterTirangaRoute from '@/assets/posters_extracted/Posters/Route_Map.jpeg';
import posterRevivingBharat from '@/assets/posters_extracted/Posters/Reviving Bharat.jpeg';
import posterNYDLecture from '@/assets/posters_extracted/Posters/Frame 1171277710.png';
const posterMindsetMakeover = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80';
import posterShivaji from '@/assets/posters_extracted/Posters/Chhatrapati Shivaji Maharaj Jayanti 2025.png';
import posterNegotiation from '@/assets/posters_extracted/Posters/workshop (1).png';
import posterDesignWorkshop from '@/assets/posters_extracted/Posters/design workshop by Ar. Sehaj Singh.jpg';
import posterCorporateCompass from '@/assets/posters_extracted/Posters/Corporate compass ug 1y.jpg';
import posterMasterYourMind from '@/assets/posters_extracted/Posters/MYM 2 (1).png';
import posterMaatiNiti from '@/assets/posters_extracted/Posters/MaatiNiti.png';
import posterMaatiNitiWorkshop from '@/assets/posters_extracted/Posters/KalpMitti Workshop poster .png';
import posterNYDPainting from '@/assets/posters_extracted/Posters/National Youth Day.jpg';
import posterKhadiMela from '@/assets/posters_extracted/Posters/poster khadi.png';
import posterBloodDonation from '@/assets/posters_extracted/Posters/WhatsApp Image 2026-08-10 at 1.13.26 AM.jpeg';
export interface PastEvent {
  id: number;
  title: string;
  date: string;
  time?: string;
  location: string;
  attendees: string;
  image: string;
  summary: string;
  description: string;
  category: string;
  categoryColor: string;
  gallery?: string[];
  contentBlocks?: string[];
}

export const pastEventsData: PastEvent[] = [
  {
    id: 1,
    title: 'Think India National Convention 2024',
    date: 'Dec 21–23, 2024',
    time: '3 Days',
    location: 'IIT Roorkee',
    attendees: '280+',
    image: posterNationalConvention,
    summary: 'Three-day convention on "Bharat 4.0: Crafting a Self-Resilient Future by 2047".',
    description: 'The Think India National Convention 2024 was organised at IIT Roorkee from 21 to 23 December under the theme “Bharat 4.0: Crafting a Self-Resilient Future by 2047.” The convention brought together more than 280 students, faculty members, alumni, youth leaders, and distinguished speakers from across the country. Discussions focused on building a future rooted in innovation, sustainability, cultural confidence, and national pride. Sessions addressed legal reforms, media narratives, misinformation, global youth leadership, cybersecurity, economic resilience, and sustainable development. The convention also featured an Ideathon where students presented technology-driven solutions to real-world problems. Experts from institutions such as NITI Aayog, IITs, Cisco Research, and i-Hub Gujarat evaluated the ideas. Cultural performances celebrating Uttarakhand’s heritage added vibrancy to the programme. Supported by more than 100 student volunteers, the convention reflected the collective vision of a confident, responsible, and self-reliant Bharat.',
    category: 'Convention',
    categoryColor: 'bg-orange-500',
    gallery: [
      convention1,
      convention2,
      convention3,
    ],
    contentBlocks: [
      'The Think India National Convention 2024 was organised at IIT Roorkee from 21 to 23 December under the theme “Bharat 4.0: Crafting a Self-Resilient Future by 2047.” The convention brought together more than 280 students, faculty members, alumni, youth leaders, and distinguished speakers from across the country, creating an extraordinary gathering of minds dedicated to the nation’s progress. Discussions focused on building a future rooted in innovation, sustainability, cultural confidence, and national pride. The event set a powerful tone for intellectual discourse and actionable ideas that can propel India forward in its Amrit Kaal.',
      'Throughout the three days, various engaging sessions addressed a wide spectrum of critical topics including legal reforms, media narratives, combating misinformation, global youth leadership, cybersecurity, economic resilience, and sustainable development. Renowned experts and visionaries shared their insights, sparking thought-provoking conversations among the youth. These interactive dialogues empowered participants to think critically about their role in shaping policies and driving societal transformation, making every session a profound learning experience.',
      'A major highlight of the convention was the Ideathon, where students enthusiastically presented technology-driven solutions to real-world problems. Experts from prestigious institutions such as NITI Aayog, various IITs, Cisco Research, and i-Hub Gujarat meticulously evaluated the ideas, providing invaluable feedback to the young innovators. This platform not only fostered a spirit of entrepreneurship but also highlighted the immense potential of student-led technological interventions in addressing grassroots challenges.',
      'Beyond academic and policy discussions, cultural performances celebrating Uttarakhand’s rich heritage added immense vibrancy and joy to the programme. Supported seamlessly by more than 100 dedicated student volunteers who worked tirelessly behind the scenes, the convention was a resounding success. It beautifully reflected the collective vision of a confident, responsible, and self-reliant Bharat, leaving an indelible mark on all attendees and inspiring them to work towards the vision of 2047.'
    ],
  },
  {
    id: 2,
    title: 'Ram Mandir Pran Pratishtha Screening',
    date: 'Jan 22, 2024',
    time: 'Full Day',
    location: 'IIT Roorkee Campus',
    attendees: '170+',
    image: posterRamMandir,
    summary: 'Live screening of the Ram Lalla Pran Pratishtha ceremony and Deepotsav.',
    description: 'On 22 January 2024, Think India IIT Roorkee organised a live screening of the Ram Lalla Pran Pratishtha ceremony. It was the chapter’s first major event and created an atmosphere of collective reflection, cultural connection, and spiritual celebration. More than 170 undergraduate and postgraduate students gathered to witness the historic occasion. Prasadam was distributed among attendees after the screening. A Deepotsav illuminated the campus with rows of diyas, while volunteers created colourful rangolis and floral decorations. The Saraswati Mandir and nearby campus spaces became central points of participation. Students coordinated the event with discipline, creativity, and attention to detail. Senior faculty members, including the Director and Deputy Director of IIT Roorkee, joined the celebration. The event established a meaningful foundation for future cultural and nation-oriented initiatives by Think India.',
    category: 'Cultural',
    categoryColor: 'bg-red-500',
  },
  {
    id: 3,
    title: 'Chhatra Sansad',
    date: 'Apr 14, 2024 onwards',
    time: 'Various',
    location: 'IIT Roorkee',
    attendees: '200+',
    image: posterSansadMain,
    summary: 'Student-led platform for structured debate, critical thinking, and informed public dialogue.',
    description: 'Chhatra Sansad is Think India IIT Roorkee’s student-led platform for structured debate, critical thinking, and informed public dialogue. Its first edition, organised on 14 April 2024, explored “One Nation, One Election” while commemorating Dr B. R. Ambedkar Jayanti. Chhatra Sansad 2.0 examined the social, ethical, economic, and employment implications of living with or without artificial intelligence. The third edition focused on the Uniform Civil Code and encouraged discussion on equality, national integration, legal uniformity, and cultural diversity. Chhatra Sansad 4.0 debated whether free welfare schemes are damaging India’s economy. Participants presented researched arguments, questioned opposing views, and responded to challenging interventions. Faculty members, policy professionals, legal experts, and researchers evaluated the debates. The series has enabled students to engage thoughtfully with complex national issues. It continues to develop informed, articulate, responsible, and solution-oriented young citizens.',
    category: 'Debate',
    categoryColor: 'bg-blue-500',
    gallery: [
      posterSansadMain,
      sansad3,
      posterSansad3,
      sansad5,
      posterSansad2,
      posterSansad1,
    ],
    contentBlocks: [
      'Chhatra Sansad is Think India IIT Roorkee’s flagship student-led platform dedicated to structured debate, critical thinking, and informed public dialogue. Its inaugural edition, meticulously organised on 14 April 2024, deeply explored the highly debated topic of “One Nation, One Election” while commemorating the birth anniversary of Dr B. R. Ambedkar. Students critically examined the feasibility, constitutional implications, and democratic merits of synchronised elections across the vast landscape of the country. This marked the beginning of a legacy that aims to challenge conventional thinking and bring forward data-backed arguments on national policies.',
      'Building upon this strong foundation, Chhatra Sansad 2.0 examined the complex social, ethical, economic, and employment implications of humanity\'s coexistence with artificial intelligence. The session drew passionate arguments from both sides, with students presenting comprehensive data-driven analyses and robust ethical frameworks. Participants explored how AI could dramatically reshape education, healthcare, employment, and governance in India. Subsequently, the third edition shifted the focus to the Uniform Civil Code, encouraging a profound discussion on equality, national integration, legal uniformity, and cultural diversity. Students debated fiercely whether a common civil code would strengthen national unity or undermine India’s pluralistic traditions, guided by legal scholars and policy experts.',
      'In its most recent iteration, Chhatra Sansad 4.0 tackled a highly contentious economic issue, debating whether free welfare schemes and subsidies are damaging India’s long-term economic stability. Participants presented rigorously researched arguments, confidently questioned opposing views, and responded to incredibly challenging interventions from both the audience and the jury. The intensive discussion covered critical aspects of fiscal sustainability, effective poverty alleviation mechanisms, the realities of electoral politics, and the long-term economic impact of untargeted subsidies. The depth of research displayed by the speakers demonstrated a remarkable understanding of macroeconomic principles and grassroots realities.',
      'Throughout all these editions, esteemed faculty members, seasoned policy professionals, legal experts, and distinguished researchers have graciously evaluated the debates, providing invaluable feedback. The series has consistently enabled students to engage thoughtfully with complex national issues, exponentially developing their research skills, public speaking confidence, and the unique ability to construct rigorous, logical arguments under pressure. Today, Chhatra Sansad continues to grow as one of the most anticipated and prestigious intellectual events on the IIT Roorkee campus. It actively develops informed, articulate, responsible, and solution-oriented young citizens who are well-equipped to contribute meaningfully to India’s democratic discourse and future policy-making processes.'
    ]
  },
  {
    id: 4,
    title: 'Voter Awareness Campaign',
    date: 'Apr 15, 2024',
    time: 'Morning',
    location: 'LBS Ground, IIT Roorkee',
    attendees: '200+',
    image: posterVoterAwareness,
    summary: '"First Vote, Must Vote" — students formed a symbolic human chain spelling VOTE to encourage democratic participation.',
    description: 'Think India IIT Roorkee organised a large-scale Voter Awareness Campaign on 15 April 2024 at the LBS Ground. The initiative was conducted in association with the Student Affairs Council, Cultural Council, and National Service Scheme. It aimed to encourage students, particularly first-time voters, to participate actively in the democratic process. The campaign was organised around the message “First Vote, Must Vote.” Nearly 200 students came together to form a symbolic human chain spelling the word “VOTE.” The formation created a powerful visual reminder of the importance of informed electoral participation. Senior institute officials and Think India representatives addressed the gathering and emphasised the role of young citizens in strengthening democracy. First-time registered voters received specially designed campaign T-shirts. The programme inspired the student community to exercise its voting rights responsibly and confidently.',
    category: 'Campaign',
    categoryColor: 'bg-green-500',
  },
  {
    id: 5,
    title: 'DST Lecture by Dr. S. K. Varshney',
    date: 'May 21, 2024',
    time: '2 Hours',
    location: 'IIT Roorkee',
    attendees: '900+',
    image: posterDSTLecture,
    summary: 'Informative lecture on research-funding opportunities for students and faculty.',
    description: 'Think India IIT Roorkee, in collaboration with the Career Development Cell, organised an informative lecture on research-funding opportunities on 21 May 2024. The session was conducted by Dr S. K. Varshney, Advisor and former Head of International Cooperation at the Department of Science and Technology. He explained important national and international funding schemes available to students, researchers, and faculty members. The lecture covered research grants, academic collaborations, conference funding, proposal development, and doctoral and postdoctoral opportunities. Participants also received guidance on preparing effective research proposals and accessing Early Career Research grants. More than 900 registrations were received from participants across different academic disciplines. A hybrid format enabled wider participation beyond the physical venue. Students appreciated the clarity, accessibility, and practical relevance of the session. The programme strengthened awareness of research opportunities and encouraged a culture of innovation and informed academic planning.',
    category: 'Lecture',
    categoryColor: 'bg-purple-500',
  },
  {
    id: 6,
    title: 'Tiranga Yatra',
    date: 'Aug 15, 2024 & 2025',
    time: 'Morning',
    location: 'IIT Roorkee Campus',
    attendees: '2,000+',
    image: posterTirangaMain,
    summary: 'Prominent celebration of national unity, freedom, and civic responsibility on Independence Day.',
    description: 'The Tiranga Yatra is one of Think India IIT Roorkee’s most prominent celebrations of national unity, freedom, and civic responsibility. The 2024 edition was organised on Independence Day with two 500-metre-long national flags carried across the campus. Students, faculty members, and staff participated in traditional and tricolour-themed attire. Patriotic slogans such as “Vande Mataram” and “Bharat Mata Ki Jai” echoed throughout the institute. The procession concluded with a collective pledge to uphold democratic values, national integrity, and responsible citizenship. Building on its success, Tiranga Yatra 2025 was organised on an even larger scale. Nearly 2,000 members of the IIT Roorkee community participated while carrying a 600-metre-long Tiranga. The event encouraged reflection on the sacrifices, values, and duties that unite the nation. Both editions transformed the campus into a vibrant expression of patriotism, pride, and collective responsibility.',
    category: 'Patriotic',
    categoryColor: 'bg-orange-600',
    gallery: [
      tiranga1,
      posterTirangaRoute,
      tiranga3,
      tiranga4,
      tiranga5,
      tiranga6,
      tiranga7,
    ],
    contentBlocks: [
      'The Tiranga Yatra stands as one of Think India IIT Roorkee’s most prominent and visually spectacular celebrations of national unity, freedom, and civic responsibility. Each year, as Independence Day approaches, the campus transforms into a vibrant canvas of patriotism. The 2024 edition was organised with immense enthusiasm, featuring two magnificent 500-metre-long national flags carried proudly across the sprawling campus. Students, esteemed faculty members, and staff participated in traditional and tricolour-themed attire, painting a picture of profound cultural pride.',
      'From the very beginning of the procession, patriotic slogans such as “Vande Mataram” and “Bharat Mata Ki Jai” echoed throughout the institute, creating an electrifying atmosphere that resonated with everyone present. The procession wound its way past iconic campus landmarks, gathering momentum and drawing in more participants at every turn.',
      'This grand march was not merely a display of colors, but a deeply moving tribute to the sacrifices of freedom fighters. It concluded with a solemn collective pledge to uphold democratic values, national integrity, and responsible citizenship. Building on its resounding success, the Tiranga Yatra 2025 was organised on an even larger and more magnificent scale. Nearly 2,000 members of the IIT Roorkee community united, participating while carrying an awe-inspiring 600-metre-long Tiranga that seemed to stretch endlessly along the avenues. The sight of the massive tricolour fluttering against the backdrop of the historic campus buildings evoked an overwhelming sense of pride and unity among everyone present. Faculty members, staff, and students walked shoulder to shoulder, chanting patriotic slogans that reverberated across the grounds. This monumental effort not only celebrated the independence of the nation but also reinforced the commitment of the community to the continued progress of India, standing as a beautiful testament to the enduring spirit of the youth.',
      'The event encouraged deep reflection on the sacrifices, values, and duties that unite the nation in the modern era. Guest speakers and student leaders addressed the gathering, emphasizing the role of youth in nation-building and steering India towards a brighter, self-reliant future. Both editions of the Yatra successfully transformed the campus into a vibrant expression of patriotism, pride, and collective responsibility, leaving an indelible mark on the hearts of the IIT Roorkee community and setting a high standard for future national celebrations.'
    ]
  },
  {
    id: 7,
    title: 'Reviving Bharat Lecture',
    date: 'Sep 18, 2024',
    time: '2 Hours',
    location: 'IIT Roorkee',
    attendees: '150+',
    image: posterRevivingBharat,
    summary: 'A Scientific Civilization and Its Relevance in Present Times by Mr Aditya Jha.',
    description: 'Think India IIT Roorkee organised the “Reviving Bharat: A Scientific Civilization and Its Relevance in Present Times” lecture on 18 September 2024. The keynote speaker was Mr Aditya Jha, a Senior Application Engineer at Oracle and an alumnus of IIT Roorkee. The session explored India’s rich scientific, philosophical, and spiritual heritage. Mr Jha discussed how ancient Indian knowledge can provide meaningful perspectives on modern social and professional challenges. He highlighted values such as discipline, self-awareness, innovation, holistic development, and responsible leadership. Students were encouraged to combine personal growth with meaningful contributions to national development. Senior faculty members attended the programme and reinforced the importance of culturally rooted education. An interactive question-and-answer session enabled participants to discuss their aspirations and concerns. The lecture offered a thoughtful perspective on reconnecting modern progress with Bharat’s civilizational foundations.',
    category: 'Lecture',
    categoryColor: 'bg-purple-500',
    gallery: [
      revivingBharat1,
      revivingBharat2,
    ],
  },
  {
    id: 8,
    title: 'National Youth Day Lecture',
    date: 'Jan 12, 2025',
    time: '2 Hours',
    location: 'Online',
    attendees: '100+',
    image: posterNYDLecture,
    summary: 'Insightful online lecture celebrating the birth anniversary and legacy of Swami Vivekananda.',
    description: 'Think India IIT Roorkee commemorated National Youth Day on 12 January 2025 through an insightful online lecture. The programme celebrated the birth anniversary and enduring legacy of Swami Vivekananda. Around 100 students and young participants attended the session. Swami Sarvalokananda delivered the lecture and shared lessons from Swami Vivekananda’s life and teachings. He discussed leadership, ideal role models, innovative thinking, discipline, and responsible decision-making. Real-life examples were used to demonstrate how young people can overcome uncertainty and develop confidence. The session also emphasised problem-solving, clarity of thought, service to society, and moral courage. Participants were encouraged to direct their abilities towards personal development and nation-building. The programme inspired students to approach life with greater purpose, energy, self-belief, and social responsibility.',
    category: 'Lecture',
    categoryColor: 'bg-purple-500',
  },
  {
    id: 9,
    title: 'Mindset Makeover Programme',
    date: 'Jan 1–9, 2025',
    time: '9 Days',
    location: 'Online',
    attendees: '200+',
    image: posterMindsetMakeover,
    summary: 'A nine-day online challenge to develop discipline, resilience, consistency, and a growth-oriented mindset.',
    description: 'Mindset Makeover was a nine-day online challenge organised by Think India IIT Roorkee from 1 to 9 January 2025. The programme was designed to help participants develop discipline, resilience, consistency, and a growth-oriented mindset. Three speakers brought together ancient wisdom, modern professional experience, and practical self-development strategies. Mr Aditya Jha discussed discipline, early rising, meaningful reading, and the importance of sustained personal effort. Dr Aman Swaraj used lessons from the Mahabharata to explain how talent, success, and ambition must be handled responsibly. Mr Avdhesh Sharma encouraged participants to remain committed to resolutions and build consistency before seeking immediate results. Sessions addressed self-doubt, focus, clarity, fear of failure, and the dangers of becoming trapped by success. Participants were encouraged to transform temporary motivation into lasting habits. The programme demonstrated Think India’s commitment to developing confident, thoughtful, and future-ready youth.',
    category: 'Wellness',
    categoryColor: 'bg-teal-500',
  },
  {
    id: 10,
    title: 'Chhatrapati Shivaji Maharaj Jayanti',
    date: 'Feb 21, 2025',
    time: 'Evening',
    location: 'IIT Roorkee',
    attendees: '300+',
    image: posterShivaji,
    summary: 'Celebration honouring the life and legacy of one of India’s most admired warrior-kings.',
    description: 'Think India IIT Roorkee celebrated Chhatrapati Shivaji Maharaj Jayanti on 21 February 2025. The programme honoured the life and legacy of one of India’s most admired warrior-kings and visionary leaders. Students gathered in large numbers for a celebration rooted in history, culture, leadership, and national pride. The event began with the lighting of a ceremonial diya in memory of Shivaji Maharaj. Traditional Maharashtrian folk dances brought the courage, energy, and cultural spirit of his era to the stage. A powerful Powada recital narrated stories of bravery, sacrifice, and leadership. Students and professors also reflected on the continuing relevance of Shivaji Maharaj’s ideals. The celebration highlighted courage, integrity, strategic vision, good governance, and commitment to Swarajya. It encouraged young people to carry these values forward while contributing to a stronger and more self-reliant India.',
    category: 'Cultural',
    categoryColor: 'bg-red-500',
    gallery: [
      shivaji1,
    ],
  },
  {
    id: 11,
    title: 'Policy Negotiation Workshop',
    date: 'Feb 22, 2025',
    time: '2 Hours',
    location: 'IIT Roorkee',
    attendees: '50+',
    image: posterNegotiation,
    summary: 'Workshop introducing students to public policy, stakeholder dialogue, and structured negotiation.',
    description: 'Think India IIT Roorkee organised a two-hour Policy Negotiation Workshop on 22 February 2025. The session was conducted under the guidance of Mr Nikhil Arya, Community Manager at the Rashtram School of Public Leadership. The workshop introduced students to the fundamentals of public policy, stakeholder dialogue, and structured negotiation. Participants were divided into small groups and assigned a realistic policy simulation. The exercise involved planning an ethanol plant while addressing environmental regulations, employment concerns, government financing, labour laws, and local community interests. Students represented different stakeholders and negotiated to find balanced and practical solutions. The activity demonstrated how policy decisions require communication, research, compromise, and long-term thinking. Participants strengthened their teamwork, critical-thinking, and persuasive communication skills. The workshop effectively connected classroom learning with the real-world challenges of governance and nation-building.',
    category: 'Workshop',
    categoryColor: 'bg-yellow-500',
    gallery: [
      negotiation1,
      negotiation2,
    ],
  },
  {
    id: 12,
    title: 'Design Workshop',
    date: 'Apr 27, 2025',
    time: '2 Hours',
    location: 'Online',
    attendees: '60+',
    image: posterDesignWorkshop,
    summary: 'Online Design Workshop to introduce students to graphic and visual design.',
    description: 'Think India IIT Roorkee organised an online Design Workshop on 27 April 2025 to introduce students to graphic and visual design. The two-hour programme was conducted by Ar. Sehaj Singh and attracted approximately 60 participants. Students learned the fundamental differences between effective and ineffective design. The workshop explained how design decisions should respond to user needs, functionality, clarity, and visual appeal. Real-world examples and interactive discussions made the concepts easy to understand. Participants explored important principles of graphic composition, visual communication, and user experience. They were introduced to tools including Adobe Photoshop, Illustrator, Figma, Canva, and emerging artificial-intelligence-based design platforms. Practical exercises allowed students to apply the concepts during the session. The workshop encouraged creativity, structured thinking, digital skills, and an appreciation of design as an important problem-solving discipline.',
    category: 'Workshop',
    categoryColor: 'bg-yellow-500',
  },
  {
    id: 13,
    title: 'Corporate Compass',
    date: 'Apr 19, 2025',
    time: '2 Hours',
    location: 'Online',
    attendees: '50+',
    image: posterCorporateCompass,
    summary: 'Online internship and placement guidance session for second-year students.',
    description: 'Corporate Compass was an online internship and placement guidance session organised on 19 April 2025. The programme was designed primarily for second-year IIT Roorkee students preparing for future professional opportunities. Around 50 students participated in discussions on internships, career preparation, and the institute’s placement ecosystem. Speakers included Vedant Vardhan, Yash Tewari, and Pradipta Sundar Sahoo. They shared personal experiences from internships, corporate recruitment, and entrepreneurial journeys. Students received practical guidance on building effective résumés and presenting their skills professionally. The session also covered the use of LinkedIn, Twitter, and other platforms for networking and identifying opportunities. Speakers highlighted the importance of early preparation and maintaining an updated professional profile. Corporate Compass equipped students with realistic expectations and practical strategies for approaching internships, placements, and long-term career development.',
    category: 'Guidance',
    categoryColor: 'bg-blue-500',
  },
  {
    id: 14,
    title: 'Master Your Mind',
    date: 'Jul 30, 2025',
    time: '2 Hours',
    location: 'MAC Auditorium',
    attendees: '650+',
    image: posterMasterYourMind,
    summary: 'Guest lecture on meditation, mental clarity, and the Sanatan approach to living.',
    description: 'Think India IIT Roorkee organised the “Master Your Mind” guest lecture on 30 July 2025 at the MAC Auditorium. The event brought together more than 650 participants for a discussion on meditation, mental clarity, and the Sanatan approach to living. The speaker, Mr Avdhesh Sharma, is an IIT Roorkee alumnus and Software Development Engineer at Microsoft. Drawing from his personal experiences, he discussed the pressures of academic competition, corporate life, and a technology-driven world. He explained how meditation can help individuals develop focus, emotional stability, purpose, and resilience. The lecture connected ancient wisdom with the practical challenges faced by modern students and professionals. Participants responded positively to the authenticity and relevance of the discussion. The packed auditorium reflected a strong interest in conversations about inner well-being and balanced living. The event reinforced the importance of developing accomplished professionals who are also self-aware, grounded, and purposeful individuals.',
    category: 'Wellness',
    categoryColor: 'bg-teal-500',
  },
  {
    id: 15,
    title: 'Maati-NITI: A Return to the Roots',
    date: 'Oct 12, 2025',
    time: 'Full Day',
    location: 'IIT Roorkee Campus',
    attendees: '5,000+',
    image: posterMaatiNiti,
    summary: 'Initiative to reconnect young Indians with the soil, traditions, and artisanal heritage of Bharat.',
    description: 'Maati-NITI was conceived as an initiative to reconnect young Indians with the soil, traditions, and artisanal heritage of Bharat. The programme began on 12 October 2025 with a quiz competition that attracted 90 participants. It later expanded into the Maati Mela, which welcomed nearly 5,000 students, faculty members, and staff. Visitors explored handcrafted artefacts, terracotta products, traditional cookware, clay diyas, and regional crafts. The mela created a direct connection between the campus community and artisans preserving generations of knowledge. A pottery and clay-modelling workshop, led by Ms Garima Negi, provided hands-on learning to around 150 participants. School students also participated in interactive pottery and quiz activities. The initiative celebrated dignity of work, environmental consciousness, cultural pride, and self-reliance. Maati-NITI demonstrated that traditional skills are not simply objects of the past but valuable principles for a sustainable and rooted future.',
    category: 'Cultural',
    categoryColor: 'bg-red-500',
    gallery: [
      posterMaatiNitiWorkshop,
      maatiNiti1,
      maatiNiti2,
      maatiNiti3,
      maatiNiti4,
      maatiNiti5,
      maatiNiti6,
    ],
  },
  {
    id: 16,
    title: 'National Youth Day Painting Competition',
    date: 'Jan 18, 2026',
    time: 'Morning',
    location: 'Old Horticulture Department Garden',
    attendees: '100+',
    image: posterNYDPainting,
    summary: 'Painting competition to mark National Youth Day where young artists expressed themes connected with culture and history.',
    description: 'Think India IIT Roorkee organised a painting competition on 18 January 2026 to mark National Youth Day. The event was held in the calm and natural surroundings of the Old Horticulture Department Garden. Young artists were invited to express their ideas through themes connected with culture, nature, and history. Participants produced artworks inspired by folk traditions, national heritage, natural landscapes, and significant moments from India’s past. Each painting reflected a distinct artistic style and personal interpretation. The open setting encouraged creativity, thoughtful observation, and meaningful interaction among participants. Winners were recognised and presented with prizes for their artistic excellence. The event demonstrated how art can preserve memory, identity, values, and cultural continuity. It reflected Think India’s commitment to nurturing young minds that are both creative and deeply connected to their heritage.',
    category: 'Cultural',
    categoryColor: 'bg-red-500',
    gallery: [
      nydPainting1,
      nydPainting2,
      nydPainting3,
    ],
  },
  {
    id: 17,
    title: 'Khadi Mela',
    date: 'Oct 17–20, 2025',
    time: '4 Days',
    location: 'IIT Roorkee Campus',
    attendees: '5,000+',
    image: posterKhadiMela,
    summary: 'Celebration of Swadeshi, craftsmanship, and self-reliance featuring traditional handcrafted products.',
    description: 'Think India IIT Roorkee organised the Khadi Mela from 17 to 20 October 2025 as a celebration of Swadeshi, craftsmanship, and self-reliance. Conducted during the festive season, the mela attracted nearly 5,000 students, faculty members, staff, and campus residents. The exhibition featured traditional and handcrafted products from different regions of India. Visitors explored Maheshwari suits, Madhubani sarees, Kashmiri garments, Bagru and Sanganeri textiles, Khadi kurtas, Uttarakhand tweed jackets, Punjabi juttis, and other regional products. The mela gave artisans and sellers a platform to connect directly with the IIT Roorkee community. Special discounts encouraged students to purchase locally made and culturally significant products. The event also added a festive spirit to the Diwali celebrations on campus. By promoting Khadi and indigenous craftsmanship, the mela strengthened awareness of the “Vocal for Local” and Swadeshi movements. It successfully combined cultural celebration with support for local artisans and a self-reliant economy.',
    category: 'Swadeshi',
    categoryColor: 'bg-yellow-600',
  },
  {
    id: 18,
    title: 'Parakram Diwas: Blood Donation Camp',
    date: 'Jan 23, 2026',
    time: 'Full Day',
    location: 'Student Activity Centre',
    attendees: '400+',
    image: posterBloodDonation,
    summary: 'Blood Donation Camp to commemorate Parakram Diwas and the birth anniversary of Netaji Subhas Chandra Bose.',
    description: 'Think India IIT Roorkee organised a Blood Donation Camp on 23 January 2026 to commemorate Parakram Diwas and the birth anniversary of Netaji Subhas Chandra Bose. The camp was conducted at the Student Activity Centre with the support of government and private blood banks. Nearly 400 students, faculty members, staff, and professors participated in the initiative. Senior institute officials attended the programme and encouraged donors and volunteers. Despite heavy rainfall, the IIT Roorkee community responded with determination and enthusiasm. Medical teams ensured that the collection process remained safe, systematic, and efficient. Donors received mementos and gift bags as tokens of gratitude for their contribution. Volunteers played an important role in coordinating registrations, assisting participants, and maintaining an organised environment. The camp transformed the ideals of courage, compassion, service, and collective responsibility into meaningful action.',
    category: 'Service',
    categoryColor: 'bg-pink-500',
    gallery: [
      bloodDonation1,
      bloodDonation2,
      bloodDonation3,
      bloodDonation4,
    ],
  }
];
