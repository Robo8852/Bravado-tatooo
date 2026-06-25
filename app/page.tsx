import {Navbar} from '@/components/Navbar';
import {SplitHero} from '@/components/SplitHero';
import {TattooSection} from '@/components/TattooSection';
import {BarberSection} from '@/components/BarberSection';
import {GallerySection} from '@/components/GallerySection';
import {AboutSection} from '@/components/AboutSection';
import {ContactSection} from '@/components/ContactSection';
import {Footer} from '@/components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-bravado-dark text-white selection:bg-bravado-neon selection:text-bravado-dark">
      <Navbar />
      <main>
        <SplitHero />
        <TattooSection />
        <BarberSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
