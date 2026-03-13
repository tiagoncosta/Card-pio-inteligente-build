import { motion } from "motion/react";
import { ShoppingCart, CheckCircle2, Utensils, Clock, Brain, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen selection:bg-accent-orange/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center glass-card px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sage-dark rounded-full flex items-center justify-center">
              <Utensils className="text-sage-light w-4 h-4" />
            </div>
            <span className="font-serif font-bold text-lg tracking-tight">Cardápio Inteligente</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#metodo" className="hover:text-accent-orange transition-colors">O Método</a>
            <a href="#beneficios" className="hover:text-accent-orange transition-colors">Benefícios</a>
            <a href="#sobre" className="hover:text-accent-orange transition-colors">Sobre</a>
            <a href="#oferta" className="bg-sage-dark text-white px-5 py-2 rounded-full text-xs hover:bg-opacity-90 transition-all">
              Comprar Agora
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-sage-light pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-6 text-2xl font-serif">
            <a href="#metodo" onClick={() => setIsMenuOpen(false)}>O Método</a>
            <a href="#beneficios" onClick={() => setIsMenuOpen(false)}>Benefícios</a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <button className="btn-primary w-full mt-4">Comprar Agora</button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <span className="inline-block px-4 py-1 rounded-full bg-sage-medium/30 text-sage-dark text-xs font-bold uppercase tracking-widest mb-6">
              O Guia Prático do Método 1-3-5
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8">
              Cardápio <br />
              <span className="italic text-sage-medium">Inteligente</span>
            </h1>
            <p className="text-lg md:text-xl text-sage-dark/70 mb-10 max-w-md leading-relaxed">
              Elimine o estresse de decidir "o que comer" e pare de pagar o "imposto do cansaço". Recupere até <span className="text-sage-dark font-bold">R$ 600,00 por mês</span> perdidos em delivery e desperdício.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#oferta" className="btn-primary flex items-center justify-center gap-2">
                Garantir meu Guia <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-3 px-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      className="w-8 h-8 rounded-full border-2 border-sage-light"
                      referrerPolicy="no-referrer"
                      alt="User"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Mockup of the book based on the cover image */}
            <div className="relative aspect-[3/4] max-w-md mx-auto group">
              <div className="absolute inset-0 bg-sage-dark/10 rounded-[2rem] blur-2xl group-hover:bg-sage-dark/20 transition-all"></div>
              <div className="relative h-full w-full bg-[#d1e2c4] rounded-[2rem] shadow-2xl overflow-hidden border border-white/20 flex flex-col items-center justify-center p-8 text-center">
                <h2 className="text-4xl font-serif text-sage-dark mb-12 leading-tight">
                  Cardápio <br /> Inteligente
                </h2>
                
                {/* Simplified CSS version of the diagram */}
                <div className="relative w-64 h-64 rounded-full bg-white flex items-center justify-center shadow-inner">
                  <div className="absolute inset-4 border-4 border-sage-medium/30 rounded-full"></div>
                  <div className="absolute inset-10 border-8 border-sage-medium/50 rounded-full border-t-accent-orange"></div>
                  <div className="z-10 text-center">
                    <p className="text-[10px] uppercase tracking-tighter text-sage-dark/50">Método</p>
                    <p className="text-xl font-bold text-sage-dark">1-3-5</p>
                  </div>
                  
                  {/* Decorative dots/numbers representing the cover */}
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                    <div 
                      key={i}
                      className="absolute w-6 h-6 rounded-full bg-accent-orange text-white text-[10px] font-bold flex items-center justify-center shadow-sm"
                      style={{
                        transform: `rotate(${deg}deg) translateY(-110px) rotate(-${deg}deg)`
                      }}
                    >
                      {[3, 4, 9, 1, 1, 5][i]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Method Section - What You Will Learn */}
      <section id="metodo" className="py-24 bg-sage-dark text-sage-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-4">O Que Você Vai Aprender</h2>
            <p className="text-sage-light/60 max-w-2xl mx-auto">Transforme sua cozinha em uma linha de montagem eficiente.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "O Método 1-3-5", 
                desc: "Prepare 1 única proteína base neutra que gera 3 variações de pratos diferentes usando apenas 5 ingredientes extras.",
                icon: Brain 
              },
              { 
                title: "Compra Blindada", 
                desc: "Domine o mercado em 40 min com a 'Regra do Perímetro' e o 'Check-out Reverso' para evitar compras por impulso.",
                icon: ShoppingCart 
              },
              { 
                title: "Pré-Preparo Turbo", 
                desc: "Ritual de 60 min no domingo para garantir jantares prontos em apenas 10 minutos nos dias úteis.",
                icon: Clock 
              },
              { 
                title: "Gestão Profissional", 
                desc: "Domine o conceito de 'Refeição Zero' e a regra FIFO para que nenhum alimento seja esquecido na geladeira.",
                icon: Utensils 
              },
              { 
                title: "Estratégia Anti-Desperdício", 
                desc: "Identifique e elimine os vilões da sua carteira, como a compra 'por garantia' e o esquecimento de proteínas.",
                icon: Brain 
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
                <item.icon className="w-8 h-8 mb-6 text-accent-orange" />
                <h4 className="text-xl font-medium mb-3">{item.title}</h4>
                <p className="text-sage-light/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - What's Included */}
      <section id="beneficios" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-4">O Que Está Incluso no Guia</h2>
            <p className="text-sage-dark/60 max-w-2xl mx-auto">
              Ferramentas completas para você sentir o resultado financeiro logo na primeira semana.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Capítulos Passo a Passo", desc: "Da anatomia do desperdício à execução das receitas coringa.", icon: Utensils },
              { title: "Exercícios Práticos", desc: "Ferramentas como o 'Inventário do Caos' e o 'Mapa do Mercado'.", icon: Brain },
              { title: "Tabelas de Apoio", desc: "Conversão rápida de proteínas e bônus de substituições inteligentes.", icon: ShoppingCart },
              { title: "Checklist Final", desc: "Roteiro de execução semanal para manter sua rota de liberdade e economia.", icon: CheckCircle2 }
            ].map((benefit, i) => (
              <div key={i} className="glass-card p-8 hover:bg-white/60 transition-all group">
                <benefit.icon className="w-8 h-8 mb-6 text-sage-medium group-hover:text-accent-orange transition-colors" />
                <h3 className="text-xl mb-4 leading-tight">{benefit.title}</h3>
                <p className="text-sage-dark/70 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section id="oferta" className="py-24 px-6">
        <div className="max-w-3xl mx-auto glass-card p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-sage-medium/20 rounded-full -ml-16 -mb-16 blur-3xl"></div>
          
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl mb-6">Comece sua transformação hoje</h2>
            <p className="text-lg text-sage-dark/70 mb-10">
              Tenha acesso imediato ao ebook completo e todos os bônus exclusivos.
            </p>
            
            <div className="mb-10">
              <span className="text-sage-dark/40 line-through text-xl mr-4">R$ 97,00</span>
              <span className="text-5xl font-serif font-bold text-sage-dark">R$ 27,00</span>
              <p className="text-xs uppercase tracking-widest text-accent-orange font-bold mt-2">Oferta por tempo limitado</p>
            </div>
            
            <button className="btn-primary w-full md:w-auto text-lg px-12">
              Quero o Cardápio Inteligente
            </button>
            
            <p className="mt-8 text-xs text-sage-dark/50 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-3 h-3" /> Garantia de 7 dias ou seu dinheiro de volta
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-sage-dark/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-sage-dark rounded-full flex items-center justify-center">
              <Utensils className="text-sage-light w-3 h-3" />
            </div>
            <span className="font-serif font-bold text-sm tracking-tight">Cardápio Inteligente</span>
          </div>
          
          <div className="flex gap-8 text-xs font-medium text-sage-dark/60">
            <a href="#" className="hover:text-sage-dark">Termos de Uso</a>
            <a href="#" className="hover:text-sage-dark">Privacidade</a>
            <a href="#" className="hover:text-sage-dark">Suporte</a>
          </div>
          
          <p className="text-[10px] text-sage-dark/40 uppercase tracking-widest">
            © 2026 Cardápio Inteligente. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
