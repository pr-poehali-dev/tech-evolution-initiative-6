import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Я три года откладывала старт — «ещё не готова». После первого модуля поняла: это ловушка. Через две недели разместила анкету на B17. Уже есть первые отклики.",
    name: "Марина, 41 год",
    role: "Перешла из HR в психологию",
  },
  {
    quote: "Вела практику как коуч без диплома. Боялась, что меня не возьмут в Alter. Курс дал пошаговый алгоритм подачи — прошла с первого раза. Теперь поток клиентов стабильный.",
    name: "Ольга, 48 лет",
    role: "Коуч, легализовала практику",
  },
  {
    quote: "Главная ценность — шаблоны. Не нужно думать, что писать в профиле или как ответить клиенту впервые. Берёшь готовое, адаптируешь под себя — и делаешь.",
    name: "Татьяна, 38 лет",
    role: "Клинический психолог",
  },
  {
    quote: "Наконец-то курс на языке психолога, а не маркетолога. Никаких «воронок продаж» и «целевых аудиторий» — всё про помощь людям и этичную видимость.",
    name: "Светлана, 52 года",
    role: "Семейный психолог",
  },
  {
    quote: "Instagram заблокирован, клиенты ушли. Курс показал три канала, о которых я вообще не думала. За месяц восстановила прежний поток через агрегаторы.",
    name: "Наталья, 44 года",
    role: "Психолог-консультант",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed
      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Истории завершивших курс
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Психологи, которые прошли курс до конца — и получили первых клиентов.
        </p>
        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((t, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[420px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed min-h-[100px]">{t.quote}</p>
                  <div>
                    <p className="font-semibold text-lg">{t.name}</p>
                    <p className="text-muted-foreground text-sm">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}