import {motion} from 'motion/react';
import {BookOpen, Users, Music2, PlaneTakeoff, Trees, Globe} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const services = [
  {
    title: '中丹文化交流',
    titleEn: 'Sino-Danish Cultural Exchange',
    titleDa: 'Dansk-kinesisk kulturel udveksling',
    description: '促进中国与丹麦在音乐与艺术领域的深度合作与对话。',
    descriptionEn: 'Promoting deep cooperation and dialogue between China and Denmark in music and art.',
    descriptionDa: 'Fremmer dybt samarbejde og dialog mellem Kina og Danmark inden for musik og kunst.',
    icon: Globe,
    img: 'https://i.postimg.cc/bwkPj0F5/d529f75912ec720bfead7c1997b7dd9c.jpg'
  },
  {
    title: '音乐培训',
    titleEn: 'Music Training',
    titleDa: 'Musiktræning',
    description: '专业美声唱法辅导，提供线上与线下灵活教学，涵盖发声、技巧及曲目诠释。',
    descriptionEn: 'Professional Bel Canto coaching with online and offline options, covering vocal techniques and repertoire.',
    descriptionDa: 'Professionel Bel Canto-coaching med online- og offline-muligheder, der dækker sangteknikker og repertoire.',
    icon: Music2,
    img: 'https://i.postimg.cc/XJGSQwFR/wei-xin-tu-pian-20260517120108.png'
  },
  {
    title: '音乐大师班',
    titleEn: 'Masterclasses',
    titleDa: 'Masterclasses',
    description: '对话国际名师，在高强度的艺术交流中实现突破。',
    descriptionEn: 'Learn from international masters through intensive artistic exchange.',
    descriptionDa: 'Lær fra internationale mestre gennem intensiv kunstnerisk udveksling.',
    icon: BookOpen,
    img: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: '音乐会与交流',
    titleEn: 'Concerts & Exchange',
    titleDa: 'Koncerter og udveksling',
    description: '策划中欧高水准音乐会，搭建跨国艺术合作桥梁。',
    descriptionEn: 'Curating world-class concerts and bridging Sino-European artistic cooperation.',
    descriptionDa: 'Kuratering af koncerter i verdensklasse og brobygning af kinesisk-europæisk kunstnerisk samarbejde.',
    icon: Users,
    img: 'https://i.postimg.cc/7LCZM8LN/wei-xin-tu-pian-20251114232034.jpg'
  },
  {
    title: '音乐游学访问',
    titleEn: 'Music Study Tours',
    titleDa: 'Musikstudieture',
    description: '深度走访欧洲知名剧院与学院，感悟艺术起源。',
    descriptionEn: 'Immersive tours of legendary European theaters and conservatories.',
    descriptionDa: 'Fordybende ture til legendariske europæiske teatre og konservatorier.',
    icon: PlaneTakeoff,
    img: 'https://i.postimg.cc/1XFFWV5z/2834e9bea8d43bbf2850294f063b1363.jpg'
  },
  {
    title: '艺术研习营',
    titleEn: 'Art Study Camps',
    titleDa: 'Kunststudielejre',
    description: '为音乐家和音乐爱好者设计的艺术研习营，涉及全年度灵活开展，深化艺术造诣。',
    descriptionEn: 'Artistic camps designed for musicians and music lovers, available year-round to deepen artistic expertise.',
    descriptionDa: 'Kunstneriske lejre designet til musikere og musikelskere, tilgængelige hele året rundt for at uddybe kunstnerisk ekspertise.',
    icon: Trees,
    img: 'https://i.postimg.cc/25j4z525/c3c51962ceebd78fb248e620192cf6c6.jpg'
  },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-prestige-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[200px] font-serif serif-italic leading-none">Arts</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-prestige-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              {t('业务领域', 'Expertise & Services', 'Ekspertise og tjenester')}
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-prestige-ink">
              {t('核心业务', 'Our Services', 'Vores tjenester')}
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-prestige-ink/50 max-w-sm text-sm"
          >
            {t(
              '我们为美声教育与国际文化交流提供全方位解决方案，量身定制专业化路径。',
              'We offer holistic solutions for vocal education and international cultural exchange, tailored for both enthusiasts and professionals.',
              'Vi tilbyder helhedsorienterede løsninger til sangundervisning og international kulturel udveksling, skræddersyet til både entusiaster og professionelle.'
            )}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-6 rounded-sm">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-prestige-ink/20 group-hover:bg-prestige-ink/40 transition-all" />
                <div className="absolute top-6 left-6 w-12 h-12 bg-white flex items-center justify-center rounded-sm">
                  <service.icon className="text-prestige-ink w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-2xl font-serif mb-2 group-hover:text-prestige-gold transition-colors">
                {t(service.title, service.titleEn, (service as any).titleDa)}
              </h3>
              <p className="text-prestige-ink/60 text-sm font-light leading-relaxed mb-4">
                {t(service.description, service.descriptionEn, (service as any).descriptionDa)}
              </p>
              
              <div className="h-[1px] w-0 bg-prestige-gold group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
