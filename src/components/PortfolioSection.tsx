import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const modules = [
  {
    number: "01",
    title: "Основы личного бренда психолога",
    category: "Модуль 1",
    description:
      "Что такое личный бренд и зачем он нужен частному специалисту. Самоанализ, определение целевой аудитории, формулировка уникального торгового предложения.",
    tags: ["Позиционирование", "УТП", "Целевая аудитория"],
  },
  {
    number: "02",
    title: "Онлайн-присутствие: сайт и соцсети",
    category: "Модуль 2",
    description:
      "Создание продающего сайта-визитки, ведение профессиональных страниц в социальных сетях, контент-стратегия и регулярные публикации без выгорания.",
    tags: ["Сайт", "Instagram", "ВКонтакте", "Контент"],
  },
  {
    number: "03",
    title: "Инструменты привлечения клиентов",
    category: "Модуль 3",
    description:
      "Таргетированная реклама, SEO-продвижение, работа с агрегаторами психологов, реферальные программы и сарафанное радио.",
    tags: ["Реклама", "SEO", "Агрегаторы"],
  },
  {
    number: "04",
    title: "Продажи и работа с клиентами",
    category: "Модуль 4",
    description:
      "Как грамотно провести первичную консультацию, отработать возражения, выстроить ценообразование и перевести разовых клиентов в постоянных.",
    tags: ["Продажи", "Консультация", "Цены"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Программа курса</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            244 часа практических знаний, разбитых на понятные модули. Обучение полностью дистанционное — в удобное для вас время.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-black text-primary/20 group-hover:text-primary/40 transition-colors leading-none flex-shrink-0">
                    {module.number}
                  </div>
                  <div>
                    <p className="text-sm text-primary font-semibold mb-2">{module.category}</p>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{module.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{module.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {module.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20">
            <Icon name="BookOpen" className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">По окончании курса выдаётся <span className="text-primary font-semibold">удостоверение о повышении квалификации</span></span>
          </div>
        </div>
      </div>
    </section>
  )
}
