import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, XCircle, BookOpen, ShieldCheck, Mail, Copyright, Star, Zap } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const scrollToCta = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* HERO SECTION */}
      <section className="bg-darkGreen1 text-white py-16 md:py-24 px-4 rounded-b-3xl shadow-lg">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-gold">
            Desafio da Prosperidade Bíblica em 21 Dias
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            O método prático para sair da estagnação financeira e reconstruir sua vida com princípios bíblicos de abundância.
          </p>

          <img
            src="/pb-5.png"
            alt="Desafio da Prosperidade Bíblica em 21 Dias"
            className="w-full max-w-full md:max-w-xl mx-auto mb-6 object-cover animate-glow-gold rounded-lg"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-4 text-left">
              <p className="flex items-center text-lg md:text-xl">
                <CheckCircle className="text-gold mr-3 flex-shrink-0" size={24} />
                Descubra a liberdade financeira
              </p>
              <p className="flex items-center text-lg md:text-xl">
                <CheckCircle className="text-gold mr-3 flex-shrink-0" size={24} />
                Organize suas finanças com sabedoria
              </p>
              <p className="flex items-center text-lg md:text-xl">
                <CheckCircle className="text-gold mr-3 flex-shrink-0" size={24} />
                Transforme sua mentalidade sobre dinheiro
              </p>
              <p className="flex items-center text-lg md:text-xl">
                <CheckCircle className="text-gold mr-3 flex-shrink-0" size={24} />
                Viva uma vida de propósito e abundância
              </p>
            </div>
          </div>

          <Button
            onClick={scrollToCta}
            className="bg-gold text-darkGreen1 hover:bg-yellow-400 text-xl md:text-2xl font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto block mx-auto text-center animate-pulse-subtle flex justify-center items-center"
          >
            Quero Minha Prosperidade Agora!
          </Button>
        </div>
      </section>

      {/* BLOCO DE DOR */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-darkGreen1">
            Você se identifica com alguma destas situações?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
            <Card className="bg-darkGreen2 border-none shadow-lg rounded-2xl p-6 text-gray-200">
              <CardContent className="p-0 space-y-4">
                <p className="flex items-start text-lg md:text-xl">
                  <XCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <div className="flex flex-col space-y-1">
                    <span className="font-semibold leading-relaxed text-gold">Dívidas que não param de crescer</span>
                    <span className="leading-relaxed">e a sensação de estar sempre correndo atrás do prejuízo.</span>
                  </div>
                </p>
                <p className="flex items-start text-lg md:text-xl">
                  <XCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <div className="flex flex-col space-y-1">
                    <span className="font-semibold leading-relaxed text-gold">Salário que nunca é suficiente</span>
                    <span className="leading-relaxed">para cobrir as despesas básicas e realizar seus sonhos.</span>
                  </div>
                </p>
                <p className="flex items-start text-lg md:text-xl">
                  <XCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <div className="flex flex-col space-y-1">
                    <span className="font-semibold leading-relaxed text-gold">Medo e ansiedade</span>
                    <span className="leading-relaxed">ao pensar no futuro financeiro da sua família.</span>
                  </div>
                </p>
              </CardContent>
            </Card>
            <Card className="bg-darkGreen2 border-none shadow-lg rounded-2xl p-6 text-gray-200">
              <CardContent className="p-0 space-y-4">
                <p className="flex items-start text-lg md:text-xl">
                  <XCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <div className="flex flex-col space-y-1">
                    <span className="font-semibold leading-relaxed text-gold">Falta de clareza e direção</span>
                    <span className="leading-relaxed">sobre como organizar suas finanças e sair da estagnação.</span>
                  </div>
                </p>
                <p className="flex items-start text-lg md:text-xl">
                  <XCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <div className="flex flex-col space-y-1">
                    <span className="font-semibold leading-relaxed text-gold">Sentimento de culpa ou vergonha</span>
                    <span className="leading-relaxed">por não conseguir prosperar, mesmo se esforçando.</span>
                  </div>
                </p>
                <p className="flex items-start text-lg md:text-xl">
                  <XCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <div className="flex flex-col space-y-1">
                    <span className="font-semibold leading-relaxed text-gold">Desejo profundo de viver a abundância</span>
                    <span className="leading-relaxed">prometida na Bíblia, mas sem saber por onde começar.</span>
                  </div>
                </p>
              </CardContent>
            </Card>
          </div>
          
          <img
            src="/6-pb.png"
            alt="Transformação Financeira"
            className="w-full max-w-2xl mx-auto mb-8 rounded-2xl shadow-2xl"
          />
          
          <p className="text-xl md:text-2xl text-darkGreen2 font-medium">
            Você não está sozinho(a). Milhares de cristãos enfrentam desafios financeiros, mas existe um caminho para a transformação.
          </p>
        </div>
      </section>

      {/* APRESENTAÇÃO DO MÉTODO */}
      <section className="bg-darkGreen2 text-white py-16 md:py-24 px-4 rounded-t-3xl shadow-lg">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gold">
            Apresentando: O Desafio da Prosperidade Bíblica em 21 Dias
          </h2>
          <p className="text-lg md:text-xl mb-8 font-light">
            Este não é apenas mais um livro sobre finanças. É um método prático e transformador, baseado em princípios bíblicos atemporais, projetado para te guiar passo a passo para fora da estagnação financeira.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-darkGreen1 border-none shadow-xl rounded-2xl p-6 text-center">
              <CardHeader className="p-0 mb-4">
                <BookOpen className="text-gold mx-auto mb-3" size={48} />
                <CardTitle className="text-2xl font-semibold text-white">O Que É?</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-lg font-light text-white">
                Um guia diário de 21 dias com ensinamentos e exercícios práticos para aplicar a sabedoria bíblica em suas finanças.
              </CardContent>
            </Card>
            <Card className="bg-darkGreen1 border-none shadow-xl rounded-2xl p-6 text-center">
              <CardHeader className="p-0 mb-4">
                <ShieldCheck className="text-gold mx-auto mb-3" size={48} />
                <CardTitle className="text-2xl font-semibold text-white">Como Funciona?</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-lg font-light text-white">
                Cada dia, você receberá uma lição, uma reflexão bíblica e um desafio prático para implementar imediatamente em sua vida.
              </CardContent>
            </Card>
            <Card className="bg-darkGreen1 border-none shadow-xl rounded-2xl p-6 text-center">
              <CardHeader className="p-0 mb-4">
                <CheckCircle className="text-gold mx-auto mb-3" size={48} />
                <CardTitle className="text-2xl font-semibold text-white">Resultados Esperados</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-lg font-light text-white">
                Clareza, organização, redução de dívidas, aumento da renda e uma mentalidade de abundância alinhada com a fé.
              </CardContent>
            </Card>
          </div>
          <p className="text-xl md:text-2xl text-gold font-medium">
            Prepare-se para uma jornada de transformação que impactará todas as áreas da sua vida!
          </p>
        </div>
      </section>

      {/* O QUE A PESSOA VAI APRENDER */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-darkGreen1">
            Nesta jornada de 21 dias, você vai aprender a:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mb-12">
            <ul className="space-y-6 text-lg md:text-xl text-darkGreen2">
              <li className="flex items-start leading-relaxed">
                <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={24} />
                <span><span className="font-semibold">Organizar suas finanças</span> de forma simples e eficaz, eliminando o caos de uma vez por todas.</span>
              </li>
              <li className="flex items-start leading-relaxed">
                <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={24} />
                <span>Criar um <span className="font-semibold">plano estratégico para quitar dívidas</span> e se libertar do peso dos juros.</span>
              </li>
              <li className="flex items-start leading-relaxed">
                <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={24} />
                <span>Desenvolver uma <span className="font-semibold">mentalidade de abundância</span> e fé inabalável nas promessas de Deus.</span>
              </li>
              <li className="flex items-start leading-relaxed">
                <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={24} />
                <span>Identificar e <span className="font-semibold">multiplicar fontes de renda extra</span>, usando seus talentos com sabedoria.</span>
              </li>
            </ul>
            <ul className="space-y-6 text-lg md:text-xl text-darkGreen2">
              <li className="flex items-start leading-relaxed">
                <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={24} />
                <span><span className="font-semibold">Elaborar um planejamento financeiro</span> que realmente funciona para sua realidade atual.</span>
              </li>
              <li className="flex items-start leading-relaxed">
                <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={24} />
                <span>Aplicar <span className="font-semibold">princípios bíblicos de mordomia</span> e generosidade que abrem as janelas do céu.</span>
              </li>
              <li className="flex items-start leading-relaxed">
                <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={24} />
                <span>Construir um <span className="font-semibold">plano de 90 dias</span> para sustentar sua prosperidade a longo prazo.</span>
              </li>
              <li className="flex items-start leading-relaxed">
                <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={24} />
                <span>Viver com <span className="font-semibold">paz e segurança</span>, sabendo que você está cuidando bem do que Deus te confiou.</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-darkGreen1 italic">Confira o poder do desafio na prática:</h3>
            <img
              src="https://tonocosmos.com.br/wp-content/uploads/2025/04/3-pb.jpg"
              alt="Confira o poder do desafio"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* PARA QUEM É / PARA QUEM NÃO É */}
      <section className="bg-darkGreen1 text-white py-16 md:py-24 px-4 rounded-b-3xl shadow-lg">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gold">
            Este Desafio É Para Você Se...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-darkGreen2 border-none shadow-xl rounded-2xl p-6 text-left text-white">
              <CardHeader className="p-0 mb-4">
                <CheckCircle className="text-gold mr-3 mb-2" size={32} />
                <CardTitle className="text-2xl font-semibold text-white">É Para Você!</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-3 text-lg font-light text-gray-100">
                <p className="flex items-start">
                  <span className="mr-2 text-gold">✔</span> Você é cristão e busca alinhar suas finanças com a fé.
                </p>
                <p className="flex items-start">
                  <span className="mr-2 text-gold">✔</span> Está endividado ou travado financeiramente e quer mudar.
                </p>
                <p className="flex items-start">
                  <span className="mr-2 text-gold">✔</span> Deseja organizar sua vida financeira e ter mais paz.
                </p>
                <p className="flex items-start">
                  <span className="mr-2 text-gold">✔</span> Busca um método prático e com direção espiritual.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-none shadow-xl rounded-2xl p-6 text-left text-white">
              <CardHeader className="p-0 mb-4">
                <XCircle className="text-red-500 mr-3 mb-2" size={32} />
                <CardTitle className="text-2xl font-semibold text-white">Não É Para Você Se...</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-3 text-lg font-light text-gray-100">
                <p className="flex items-start">
                  <span className="mr-2 text-red-500">✖</span> Você busca "fórmulas mágicas" ou enriquecimento rápido.
                </p>
                <p className="flex items-start">
                  <span className="mr-2 text-red-500">✖</span> Não está disposto a aplicar os princípios e exercícios.
                </p>
                <p className="flex items-start">
                  <span className="mr-2 text-red-500">✖</span> Acredita que a fé e as finanças não se conectam.
                </p>
                <p className="flex items-start">
                  <span className="mr-2 text-red-500">✖</span> Não quer reconstruir sua vida financeira de forma sólida.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PROVA / AUTORIDADE */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-darkGreen1">
            Um Caminho Comprovado, Baseado na Verdade
          </h2>
          <p className="text-lg md:text-xl mb-6 text-darkGreen2 font-light">
            Este desafio foi cuidadosamente elaborado com base em anos de estudo e aplicação dos princípios bíblicos de prosperidade. Não prometemos riquezas instantâneas, mas um método ético e prático para você construir uma vida financeira sólida e abundante, honrando a Deus em cada passo.
          </p>
          <p className="text-lg md:text-xl text-darkGreen2 font-light">
            Acreditamos que a verdadeira prosperidade vai além do dinheiro, abrangendo paz, propósito e a capacidade de abençoar outros. Este ebook é uma ferramenta para te capacitar nessa jornada.
          </p>
          <div className="w-full max-w-2xl mx-auto mt-12">
            <img
              src="/pb-8.png"
              alt="Sabedoria Bíblica e Prosperidade"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* O QUE ESTÁ INCLUSO */}
      <section className="bg-darkGreen2 text-white py-16 md:py-24 px-4 rounded-t-3xl shadow-lg">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gold">
            O Que Você Receberá Imediatamente:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-darkGreen1 border-none shadow-xl rounded-2xl p-6 text-left text-white">
              <CardHeader className="p-0 mb-4">
                <BookOpen className="text-gold mr-3 mb-2" size={32} />
                <CardTitle className="text-2xl font-semibold text-white">Ebook Principal</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-3 text-lg font-light text-gray-100">
                <p className="flex items-start">
                  <span className="mr-2 text-gold">✔</span> O "Desafio da Prosperidade Bíblica em 21 Dias" completo.
                </p>
                <p className="flex items-start">
                  <span className="mr-2 text-gold">✔</span> 21 capítulos repletos de sabedoria e estratégias.
                </p>
                <p className="flex items-start">
                  <span className="mr-2 text-gold">✔</span> Exercícios práticos para cada dia da jornada.
                </p>
                <p className="flex items-start">
                  <span className="mr-2 text-gold">✔</span> Um plano de ação de 90 dias para consolidar seus resultados.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-darkGreen1 border-none shadow-xl rounded-2xl p-6 text-left text-white">
              <CardHeader className="p-0 mb-4">
                <CheckCircle className="text-gold mr-3 mb-2" size={32} />
                <CardTitle className="text-2xl font-semibold text-white">Bônus Exclusivo</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-3 text-lg font-light text-gray-100">
                <p className="flex items-start">
                  <span className="mr-2 text-gold">✔</span> [BÔNUS 1]: Guia Rápido para Multiplicar sua Renda.
                </p>
                <p className="flex items-start">
                  <span className="mr-2 text-gold">✔</span> [BÔNUS 2]: Planilha de Orçamento Familiar Cristão.
                </p>
                <p className="flex items-start">
                  <span className="mr-2 text-gold">✔</span> [BÔNUS 3]: Acesso a um Grupo Exclusivo de Apoio.
                </p>
                <p className="flex items-start">
                  <span className="mr-2 text-gold">✔</span> E muito mais para acelerar sua jornada!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE BÔNUS ESPECIAIS */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block bg-gold/20 text-darkGreen1 px-6 py-2 rounded-full font-bold text-sm mb-6 uppercase tracking-widest">
            Oferta de Tempo Limitado
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-darkGreen1">
            Bônus Exclusivos que Você Leva Hoje:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-3xl border-2 border-gold/30 shadow-lg relative overflow-hidden group hover:border-gold transition-all">
              <div className="absolute top-0 right-0 bg-gold text-darkGreen1 px-4 py-1 rounded-bl-xl font-bold text-xs">GRÁTIS</div>
              <Zap className="text-gold mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3 text-darkGreen1">Ebook Q.I. Espiritual</h3>
              <p className="text-gray-600 leading-relaxed">
                Aprenda a desenvolver sua inteligência espiritual para tomar decisões financeiras mais sábias e alinhadas com o propósito divino.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-3xl border-2 border-gold/30 shadow-lg relative overflow-hidden group hover:border-gold transition-all">
              <div className="absolute top-0 right-0 bg-gold text-darkGreen1 px-4 py-1 rounded-bl-xl font-bold text-xs">GRÁTIS</div>
              <Star className="text-gold mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3 text-darkGreen1">7 Passos para o Despertar Espiritual</h3>
              <p className="text-gray-600 leading-relaxed">
                Um guia prático para renovar sua mente e espírito, preparando o terreno para a verdadeira prosperidade bíblica florescer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="bg-gray-50 py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-darkGreen1">
            Sua Satisfação É Importante Para Nós
          </h2>
          <p className="text-lg md:text-xl mb-6 text-darkGreen2 font-light">
            Temos plena confiança na eficácia do "Desafio da Prosperidade Bíblica em 21 Dias". Por isso, oferecemos uma garantia tranquila de 7 dias. Se por qualquer motivo você sentir que o conteúdo não é para você, basta nos enviar um e-mail dentro de 7 dias após a compra e faremos o reembolso total do seu investimento.
          </p>
          <div className="w-full max-w-xs mx-auto mt-8">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4149/4149661.png"
              alt="Garantia de 7 Dias"
              className="w-full h-auto opacity-80"
            />
            <p className="mt-4 font-bold text-darkGreen1">7 DIAS DE GARANTIA INCONDICIONAL</p>
          </div>
        </div>
      </section>

      {/* CTA PRINCIPAL COM PREÇO */}
      <section id="cta-section" className="bg-darkGreen1 text-white py-16 md:py-24 px-4 rounded-b-3xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gold">
            Chegou a Hora de Reconstruir Sua Vida Financeira!
          </h2>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 mb-12 max-w-2xl mx-auto shadow-2xl">
            <p className="text-gray-300 text-lg mb-2 line-through">De R$ 197,00</p>
            <p className="text-white text-xl mb-4">Por apenas</p>
            <div className="flex items-center justify-center mb-6">
              <span className="text-gold text-3xl md:text-4xl font-bold mr-2">12x de</span>
              <span className="text-gold text-6xl md:text-8xl font-extrabold">R$ 4,50</span>
            </div>
            <p className="text-white text-2xl md:text-3xl font-bold mb-8">ou R$ 45,00 à vista</p>
            
            <Button
              onClick={() => window.open("https://pay.kiwify.com.br/SEU_LINK_AQUI", "_blank")}
              className="bg-gold text-darkGreen1 hover:bg-yellow-400 text-2xl md:text-3xl font-bold py-8 px-12 rounded-full shadow-[0_0_30px_rgba(244,196,48,0.5)] transition-all duration-300 transform hover:scale-105 w-full animate-pulse-subtle flex justify-center items-center"
            >
              QUERO MEU ACESSO AGORA!
            </Button>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4 opacity-70">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6" />
              <img src="https://logopng.com.br/logos/pix-106.png" alt="Pix" className="h-6" />
            </div>
          </div>
          
          <p className="text-sm text-gray-300">
            Compra 100% segura. Acesso imediato enviado para o seu e-mail.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-darkGreen1">
            Perguntas Frequentes
          </h2>
          <Accordion type="single" collapsible className="w-full text-left">
            <AccordionItem value="item-1" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg md:text-xl font-semibold text-darkGreen2 hover:no-underline py-4">
                Este desafio funciona para mim, mesmo que eu esteja muito endividado(a)?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-gray-700 pb-4">
                Sim, o método foi desenvolvido para pessoas em qualquer estágio financeiro, especialmente para quem busca sair das dívidas e reconstruir sua vida com princípios sólidos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg md:text-xl font-semibold text-darkGreen2 hover:no-underline py-4">
                Preciso ser religioso para participar do desafio?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-gray-700 pb-4">
                O desafio é baseado em princípios bíblicos, mas a linguagem é prática e acessível. Se você busca sabedoria e direção espiritual para suas finanças, independentemente do seu nível de religiosidade, este ebook pode te ajudar.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg md:text-xl font-semibold text-darkGreen2 hover:no-underline py-4">
                Este ebook é um investimento ou um gasto?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-gray-700 pb-4">
                Consideramos um investimento em seu futuro e na sua paz financeira. O conhecimento e as ferramentas que você adquirirá têm o potencial de gerar retornos muito maiores do que o valor do ebook.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg md:text-xl font-semibold text-darkGreen2 hover:no-underline py-4">
                Quanto tempo por dia preciso dedicar ao desafio?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-gray-700 pb-4">
                Recomendamos dedicar de 15 a 30 minutos por dia para ler a lição, refletir e aplicar o exercício. A consistência é a chave para a transformação.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg md:text-xl font-semibold text-darkGreen2 hover:no-underline py-4">
                O ebook é físico ou digital?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-gray-700 pb-4">
                O "Desafio da Prosperidade Bíblica em 21 Dias" é um ebook 100% digital. Você terá acesso imediato após a compra e poderá lê-lo em seu computador, tablet ou smartphone.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* SEÇÃO FINAL */}
      <section className="bg-darkGreen1 text-white py-16 md:py-24 px-4 rounded-t-3xl shadow-lg">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gold">
            Sua Jornada Para a Abundância Começa Agora!
          </h2>
          <p className="text-xl md:text-2xl mb-12 font-light">
            Imagine sua vida daqui a 21 dias: com suas finanças organizadas, dívidas sob controle e uma nova mentalidade de prosperidade. Essa realidade está ao seu alcance. Dê o primeiro passo hoje.
          </p>
          <Button
            onClick={scrollToCta}
            className="bg-gold text-darkGreen1 hover:bg-yellow-400 text-2xl md:text-3xl font-bold py-5 px-12 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto block mx-auto text-center animate-pulse-subtle flex justify-center items-center"
          >
            Quero Transformar Minhas Finanças!
          </Button>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-darkGreen2 text-gray-300 py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center text-sm md:text-base space-y-4">
          <p className="flex items-center justify-center">
            <Copyright className="mr-2" size={16} />
            2024 Desafio da Prosperidade Bíblica. Todos os direitos reservados.
          </p>
          <p>
            Aviso Legal: Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados. O sucesso depende do esforço individual, dedicação e aplicação dos princípios ensinados.
          </p>
          <p className="flex items-center justify-center">
            <Mail className="mr-2" size={16} />
            Contato: suporte@desafioprosperidadebiblica.com
          </p>
        </div>
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;