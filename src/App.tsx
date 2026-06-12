import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
