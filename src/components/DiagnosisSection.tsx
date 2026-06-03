import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const questions = [
  {
    id: 1,
    text: "Как давно вы получили (или получаете) психологическое образование?",
    options: [
      { label: "Ещё учусь", value: "a" },
      { label: "Закончил(а) меньше года назад", value: "b" },
      { label: "1–3 года назад", value: "c" },
      { label: "Более 3 лет, уже веду практику", value: "d" },
    ],
  },
  {
    id: 2,
    text: "Что больше всего мешает вам начать (или расширить) практику прямо сейчас?",
    options: [
      { label: "Чувствую себя недостаточно компетентным(ой)", value: "a" },
      { label: "Не знаю, где и как искать клиентов", value: "b" },
      { label: "Боюсь, что «продавать себя» — это неэтично", value: "c" },
      { label: "Потерял(а) клиентов из-за блокировок соцсетей", value: "d" },
    ],
  },
  {
    id: 3,
    text: "Вы когда-нибудь пробовали разместить профиль на агрегаторах (B17, Ясно, Alter)?",
    options: [
      { label: "Нет, не знаю как", value: "a" },
      { label: "Слышал(а), но кажется сложным", value: "b" },
      { label: "Пробовал(а), но не прошёл(а) отбор", value: "c" },
      { label: "Да, есть профиль, но клиентов мало", value: "d" },
    ],
  },
  {
    id: 4,
    text: "Сколько времени в неделю вы готовы уделять продвижению своих услуг?",
    options: [
      { label: "До 30 минут", value: "a" },
      { label: "30–60 минут", value: "b" },
      { label: "1–2 часа", value: "c" },
      { label: "Больше 2 часов", value: "d" },
    ],
  },
  {
    id: 5,
    text: "Есть ли у вас сейчас чёткое описание: кому вы помогаете и с какими запросами?",
    options: [
      { label: "Нет, не могу сформулировать", value: "a" },
      { label: "Есть общее представление, но нет конкретики", value: "b" },
      { label: "Есть черновик, но я им не доволен(а)", value: "c" },
      { label: "Да, есть чёткое позиционирование", value: "d" },
    ],
  },
]

type ResultType = "start" | "tools" | "scale" | "optimize"

const results: Record<ResultType, { title: string; description: string; icon: string; cta: string }> = {
  start: {
    title: "Вы в самом начале пути",
    description: "Главный барьер — не знания, а страх начать. Вам нужны не сложные стратегии, а первый шаг и поддержка. Курс «Психолог на виду» начинается именно с этого: нормализация тревоги, работа с синдромом самозванца и конкретный алгоритм первого действия.",
    icon: "Compass",
    cta: "Начать с нуля — записаться",
  },
  tools: {
    title: "Вам нужны инструменты, а не теория",
    description: "Желание есть, но нет понятного маршрута. Вы знаете, что нужно продвигаться, но не знаете как — без агрессивного маркетинга и бесконечных соцсетей. В курсе: шаблоны, алгоритмы агрегаторов и готовые скрипты для первого контакта с клиентом.",
    icon: "Wrench",
    cta: "Получить готовые инструменты",
  },
  scale: {
    title: "Вы готовы — осталось выстроить систему",
    description: "У вас есть опыт и понимание своей аудитории. Пора перейти от хаотичных действий к системе. Курс поможет выстроить стратегию на 90 дней, освоить агрегаторы и восстановить поток клиентов после потери старых каналов.",
    icon: "TrendingUp",
    cta: "Выстроить систему — записаться",
  },
  optimize: {
    title: "Вы практикуете — пора масштабироваться",
    description: "У вас есть база. Следующий шаг — новые каналы и оптимизация существующих. Курс даст инструменты для роста: B2B-направление, работу с репутацией и стратегию удержания клиентов без выгорания.",
    icon: "BarChart2",
    cta: "Масштабировать практику",
  },
}

function getResult(answers: Record<number, string>): ResultType {
  const vals = Object.values(answers)
  const dCount = vals.filter(v => v === "d").length
  const aCount = vals.filter(v => v === "a").length
  if (dCount >= 3) return "optimize"
  if (aCount >= 3) return "start"
  if (vals[1] === "b" || vals[2] === "a" || vals[2] === "b") return "tools"
  return "scale"
}

export function DiagnosisSection() {
  const [step, setStep] = useState<"intro" | "quiz" | "result">("intro")
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[current].id]: value }
    setAnswers(newAnswers)
    if (current < questions.length - 1) {
      setCurrent(current + 1)
    } else {
      setStep("result")
    }
  }

  const restart = () => {
    setStep("intro")
    setCurrent(0)
    setAnswers({})
  }

  const resultKey = step === "result" ? getResult(answers) : null
  const result = resultKey ? results[resultKey] : null

  return (
    <section id="diagnosis" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Бесплатная диагностика
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Узнайте, что мешает вам{" "}
            <span className="text-primary">начать прямо сейчас</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            5 вопросов — и вы получите персональную рекомендацию, что делать дальше
          </p>
        </div>

        {step === "intro" && (
          <Card className="border-none shadow-xl">
            <CardContent className="p-10 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Icon name="Brain" className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Диагностика готовности к практике</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
                Ответьте честно на 5 вопросов — и узнайте, какой барьер удерживает вас от первых клиентов, и что именно поможет его преодолеть.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" className="h-4 w-4 text-primary" />
                  <span>2 минуты</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Lock" className="h-4 w-4 text-primary" />
                  <span>Без регистрации</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Gift" className="h-4 w-4 text-primary" />
                  <span>Бесплатно</span>
                </div>
              </div>
              <Button size="lg" className="px-10 py-6 text-lg" onClick={() => setStep("quiz")}>
                Начать диагностику
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        )}

        {step === "quiz" && (
          <Card className="border-none shadow-xl">
            <CardContent className="p-8 sm:p-10">
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm text-muted-foreground">Вопрос {current + 1} из {questions.length}</span>
                <div className="flex gap-1.5">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 w-8 rounded-full transition-all duration-300 ${
                        i < current ? "bg-primary" : i === current ? "bg-primary/60" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-8 leading-snug">
                {questions[current].text}
              </h3>

              <div className="space-y-3">
                {questions[current].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full text-left p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <span className="text-sm sm:text-base leading-relaxed group-hover:text-primary transition-colors">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {step === "result" && result && (
          <Card className="border-primary shadow-2xl">
            <CardContent className="p-8 sm:p-10 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Icon name={result.icon} className="h-10 w-10 text-primary" fallback="Star" />
              </div>
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Ваш результат
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{result.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto text-base">
                {result.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="px-8 py-6 text-base" asChild>
                  <a href="#contact">{result.cta}</a>
                </Button>
                <Button size="lg" variant="outline" onClick={restart} className="px-8 py-6 text-base">
                  Пройти заново
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
