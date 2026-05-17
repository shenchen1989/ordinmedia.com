import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Services from './components/Services';
import MediaGallery from './components/MediaGallery';
import Events from './components/Events';
import Footer from './components/Footer';
import {motion, useScroll, useSpring} from 'motion/react';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative selection:bg-prestige-gold selection:text-prestige-ink">
      {/* Elegant Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-prestige-gold z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        
        <div className="relative z-10">
          <Team />
          
          <div className="max-w-7xl mx-auto px-6 py-24 flex items-center gap-10 opacity-10">
            <div className="h-[1px] flex-1 bg-prestige-ink" />
            <span className="font-serif italic text-2xl">{t('美声精神', 'Bel Canto Spirit', 'Bel Canto-ånd')}</span>
            <div className="h-[1px] flex-1 bg-prestige-ink" />
          </div>

          <Services />
          
          <div id="media">
            <MediaGallery />
          </div>
          
          <Events />

          {/* Call to Action Section */}
          <section id="contact" className="py-32 bg-prestige-gold flex flex-col items-center justify-center text-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <h2 className="text-4xl md:text-6xl font-serif text-prestige-ink mb-8">
                {t('准备好寻找您的', 'Ready to find your', 'Klar til at finde din')} <br />
                <span className="serif-italic border-b-2 border-prestige-ink pb-2">{t('本真之声吗？', 'Authentic Voice?', 'autentiske stemme?')}</span>
              </h2>
              <p className="text-prestige-ink/70 text-lg mb-12 font-medium">
                {t('联系我们，开启您的意式美声艺术之旅。', 'Contact us to begin your journey into the art of Italian Bel Canto.', 'Kontakt os for at begynde din rejse ind i kunsten af italiensk Bel Canto.')}
              </p>
              <a 
                href="#contact"
                className="inline-block bg-prestige-ink text-white px-12 py-6 text-sm font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-prestige-ink transition-all shadow-2xl"
              >
                {t('联系我们', 'Contact Us', 'Kontakt os')}
              </a>
            </motion.div>
          </section>
        </div>

        <Footer />
      </motion.div>
    </main>
  );
}
