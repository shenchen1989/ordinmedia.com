import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, ExternalLink, Globe, Maximize2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export interface ProfileData {
  id: string;
  name: string;
  nameEn: string;
  nameDa: string;
  role: string;
  roleEn: string;
  roleDa: string;
  bioZh: string;
  bioEn: string;
  bioDa: string;
  img: string;
  link?: string;
  taglineZh?: string;
  taglineEn?: string;
  taglineDa?: string;
  extraImages?: string[];
}

interface MemberProfileProps {
  member: ProfileData;
  onClose: () => void;
}

export const MemberProfile = ({ member, onClose }: MemberProfileProps) => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-prestige-paper overflow-y-auto"
      >
      <div className="sticky top-0 z-10 bg-prestige-paper/80 backdrop-blur-md border-b border-prestige-ink/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="font-serif text-2xl">{t(member.name + ' 个人简历', member.nameEn + ' Profile', member.nameDa + ' Profil')}</h2>
        </div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-prestige-ink/5 rounded-full transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-4">
            <div className="aspect-[3/4] overflow-hidden rounded-sm border border-prestige-ink/5 shadow-lg">
              <img 
                src={member.img} 
                alt={member.nameEn}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-prestige-gold">
                <Award size={18} />
                <span className="text-sm font-bold uppercase tracking-widest">{t(member.role, member.roleEn, member.roleDa)}</span>
              </div>
              <div className="flex items-center gap-3 text-prestige-ink/40">
                <Globe size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">{t('国际合作', 'International Cooperation', 'Internationalt samarbejde')}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <h1 className="text-5xl md:text-6xl font-serif mb-6">{t(member.name, member.nameEn, member.nameDa)}</h1>
            {(member.taglineZh || member.taglineEn || member.taglineDa) && (
              <p className="text-prestige-gold font-bold tracking-[0.2em] mb-8 uppercase">
                {t(member.taglineZh || '', member.taglineEn || '', member.taglineDa || '')}
              </p>
            )}
            
            <div className="prose prose-prestige max-w-none">
              <div className="text-lg text-prestige-ink/80 leading-relaxed mb-8 whitespace-pre-wrap font-light">
                {t(member.bioZh, member.bioEn, member.bioDa)}
              </div>
            </div>

            {member.link && (
              <div className="flex gap-4 mt-12">
                <a 
                  href={member.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-prestige-ink px-6 py-3 hover:bg-prestige-ink hover:text-white transition-all"
                >
                  {member.nameEn === 'Xu Chen' ? t('访问官方网站', 'Official Website', 'Officiel hjemmeside') : t('参考资料', 'Reference', 'Reference')} <ExternalLink size={14} />
                </a>
              </div>
            )}
          </div>
        </div>

        {member.extraImages && member.extraImages.length > 0 && (
          <div className="border-t border-prestige-ink/10 pt-24">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-3xl font-serif">{t('获奖及媒体报道', 'Awards & Media Coverage', 'Priser og mediedækning')}</h3>
              <div className="w-24 h-[1px] bg-prestige-gold hidden md:block" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {member.extraImages.map((img, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="aspect-[4/5] bg-white group cursor-zoom-in relative overflow-hidden border border-prestige-ink/5"
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`Detail ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-prestige-ink/0 group-hover:bg-prestige-ink/20 transition-all flex items-center justify-center">
                    <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-10 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[210] p-2 bg-white/10 rounded-full"
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
    </>
  );
};
