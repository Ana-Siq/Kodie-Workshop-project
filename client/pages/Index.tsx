import { useState } from "react";
import { ChevronDown, Zap, Brain, Lightbulb, Code2, Layers } from "lucide-react";

const navigationItems = ["Início", "Sobre", "Programação", "Inscrição", "Contato"];

const programContent = [
  { icon: Brain, title: "Inteligência Artificial", description: "Fundamentos e aplicações práticas de IA" },
  { icon: Lightbulb, title: "Prompt Engineering", description: "Técnicas avançadas para melhores resultados" },
  { icon: Zap, title: "Automação", description: "Automatize suas tarefas do dia a dia" },
  { icon: Code2, title: "Apps Script", description: "Integre e automatize Google Workspace" },
  { icon: Layers, title: "Low Code", description: "Desenvolva sem escrever código complexo" },
];

export default function Index() {
  const [activeNav, setActiveNav] = useState("Início");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-white text-foreground overflow-hidden">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white border-b border-border/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Workshop Tech
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 rounded-lg transition-all font-medium text-sm ${
                    activeNav === item
                      ? "bg-primary text-white"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all font-medium ${
                    activeNav === item
                      ? "bg-primary text-white"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="Início" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              ✨ Evento do Ano
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Participe do{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Workshop de Tecnologia
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Aprenda IA, automação, low-code e muito mais. Uma experiência imersiva para iniciantes e intermediários que querem dominar as tecnologias do futuro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection("Inscrição")}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 group"
            >
              Garantir minha vaga
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("Sobre")}
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/5 transition-all"
            >
              Saiba mais
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-border">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">5+</div>
              <p className="text-muted-foreground text-sm mt-1">Tecnologias</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary">100%</div>
              <p className="text-muted-foreground text-sm mt-1">Prático</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">∞</div>
              <p className="text-muted-foreground text-sm mt-1">Suporte</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="Sobre" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Sobre o Workshop</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Um evento exclusivo para quem quer se destacar no mercado de tecnologia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-4">Por que participar?</h4>
              <ul className="space-y-4">
                {[
                  "Aprenda com especialistas da área",
                  "Conteúdo 100% prático e aplicável",
                  "Certificado de conclusão",
                  "Networking com profissionais",
                  "Acesso a comunidade exclusiva",
                  "Atualizações de conteúdo permanentes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-border">
              <h4 className="text-2xl font-bold mb-4">Público-Alvo</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-bold text-lg text-primary mb-2">Iniciantes</h5>
                  <p className="text-muted-foreground">
                    Profissionais sem experiência que desejam ingressar no mundo da tecnologia e automação.
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <h5 className="font-bold text-lg text-secondary mb-2">Intermediários</h5>
                  <p className="text-muted-foreground">
                    Profissionais com experiência que querem se atualizar com as tendências mais recentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="Programação" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Programação</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conteúdo cuidadosamente selecionado para impactar sua carreira
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programContent.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="Inscrição" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Inscrição</h3>
            <p className="text-xl text-muted-foreground">
              Preencha o formulário para garantir seu lugar no workshop
            </p>
          </div>

          <div className="flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfTg70wKzSzWEMTg0GnulXU05-__e6UNuW8-sEieQBsi2tQ0w/viewform?embedded=true"
              width="640"
              height="985"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full max-w-2xl rounded-2xl border border-border shadow-lg"
            >
              Carregando…
            </iframe>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="Contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-foreground to-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-lg mb-4">Contato</h4>
              <p className="text-white/70 mb-2">Email: contato@workshoptech.com</p>
              <p className="text-white/70">Tel: (11) 9999-9999</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Localização</h4>
              <p className="text-white/70">São Paulo, SP</p>
              <p className="text-white/70 text-sm mt-2">A definir com os inscritos</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/50">
            <p>&copy; 2024 Workshop de Tecnologia. Todos os direitos reservados.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
