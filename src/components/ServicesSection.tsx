import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "UserCircle",
    title: "Личный бренд",
    description:
      "Научитесь формулировать свою уникальность и позиционировать себя как эксперта. Вы поймёте, чем отличаетесь от других специалистов и как донести это до клиентов.",
  },
  {
    icon: "Globe",
    title: "Сайт и соцсети",
    description:
      "Создайте профессиональное онлайн-присутствие: личный сайт, ведение социальных сетей, контент-план. Ваши клиенты будут находить вас сами.",
  },
  {
    icon: "Target",
    title: "Привлечение клиентов",
    description:
      "Освойте практические инструменты продвижения: таргетированная реклама, SEO, работа с отзывами и рекомендациями. Выстройте стабильный поток новых клиентов.",
  },
  {
    icon: "MessageCircle",
    title: "Работа с аудиторией",
    description:
      "Научитесь общаться с потенциальными клиентами, отрабатывать возражения и выстраивать доверие ещё до первой консультации.",
  },
  {
    icon: "BarChart2",
    title: "Ценообразование и доход",
    description:
      "Разберитесь, как правильно устанавливать цены на услуги, формировать пакеты и увеличивать средний чек без потери клиентов.",
  },
  {
    icon: "Award",
    title: "Репутация эксперта",
    description:
      "Публикации, выступления, партнёрства — создайте репутацию, которая работает на вас. Станьте специалистом, к которому выстраивается очередь.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Чему вы научитесь
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Ключевые{" "}
          <span className="text-primary">навыки курса</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          За 2 месяца вы получите полный набор инструментов для самостоятельного продвижения — от создания бренда до стабильного потока клиентов.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} className="h-6 w-6" fallback="Star" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
