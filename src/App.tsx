import { Navbar, Footer, FloatingContact } from './components/Layout';
import { Hero, Services, BeforeAfter, WhyUs, FAQ, FinalCTA } from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <WhyUs />
        <Services />
        <BeforeAfter />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
