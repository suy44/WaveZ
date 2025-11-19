import type { Event, Founder, GalleryImage, NavItem } from './types';

export const navItems: NavItem[] = [
  { title: 'About', href: '#about' },
  { title: 'Events', href: '#events' },
  { title: 'Gallery', href: '#gallery' },
  { title: 'Join Us', href: '#join-us' },
];

export const events: Event[] = [
{
    id: 'Arduino-Workshop',
    title: 'Arduino Workshop [Completed]',
    date: 'This event has passed',
    time: 'This event has passed',
    location: 'University Campus',
    description: 'Our Arduino Workshop brought participants together to explore the fundamentals of electronics and programming while building their own interactive projects.',
    longDescription: 'The Arduino Workshop immersed participants in the world of embedded systems. Designed for beginners and tech enthusiasts alike, the session introduced the basics of microcontrollers, circuit design, and C/C++ programming. Attendees learned how to connect sensors, control motors, and bring ideas to life through practical experiments and guided projects. By the end of the workshop, participants gained a solid understanding of how Arduino works and the confidence to create their own innovative hardware prototypes.',
    imageId: 'event-3',
    speakers: [
      {name: 'Djaber SEMAOUI', title:'Trainer'}]
  },
  
  {
    id: 'Chess-competition',
    title: 'Chess competition',
    date: 'November 23, 2025',
    time: 'Not fixed yet',
    location: 'University Campus',
    description: 'Join our Chess Competition to challenge your strategic thinking, sharpen your problem-solving skills, and engage in exciting matches with fellow enthusiasts in a competitive yet friendly environment.',
    longDescription: 'Immerse yourself in the strategic world of chess with our comprehensive Chess Competition. This event is designed for players of all levels who wish to test their skills, enhance their tactical thinking, and engage in intense, stimulating matches. Participants will have the opportunity to analyze positions, plan strategies, and learn from fellow competitors in a friendly yet challenging environment. Whether you’re a beginner eager to understand the fundamentals or an experienced player aiming to refine advanced techniques, this competition will provide a platform to sharpen your mind, build confidence, and enjoy the timeless game of chess to its fullest.',
    imageId: 'event-2',
  },
  {
    id: 'HighSchoolVisit-Tesala',
    title: 'High School Visit - Tesala',
    date: 'November 19, 2025',
    time: 'Not fixed yet',
    location: 'Tesala High School',
    description: 'Join us for a special visit to Tesala High School to explore university study fields and discover the exciting activities of our Wavez Club.',
    longDescription: 'During our visit to Tesala High School, students will have the opportunity to learn about various university study fields and gain insights into campus life. Our Wavez Club representatives will present engaging activities, projects, and initiatives, providing a firsthand look at how students can get involved and develop their skills. This event is designed to inspire, inform, and connect aspiring students with university opportunities and club experiences, offering guidance for their academic and extracurricular journeys.',
    imageId: 'event-1',
},

  
  
  
];

export const founders: Founder[] = [
  {
    id: 'founder-1',
    name: 'Wail KERMA',
    role: 'President',
    bio: 'Passionate robotics and AI student, founder and president of Wave-Z Club — driving innovation and teamwork to build the future.',
    imageId: 'founder-1',
  },
  {
    id: 'founder-2',
    name: 'Ibrahim KEDDAR',
    role: 'Vice president',
    bio: 'Passionate learner and analytical thinker with 2 years of teamwork experience.',
    imageId: 'founder-2',
  },
  {
    id: 'founder-10',
    name:'Rahaf HAMDANE',
    role: 'Leader of organization',
    bio:'Passionate about AI, innonvation, creativity, planning, and making events memorable through teamwork. Even though this is my first official club experience, I’m eager to learn, contribute, and help make every event stand out.',
    imageId:'founder-10'
  },
  {
    id: 'founder-4',
    name: 'Zineddine AOUDA',
    role: 'Leader of dev departement',
    bio:  'a tech enthusiast who loves working on robotics, coding, and creative projects. I enjoy learning new technologies and building things that solve real-world problems',
    imageId: 'founder-4',
  },
  {
    id: 'founder-5',
    name: 'Riyad RAACH',
    role: 'Leader of design departement',
    bio: 'passionate about tech, creativity, and innovation.Freelance graphic designer since 2018, video editor, and full-stack web developer dedicated to crafting smart and aesthetic digital experiences.',
    imageId: 'founder-5',
  },
  {
    id: 'founder-6',
    name: 'Bilal NOUAIRIA',
    role: 'Leader of cultural departement',
    bio:'experienced in chess clubs and chess tournaments, having multiple hobbies is what keeps my life smooth and stable that\'s why I keep learning new stuff every day and so everybody should do.',
    imageId: 'founder-6',
  },
  {
    id:'founder-9',
    name: 'Mohammed AYADOUN',
    role:'Leader of Finincial departement',
    bio:'Mohamed Ayadoun is a driven young volunteer passionate about environmental causes, teamwork, and personal growth. Experienced in international projects and fluent in English and French, he combines his interest in electronics with a commitment to making a positive impact.',
    imageId:'founder-9'
  },
  {
    id: 'founder-7',
    name: 'Mohamed Abdelaoui',
    role: 'HR Leader ',
    bio: 'Passionate about teamwork and communication, focused on helping others grow and fostering an environment of innovation and curiosity. Creative problem-solver driven by challenges.',
    imageId: 'founder-7',
  },
  {
    id:'founder-8',
    name:'Zeyd SAHRANE',
    role:'Host',
    bio:'Vice President of the Office in the Algerian Organization for Environment and Citizenship . Official Representative of the Organization in Conferences .Host of Conferences and Competitions at the secondary School',
    imageId:'founder-8',
  },
  
];

export const galleryImages: GalleryImage[] = [
    { id: '1', imageId: 'gallery-1'},
    { id: '2', imageId: 'gallery-2'},
    { id: '3', imageId: 'gallery-3'},
    { id: '4', imageId: 'gallery-4'},
    { id: '5', imageId: 'gallery-5'},
    { id: '6', imageId: 'gallery-6'},
]
