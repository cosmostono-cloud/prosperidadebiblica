import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, XCircle, BookOpen, ShieldCheck, Mail, Copyright, Gift, Star, Zap, Clock, Users, UserX, Sparkles } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const scrollToCta = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* HERO SECTION */}
      <section className="bg-darkBlue1 text-white py-16 md:py-24 px-4 rounded-b-[3rem] shadow-2xl">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gold drop-shadow-sm">
            Desafio da Prosperidade Bíblica em 21 Dias
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-light text-gray-100">
            O método prático para sair da estagnação financeira e reconstruir sua vida com princípios bíblicos de abundância.
          </p>

          <div className="relative mb-10">
            <img
              src="/pb-5.png"
              alt="Desafio da Prosperidade Bíblica em 21 Dias"
              className="w-full max-w-xl mx-auto animate-glow-gold"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-12 text-left max-w-2xl mx-auto">
            <div className="space-y-4">
              <p className="flex items-center text-lg">
                <CheckCircle className="text-gold mr-3 flex-shrink-0" size={24} />
                Descubra a liberdade financeira
              </p>
              <p className="flex items-center text-lg">
                <CheckCircle className="text-gold mr-3 flex-shrink-0" size={24} />
                Organize suas finanças com sabedoria
              </p>
            </div>
            <div className="space-y-4">
              <p className="flex items-center text-lg">
                <CheckCircle className="text-gold mr-3 flex-shrink-0" size={24} />
                Transforme sua mentalidade
              </p>
              <p className="flex items-center text-lg">
                <CheckCircle className="text-gold mr-3 flex-shrink-0" size={24} />
                Viva uma vida de propósito
              </p>
            </div>
          </div>

          <Button
            onClick={scrollToCta}
            className="bg-gold text-darkBlue1 hover:bg-yellow-400 text-lg md:text-2xl font-bold py-6 px-8 md:py-8 md:px-12 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto animate-pulse-subtle whitespace-normal h-auto"
          >
            Quero Minha Prosperidade Agora!
          </Button>
        </div>
      </section>

      {/* BLOCO DE DOR */}
      <section className="bg-white pt-20 md:pt-28 pb-10 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-darkBlue1 leading-tight">
            Você se identifica com alguma destas situações?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
            <Card className="bg-darkBlue2 border-none shadow-xl rounded-3xl p-8 text-gray-100">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-start">
                  <XCircle className="text-gold mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-gold text-xl mb-1">Dívidas que não param de crescer</p>
                    <p className="text-gray-300 leading-relaxed">A sensação de estar sempre correndo atrás do prejuízo.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <XCircle className="text-gold mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-gold text-xl mb-1">Salário insuficiente</p>
                    <p className="text-gray-300 leading-relaxed">Nunca sobra para realizar seus sonhos ou cobrir o básico.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-darkBlue2 border-none shadow-xl rounded-3xl p-8 text-gray-100">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-start">
                  <XCircle className="text-gold mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-gold text-xl mb-1">Medo e ansiedade</p>
                    <p className="text-gray-300 leading-relaxed">Insegurança ao pensar no futuro financeiro da sua família.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <XCircle className="text-gold mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-gold text-xl mb-1">Falta de clareza</p>
                    <p className="text-gray-300 leading-relaxed">Não saber por onde começar para organizar sua vida.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-0">
            <img
              src="/6-pb.png"
              alt="Transformação Financeira"
              className="w-full max-w-5xl mx-auto rounded-[2rem] shadow-2xl mb-10 border-8 border-gray-50"
            />
            <p className="text-2xl md:text-3xl text-darkBlue2 font-bold max-w-2xl mx-auto leading-snug">
              Você não está sozinho(a). Existe um caminho bíblico para a sua transformação.
            </p>
          </div>
        </div>
      </section>

      {/* PARA QUEM É / NÃO É */}
      <section className="bg-gray-50 py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border-t-8 border-gold">
              <div className="flex items-center mb-8">
                <Users className="text-gold mr-4" size={40} />
                <h3 className="text-3xl font-bold text-darkBlue1">Para quem é:</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg text-gray-700">Qualquer pessoa cansada da escassez e pronta para a abundância bíblica.</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg text-gray-700">Aprendizes que querem prosperar de forma honesta e abençoada.</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg text-gray-700">Estudiosos da Bíblia que buscam aplicar princípios práticos no dia a dia.</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg text-gray-700">Pastores, padres e líderes que desejam ensinar sobre mordomia cristã.</p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-xl border-t-8 border-red-500">
              <div className="flex items-center mb-8">
                <UserX className="text-red-500 mr-4" size={40} />
                <h3 className="text-3xl font-bold text-darkBlue1">Para quem NÃO é:</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg text-gray-700">Pessoas que buscam "fórmulas mágicas" para ficar rico da noite para o dia.</p>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg text-gray-700">Quem não está disposto a colocar a mão na massa e seguir o desafio.</p>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg text-gray-700">Aqueles que não acreditam ou não respeitam princípios cristãos.</p>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg text-gray-700">Pessoas que preferem continuar na zona de conforto da escassez.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* APRESENTAÇÃO DO MÉTODO */}
      <section className="bg-darkBlue2 text-white py-20 md:py-28 px-4 rounded-[3rem] shadow-inner">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-gold">
            O Desafio da Prosperidade Bíblica
          </h2>
          <p className="text-xl md:text-2xl mb-10 font-light text-gray-200 max-w-3xl mx-auto">
            Um método prático e transformador, projetado para te guiar passo a passo para fora da estagnação financeira.
          </p>
          
          <div className="mb-16">
            <img
              src="/pb-9.png"
              alt="Casal e Bíblia"
              className="w-full max-w-3xl mx-auto rounded-[2rem] shadow-2xl border-4 border-gold/20"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-darkBlue1/50 border border-white/10 backdrop-blur-sm shadow-2xl rounded-3xl p-8">
              <BookOpen className="text-gold mx-auto mb-6" size={56} />
              <CardTitle className="text-2xl font-bold text-white mb-4">O Que É?</CardTitle>
              <p className="text-gray-300 text-lg leading-relaxed">
                Um guia diário de 21 dias com ensinamentos e exercícios práticos de sabedoria bíblica.
              </p>
            </Card>
            <Card className="bg-darkBlue1/50 border border-white/10 backdrop-blur-sm shadow-2xl rounded-3xl p-8">
              <ShieldCheck className="text-gold mx-auto mb-6" size={56} />
              <CardTitle className="text-2xl font-bold text-white mb-4">Como Funciona?</CardTitle>
              <p className="text-gray-300 text-lg leading-relaxed">
                Cada dia uma nova lição e um desafio prático para implementar imediatamente.
              </p>
            </Card>
            <Card className="bg-darkBlue1/50 border border-white/10 backdrop-blur-sm shadow-2xl rounded-3xl p-8">
              <CheckCircle className="text-gold mx-auto mb-6" size={56} />
              <CardTitle className="text-2xl font-bold text-white mb-4">Resultados</CardTitle>
              <p className="text-gray-300 text-lg leading-relaxed">
                Clareza, organização, redução de dívidas e uma nova mentalidade de abundância.
              </p>
            </Card>
          </div>

          <Button
            onClick={scrollToCta}
            className="bg-gold text-darkBlue1 hover:bg-yellow-400 text-lg md:text-xl font-bold py-6 px-8 rounded-full shadow-xl transition-all transform hover:scale-105 w-full md:w-auto h-auto"
          >
            Quero Começar Agora!
          </Button>
        </div>
      </section>

      {/* O QUE A PESSOA VAI APRENDER */}
      <section className="bg-white py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-16">
            <img
              src="/pb-8.png"
              alt="Sabedoria Bíblica"
              className="w-full h-auto rounded-[3rem] shadow-2xl mb-12"
            />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-darkBlue1">
            O que você vai dominar em 21 dias:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-20">
            <ul className="space-y-8">
              <li className="flex items-start">
                <CheckCircle className="text-gold mr-4 mt-1 flex-shrink-0" size={28} />
                <p className="text-xl text-darkBlue2 leading-relaxed">
                  <span className="font-bold">Organização Financeira:</span> Elimine o caos e tenha controle total do seu dinheiro.
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-gold mr-4 mt-1 flex-shrink-0" size={28} />
                <p className="text-xl text-darkBlue2 leading-relaxed">
                  <span className="font-bold">Fim das Dívidas:</span> Um plano estratégico para se libertar do peso financeiro.
                </p>
              </li>
            </ul>
            <ul className="space-y-8">
              <li className="flex items-start">
                <CheckCircle className="text-gold mr-4 mt-1 flex-shrink-0" size={28} />
                <p className="text-xl text-darkBlue2 leading-relaxed">
                  <span className="font-bold">Mentalidade de Fé:</span> Desenvolva uma visão de abundância alinhada com a Bíblia.
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-gold mr-4 mt-1 flex-shrink-0" size={28} />
                <p className="text-xl text-darkBlue2 leading-relaxed">
                  <span className="font-bold">Multiplicação:</span> Aprenda a identificar e criar novas fontes de renda.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full">
          <div className="container mx-auto max-w-4xl text-center mb-10">
            <h3 className="text-2xl md:text-4xl font-bold text-darkBlue1">Confira o poder do desafio na prática:</h3>
          </div>
          <img
            src="https://tonocosmos.com.br/wp-content/uploads/2025/04/3-pb.jpg"
            alt="Poder do Desafio"
            className="w-full h-auto shadow-2xl object-cover"
          />
        </div>
      </section>

      {/* SEÇÃO DE BÔNUS */}
      <section className="bg-darkBlue1 py-20 md:py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-block bg-gold text-darkBlue1 font-black px-8 py-3 rounded-full mb-8 animate-bounce shadow-2xl text-lg">
            OFERTA LIMITADA
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white drop-shadow-lg">
            <span className="text-gold">Bônus Exclusivos</span> Gratuitos
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto">Ao garantir o desafio hoje, você também recebe estes presentes especiais:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <Card className="bg-white/5 backdrop-blur-md border-2 border-gold/30 shadow-2xl rounded-[2rem] p-10 relative overflow-hidden group hover:border-gold transition-all">
              <div className="absolute top-0 right-0 bg-gold text-darkBlue1 px-6 py-2 font-bold text-sm rounded-bl-2xl">GRÁTIS</div>
              <Gift className="text-gold mb-6 group-hover:scale-110 transition-transform" size={56} />
              <CardTitle className="text-2xl font-bold text-white mb-4">Ebook Q.I. Espiritual</CardTitle>
              <p className="text-lg text-gray-300 leading-relaxed">
                Desenvolva sua inteligência espiritual para tomar decisões sábias e alinhadas com o propósito divino.
              </p>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-md border-2 border-gold/30 shadow-2xl rounded-[2rem] p-10 relative overflow-hidden group hover:border-gold transition-all">
              <div className="absolute top-0 right-0 bg-gold text-darkBlue1 px-6 py-2 font-bold text-sm rounded-bl-2xl">GRÁTIS</div>
              <Star className="text-gold mb-6 group-hover:scale-110 transition-transform" size={56} />
              <CardTitle className="text-2xl font-bold text-white mb-4">7 Passos para o Despertar</CardTitle>
              <p className="text-lg text-gray-300 leading-relaxed">
                Um guia prático para renovar sua fé e se conectar profundamente com a fonte de toda a abundância.
              </p>
            </Card>
          </div>

          <Button
            onClick={scrollToCta}
            className="bg-gold text-darkBlue1 hover:bg-yellow-400 text-lg md:text-xl font-bold py-6 px-8 rounded-full shadow-xl transition-all transform hover:scale-105 w-full md:w-auto h-auto"
          >
            Quero Meus Bônus Agora!
          </Button>
        </div>
      </section>

      {/* CTA PRINCIPAL COM PREÇO */}
      <section id="cta-section" className="bg-darkBlue1 text-white py-20 md:py-32 px-4 rounded-t-[4rem] shadow-2xl">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-10 leading-tight">
            Sua Jornada de <span className="text-gold">Sabedoria Financeira Bíblica</span>
          </h2>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12 mb-12 max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
            <p className="text-gray-400 line-through text-2xl mb-2">De R$ 147,00</p>
            <p className="text-white text-xl mb-4 font-medium">Por apenas:</p>
            <div className="flex items-center justify-center mb-8">
              <span className="text-gold text-4xl font-bold mr-2">R$</span>
              <span className="text-gold text-8xl md:text-9xl font-black tracking-tighter">44</span>
              <span className="text-gold text-3xl font-bold ml-1">,00</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-10 border-t border-white/10 pt-8">
              <div className="flex items-center text-gray-200">
                <Zap className="text-gold mr-3 flex-shrink-0" size={20} />
                <span>Acesso Vitalício</span>
              </div>
              <div className="flex items-center text-gray-200">
                <Gift className="text-gold mr-3 flex-shrink-0" size={20} />
                <span>Todos os Bônus Inclusos</span>
              </div>
              <div className="flex items-center text-gray-200">
                <ShieldCheck className="text-gold mr-3 flex-shrink-0" size={20} />
                <span>Garantia de 7 Dias</span>
              </div>
              <div className="flex items-center text-gray-200">
                <Clock className="text-gold mr-3 flex-shrink-0" size={20} />
                <span>Acesso Imediato</span>
              </div>
            </div>

            <div className="mb-10 bg-gold/10 py-4 px-6 rounded-2xl border border-gold/20">
              <p className="text-gold font-bold text-lg flex items-center justify-center">
                <Sparkles className="mr-2" size={20} />
                + Bônus Surpresa Exclusivos para Novos Alunos!
              </p>
            </div>

            <Button
              onClick={() => window.open('https://pay.kiwify.com.br/QMKaBAc', '_blank')}
              className="bg-gold text-darkBlue1 hover:bg-yellow-400 text-xl md:text-4xl font-black py-8 px-6 md:py-12 md:px-16 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 w-full animate-pulse-subtle whitespace-normal h-auto leading-tight"
            >
              QUERO MEU ACESSO AGORA!
            </Button>
          </div>
          
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center">
              <ShieldCheck className="mr-2 text-gold" size={20} />
              <span>Pagamento 100% Seguro</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2 text-gold" size={20} />
              <span>Acesso Imediato por E-mail</span>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA (MOVIDA PARA BAIXO DO PREÇO) */}
      <section className="bg-white py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-darkBlue1 text-white rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gold"></div>
            <ShieldCheck className="text-gold mx-auto mb-8" size={80} />
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Risco Zero: Garantia de 7 Dias</h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-10">
              Temos plena confiança no método. Se em 7 dias você não sentir que o conteúdo é para você, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
            </p>
            <div className="inline-flex items-center bg-white/10 px-8 py-4 rounded-full border border-white/20">
              <span className="text-gold font-bold text-lg">Sua satisfação é nossa prioridade</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-darkBlue1">
            Dúvidas Frequentes
          </h2>
          <Accordion type="single" collapsible className="w-full text-left space-y-4">
            <AccordionItem value="item-1" className="border border-gray-100 rounded-2xl px-6 bg-gray-50/50">
              <AccordionTrigger className="text-lg md:text-xl font-bold text-darkBlue2 hover:no-underline py-6">
                Funciona para quem tem muitas dívidas?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600 pb-6 leading-relaxed">
                Sim! O método foca justamente em quem está travado ou endividado, oferecendo um passo a passo bíblico e prático para retomar o controle.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-gray-100 rounded-2xl px-6 bg-gray-50/50">
              <AccordionTrigger className="text-lg md:text-xl font-bold text-darkBlue2 hover:no-underline py-6">
                O conteúdo é digital ou físico?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600 pb-6 leading-relaxed">
                É 100% digital. Você recebe o acesso imediatamente no seu e-mail após a confirmação do pagamento e pode ler no celular, tablet ou computador.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-gray-100 rounded-2xl px-6 bg-gray-50/50">
              <AccordionTrigger className="text-lg md:text-xl font-bold text-darkBlue2 hover:no-underline py-6">
                Quanto tempo preciso dedicar por dia?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600 pb-6 leading-relaxed">
                Apenas 15 a 20 minutos são suficientes para ler a lição do dia e realizar o exercício prático proposto.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-darkBlue2 text-gray-400 py-16 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="flex justify-center items-center space-x-2 text-gold font-bold text-xl">
            <ShieldCheck size={24} />
            <span>Prosperidade Bíblica</span>
          </div>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Aviso Legal: Este produto não garante resultados financeiros imediatos. O sucesso depende da aplicação consistente dos princípios ensinados e do esforço individual.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
            <p className="flex items-center">
              <Copyright className="mr-2" size={14} />
              2024 Todos os direitos reservados.
            </p>
            <p className="flex items-center">
              <Mail className="mr-2" size={14} />
              suporte@desafioprosperidadebiblica.com
            </p>
          </div>
          <MadeWithDyad />
        </div>
      </footer>
    </div>
  );
};

export default Index;