import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Module1Teaser() {
  return (
    <section id="module1" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 sm:p-12 flex flex-col sm:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold tracking-wide uppercase">
              Модуль 1 · Бесплатно
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
              От обучения к практике
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Первый модуль курса открыт бесплатно. Разберитесь, почему вы откладываете старт — и пройдите самодиагностику барьеров. Без мотивационных призывов, с пониманием механизмов.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-1">
              <span className="flex items-center gap-1.5">
                <Icon name="Clock" size={14} className="text-primary" />
                1,5 часа
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="FileText" size={14} className="text-primary" />
                PDF-гайд + видео
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="BarChart2" size={14} className="text-primary" />
                Самодиагностика барьеров
              </span>
            </div>
          </div>
          <div className="flex-shrink-0 text-center space-y-3">
            <Link to="/module1">
              <Button size="lg" className="px-8 py-6 text-base w-full sm:w-auto">
                Открыть модуль
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-xs text-muted-foreground">Без регистрации</p>
          </div>
        </div>
      </div>
    </section>
  )
}