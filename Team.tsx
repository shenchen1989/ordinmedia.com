import {motion} from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '@/src/lib/utils';

const coreTeam = [
  {
    id: 'xu-chen',
    name: '徐晨',
    nameEn: 'Xu Chen',
    nameDa: 'Xu Chen',
    role: '执行艺术总监 & 首席男高音',
    roleEn: 'Executive Artistic Director & Principal Tenor',
    roleDa: 'Administrerende kunstnerisk leder & Ledende tenor',
    description: '活跃于国际舞台的美声男高音，致力于中欧古典音乐艺术文化交流。',
    descriptionEn: 'A lyric tenor active on international stages, dedicated to artistic and cultural exchange of Sino-European classical music.',
    descriptionDa: 'En lyrisk tenor aktiv på internationale scener, dedikeret til kunstnerisk og kulturel udveksling af kinesisk-europæisk klassisk musik.',
    img: 'https://i.postimg.cc/MpCqJsxW/wei-xin-tu-pian-20260516234424.jpg',
    link: 'https://www.chenxutenor.com/'
  }
];

const advisors = [
  {
    id: 'salvatore-fisichella',
    name: 'Salvatore Fisichella',
    nameEn: 'Salvatore Fisichella',
    nameDa: 'Salvatore Fisichella',
    role: '传奇男高音 & 国际艺术家顾问',
    roleEn: 'Legendary Tenor & International Artistic Advisor',
    roleDa: 'Legendarisk tenor og international kunstnerisk rådgiver',
    description: '当代贝尔坎托歌唱艺术的杰出代表，被誉为“最卓越的贝里尼歌唱家”。',
    descriptionEn: 'A pre-eminent representative of contemporary Bel Canto, described as the "most exceptional Bellini singer".',
    descriptionDa: 'En fremtrædende repræsentant for moderne Bel Canto, beskrevet som den "mest exceptionelle Bellini-sanger".',
    img: 'https://i.postimg.cc/26mV79L6/Salvatore-Fisichella-close-up.jpg',
    link: 'https://en.wikipedia.org/wiki/Salvatore_Fisichella'
  },
  {
    id: 'francisco-araiza',
    name: 'Francisco Araiza',
    nameEn: 'Francisco Araiza',
    nameDa: 'Francisco Araiza',
    role: '世界著名男高音 & 国际艺术家顾问',
    roleEn: 'World-Renowned Tenor & International Artistic Advisor',
    roleDa: 'Verdensberømt tenor og international kunstnerisk rådgiver',
    description: '莫扎特与罗西尼作品的最佳诠释者之一，当代最具影响力的抒情男高音歌唱家。',
    descriptionEn: 'One of the best interpreters of Mozart and Rossini, and one of the most influential lyric tenors of our time.',
    descriptionDa: 'En af de bedste fortolkere af Mozart og Rossini og en af de mest indflydelsesrige lyriske tenorer i vor tid.',
    img: 'https://i.postimg.cc/rpWK22LV/1900x1900-000000-80-0-0.jpg',
    link: 'https://en.wikipedia.org/wiki/Francisco_Araiza'
  },
  {
    id: 'eva-hess-thaysen',
    name: 'Eva Hess Thaysen',
    nameEn: 'Eva Hess Thaysen',
    nameDa: 'Eva Hess Thaysen',
    role: '丹麦皇家音乐学院教授 & 国际艺术家顾问',
    roleEn: 'Professor at RDAM & International Artistic Advisor',
    roleDa: 'Professor ved DKDM og international kunstnerisk rådgiver',
    description: '著名丹麦女高音歌唱家，丹麦皇家音乐学院声乐系教授，深耕声乐教育领域，拥有丰富的国际舞台演出经验。',
    descriptionEn: 'Renowned Danish soprano and Professor at the Royal Danish Academy of Music, specializing in vocal pedagogy with extensive international experience.',
    descriptionDa: 'Anerkendt dansk sopran og professor ved Det Kongelige Danske Musikkonservatorium, specialiseret i sangpædagogik med omfattende international erfaring.',
    img: 'https://i.postimg.cc/5t6vTRsF/wei-xin-tu-pian-20260516230128.png',
    link: 'https://www.dkdm.dk/en/employee/eva-hess-thaysen'
  },
  {
    id: 'anne-margrethe-dahl',
    name: 'Anne Margrethe Dahl',
    nameEn: 'Anne Margrethe Dahl',
    nameDa: 'Anne Margrethe Dahl',
    role: '丹麦皇家音乐学院教授 & 国际艺术家顾问',
    roleEn: 'Professor at RDAM & International Artistic Advisor',
    roleDa: 'Professor ved DKDM og international kunstnerisk rådgiver',
    description: '著名丹麦女高音歌唱家，曾任丹麦皇家歌剧学院院长，现任 Karlstad 大学 Ingesund 音乐学院教授。',
    descriptionEn: 'Renowned Danish soprano, former Head of the Royal Danish Opera Academy, currently Professor at Ingesund School of Music, Karlstad University.',
    descriptionDa: 'Anerkendt dansk sopran, tidligere forstander for Det Kongelige Danske Operaakademi, nuværende professor ved Ingesund Musikhögskola, Karlstad Universitet.',
    img: 'https://i.postimg.cc/5tP0dBPH/anne-margrethe-dahl-26-1.jpg',
    link: 'https://www.kau.se/en/ingesund-school-music/about-ingesund-school-music/about-us/kontakta-oss/vara-larare/anne-margrethe'
  }
];

const planners = [
  {
    name: '沈忱',
    nameEn: 'Shen Chen',
    nameDa: 'Shen Chen',
    role: '执行策划经理',
    roleEn: 'Executive Planning Manager',
    roleDa: 'Administrerende planlægningschef',
    description: '负责中心整体艺术项目的统筹规划与执行管理。',
    descriptionEn: 'Responsible for the overall planning and execution management of the center\'s artistic projects.',
    descriptionDa: 'Ansvarlig for den overordnede planlægning og udførelse af centerets kunstneriske projekter.',
    img: 'https://i.postimg.cc/pT4Ly2MK/wei-xin-tu-pian-20260517001747.png'
  },
  {
    name: '冯枫',
    nameEn: 'Feng Feng',
    nameDa: 'Feng Feng',
    role: '市场营销经理',
    roleEn: 'Marketing Manager',
    roleDa: 'Marketingchef',
    description: '致力于品牌推广、媒体合作及市场战略部署。',
    descriptionEn: 'Dedicated to brand promotion, media cooperation, and strategic market deployment.',
    descriptionDa: 'Dedikeret til brandpromovering, mediesamarbejde og strategisk markedspositionering.',
    img: 'https://i.postimg.cc/jSgvD92c/wei-xin-tu-pian-20260517000518.jpg'
  },
  {
    name: 'Bogdan Nicola',
    nameEn: 'Bogdan Nicola',
    nameDa: 'Bogdan Nicola',
    role: '钢琴艺术指导',
    roleEn: 'Piano Artistic Coach',
    roleDa: 'Klaver- og kunstnerisk coach',
    description: '具有深厚造诣的钢琴艺术家，长期致力于声乐伴奏与艺术指导工作。',
    descriptionEn: 'A highly accomplished piano artist, long dedicated to vocal accompaniment and artistic coaching.',
    descriptionDa: 'En højt kvalificeret klaverkunstner, længe dedikeret til sangledsagelse og kunstnerisk vejledning.',
    img: 'https://i.postimg.cc/RhRzcXxr/wei-xin-tu-pian-20260516223745.png',
    objectPosition: 'object-top',
  }
];

export default function Team({ onShowMember }: { onShowMember?: (id: string) => void }) {
  const { t } = useLanguage();

  const TeamGrid = ({ members, title, delayOffset = 0, compact = false }: { members: any[], title: string, delayOffset?: number, compact?: boolean }) => (
    <div className="mb-24 last:mb-0">
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-prestige-gold font-serif text-3xl md:text-4xl mb-16 block border-l-4 border-prestige-gold pl-6 whitespace-nowrap"
      >
        {title}
      </motion.h3>
      <div className={cn(
        "grid gap-12",
        compact 
          ? "grid-cols-2 md:grid-cols-4 max-w-5xl" 
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-4xl"
      )}>
        {members.map((member: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i + delayOffset) * 0.1 }}
            className="group"
          >
            <div className={cn(
              "aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 mb-6 rounded-sm relative",
              compact && "md:aspect-[3/4]"
            )}>
              <img 
                src={member.img} 
                alt={t(member.name, member.nameEn, member.nameDa)} 
                className={cn(
                  "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                  member.objectPosition || "object-center"
                )}
              />
              <div className="absolute inset-0 border border-prestige-ink/5 group-hover:border-prestige-gold/30 transition-colors pointer-events-none" />
            </div>
            <h3 className={cn(
              "font-serif mb-1 group-hover:text-prestige-gold transition-colors",
              compact ? "text-xl" : "text-2xl"
            )}>{t(member.name, member.nameEn, member.nameDa)}</h3>
            <p className="text-[10px] uppercase font-bold tracking-widest text-prestige-gold mb-4">
              {t(member.role, member.roleEn, member.roleDa)}
            </p>
            <p className={cn(
              "text-prestige-ink/60 text-sm font-light leading-relaxed mb-6",
              compact && "text-xs"
            )}>
              {t(member.description, member.descriptionEn, member.descriptionDa)}
            </p>
            {member.link && (
              <a 
                href="javascript:void(0)" 
                onClick={(e) => {
                  if (member.id && onShowMember) {
                    e.preventDefault();
                    onShowMember(member.id);
                  } else {
                    window.open(member.link, '_blank');
                  }
                }}
                className="text-[10px] font-bold uppercase tracking-widest border-b border-prestige-gold pb-1"
              >
                {t('个人简介', 'View Profile', 'Se profil')}
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="team" className="py-24 bg-prestige-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-prestige-gold font-serif text-5xl md:text-6xl mb-8"
          >
            {t('我们是谁', 'Who We Are', 'Hvem er vi')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-prestige-ink/70 text-lg md:text-xl font-light leading-relaxed serif-italic"
          >
            {t(
              '在这个加速重构的世界里，技术在连接万物，而艺术在唤醒人心。我们深知，音乐从来不只是音符的排列，它是人类共通的语言，是跨越文化、时空与阶层的最强共鸣。奥丁传媒诞生于对时代的敏锐洞察与对艺术的极致敬畏。我们不仅是一家音乐艺术公司，更是希望成为欧洲与中国的文化纽带，推动优秀的传统古典音乐在中欧之间传播与发展，无论是通过高水准的艺术现场、深度的音乐制作，优质的游学活动，还是启发性的艺术教育，我们致力于在浮躁的时代中，为个体提供精神的栖息地，用声音重构人与人之间的深度连接。我们坚信艺术具备赋能未来的力量。我们不仅发掘和助力新一代艺术家的成长，更致力于将艺术思维注入社会创新，让音乐成为推动社会向美、向善的力量。',
              'In this world of accelerated reconstruction, technology is connecting everything, while art is awakening the human heart. We know that music is never just an arrangement of notes; it is a universal language of humanity, the strongest resonance across cultures, time, space, and class. Ordin Media was born from a keen insight into our times and an ultimate reverence for art. We are not just a music and arts company; we aspire to be the cultural link between Europe and China, promoting the dissemination and development of excellent traditional classical music between the two regions. Whether through high-level artistic performances, deep music production, quality study tours, or inspiring art education, we are committed to providing a spiritual sanctuary for individuals and reconstructing deep connections between people through sound in this restless age. We firmly believe that art possesses the power to empower the future. We not only discover and support the growth of a new generation of artists but also strive to inject artistic thinking into social innovation, making music a force for beauty and goodness in society.',
              'I denne verden af accelereret rekonstruktion forbinder teknologien alt, mens kunsten vækker det menneskelige hjerte. Vi ved, at musik aldrig bare er en rækkefølge af noter; det er menneskehedens universelle sprog, den stærkeste resonans på tværs af kulturer, tid, rum og klasse. Ordin Media blev født ud fra en skarp indsigt i vores tid og en ultimativ ærefrygt for kunst. Vi er ikke kun et musik- og kunstfirma; vi stræber efter at være det kulturelle bindeled mellem Europa og Kina og fremme formidlingen og udviklingen af fremragende traditionel klassisk musik mellem de to regioner. Uanset om det er gennem kunstneriske optrædener på højt niveau, dyb musikproduktion, kvalitetsstudieture eller inspirerende kunstuddannelse, er vi forpligtet til at tilbyde et åndeligt fristed for enkeltpersoner og genopbygge dybe forbindelser mellem mennesker gennem lyd i denne urolige tid. Vi tror fuldt og fast på, at kunst besidder kraften til at styrke fremtiden. Vi opdager og støtter ikke kun væksten af en ny generation af kunstnere, men stræber også efter at injicere kunstnerisk tænkning i social innovation, så musikken bliver en kraft for skønhed og godhed i samfundet.'
            )}
          </motion.p>
        </div>

        <TeamGrid 
          members={coreTeam} 
          title={t('艺术总监', 'Artistic Directors', 'Kunstneriske ledere')} 
        />

        <TeamGrid 
          members={planners} 
          title={t('行政策划', 'Administrative Planning', 'Administrativ planlægning')} 
          delayOffset={coreTeam.length}
          compact
        />
        
        <TeamGrid 
          members={advisors} 
          title={t('国际艺术家顾问', 'International Artistic Advisors', 'Internationale kunstneriske rådgivere')} 
          delayOffset={coreTeam.length + planners.length}
        />
      </div>
    </section>
  );
}
