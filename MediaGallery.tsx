import { useState, useEffect } from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {Play, Image as ImageIcon, X} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const mediaItems = [
  {
    type: 'image',
    title: 'Milan Masterclass 2023',
    titleZh: '2023 米兰大师班',
    titleDa: 'Milan Masterclass 2023',
    category: 'Education',
    categoryZh: '艺术教育',
    categoryDa: 'Uddannelse',
    thumbnail: 'https://i.postimg.cc/bJrbXFL9/wei-xin-tu-pian-20251114232025.jpg'
  },
  {
    type: 'image',
    title: 'Beijing Gala Concert',
    titleZh: '北京盛典音乐会',
    titleDa: 'Beijing Galla Koncert',
    category: 'Concert',
    categoryZh: '音乐会',
    categoryDa: 'Koncert',
    thumbnail: 'https://i.postimg.cc/wjk0gZ5r/65A0827-2.jpg'
  },
  {
    type: 'image',
    title: 'Vocal Performance',
    titleZh: '声乐演出回放',
    titleDa: 'Vokaloptræden',
    category: 'Performance',
    categoryZh: '舞台演出',
    categoryDa: 'Optræden',
    thumbnail: 'https://i.postimg.cc/zvC8BqGT/wei-xin-tu-pian-20260516231556.jpg'
  },
  {
    type: 'image',
    title: 'Orchestral Harmony',
    titleZh: '交响乐团合奏',
    titleDa: 'Orkesterharmoni',
    category: 'Concert',
    categoryZh: '音乐盛典',
    categoryDa: 'Koncert',
    thumbnail: 'https://i.postimg.cc/SRv7nb18/orchestra.jpg'
  },
  {
    type: 'image',
    title: 'International Masterclass',
    titleZh: '国际大师班交流',
    titleDa: 'International Masterclass',
    category: 'Education',
    categoryZh: '艺术教育',
    categoryDa: 'Uddannelse',
    thumbnail: 'https://i.postimg.cc/MK7hfsbm/ee32b1c303f038bb01ac45ece2df3f9f.jpg'
  },
  {
    type: 'image',
    title: 'Musical Gala Moment',
    titleZh: '音乐盛典瞬间',
    titleDa: 'Musikalsk gallamoment',
    category: 'Concert',
    categoryZh: '音乐盛典',
    categoryDa: 'Koncert',
    thumbnail: 'https://i.postimg.cc/Ssb69GGt/wei-xin-tu-pian-20260516231802.png'
  }
];

export default function MediaGallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="media" className="py-24 bg-[#0F0F0F] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-prestige-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              {t('影音资料', 'Archive & Media', 'Arkiv og medier')}
            </span>
            <h2 className="text-5xl md:text-6xl font-serif">{t('影音库', 'Media Gallery', 'Mediegalleri')}</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-sm text-sm font-light leading-relaxed"
          >
            {t(
              '甄选多场演出精彩片段、艺术教学工作坊以及国际文化交流实况。',
              'A curated collection of performance moments, educational workshops, and international artistic exchanges.',
              'En kurateret samling af optrædelsesmomenter, pædagogiske workshops og internationale kunstneriske udvekslinger.'
            )}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-video overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(item.thumbnail)}
            >
              <img 
                src={item.thumbnail} 
                alt={t(item.titleZh, item.title, item.titleDa)} 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center gap-2">
                  <ImageIcon className="text-white/50 w-10 h-10" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">{t(item.categoryZh, item.category, item.categoryDa)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <button className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.4em] hover:text-prestige-gold transition-colors">
            {t('进入全量档案库', 'Explore More Archive', 'Udforsk mere arkiv')}
            <div className="w-12 h-[1px] bg-white group-hover:bg-prestige-gold group-hover:w-20 transition-all duration-500" />
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110] p-2 bg-white/10 rounded-full"
            >
              <X size={24} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[85vh] object-contain shadow-2xl cursor-default"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
