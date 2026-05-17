import {motion} from 'motion/react';
import {ArrowRight} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop" 
          alt="Opera House" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl text-white font-serif leading-[0.9] tracking-tight mb-8"
          >
            {t('传承美声', 'The Art of', 'Kunsten af')} <br />
            <span className="serif-italic text-prestige-gold">{t('艺术精髓', 'Bel Canto', 'Bel Canto')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-white/70 font-light max-w-xl mb-10 leading-relaxed"
          >
            {t(
              '连接欧洲音乐传承与中国艺术热诚。专注于专业歌剧培训、大师班及国际文化交流。',
              'Bridging European musical heritage with Chinese artistic passion. Specialized in professional operatic training, masterclasses, and international cultural exchange.',
              'Brobygning mellem europæisk musikarv og kinesisk kunstnerisk passion. Specialiseret i professionel operatræning, masterclasses og international kulturel udveksling.'
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-5"
          >
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-prestige-gold text-prestige-ink font-bold text-sm tracking-widest uppercase hover:bg-white transition-all flex items-center gap-3"
            >
              {t('探索业务', 'Explore Our Services', 'Udforsk vores tjenester')}
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-white/30 text-white font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all"
            >
              {t('核心团队', 'Our Team', 'Vores team')}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute right-20 top-0 bottom-0 w-[1px] bg-white/10 hidden lg:block" />
      <div className="absolute right-40 top-0 bottom-0 w-[1px] bg-white/5 hidden xl:block" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20"
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.5em]">{t('向下滚动', 'Scroll', 'Rul')}</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
