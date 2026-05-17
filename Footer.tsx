import {motion} from 'motion/react';
import {Instagram, Mail, Phone, MapPin, Youtube, Music, CreditCard} from 'lucide-react';
import {cn} from '@/src/lib/utils';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer id="contact" className="bg-prestige-ink text-white py-24 pb-12 overflow-hidden border-t-4 border-prestige-gold">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-1 mb-8">
              <div className="relative flex items-center">
                <span className="text-8xl font-serif text-prestige-gold leading-none">O</span>
                <div className="flex flex-col ml-1 mt-1 text-white">
                  <div className="flex items-baseline gap-2">
                    <h1 className="text-3xl md:text-4xl font-serif tracking-tight leading-none">
                      rdin <span className="ml-1">M</span>edia
                    </h1>
                    {language === 'zh' && (
                      <span className="text-2xl md:text-3xl font-sans font-black tracking-tighter uppercase">奧丁傳媒</span>
                    )}
                  </div>
                  <p className="text-[9px] uppercase tracking-[0.4em] font-sans opacity-40 mt-1 leading-none font-bold">Bel Canto Excellence</p>
                </div>
              </div>
            </div>
            
            <p className="text-white/50 font-light leading-relaxed max-w-md mb-8">
              {t(
                '奧丁傳媒是一家专注于高端美声艺术教育与中欧文化交流的平台，致力于传承正统欧派美声精髓。',
                'Ordin Media is a platform dedicated to high-end Bel Canto art education and Sino-European cultural exchange, committed to inheriting the essence of authentic European vocal traditions.',
                'Ordin Media er en platform dedikeret til avanceret Bel Canto-kunstuddannelse og kinesisk-europæisk kulturel udveksling, forpligtet til at arve essensen af autentiske europæiske sangtraditioner.'
              )}
            </p>
            
            <div className="flex gap-4">
              {[Instagram, Youtube, Mail, Music].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-prestige-gold hover:text-prestige-ink hover:border-prestige-gold transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-prestige-gold uppercase text-xs font-bold tracking-[0.2em] mb-8">
              {t('导航', 'Navigation', 'Navigation')}
            </h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li><a href="#home" className="hover:text-white transition-colors">{t('首页', 'Home', 'Hjem')}</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">{t('执行艺术总监 徐晨', 'Artistic Director Xu Chen', 'Kunstnerisk leder Xu Chen')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('业务', 'Services', 'Tjenester')}</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">{t('活动', 'Events', 'Begivenheder')}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-prestige-gold uppercase text-xs font-bold tracking-[0.2em] mb-8">
              {t('联系方式', 'Get In Touch', 'Kontakt os')}
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-prestige-gold mt-1" />
                <div>
                  <p className="text-xs uppercase font-bold opacity-40 mb-1">{t('电子邮箱', 'Email', 'E-mail')}</p>
                  <p className="text-white/80">info@ordinmedia.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-prestige-gold mt-1" />
                <div>
                  <p className="text-xs uppercase font-bold opacity-40 mb-1">{t('联系电话', 'Phone', 'Telefon')}</p>
                  <p className="text-white/80">+86 158 5189 9055</p>
                  <p className="text-white/80">+45 52 81 89 07</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-prestige-gold mt-1" />
                <div>
                  <p className="text-xs uppercase font-bold opacity-40 mb-1">{t('办公地点', 'Office', 'Kontor')}</p>
                  <p className="text-white/80">Etta Camerons vej. 13 st.th</p>
                  <p className="text-white/80">2450 Copenhagen, Denmark</p>
                  <p className="text-white/40 text-[10px] mt-2 font-bold tracking-widest uppercase">CVR: 46055152</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="text-[9px] uppercase font-bold tracking-[0.2em] opacity-30 mb-6 text-white/50">
                {t('支持支付方式', 'Supported Payments', 'Understøttede betalingsmetoder')}
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Airwallex", icon: "https://raw.githubusercontent.com/2fasvg/2fasvg.github.io/master/assets/img/logo/airwallex.com/airwallex.com.svg" },
                  { name: "Visa", slug: "visa" },
                  { name: "Mastercard", slug: "mastercard" },
                  { name: "PayPal", slug: "paypal" },
                  { name: "Alipay", slug: "alipay" },
                  { name: "WeChat Pay", slug: "wechat" },
                ].map((pay, i) => (
                  <div 
                    key={i} 
                    title={pay.name}
                    className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-prestige-gold transition-all group/pay cursor-default"
                  >
                    <img 
                      src={pay.slug ? `https://cdn.simpleicons.org/${pay.slug}/white` : pay.icon} 
                      alt={pay.name}
                      className={cn(
                        "w-5 h-5 object-contain transition-all",
                        pay.slug 
                          ? "opacity-40 group-hover:opacity-100 group-hover:invert" 
                          : "opacity-40 group-hover:opacity-100 grayscale brightness-200 group-hover:invert"
                      )}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-white/30">
            © 2025 {t('奧丁傳媒', 'Ordin Media', 'Ordin Media')}. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-white transition-colors">{t('隐私政策', 'Privacy Policy', 'Fortrolighedspolitik')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('服务条款', 'Terms of Service', 'Servicevilkår')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
