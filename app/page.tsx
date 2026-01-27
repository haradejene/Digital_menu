import HeroSection from '@/Components/HeroSection';
import FeaturedMenu from '@/Components/FeaturedMenu';
import Navbar from '@/Components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedMenu />
    </>
  );
}