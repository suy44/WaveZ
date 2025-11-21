export type NavItem = {
  title: string;
  href: string;
};

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  longDescription: string;
  imageId: string;
  speakers: { name: string; title: string }[];
  link:string;
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageId: string;
}

export interface GalleryImage {
  id: string;
  imageId: string;
}
