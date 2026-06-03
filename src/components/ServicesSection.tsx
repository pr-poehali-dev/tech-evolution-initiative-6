import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const modules = [
  {
    icon: "Compass",
    number: "01",
    title: "От обучения к практике",
    description: "Синдром самозванца, страх ошибок, перфекционизм — разбираем, что удерживает от старта, и делаем первый шаг.",
  },
  {
    icon: "Shield",
    number: "02",
    title: "Этичное продвижение",
    description: "Как рассказывать о себе, не нарушая кодекс. Разбор реальных кейсов: где граница между этичным контентом и манипуляцией.",
  },
  {
    icon: "UserCheck",
    number: "03",
    title: "Позиционирование",
    description: "Формулируем специализацию, целевую аудиторию и ценность. Выходите с готовым описанием себя по конструктору.",
  },
  {
    icon: "Map",
    number: "04",
    title: "Где искать клиентов в 2026",
    description: "Агрегаторы B17, Ясно, Alter — пошагово с скриншотами. Без Instagram и рекламного бюджета.",
  },
  {
    icon: "Globe",
    number: "05",
    title: "Профессиональное присутствие",
    description: "Профиль на агрегаторе, описание услуг, фото. Чек-листы и шаблоны «под ключ» — готово к публикации сегодня.",
  },
  {
    icon: "BarChart2",
    number: "06",
    title: "Стратегия на 90 дней",
    description: "Личный план продвижения: цели, приоритеты, минимально достаточные действия. Система, а не хаотичные советы.",
  },
  {
    icon: "Zap",
    number: "07",
    title: "Первый реальный шаг",
    description: "Размещаем анкету, заполняем профиль или пишем первому партнёру — прямо во время курса, не откладывая.",
  },
  {
    icon: "RefreshCw",
    number: "08",
    title: "Как не потеряться через месяц",
    description: "Анализируем результаты, корректируем стратегию. Система регулярного продвижения без выгорания.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Программа курса
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          8 модулей —{" "}
          <span className="text-primary">от страха до первых клиентов</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed text-lg">
          Каждый модуль заканчивается готовым артефактом: шаблоном, профилем или конкретным действием. Не теория — инструменты.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {modules.map((module, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon name={module.icon} className="h-5 w-5" fallback="Star" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground/40 tabular-nums">{module.number}</span>
                </div>
                <CardTitle className="text-base group-hover:text-primary transition-colors leading-snug">{module.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{module.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
