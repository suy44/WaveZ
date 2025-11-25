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
  description:
    'Our Arduino Workshop brought participants together to explore the fundamentals of electronics and programming while building their own interactive projects.',
  longDescription:
    'The Arduino Workshop immersed participants in the world of embedded systems. Designed for beginners and tech enthusiasts alike, the session introduced the basics of microcontrollers, circuit design, and C/C++ programming. Attendees learned how to connect sensors, control motors, and bring ideas to life through practical experiments and guided projects. By the end, participants gained a strong understanding of Arduino and the confidence to develop their own hardware prototypes.',
  imageId: 'event-3',
  speakers: [{ name: 'Djaber SEMAOUI', title: 'Trainer' }],
  link: '#',
},

{
  id: 'Chess-Competition',
  title: 'Chess Competition [Completed]',
  date: 'This event has passed',
  time: 'This event has passed',
  location: 'University Campus',
  description:
    'Our Chess Competition gathered players of all levels to challenge their strategic thinking, enhance their problem-solving abilities, and engage in exciting matches in a friendly competitive atmosphere.',
  longDescription:
    'The Chess Competition offered participants the chance to immerse themselves in strategic gameplay while improving tactical decision-making. Players analyzed complex positions, developed strategies, and learned from diverse opponents in a supportive environment. Whether beginners or experienced competitors, attendees enjoyed a memorable event that strengthened critical thinking, boosted confidence, and celebrated the timeless art of chess.',
  imageId: 'event-2',
  speakers: [],
  link: '#',
},

{
  id: 'High-School-Visit-Tesala',
  title: 'High School Visit - Tesala [Completed]',
  date: 'This event has passed',
  time: 'This event has passed',
  location: 'Tesala High School',
  description:
    'Our visit to Tesala High School gave students the opportunity to explore university study fields and discover the exciting projects and initiatives of the Wavez Club.',
  longDescription:
    'The Tesala High School visit introduced students to various university programs, campus life, and the creative ecosystem of the Wavez Club. Representatives shared interactive demonstrations, showcased student projects, and provided guidance on academic pathways and extracurricular development. This event inspired students, encouraged curiosity, and helped them connect their high-school journey with future university opportunities.',
  imageId: 'event-1',
  speakers: [],
  link: '#',
},
{
  id: 'Web-Dev-Workshop',
  title: 'Web Development Workshop (HTML, CSS, JS)',
  date: 'Thursday',
  time: '13:00 - 18:00',
  location: 'University Campus',
  description:
    'A hands-on workshop where participants will learn the core foundations of modern web development using HTML, CSS, and JavaScript.',
  longDescription:
    'This Web Development Workshop introduces participants to the essential building blocks of front-end development. Through guided exercises, attendees will learn how to structure webpages with HTML, style them using CSS, and add interactivity with JavaScript. The session focuses on real-world examples, best practices, and practical mini-projects that help learners understand how modern websites are built from scratch. By the end of the workshop, participants will have the confidence to start creating clean, responsive, and dynamic web pages on their own.',
  imageId: 'event-4',
  speakers: [],
  link: '#',
},

{
  id: 'App-Dev-Workshop-Flutter',
  title: 'App Development Workshop (Flutter)',
  date: 'Thursday',
  time: '13:00 - 18:00',
  location: 'University Campus',
  description:
    'Learn how to build modern cross-platform mobile apps using Flutter in an intensive hands-on workshop.',
  longDescription:
    'The App Development Workshop with Flutter offers participants a practical introduction to one of the most powerful frameworks for building cross-platform mobile applications. Attendees will explore the fundamentals of Dart programming, widget-based UI design, and responsive layouts. Through step-by-step guidance, participants will build functional components, understand project structure, and get familiar with essential tools used in professional mobile development. By the end of the session, learners will be equipped with the skills to begin creating smooth, beautiful apps for both Android and iOS.',
  imageId: 'event-5',
  speakers: [],
  link: '#',
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
