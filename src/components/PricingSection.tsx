import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingTiers = [
  {
    name: "Самостоятельный",
    price: "9 900",
    description: "Все материалы и шаблоны в своём темпе",
    features: [
      "8 модулей с видео и PDF",
      "40+ готовых шаблонов и скриптов",
      "Пошаговые алгоритмы для агрегаторов",
      "Калькулятор стоимости сессии",
      "Удостоверение о повышении квалификации",
      "Доступ к материалам 6 месяцев",
    ],
    highlighted: false,
  },
  {
    name: "С поддержкой",
    price: "16 900",
    description: "Обучение + куратор + сообщество",
    features: [
      "Всё из тарифа «Самостоятельный»",
      "Проверка анкеты и профиля куратором",
      "Разбор вашего позиционирования",
      "Закрытое сообщество участниц",
      "Еженедельные групповые разборы",
      "Доступ к материалам 12 месяцев",
    ],
    highlighted: true,
  },
  {
    name: "Персональный",
    price: "По запросу",
    description: "Индивидуальная работа с экспертом",
    features: [
      "Всё из тарифа «С поддержкой»",
      "2 личные сессии с экспертом-куратором",
      "Персональный план на 90 дней",
      "Разбор вашего реального кейса",
      "Пожизненный доступ к материалам",
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Стоимость обучения
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Выберите <span className="text-primary">подходящий формат</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Для тех, кто только начинает, и для тех, кто хочет восстановить поток клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative group ${
                tier.highlighted
                  ? "border-primary shadow-xl scale-105 bg-gradient-to-b from-background to-primary/5"
                  : "hover:border-primary/50 hover:shadow-lg"
              } transition-all duration-300`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Популярный
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-1">{tier.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
                <div className="mt-4">
                  {tier.price === "По запросу" ? (
                    <span className="text-3xl font-bold">{tier.price}</span>
                  ) : (
                    <span className="text-4xl font-bold">
                      {tier.price}
                      <span className="text-lg font-normal text-muted-foreground"> ₽</span>
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.highlighted ? "default" : "outline"}
                  className={`w-full ${tier.highlighted ? "shadow-lg shadow-primary/20" : ""}`}
                  asChild
                >
                  <a href="#contact">
                    {tier.price === "По запросу" ? "Узнать подробнее" : "Записаться"}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Все тарифы включают{" "}
            <span className="text-primary font-semibold">удостоверение о повышении квалификации</span> и{" "}
            <span className="text-primary font-semibold">пожизненный доступ к шаблонам</span>
          </p>
        </div>
      </div>
    </section>
  )
}
