import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, FileText, Receipt, Check } from "lucide-react"

const whatsappUrl = "https://wa.me/5511968895642?text=Ol%C3%A1%20Preciso%20de%20ajuda"

export default function SkyWebsite() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-red-600 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white text-3xl font-bold">SKY</div>
            <nav className="hidden md:flex space-x-6">
              <Link href={whatsappUrl} className="text-white hover:text-red-200 transition-colors">
                Planos
              </Link>
              <Link href={whatsappUrl} className="text-white hover:text-red-200 transition-colors">
                Suporte
              </Link>
              <Link href={whatsappUrl} className="text-white hover:text-red-200 transition-colors">
                Contato
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-6">Bem-vindo à SKY</h1>
              <p className="text-xl mb-8">A melhor experiência em entretenimento e internet para sua casa</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={whatsappUrl}>
                  <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 w-full sm:w-auto">
                    <Receipt className="mr-2 h-5 w-5" />
                    2ª Via de Fatura
                  </Button>
                </Link>
                <Link href={whatsappUrl}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-red-600 w-full sm:w-auto"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Consultar Faturas
                  </Button>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/images/sky-img-1.png"
                alt="SKY+ Promoção"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-red-600 border-red-500">
              <CardContent className="p-6">
                <Image src="/images/sky-img.jpg" alt="SKY Play" width={500} height={300} className="rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">SKY Play</h3>
                <p className="text-white mb-4">Assista seus filmes e séries favoritos quando e onde quiser</p>
                <Link href={whatsappUrl}>
                  <Button className="bg-white text-red-600 hover:bg-gray-100">Saiba Mais</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-red-600 border-red-500">
              <CardContent className="p-6">
                <Image
                  src="/images/sky-imf.jpg"
                  alt="Programação SKY"
                  width={500}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-4">Programação Completa</h3>
                <p className="text-white mb-4">Escolha sua programação e aproveite cada momento em família</p>
                <Link href={whatsappUrl}>
                  <Button className="bg-white text-red-600 hover:bg-gray-100">Ver Planos</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Internet Plans Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Promoções de Internet</h2>
          <p className="text-xl text-center text-white mb-12">Planos com total suporte e descontos especiais</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Plano Básico */}
            <Card className="bg-white border-2 border-red-300 relative">
              <CardHeader className="text-center">
                <Badge className="bg-red-600 text-white mb-2 mx-auto w-fit">POPULAR</Badge>
                <CardTitle className="text-2xl text-red-600">Plano Básico</CardTitle>
                <div className="text-4xl font-bold text-red-600">
                  R$ 79,90
                  <span className="text-lg font-normal">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Internet 100MB</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Wi-Fi grátis</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Suporte 24h</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Instalação grátis</span>
                  </li>
                </ul>
                <Link href={whatsappUrl} className="block mt-6">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contratar Agora
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plano Intermediário */}
            <Card className="bg-white border-2 border-red-500 relative transform scale-105">
              <CardHeader className="text-center">
                <Badge className="bg-yellow-500 text-white mb-2 mx-auto w-fit">MELHOR OFERTA</Badge>
                <CardTitle className="text-2xl text-red-600">Plano Intermediário</CardTitle>
                <div className="text-4xl font-bold text-red-600">
                  R$ 129,90
                  <span className="text-lg font-normal">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Internet 300MB</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Wi-Fi grátis</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>SKY Play incluído</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Suporte 24h</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Instalação grátis</span>
                  </li>
                </ul>
                <Link href={whatsappUrl} className="block mt-6">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contratar Agora
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plano Premium */}
            <Card className="bg-white border-2 border-red-300 relative">
              <CardHeader className="text-center">
                <Badge className="bg-red-600 text-white mb-2 mx-auto w-fit">PREMIUM</Badge>
                <CardTitle className="text-2xl text-red-600">Plano Premium</CardTitle>
                <div className="text-4xl font-bold text-red-600">
                  R$ 199,90
                  <span className="text-lg font-normal">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Internet 600MB</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Wi-Fi grátis</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>SKY Play Premium</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>TV por assinatura</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Suporte prioritário</span>
                  </li>
                </ul>
                <Link href={whatsappUrl} className="block mt-6">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contratar Agora
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-white text-lg mb-4">🎉 Desconto especial para novos clientes! 🎉</p>
            <Link href={whatsappUrl}>
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale Conosco no WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-4">SKY</h3>
              <p className="text-gray-400">A melhor experiência em entretenimento e conectividade para sua família.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li>
                  <Link href={whatsappUrl} className="text-gray-400 hover:text-red-400">
                    Internet
                  </Link>
                </li>
                <li>
                  <Link href={whatsappUrl} className="text-gray-400 hover:text-red-400">
                    TV
                  </Link>
                </li>
                <li>
                  <Link href={whatsappUrl} className="text-gray-400 hover:text-red-400">
                    SKY Play
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li>
                  <Link href={whatsappUrl} className="text-gray-400 hover:text-red-400">
                    2ª Via
                  </Link>
                </li>
                <li>
                  <Link href={whatsappUrl} className="text-gray-400 hover:text-red-400">
                    Faturas
                  </Link>
                </li>
                <li>
                  <Link href={whatsappUrl} className="text-gray-400 hover:text-red-400">
                    Atendimento
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <p className="text-gray-400 mb-2">WhatsApp: (11) 96889-5642</p>
              <Link href={whatsappUrl}>
                <Button className="bg-red-600 hover:bg-red-700">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Falar no WhatsApp
                </Button>
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 SKY. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <Link href={whatsappUrl}>
        <div className="fixed bottom-6 right-6 z-50">
          <Button size="lg" className="bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-2xl">
            <MessageCircle className="h-8 w-8" />
            <span className="sr-only">WhatsApp</span>
          </Button>
        </div>
      </Link>
    </div>
  )
}
