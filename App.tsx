
import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Search, 
  Globe, 
  ArrowRight, 
  Instagram, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone,
  MessageCircle,
  Users,
  ShieldCheck,
  Edit3,
  MousePointer2,
  Send,
  ShoppingCart,
  Layout,
  Play,
  Target,
  AtSign,
  PhoneCall
} from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden hero-gradient">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1]">
                Consultoria de marketing <br />
                digital de performance
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium">
                Criamos estratégias para ajudar você a vender mais com marketing digital.
              </p>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="btn-primary px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg shadow-blue-500/20"
              >
                SOLICITAR ORÇAMENTO
              </button>
            </div>

            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[1rem] overflow-hidden border-4 border-white/5 shadow-2xl">
                <video className="w-full h-full object-cover" poster="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80" autoPlay muted loop playsInline>
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-working-on-a-laptop-at-the-office-908-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-20 left-4 right-4 bg-[#63b3ed] text-black font-bold p-2 text-center rounded-md text-sm shadow-lg">Aumento em vendas</div>
                <div className="absolute top-[125px] left-12 right-12 bg-black text-white font-bold p-1 text-center rounded-md text-xs shadow-lg uppercase">mais de 200%</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="py-20 bg-[#f8f9fa] text-[#1a1a1a]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Bem-vindo à buzzbe</h2>
          <p className="text-[#666] text-lg max-w-2xl mx-auto">
            Somos especialistas em trazer resultados mensuráveis para sua empresa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white p-10 text-left border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <Edit3 className="text-buzz-blue mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3">Branding</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Ocupe a mente e o coração do seu público alvo ao fortalecer e fixar a sua marca.</p>
            </div>
            <div className="bg-white p-10 text-left border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <MousePointer2 className="text-buzz-blue mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3">Performance (ADS)</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Gestão de anúncios em redes sociais para geração de resultados em curto prazo.</p>
            </div>
            <div className="bg-white p-10 text-left border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <Send className="text-buzz-blue mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3">Inbound Marketing</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Método criado para atrair e converter novos clientes em diferentes etapas do funil.</p>
            </div>
            <div className="bg-white p-10 text-left border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <Layout className="text-buzz-blue mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3">Redes Sociais</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Planejamento multiplataforma, produção de conteúdo e gestão das plataformas digitais.</p>
            </div>
            <div className="bg-white p-10 text-left border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <ShoppingCart className="text-buzz-blue mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3">eCommerce</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Planejar, executar, mensurar e otimizar campanhas voltadas para o comércio eletrônico.</p>
            </div>
            <div className="bg-white p-10 text-left border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <Search className="text-buzz-blue mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3">SEO</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Otimização para Google, sua empresa bem posicionado no principal buscador da rede.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-16 italic">Nossos clientes</h2>
          
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-8 italic">Deixe sua marca falar</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              O segredo de garantir a sua presença na mídia é estar sempre conectado aos diferentes veículos e formatos. São muitas opções, mas poucas escolhas. É preciso estar sempre presente, sem perder qualidade à medida que a quantidade de canais aumenta.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Encontrar a voz da sua marca não é um desafio menor do que garantir que ela seja ouvida. Venha pra buzzbe e deixe sua marca falar.
            </p>
            <button onClick={() => setCurrentPage('contact')} className="btn-primary px-10 py-3 rounded-md font-bold text-sm uppercase tracking-widest">
              SOLICITAR ORÇAMENTO
            </button>
          </div>

          <div className="bg-white border border-gray-100 p-10 md:p-12 shadow-xl rounded-lg max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mt-20">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-buzz-blue mb-2">Gostaria de iniciar um projeto conosco?</h3>
              <p className="text-gray-400">Clique no botão e solicite um orçamento.</p>
            </div>
            <button onClick={() => setCurrentPage('contact')} className="btn-primary px-8 py-4 rounded-md font-bold text-sm uppercase tracking-widest shadow-md">
              SOLICITAR ORÇAMENTO
            </button>
          </div>
        </div>
      </section>
    </>
  );

  const renderAbout = () => (
    <div className="bg-[#f8f9fa] text-[#1a1a1a]">
      <div className="relative pt-40 pb-32 bg-[#0d1b2a] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Sobre nós</h1>
          <p className="text-white text-xl font-bold">Bem-vindo à buzzbe</p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-12 shadow-xl rounded-sm flex flex-col">
            <div className="w-12 h-1 bg-buzz-blue mb-8"></div>
            <h3 className="text-2xl font-bold mb-6">Quem somos nós</h3>
            <div className="space-y-6 text-[#666] leading-relaxed text-sm">
              <p>Entendemos que o mundo está em constante mudança, assim como as empresas e os negócios.</p>
              <p>Oferecemos Marketing ágil, tecnologia e análise detalhada de mercado, associados à visão estratégica de negócios para acelerar seu crescimento.</p>
            </div>
          </div>
          <div className="bg-white p-12 shadow-xl rounded-sm flex flex-col">
            <div className="w-12 h-1 bg-buzz-blue mb-8"></div>
            <h3 className="text-2xl font-bold mb-6">Missão</h3>
            <p className="text-[#666] leading-relaxed text-sm">
              Gerar transformação ao encontrar o seu propósito com o uso de estratégias de publicidade, marketing e vendas.
            </p>
          </div>
          <div className="bg-white p-12 shadow-xl rounded-sm flex flex-col">
            <div className="w-12 h-1 bg-buzz-blue mb-8"></div>
            <h3 className="text-2xl font-bold mb-6">O que fazemos</h3>
            <ul className="space-y-3">
              {['Branding', 'Performance (ADS)', 'SEO', 'Redes Sociais', 'eCommerce', 'Inbound Marketing'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#666]">
                  <Play size={10} className="text-buzz-blue fill-buzz-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-100 p-10 md:p-12 shadow-xl rounded-lg flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
          <div className="text-left">
            <h3 className="text-2xl font-bold text-buzz-blue mb-2">Gostaria de iniciar um projeto conosco?</h3>
            <p className="text-gray-500">Clique no botão e solicite um orçamento.</p>
          </div>
          <button onClick={() => setCurrentPage('contact')} className="btn-primary px-8 py-4 rounded-md font-bold text-sm uppercase tracking-widest shadow-md">
            SOLICITAR ORÇAMENTO
          </button>
        </div>
      </div>
    </div>
  );

  const renderServices = () => (
    <div className="bg-[#f8f9fa] text-[#1a1a1a]">
      <div className="relative pt-40 pb-32 bg-[#0d1b2a] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
           <div className="grid grid-cols-4 gap-20">
             <Target size={120} className="text-white" />
             <BarChart3 size={120} className="text-white" />
             <Users size={120} className="text-white" />
             <ShieldCheck size={120} className="text-white" />
           </div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Serviços</h1>
          <p className="text-white text-xl font-bold max-w-2xl mx-auto">Transformação digital em marketing e vendas</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Soluções para o seu negócio</h2>
          <p className="text-[#666] text-lg max-w-2xl mx-auto mb-16">
            Somos especialistas em trazer resultados mensuráveis para sua empresa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-10 text-left border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <Edit3 className="text-buzz-blue mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3">Branding</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Ocupe a mente e o coração do seu público alvo ao fortalecer e fixar a sua marca.</p>
            </div>
            <div className="bg-white p-10 text-left border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <MousePointer2 className="text-buzz-blue mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3">Performance (ADS)</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Gestão de anúncios em redes sociais para geração de resultados em curto prazo.</p>
            </div>
            <div className="bg-white p-10 text-left border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <Send className="text-buzz-blue mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3">Inbound Marketing</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Método criado para atrair e converter novos clientes em diferentes etapas do funil de vendas a partir do marketing de conteúdo.</p>
            </div>
            <div className="bg-white p-10 text-left border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <Layout className="text-buzz-blue mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3">Redes Sociais</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Planejamento multiplataforma, produção de conteúdo e gestão das plataformas digitais.</p>
            </div>
            <div className="bg-white p-10 text-left border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <ShoppingCart className="text-buzz-blue mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3">eCommerce</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Planejar, executar, mensurar e otimizar campanhas voltadas para o comércio eletrônico.</p>
            </div>
            <div className="bg-white p-10 text-left border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <Search className="text-buzz-blue mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3">SEO</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Otimização para Google, sua empresa bem posicionado no principal buscador da rede.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-10 md:p-12 shadow-xl rounded-lg max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mt-20">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-buzz-blue mb-2">Gostaria de iniciar um projeto conosco?</h3>
              <p className="text-gray-400">Clique no botão e solicite um orçamento.</p>
            </div>
            <button onClick={() => setCurrentPage('contact')} className="btn-primary px-8 py-4 rounded-md font-bold text-sm uppercase tracking-widest shadow-md">
              SOLICITAR ORÇAMENTO
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const renderContact = () => (
    <div className="bg-white text-[#1a1a1a]">
      {/* Hero Header with Communication Icons */}
      <div className="relative pt-40 pb-32 bg-[#0d1b2a] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
           <div className="grid grid-cols-3 gap-32">
             <AtSign size={160} className="text-white" />
             <Mail size={160} className="text-white" />
             <PhoneCall size={160} className="text-white" />
           </div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Fale com a buzzbe</h1>
          <p className="text-white text-xl font-bold">Quer perguntar algo ou solicitar um orçamento?</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left Column: Form */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-10 leading-tight">
                Preencha o formulário abaixo que <br /> entraremos em contato em breve.
              </h2>
              
              <form className="space-y-6 max-w-2xl">
                <div>
                  <label className="block text-gray-500 text-sm mb-2">Seu nome</label>
                  <input type="text" className="w-full p-3 border border-gray-200 rounded-sm bg-gray-50/50 focus:outline-buzz-blue" />
                </div>
                <div>
                  <label className="block text-gray-500 text-sm mb-2">Seu e-mail</label>
                  <input type="email" className="w-full p-3 border border-gray-200 rounded-sm bg-gray-50/50 focus:outline-buzz-blue" />
                </div>
                <div>
                  <label className="block text-gray-500 text-sm mb-2">Assunto</label>
                  <input type="text" className="w-full p-3 border border-gray-200 rounded-sm bg-gray-50/50 focus:outline-buzz-blue" />
                </div>
                <div>
                  <label className="block text-gray-500 text-sm mb-2">Sua mensagem (opcional)</label>
                  <textarea className="w-full p-3 border border-gray-200 rounded-sm bg-gray-50/50 h-64 focus:outline-buzz-blue resize-none"></textarea>
                </div>
                <button type="button" className="btn-primary px-10 py-3 rounded-md font-bold text-sm uppercase tracking-widest shadow-lg">
                  ENVIAR
                </button>
              </form>
            </div>

            {/* Right Column: Contact Info */}
            <div className="lg:w-1/3">
              <h3 className="text-2xl font-extrabold mb-8">Entre em contato</h3>
              
              <div className="mb-12">
                <p className="font-bold text-sm mb-4">Confira nossos canais de contato.</p>
                <a href="mailto:contato@buzzbe.com.br" className="flex items-center gap-3 text-sm text-gray-500 hover:text-buzz-blue transition-colors">
                  <Mail size={16} className="text-buzz-blue" />
                  <span>contato@buzzbe.com.br</span>
                </a>
              </div>

              <div>
                <p className="font-bold text-sm mb-4">Telefone e Whatsapp</p>
                <a href="tel:41998939133" className="text-3xl md:text-4xl font-extrabold text-buzz-blue hover:opacity-80 transition-opacity">
                  (41) 99893-9133
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${currentPage === 'home' || currentPage === 'about' || currentPage === 'services' || currentPage === 'contact' ? 'bg-transparent text-white' : 'bg-white text-black shadow-md'} py-6`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-3xl font-bold tracking-tight cursor-pointer text-buzz-blue" onClick={() => setCurrentPage('home')}>
            buzzbe
          </div>
          <div className="hidden md:flex space-x-8 items-center font-medium text-sm">
            <button onClick={() => setCurrentPage('home')} className="hover:text-buzz-blue transition-colors">Página Inicial</button>
            <button onClick={() => setCurrentPage('about')} className="hover:text-buzz-blue transition-colors">Sobre nós</button>
            <button onClick={() => setCurrentPage('services')} className="hover:text-buzz-blue transition-colors">Serviços</button>
            <button onClick={() => setCurrentPage('contact')} className="hover:text-buzz-blue transition-colors">Contato</button>
            <button onClick={() => setCurrentPage('contact')} className="btn-primary px-6 py-2 rounded-md font-bold text-xs uppercase">SOLICITAR ORÇAMENTO</button>
          </div>
        </div>
      </nav>

      <main>{currentPage === 'home' ? renderHome() : currentPage === 'about' ? renderAbout() : currentPage === 'services' ? renderServices() : renderContact()}</main>

      <footer className="bg-[#0a0a0a] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="text-4xl font-bold text-buzz-blue mb-6">buzzbe</div>
              <p className="text-gray-400 text-sm leading-relaxed">Consultoria de marketing de performance.</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Institucional</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors underline">Página Inicial</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors underline">Sobre nós</button></li>
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors underline">Serviços</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors underline">Contato</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Whatsapp</h4>
              <button className="text-gray-400 text-sm hover:text-white underline">Fale no Whatsapp</button>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Fale conosco</h4>
              <p className="text-gray-400 text-sm mb-2">contato@buzzbe.com.br</p>
              <p className="text-gray-400 text-sm">(41) 99893-9133</p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-xs text-gray-500">
            Copyright © 2026 buzzbe
          </div>
        </div>
      </footer>

      <a href="https://wa.me/5541998939133" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <MessageCircle size={22} fill="currentColor" />
        <span>Whatsapp</span>
      </a>
    </div>
  );
};

export default App;
