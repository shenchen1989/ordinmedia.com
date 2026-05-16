import {motion} from 'motion/react';
import {Menu, X, Music, Globe} from 'lucide-react';
import {useState, useEffect} from 'react';
import {cn} from '@/src/lib/utils';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', nameEn: 'Home', nameDa: 'Hjem', href: '#home' },
    { name: '团队', nameEn: 'Team', nameDa: 'Team', href: '#team' },
    { name: '业务领域', nameEn: 'Services', nameDa: 'Tjenester', href: '#services' },
    { name: '影音资料', nameEn: 'Media', nameDa: 'Medier', href: '#media' },
    { name: '活动动态', nameEn: 'Events', nameDa: 'Begivenheder', href: '#events' },
    { name: '联系我们', nameEn: 'Contact', nameDa: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b',
        isScrolled 
          ? 'bg-prestige-paper/90 backdrop-blur-md py-4 border-prestige-ink/10' 
          : 'bg-transparent py-8 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-1 group cursor-pointer flex-shrink-0"
        >
          <div className="relative flex items-center">
            <span className={cn(
              "text-7xl md:text-8xl font-serif text-prestige-gold leading-none transition-all duration-500",
              isScrolled ? "scale-90" : "scale-100"
            )}>O</span>
            <div className="flex flex-col ml-1 mt-1">
              <div className="flex items-baseline gap-4 whitespace-nowrap">
                <h1 className={cn(
                  "text-2xl md:text-3xl font-serif tracking-tight leading-none transition-colors duration-500",
                  isScrolled ? "text-prestige-ink" : "text-white"
                )}>
                  rdin <span className="ml-1">M</span>edia
                </h1>
                {language === 'zh' && (
                  <span className={cn(
                    "text-xl md:text-2xl font-sans font-black tracking-tighter transition-colors duration-500 uppercase",
                    isScrolled ? "text-prestige-ink" : "text-white"
                  )}>奧丁傳媒</span>
                )}
              </div>
              <p className={cn(
                "text-[7px] md:text-[8px] uppercase tracking-[0.4em] font-sans mt-1 leading-none transition-colors duration-500 font-bold",
                isScrolled ? "text-prestige-ink/40" : "text-white/40"
              )}>Bel Canto Excellence</p>
            </div>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative flex flex-col items-center transition-colors duration-500",
                isScrolled ? "text-prestige-ink" : "text-white hover:text-prestige-gold"
              )}
            >
              <span className="text-sm font-medium tracking-wide whitespace-nowrap">{t(link.name, link.nameEn, link.nameDa)}</span>
              {language === 'zh' && (
                <span className="text-[9px] uppercase tracking-tighter opacity-40 group-hover:opacity-100 transition-opacity">{link.nameEn}</span>
              )}
              <motion.div 
                className="absolute -bottom-2 w-0 h-[1px] bg-prestige-gold group-hover:w-full transition-all duration-300"
              />
            </motion.a>
          ))}
          
          <div className={cn(
            "flex items-center gap-3 px-4 py-2 border transition-all rounded-full",
            isScrolled 
              ? "border-prestige-ink/10" 
              : "border-white/20 text-white"
          )}>
            <Globe className="w-3 h-3 opacity-40 shrink-0" />
            <div className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase">
              <button 
                onClick={() => setLanguage('zh')}
                className={cn(
                  "hover:text-prestige-gold transition-colors",
                  language === 'zh' ? "text-prestige-gold" : "opacity-50"
                )}
              >
                CN
              </button>
              <span className="opacity-20 text-[8px]">/</span>
              <button 
                onClick={() => setLanguage('en')}
                className={cn(
                  "hover:text-prestige-gold transition-colors",
                  language === 'en' ? "text-prestige-gold" : "opacity-50"
                )}
              >
                ENG
              </button>
              <span className="opacity-20 text-[8px]">/</span>
              <button 
                onClick={() => setLanguage('da')}
                className={cn(
                  "hover:text-prestige-gold transition-colors",
                  language === 'da' ? "text-prestige-gold" : "opacity-50"
                )}
              >
                DA
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "md:hidden p-2 transition-colors duration-500",
            isScrolled ? "text-prestige-ink" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-prestige-paper border-b border-prestige-ink/10 overflow-hidden"
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="flex flex-col"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-xl font-serif whitespace-nowrap">{t(link.name, link.nameEn, link.nameDa)}</span>
                {language === 'zh' && (
                  <span className="text-xs uppercase tracking-widest opacity-50">{link.nameEn}</span>
                )}
              </a>
            ))}
            <div className="flex items-center gap-3 px-4 py-2 border border-prestige-ink/20 w-fit rounded-full">
              <Globe className="w-4 h-4 opacity-40 shrink-0" />
              <div className="flex items-center gap-3 text-[10px] font-black tracking-widest uppercase">
                <button 
                  onClick={() => { setLanguage('zh'); setMobileMenuOpen(false); }}
                  className={cn(
                    "hover:text-prestige-gold transition-colors",
                    language === 'zh' ? "text-prestige-gold" : "text-prestige-ink/50"
                  )}
                >
                  CN
                </button>
                <span className="opacity-20 text-[8px]">/</span>
                <button 
                  onClick={() => { setLanguage('en'); setMobileMenuOpen(false); }}
                  className={cn(
                    "hover:text-prestige-gold transition-colors",
                    language === 'en' ? "text-prestige-gold" : "text-prestige-ink/50"
                  )}
                >
                  ENG
                </button>
                <span className="opacity-20 text-[8px]">/</span>
                <button 
                  onClick={() => { setLanguage('da'); setMobileMenuOpen(false); }}
                  className={cn(
                    "hover:text-prestige-gold transition-colors",
                    language === 'da' ? "text-prestige-gold" : "text-prestige-ink/50"
                  )}
                >
                  DA
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
