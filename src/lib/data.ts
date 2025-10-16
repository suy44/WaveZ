import type { Event, Founder, GalleryImage, NavItem } from './types';

export const navItems: NavItem[] = [
  { title: 'About', href: '#about' },
  { title: 'Events', href: '#events' },
  { title: 'Gallery', href: '#gallery' },
  { title: 'Join Us', href: '#join-us' },
];

export const events: Event[] = [
  {
    id: 'Open-Day',
    title: 'WaveZ club open day',
    date: 'October 16, 2025',
    time: '9:00 AM - 12:00 AM',
    location: 'University Campus',
    description: 'Join us for a full day of tech talks, Representations, and networking with Club leaders.',
    longDescription: 'Experience the WaveZ Club Open Day — a full-day event designed to introduce students to the world of innovation, creativity, and technology. Discover our projects, attend interactive demonstrations, and engage in inspiring discussions with our members and leaders. Whether you’re curious about joining the club, exploring new tech fields, or connecting with a community of passionate creators, this open day is the perfect opportunity to learn, share, and be part of the WaveZ spirit.',
    imageId: 'event-1',
    speakers: [
        { name: 'Maisson Arache', title: 'First Host' },
        { name :'Sahrane zeyd', title:'Second Host'}
    ]
  },
  
  {
    id: 'Linux-workshop',
    title: 'Workshop in linux basics',
    date: 'October 22, 2025',
    time: 'Not fixed yet',
    location: 'University Campus',
    description: 'Join our Linux Workshop to explore the fundamentals of open-source systems and learn how to master the Linux environment through hands-on experience.',
    longDescription: 'Dive into the world of open-source technology with our comprehensive Linux Workshop. This session is designed for students and tech enthusiasts who want to understand the power, flexibility, and security of Linux systems. Through guided exercises, participants will learn essential commands, file management, shell navigation, and system customization. Whether you’re a beginner looking to get started or an aspiring developer aiming to enhance your technical toolkit, this workshop will equip you with practical skills and confidence to use Linux effectively in your projects and daily workflow.',
    imageId: 'event-2',
    speakers: [
        { name: 'Prof', title: 'Trainer' },
    ]
  },
  {
    id: 'Arduino-Workshop',
    title: 'Arduino Workshop',
    date: 'Not fixed yet',
    time: 'Not fixed yet',
    location: 'University Campus',
    description: 'Join our Arduino Workshop to learn the fundamentals of electronics and programming while building your own interactive projects.',
    longDescription: 'Step into the world of embedded systems with our hands-on Arduino Workshop. Designed for beginners and tech enthusiasts alike, this session will introduce you to the basics of microcontrollers, circuit design, and C/C++ programming. Participants will learn how to connect sensors, control motors, and bring ideas to life through practical experiments and guided projects. By the end of the workshop, you’ll have a solid understanding of how Arduino works and the confidence to start creating your own innovative hardware prototypes.',
    imageId: 'event-3',
    speakers: [
      {name: 'Djaber SEMAOUI', title:'Trainer'}]
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
    role: 'Secretary General',
    bio: 'Passionate learner and analytical thinker with 2 years of teamwork experience.',
    imageId: 'founder-2',
  },
  {
    id:'founder-3',
    name:'Maissoune ARACHE',
    role:'Vice president',
    bio:'Passionate about technology and design, constantly exploring new ways to create and innovate. Working toward developing a legendary game that will inspire players worldwide.',
    imageId:'founder'
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
