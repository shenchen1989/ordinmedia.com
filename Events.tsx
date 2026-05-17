import {motion} from 'motion/react';
import {ArrowRight, Calendar} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const events = [
  {
    tag: 'Report',
    tagZh: '媒体报道',
    tagDa: 'Rapport',
    title: '“金嗓子”徐晨将亮相轻歌剧院“Amore musica”音乐会',
    titleEn: '"Golden Voice" Xu Chen to Perform in Operetta Theatre\'s "Amore musica" Concerts',
    titleDa: '"Den gyldne stemme" Xu Chen optræder i Operetteteatrets "Amore musica" koncerter',
    subtitle: 'European Media Highlights Xu Chen\'s Upcoming Performance in Latvia',
    subtitleZh: '欧洲媒体专题报道：徐晨受邀参加拉脱维亚 Operetes teātris 音乐会',
    subtitleDa: 'Europæiske medier fremhæver Xu Chens kommende optræden i Letland',
    date: 'October 2025',
    dateZh: '2025年10月',
    dateDa: 'Oktober 2025',
    img: 'https://i.postimg.cc/28DtYQRY/wei-xin-tu-pian-20260516231249.png',
    link: 'https://sejas.tvnet.lv/8382045/zelta-balss-ipasnieks-cens-sjujs-uzstasies-operetes-teatra-koncertos-amore-musica'
  },
  {
    tag: 'Masterclass',
    tagZh: '大师班',
    tagDa: 'Masterclass',
    title: '2024 夏季美声大师班',
    titleEn: '2024 Summer Bel Canto Masterclass',
    titleDa: '2024 Sommer Bel Canto Masterclass',
    subtitle: 'Summer Bel Canto Masterclass in Malta',
    subtitleZh: '马耳他夏季贝尔坎托大师班',
    subtitleDa: 'Sommer Bel Canto Masterclass på Malta',
    date: 'July 2024',
    dateZh: '2024年7月',
    dateDa: 'Juli 2024',
    img: 'https://i.postimg.cc/ydNVvMnz/wei-xin-tu-pian-20260516232416.jpg',
    link: 'https://timesofmalta.com/article/opera-star-jose-cura-to-deliver-masterclasses-in-malta.895654'
  },
  {
    tag: 'Tour',
    tagZh: '艺术游学',
    tagDa: 'Rundrejse',
    title: '欧洲顶级剧院艺术游览',
    titleEn: 'European Opera House Arts Tour',
    titleDa: 'Europæisk operahus kunstturné',
    subtitle: 'Elite Theater & Conservatory Tour',
    subtitleZh: '顶级剧院与音乐学院深度游览',
    subtitleDa: 'Elite teater- og konservatorietur',
    date: '2026',
    dateZh: '2026年',
    dateDa: '2026',
    img: 'https://i.postimg.cc/pdLT65X4/55810245ff1010e4e8bd95823dc19b50.jpg',
    link: 'https://www.wiener-staatsoper.at/en/'
  },
  {
    tag: 'Report',
    tagZh: '专题报道',
    tagDa: 'Særrapport',
    title: '艺术赋能未来：中欧古典音乐艺术文化交流新模式',
    titleEn: 'Empowering the Future through Art: New Modes of Sino-European Classical Music Exchange',
    titleDa: 'Styrkelse af fremtiden gennem kunst: Nye former for kinesisk-europæisk klassisk musikudveksling',
    subtitle: 'Executive Artistic Director Xu Chen on Reconstructing Human Connection Through Sound',
    subtitleZh: '奥丁传媒执行艺术总监徐晨：用声音重构人与人的深度连接',
    subtitleDa: 'Administrerende kunstnerisk leder Xu Chen om at genopbygge den menneskelige forbindelse gennem lyd',
    date: 'March 2026',
    dateZh: '2026年3月',
    dateDa: 'Marts 2026',
    img: 'https://i.postimg.cc/VNhRwhZB/wei-xin-tu-pian-20260517133305.png',
    link: 'https://mp.weixin.qq.com/s/BVtAdrBO_HqBM2neC8lhwg'
  }
];

export default function Events() {
  const { t } = useLanguage();

  const EventContent = ({ event, i }: { event: any, i: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="flex flex-col lg:flex-row gap-10 group cursor-pointer"
      onClick={() => event.link && window.open(event.link, '_blank')}
    >
      <div className="lg:w-1/3 aspect-video lg:aspect-[4/3] overflow-hidden relative">
        <img 
          src={event.img} 
          alt={t(event.title, event.titleEn, event.titleDa)} 
          className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-white text-prestige-ink text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
          {t(event.tagZh, event.tag, event.tagDa)}
        </div>
      </div>

      <div className="lg:w-2/3 flex flex-col justify-center py-4 border-b border-prestige-ink/10 group-hover:border-prestige-gold transition-colors">
        <div className="flex items-center gap-3 text-prestige-gold mb-4">
          <Calendar size={14} />
          <span className="text-xs font-bold uppercase tracking-[0.2em]">
            {t(event.dateZh, event.date, event.dateDa)}
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl font-serif mb-2 group-hover:translate-x-2 transition-transform">
          {t(event.title, event.titleEn, event.titleDa)}
        </h3>
        <p className="text-prestige-ink/50 serif-italic text-lg md:text-xl group-hover:translate-x-2 transition-transform delay-75">
          {t(event.subtitleZh, event.subtitle, event.subtitleDa)}
        </p>
        <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
          {t(event.link ? '阅读全文' : '了解更多', event.link ? 'Read Full Article' : 'Learn More', event.link ? 'Læs hele artiklen' : 'Lær mere')} <ArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="events" className="py-24 bg-prestige-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-prestige-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              {t('活动动态', 'Schedule & Events', 'Program og begivenheder')}
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-prestige-ink mb-6">
              {t('最新动态', 'Upcoming Events', 'Kommende begivenheder')}
            </h2>
          </motion.div>
          <div className="w-24 h-[1px] bg-prestige-gold" />
        </div>

        <div className="space-y-12">
          {events.map((event, i) => (
            <EventContent key={i} event={event} i={i} />
          ))}
        </div>

        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="px-10 py-5 border-[2px] border-prestige-ink text-prestige-ink font-bold text-xs tracking-[0.3em] uppercase hover:bg-prestige-ink hover:text-white transition-all">
            {t('浏览所有项目', 'View All Programs', 'Se alle programmer')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
