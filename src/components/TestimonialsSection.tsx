import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "После курса я наконец-то перестала бояться продвигать себя. Уже через месяц после обучения у меня появились первые клиенты из Instagram, которых я привлекла сама.",
    name: "Анна К.",
    role: "Психолог-консультант",
  },
  {
    quote:
      "Курс дал мне чёткую систему: что делать, в какой последовательности, как измерять результат. Раньше я тратила деньги на рекламу вслепую, теперь всё иначе.",
    name: "Михаил Р.",
    role: "Семейный психолог",
  },
  {
    quote:
      "Я практикующий психолог с 10-летним опытом, но с продвижением была полная каша. После обучения запустила сайт, настроила соцсети — запись заполнена на 3 недели вперёд.",
    name: "Елена В.",
    role: "Клинический психолог",
  },
  {
    quote:
      "Очень практичный курс. Никакой воды — только конкретные инструменты, которые реально работают для психологов. Куратор всегда на связи и помогал разобраться со сложными моментами.",
    name: "Ольга М.",
    role: "Психолог, гештальт-терапевт",
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

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят выпускники
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Психологи, которые уже прошли курс и выстроили стабильный поток клиентов.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
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
