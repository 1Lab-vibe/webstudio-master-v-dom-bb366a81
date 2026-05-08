import heroFloor from "@/assets/hero-floor.jpg";
import beforeAfter from "@/assets/before-after-1.jpg";
import workLaminate from "@/assets/work-laminate.jpg";
import workSanding from "@/assets/work-sanding.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Phone, Star, MapPin, Clock, ShieldCheck, Wrench, MessageCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const PHONE = "+7 (343) 290-15-47";
const PHONE_HREF = "tel:+73432901547";

const services = [
  { title: "Циклевка паркета", price: "от 450 ₽/м²", desc: "Шлифовка, шпаклёвка, лак или масло. Без пыли." },
  { title: "Укладка ламината", price: "от 350 ₽/м²", desc: "Подложка, стыковка, плинтус. Гарантия 2 года." },
  { title: "Укладка паркетной доски", price: "от 600 ₽/м²", desc: "Клеевой и плавающий монтаж, подгонка." },
  { title: "Инженерная доска", price: "от 750 ₽/м²", desc: "Монтаж на фанеру, торцовка, финиш." },
  { title: "Ремонт скрипа и щелей", price: "от 1 500 ₽", desc: "Локальный ремонт без вскрытия пола." },
  { title: "Замена половиц", price: "от 800 ₽/шт", desc: "Подбор по цвету, аккуратный демонтаж." },
];

const portfolio = [
  { img: beforeAfter, title: "Циклевка дубового паркета", meta: "Уралмаш • 38 м² • 2 дня" },
  { img: workSanding, title: "Шлифовка под лак", meta: "ВИЗ • 52 м² • 3 дня" },
  { img: workLaminate, title: "Укладка ламината 33 класс", meta: "Академический • 64 м² • 1 день" },
];

const reviews = [
  { name: "Ирина М.", source: "Яндекс Карты", text: "Циклевали старый паркет 1970-х в хрущёвке. Результат — как новый. Работали аккуратно, мебель сами вынесли и вернули.", rating: 5 },
  { name: "Андрей К.", source: "Авито", text: "Постелили ламинат в двушке за день. Цена не выросла после замеров, плинтус подрезали идеально.", rating: 5 },
  { name: "Светлана П.", source: "Яндекс Карты", text: "Убрали скрип, который мучил год. Приехали в день звонка, диагностика бесплатная.", rating: 5 },
];

const steps = [
  { n: "01", title: "Звонок или заявка", desc: "Уточняем площадь, тип пола, сроки." },
  { n: "02", title: "Бесплатный замер", desc: "Мастер приедет в удобное время по Екатеринбургу." },
  { n: "03", title: "Смета и договор", desc: "Фиксируем цену и материалы письменно." },
  { n: "04", title: "Работа и приёмка", desc: "Сдаём пол под уборку, гарантия до 3 лет." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", area: "", comment: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Заполните имя и телефон", variant: "destructive" });
      return;
    }
    toast({ title: "Заявка принята", description: "Перезвоним в течение 15 минут." });
    setForm({ name: "", phone: "", area: "", comment: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-md bg-gradient-warm grid place-items-center text-primary-foreground font-display text-lg">М</span>
            <span className="font-display text-xl">Мастер в дом</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground">Услуги</a>
            <a href="#portfolio" className="hover:text-foreground">Работы</a>
            <a href="#process" className="hover:text-foreground">Как работаем</a>
            <a href="#contacts" className="hover:text-foreground">Контакты</a>
          </nav>
          <a href={PHONE_HREF} className="hidden sm:flex items-center gap-2 text-sm font-semibold">
            <Phone className="w-4 h-4 text-primary" /> {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={heroFloor} alt="Готовый паркетный пол после реставрации" className="w-full h-full object-cover" width={1536} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/55 to-foreground/30" />
        </div>
        <div className="relative container py-20 md:py-28 text-background">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/15 border border-background/25 backdrop-blur text-sm mb-5">
              <MapPin className="w-4 h-4" /> Екатеринбург и пригород · 5 лет на рынке
            </div>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] mb-5">
              Ремонт и укладка полов <span className="text-primary-glow">без сюрпризов</span> по смете
            </h1>
            <p className="text-lg md:text-xl text-background/85 mb-7 max-w-xl">
              Циклевка паркета, монтаж ламината и инженерной доски. Бесплатный замер, фиксированная цена, гарантия до 3 лет.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button asChild size="lg" className="bg-gradient-warm text-primary-foreground border-0 hover:opacity-95 shadow-card h-12 px-6">
                <a href="#request"><Wrench className="w-4 h-4 mr-2" /> Рассчитать стоимость</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-background/10 border-background/40 text-background hover:bg-background/20 hover:text-background h-12 px-6">
                <a href={PHONE_HREF}><Phone className="w-4 h-4 mr-2" /> {PHONE}</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-2"><Star className="w-4 h-4 text-primary-glow fill-primary-glow" /> 5,0 на Яндекс Картах</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary-glow" /> Замер за 1 день</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary-glow" /> Договор и гарантия</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 py-8 text-center">
          {[
            { v: "5 лет", l: "опыт мастеров" },
            { v: "320+", l: "объектов сдано" },
            { v: "до 3 лет", l: "гарантия" },
            { v: "0 ₽", l: "выезд по городу" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl md:text-4xl text-primary">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <p className="text-sm uppercase tracking-widest text-primary mb-3">Услуги и цены</p>
            <h2 className="text-3xl md:text-4xl">Что делаем и сколько стоит</h2>
            <p className="text-muted-foreground mt-3">Указан диапазон. Точную стоимость считаем после бесплатного замера.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Card key={s.title} className="p-6 shadow-soft hover:shadow-card transition-shadow border-border">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl">{s.title}</h3>
                  <span className="text-primary font-semibold whitespace-nowrap">{s.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-secondary/40 border-y border-border">
        <div className="container">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary mb-3">Работы</p>
              <h2 className="text-3xl md:text-4xl">Примеры объектов в Екатеринбурге</h2>
            </div>
            <a href="#request" className="text-primary font-medium hover:underline">Получить расчёт →</a>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {portfolio.map((p) => (
              <Card key={p.title} className="overflow-hidden border-border shadow-soft group">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.meta}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <p className="text-sm uppercase tracking-widest text-primary mb-3">Как работаем</p>
            <h2 className="text-3xl md:text-4xl">Просто и без сюрпризов</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="p-6 rounded-lg bg-card border border-border shadow-soft">
                <div className="font-display text-3xl text-primary mb-3">{s.n}</div>
                <h3 className="text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-secondary/40 border-y border-border">
        <div className="container">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary mb-3">Отзывы</p>
              <h2 className="text-3xl md:text-4xl">Что говорят клиенты</h2>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-primary fill-primary" />)}</div>
              <span className="font-semibold">5,0</span>
              <span className="text-muted-foreground">средний рейтинг</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <Card key={r.name} className="p-6 border-border shadow-soft">
                <div className="flex mb-3">{[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-primary fill-primary" />)}</div>
                <p className="text-foreground/90 mb-5 leading-relaxed">«{r.text}»</p>
                <div className="text-sm">
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-muted-foreground">{r.source}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="py-20">
        <div className="container grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary mb-3">Заявка</p>
            <h2 className="text-3xl md:text-4xl mb-4">Расчёт за 15 минут</h2>
            <p className="text-muted-foreground mb-6">Оставьте заявку — перезвоним, уточним детали и пришлём ориентир по цене ещё до выезда.</p>
            <ul className="space-y-3">
              {["Бесплатный замер по Екатеринбургу", "Фиксированная цена в договоре", "Свои инструменты и расходники", "Уборка после работы"].map((t) => (
                <li key={t} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />{t}</li>
              ))}
            </ul>
          </div>
          <Card className="p-6 md:p-8 shadow-card border-border">
            <form className="space-y-4" onSubmit={submit}>
              <div>
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Как к вам обращаться" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-11 mt-1.5" />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" placeholder="+7 ___ ___ __ __" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="h-11 mt-1.5" />
              </div>
              <div>
                <Label htmlFor="area">Площадь, м²</Label>
                <Input id="area" inputMode="numeric" placeholder="например, 45" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} className="h-11 mt-1.5" />
              </div>
              <div>
                <Label htmlFor="comment">Что нужно сделать</Label>
                <Textarea id="comment" placeholder="Циклевка, ламинат, скрип…" value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} className="mt-1.5 min-h-24" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-warm text-primary-foreground border-0 hover:opacity-95 h-12">Получить расчёт</Button>
              <p className="text-xs text-muted-foreground">Отправляя форму, вы соглашаетесь на обработку персональных данных.</p>
            </form>
          </Card>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-foreground text-background">
        <div className="container grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-display text-2xl mb-4">Мастер в дом</div>
            <p className="text-background/70 text-sm leading-relaxed">Локальная мастерская по ремонту полов. Работаем с физлицами и небольшими офисами в Екатеринбурге.</p>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3"><Phone className="w-5 h-5 text-primary-glow mt-0.5" /><a href={PHONE_HREF} className="hover:underline">{PHONE}</a></div>
            <div className="flex items-start gap-3"><MessageCircle className="w-5 h-5 text-primary-glow mt-0.5" /><a href="https://wa.me/73432901547" className="hover:underline">WhatsApp / Telegram</a></div>
            <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-primary-glow mt-0.5" />Екатеринбург, выезд по городу и пригороду</div>
            <div className="flex items-start gap-3"><Clock className="w-5 h-5 text-primary-glow mt-0.5" />Пн–Сб 8:00–21:00</div>
          </div>
          <div>
            <div className="text-sm text-background/60 mb-3">Найдите нас на Яндекс Картах</div>
            <Button asChild variant="outline" className="bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground">
              <a href="https://yandex.ru/maps/54/yekaterinburg/" target="_blank" rel="noreferrer"><MapPin className="w-4 h-4 mr-2" /> Открыть карту</a>
            </Button>
          </div>
        </div>
        <div className="container mt-10 pt-6 border-t border-background/10 text-xs text-background/50 flex flex-wrap justify-between gap-2">
          <div>© {new Date().getFullYear()} Мастер в дом · ИП, Екатеринбург</div>
          <div>Не является публичной офертой</div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <a href={PHONE_HREF} className="md:hidden fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 px-5 h-12 rounded-full bg-gradient-warm text-primary-foreground shadow-card font-semibold">
        <Phone className="w-4 h-4" /> Позвонить
      </a>
    </div>
  );
};

export default Index;
