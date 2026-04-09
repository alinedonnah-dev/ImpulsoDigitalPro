import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Instagram, 
  Zap, 
  Camera, 
  Layout, 
  Users, 
  ArrowRight, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  MousePointer2,
  Clock,
  ShieldCheck,
  Star,
  Link,
  Edit3,
  Palette,
  CameraOff,
  UserX,
  TrendingDown
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass py-4 px-6 md:px-12 flex justify-center items-center text-center">
    <p className="font-display font-bold text-sm md:text-lg tracking-tight text-marfim leading-tight">
      Clientes pesquisam no Google antes de ligar. <span className="text-rubi italic block md:inline">O que eles estão encontrando sobre você?</span>
    </p>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden bg-void">
    {/* Background Glows */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-ouro/10 rounded-full blur-[120px] -z-10 animate-pulse" />
    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-ouro/5 rounded-full blur-[100px] -z-10" />
    
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-bold mb-6 text-ouro">
          <Sparkles size={14} />
          <span>Presença digital de alto nível</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-black leading-[1.1] mb-6 text-marfim tracking-tighter">
          Transforme seu Instagram em uma <span className="text-ouro italic">Máquina de Vendas</span>
        </h1>
        <p className="text-base md:text-lg text-marfim/60 mb-8 max-w-lg">
          Pare de perder clientes por causa de um perfil amador. Tenha uma presença digital profissional, atrativa e que converte, mesmo que você não tenha tempo ou conhecimento técnico.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a 
            href="https://wa.me/5527988958668?text=VIM%20DO%20SITE"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, brightness: 1.1 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden bg-ouro text-void px-8 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-[0_8px_0_0_#b38b00] active:shadow-[0_2px_0_0_#b38b00] active:translate-y-[6px] group hover:shadow-[0_0_30px_rgba(217,176,103,0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
            Quero profissionalizar meu negócio
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <div className="flex -space-x-2">
            {[
              "https://i.imgur.com/dvCffNS.png",
              "https://i.imgur.com/rHHpnBs.png",
              "https://i.imgur.com/JpfoJJ0.png",
              "https://i.imgur.com/LjmgKK8.png"
            ].map((url, i) => (
              <img 
                key={i}
                src={url} 
                alt="User" 
                className="w-10 h-10 rounded-full border-2 border-void object-cover"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
          <p className="text-sm text-marfim/50 font-medium">
            <span className="text-marfim font-bold">+1.200 negócios</span> impulsionados no Brasil
          </p>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500">
          <img 
            src="https://i.imgur.com/anoTFSw.png" 
            alt="Instagram Preview" 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-ouro/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-ouro/10 rounded-full blur-3xl -z-10"></div>
      </motion.div>
    </div>
  </section>
);

const PainPoints = () => (
  <section className="section-padding bg-brand-muted">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-black mb-4 text-marfim tracking-tighter">
        Seu Instagram está <span className="text-ouro italic">Expulsando</span> Clientes?
      </h2>
      <p className="text-lg text-marfim/60">Se você se identifica com o "perfil amador", você está deixando dinheiro na mesa todos os dias.</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        { text: "Seu link na bio é uma bagunça ou nem existe.", icon: Link },
        { text: "Você gasta horas tentando criar um post e o resultado fica amador.", icon: Edit3 },
        { text: "Seu feed não tem consistência e parece um 'carnaval' de cores.", icon: Palette },
        { text: "Você precisa de fotos profissionais mas não tem verba para fotógrafo.", icon: CameraOff },
        { text: "Sente vergonha de mandar o link do seu perfil para um cliente em potencial.", icon: UserX },
        { text: "Seu perfil não passa autoridade e você acaba perdendo vendas.", icon: TrendingDown }
      ].map((pain, i) => (
        <motion.div 
          key={i}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-void p-6 rounded-2xl shadow-sm border border-white/5 flex gap-4"
        >
          <div className="text-rubi mt-1 flex-shrink-0">
            <pain.icon size={20} />
          </div>
          <p className="font-medium text-marfim/80">{pain.text}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const ProductCard = ({ title, description, forWhom, includes, benefit, price, oldPrice, icon: Icon, colorClass, image, waMsg }: any) => (
  <motion.div 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    viewport={{ once: true }}
    className="bg-brand-muted rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex flex-col h-full group hover:border-ouro/30 transition-all duration-500"
  >
    {image ? (
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-center" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent"></div>
        <div className="absolute bottom-4 left-6 right-6">
          <div className={`inline-flex p-2 rounded-lg ${colorClass} text-white mb-3 shadow-lg`}>
            <Icon size={20} />
          </div>
          <h3 className="text-2xl font-bold text-marfim drop-shadow-md">{title}</h3>
        </div>
      </div>
    ) : (
      <div className={`p-8 ${colorClass} text-white relative overflow-hidden`}>
        <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
          <Icon size={24} />
        </div>
        <h3 className="text-2xl mb-2 text-white font-bold">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </div>
    )}
    
    <div className="p-8 flex-grow flex flex-col">
      {image && <p className="text-marfim/60 text-sm leading-relaxed mb-6">{description}</p>}
      
      <div className="mb-6">
        <span className="text-xs font-bold text-marfim/40 tracking-wider">Para quem é</span>
        <p className="text-sm font-medium mt-1 text-marfim/80">{forWhom}</p>
      </div>
      <div className="mb-8 flex-grow">
        <span className="text-xs font-bold text-marfim/40 tracking-wider">O que está incluído</span>
        <ul className="mt-3 space-y-3">
          {includes.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-sm text-marfim/60">
              <CheckCircle2 size={16} className="text-ouro mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-void p-4 rounded-xl mb-8 border border-white/5">
        <p className="text-xs font-bold text-ouro mb-1">Diferencial</p>
        <p className="text-sm font-semibold text-marfim">{benefit}</p>
      </div>
      <div className="mt-auto">
        <div className="flex flex-col mb-4">
          {oldPrice && (
            <span className="text-sm text-marfim/30 line-through font-bold mb-[-4px]">De R$ {oldPrice}</span>
          )}
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-bold text-marfim/40">R$</span>
            <span className="text-4xl font-extrabold text-marfim">{price}</span>
            <span className="text-sm font-medium text-marfim/40">/pagamento único</span>
          </div>
        </div>
        <motion.a 
          href={`https://wa.me/5527988958668?text=${encodeURIComponent(waMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative overflow-hidden w-full bg-ouro text-void py-4 rounded-xl font-black text-base transition-all flex items-center justify-center gap-2 shadow-[0_6px_0_0_#b38b00] active:shadow-[0_2px_0_0_#b38b00] active:translate-y-[4px] group hover:shadow-[0_0_20px_rgba(217,176,103,0.2)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
          Quero este produto
          <ArrowRight size={18} />
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const Products = () => (
  <section id="produtos" className="section-padding bg-void">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-4xl md:text-5xl mb-4 text-marfim tracking-tighter font-black">Soluções para cada <span className="text-ouro italic">fase</span> do seu negócio</h2>
      <p className="text-marfim/60">Escolha o impulso que você precisa hoje para decolar sua marca.</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <ProductCard 
        title="Link na Bio Profissional"
        description="Criação de uma página link-in-bio personalizada, visualmente bonita e com a identidade da sua marca."
        forWhom="Quem vende pelo Instagram e quer centralizar links, catálogo e WhatsApp com estilo."
        includes={[
          "Design personalizado (não é Linktree comum)",
          "Botões estratégicos para WhatsApp e Catálogo",
          "Integração com suas redes sociais",
          "Configuração de cores e fontes da sua marca"
        ]}
        benefit="Passa profissionalismo imediato e facilita o contato do cliente."
        price="97"
        oldPrice="147"
        icon={Layout}
        colorClass="bg-azul-noite"
        image="https://i.imgur.com/YOxYQWJ.png"
        waMsg="Olá! Gostaria de saber mais sobre o Link na Bio Profissional de R$ 97."
      />
      <ProductCard 
        title="Pack de Criativos Prontos"
        description="Mais de 500 templates editáveis no Canva para publicações no Instagram, adaptados para o seu nicho."
        forWhom="Quem não tem verba para designer mas quer um feed bonito e profissional."
        includes={[
          "500+ templates editáveis (Feed e Stories)",
          "Adapte qualquer post para o seu nicho",
          "Sugestões de paleta de cores",
          "Vários nichos disponíveis"
        ]}
        benefit="Feed consistente e profissional em minutos, sem estresse."
        price="97"
        oldPrice="197"
        icon={Instagram}
        colorClass="bg-rubi"
        image="https://i.imgur.com/ml1GESi.png"
        waMsg="Olá! Tenho interesse no Pack de 500+ Templates por R$ 97."
      />
      <ProductCard 
        title="Serviço: Feito Para Você"
        description="Serviço premium onde eu cuido de tudo: crio seu link na bio e monto seu pack de criativos do zero."
        forWhom="Quem quer resultado rápido e profissional sem colocar a mão na massa."
        includes={[
          "Link na Bio exclusivo e configurado",
          "Identidade Visual básica (cores e fontes)",
          "Pack de 30 artes exclusivas para seu negócio",
          "Consultoria rápida de posicionamento de perfil",
          "Suporte prioritário via WhatsApp"
        ]}
        benefit="Entrego tudo pronto para usar. Você só precisa postar."
        price="197,90"
        oldPrice="297,90"
        icon={MousePointer2}
        colorClass="bg-ouro text-void"
        image="https://i.imgur.com/dYt3hLS.png"
        waMsg="Olá! Quero o serviço premium 'Feito Para Você' de R$ 197,90."
      />
    </div>
  </section>
);

const WhyUs = () => (
  <section id="sobre" className="section-padding bg-brand-muted text-marfim">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl mb-8 text-marfim font-black tracking-tighter">Por que escolher a <span className="text-ouro">Impulso Digital?</span></h2>
        <div className="space-y-8">
          {[
            {
              title: "Simplicidade Real",
              desc: "Nada de termos técnicos complicados. Eu falo a sua língua e entrego o que você realmente precisa.",
              icon: Zap
            },
            {
              title: "Resultado Express",
              desc: "Nossos produtos são pensados para implementação imediata. Comprou, usou, viu a diferença.",
              icon: Clock
            },
            {
              title: "Suporte Próximo",
              desc: "Não é apenas uma venda. Estou aqui para garantir que você consiga usar tudo da melhor forma.",
              icon: MessageCircle
            },
            {
              title: "Foco em Conversão",
              desc: "Não é só 'bonitinho'. Tudo é desenhado para passar autoridade e atrair mais clientes.",
              icon: ShieldCheck
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="bg-ouro/10 text-ouro p-3 rounded-xl h-fit">
                <item.icon size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-marfim">{item.title}</h4>
                <p className="text-marfim/50 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <img 
          src="https://i.imgur.com/NJfrmfL.png" 
          alt="Impulso Digital" 
          className="rounded-3xl transition-all duration-700 border border-white/10 w-full h-auto object-contain bg-brand-muted p-12"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-8 -right-8 bg-ouro text-void p-8 rounded-2xl hidden md:block shadow-2xl">
          <p className="text-xl font-bold mb-1 leading-tight text-void">Design de alto padrão para</p>
          <p className="text-sm font-medium opacity-80 italic text-void">pequenos negócios que pensam grande.</p>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="depoimentos" className="section-padding bg-void">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-4xl mb-4 text-marfim font-black tracking-tighter">Quem já deu esse <span className="text-ouro italic">impulso</span></h2>
      <p className="text-marfim/60">Histórias reais de negócios que mudaram de patamar.</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {[
        {
          name: "Mariana Silva",
          nicho: "Confeitaria Artesanal",
          text: "Eu tinha vergonha do meu feed, parecia tudo bagunçado. Com o Pack de Criativos, agora meu Instagram parece de uma marca grande. As vendas pelo WhatsApp aumentaram muito!",
          img: "https://i.imgur.com/9OqHA5W.png"
        },
        {
          name: "Dr. Ricardo Santos",
          nicho: "Fisioterapeuta",
          text: "Precisava de uma imagem mais profissional mas não tinha tempo para fotos. O Ensaio de IA foi surreal, as pessoas acharam que eu realmente fiz um ensaio em estúdio.",
          img: "https://i.imgur.com/oVlyGnL.png"
        },
        {
          name: "Carla Mendes",
          nicho: "Loja de Moda Feminina",
          text: "O serviço 'Feito Para Você' foi o melhor investimento. Em 3 dias minha bio estava linda e eu já tinha posts para o mês inteiro. Recomendo demais!",
          img: "https://i.imgur.com/0byaHh3.png"
        }
      ].map((t, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -10 }}
          className="bg-brand-muted p-8 rounded-3xl shadow-sm border border-white/5"
        >
          <div className="flex gap-1 text-ouro mb-6">
            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
          </div>
          <p className="text-marfim/60 italic mb-8">"{t.text}"</p>
          <div className="flex items-center gap-4">
            <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border border-white/10" referrerPolicy="no-referrer" />
            <div>
              <p className="font-bold text-sm text-marfim">{t.name}</p>
              <p className="text-xs text-ouro font-medium">{t.nicho}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-bold text-lg text-marfim hover:text-ouro transition-colors"
      >
        {question}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-marfim/50 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => (
  <section className="section-padding bg-void">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl text-center mb-12 text-marfim font-black tracking-tighter">Dúvidas <span className="text-ouro italic">Frequentes</span></h2>
      <div className="space-y-2">
        <FAQItem 
          question="Não entendo nada de tecnologia, vou conseguir usar?" 
          answer="Com certeza! Nossos produtos são feitos justamente para quem não quer complicação. Os templates são fáceis de editar no Canva e o serviço 'Feito Para Você' entrega tudo pronto, sem que você precise mexer em nada técnico." 
        />
        <FAQItem 
          question="Será que funciona para o meu nicho?" 
          answer="Sim! Já atendemos desde confeiteiras e lojistas até advogados e médicos. A estratégia de uma boa presença digital é universal, e nós adaptamos o visual para a realidade do seu negócio." 
        />
        <FAQItem 
          question="Como recebo os produtos após a compra?" 
          answer="Sua satisfação é nossa prioridade. Nos serviços personalizados, você tem direito a rodadas de alterações. Nos produtos digitais, oferecemos a garantia padrão de 7 dias conforme o código de defesa do consumidor." 
        />
        <FAQItem 
          question="Preciso ter o Canva Pro para usar os templates?" 
          answer="Não é necessário. Todos os nossos templates são criados para funcionar perfeitamente na versão gratuita do Canva." 
        />
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section id="contato" className="section-padding bg-ouro text-void overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-7xl font-black mb-8 text-void tracking-tighter leading-none">
        Pronto para dar o <span className="italic">próximo passo?</span>
      </h2>
      <p className="text-lg md:text-2xl mb-12 font-medium opacity-90 text-void max-w-2xl mx-auto">
        As vagas para o serviço premium são limitadas. Não deixe sua marca parecer amadora por mais um único dia.
      </p>
      <motion.a 
        href="https://wa.me/5527988958668?text=Olá! Quero meu Impulso Digital agora e aproveitar as ofertas da semana!"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="relative overflow-hidden bg-void text-ouro px-12 py-6 rounded-2xl font-black text-xl md:text-2xl transition-all shadow-[0_12px_0_0_#000000] active:shadow-[0_4px_0_0_#000000] active:translate-y-[8px] flex items-center justify-center gap-4 mx-auto w-fit group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
        <Zap size={28} className="fill-current" />
        Quero meu impulso agora
      </motion.a>
      <p className="mt-10 text-xs md:text-sm font-black opacity-60 flex items-center justify-center gap-2 text-void">
        <ShieldCheck size={18} />
        Garantia de satisfação total
      </p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-void text-marfim pt-20 pb-10 px-6 md:px-12 lg:px-24 border-t border-white/5">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <img 
            src="https://i.imgur.com/NJfrmfL.png" 
            alt="Logo Impulso Digital" 
            className="h-8 w-auto"
            referrerPolicy="no-referrer"
          />
          <span className="font-display font-bold text-xl tracking-tighter text-marfim">IMPULSO DIGITAL</span>
        </div>
        <p className="text-marfim/40 max-w-sm leading-relaxed">
          Especialistas em transformar perfis comuns em marcas de alto padrão que vendem todos os dias através do design estratégico.
        </p>
      </div>
      <div>
        <h5 className="font-bold mb-6 text-marfim">Navegação</h5>
        <ul className="space-y-4 text-marfim/40 text-sm">
          <li><a href="#produtos" className="hover:text-ouro transition-colors">Produtos</a></li>
          <li><a href="#sobre" className="hover:text-ouro transition-colors">Diferenciais</a></li>
          <li><a href="#depoimentos" className="hover:text-ouro transition-colors">Depoimentos</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-bold mb-6 text-marfim">Legal</h5>
        <ul className="space-y-4 text-marfim/40 text-sm">
          <li><a href="#" className="hover:text-ouro transition-colors">Termos de Uso</a></li>
          <li><a href="#" className="hover:text-ouro transition-colors">Privacidade</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-xs text-marfim/20">
      <p>© 2026 Impulso Digital. Todos os direitos reservados. Criado com foco em conversão.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-ouro selection:text-void bg-void">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Products />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
