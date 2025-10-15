import About from '@/components/sections/about';
import Events from '@/components/sections/events';
import Gallery from '@/components/sections/gallery';
import Hero from '@/components/sections/hero';
import JoinUs from '@/components/sections/join-us';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Events />
      <Gallery />
      <JoinUs />
    </>
  );
}
