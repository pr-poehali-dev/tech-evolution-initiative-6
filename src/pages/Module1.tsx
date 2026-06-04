import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

// === САМОДИАГНОСТИКА БАРЬЕРОВ ===

type BlockKey = "A" | "B" | "C" | "G" | "D"

const blocks: { key: BlockKey; title: string; statements: string[] }[] = [
  {
    key: "A",
    title: "Страх навредить",
    statements: [
      "Я беспокоюсь, что мои слова или действия могут ухудшить состояние клиента.",
      "Я думаю о возможных ошибках значительно чаще, чем о том, чем могу помочь.",
      "Я откладываю начало практики, потому что хочу быть уверен: я не причиню вреда.",
    ],
  },
  {
    key: "B",
    title: "Страх оценки",
    statements: [
      "Я беспокоюсь, что клиент почувствует мою неуверенность.",
      "Мне трудно представить себя в роли специалиста — я продолжаю ощущать себя студентом.",
      "Мысль о том, что клиент может остаться разочарован, вызывает у меня сильную тревогу.",
    ],
  },
  {
    key: "C",
    title: "Перфекционизм",
    statements: [
      "Я откладываю старт, потому что чувствую: мне нужно ещё немного подготовиться.",
      "Я часто думаю: «Вот пройду ещё этот курс — тогда буду готов».",
      "Мне трудно начать что-то, если я не уверен, что сделаю это хорошо.",
    ],
  },
  {
    key: "G",
    title: "Синдром самозванца",
    statements: [
      "Мне кажется, что другие специалисты значительно лучше подготовлены, чем я.",
      "Я боюсь, что клиент или коллеги «раскусят» меня и поймут, что я на самом деле мало знаю.",
      "Мои успехи в обучении кажутся мне случайными или незаслуженными.",
    ],
  },
  {
    key: "D",
    title: "Неопределённость направления",
    statements: [
      "Я не знаю, с чего именно начать — найти клиентов, оформить кабинет, рассказать о себе.",
      "Мне неясно, каким должен быть мой первый шаг в практике.",
      "Я откладываю старт, потому что не понимаю, как именно организовать работу.",
    ],
  },
]

const recommendations: Record<BlockKey, string> = {
  A: "Организуйте регулярную супервизию прежде чем начать. Понимание, что вы не работаете в одиночестве, значительно снижает этот страх.",
  B: "Начните с коллегиального обсуждения, участия в группах. Изучите материалы о терапевтическом альянсе — вы удивитесь, насколько важны человеческие качества.",
  C: "Установите конкретную дату начала — не «когда буду готов», а реальную календарную дату. Конкретика уменьшает перфекционизм.",
  G: "Составьте письменный список своих реальных компетенций. Синдром самозванца делает невидимым то, что есть. Фиксация возвращает это в поле зрения.",
  D: "Вам нужен конкретный план, а не больше знаний. Определите один следующий шаг и запишите его с конкретной датой.",
}

function getLevel(score: number): { label: string; color: string } {
  if (score <= 2) return { label: "Слабо выражен", color: "text-green-500" }
  if (score <= 5) return { label: "Умеренный", color: "text-yellow-500" }
  return { label: "Выраженный барьер", color: "text-red-500" }
}

export default function Module1() {
  const [scores, setScores] = useState<Record<BlockKey, Record<number, number>>>({
    A: {}, B: {}, C: {}, G: {}, D: {},
  })
  const [submitted, setSubmitted] = useState(false)
  const [activeSection, setActiveSection] = useState<"read" | "quiz">("read")

  const setScore = (block: BlockKey, idx: number, val: number) => {
    setScores(prev => ({
      ...prev,
      [block]: { ...prev[block], [idx]: val },
    }))
  }

  const blockTotal = (key: BlockKey) =>
    Object.values(scores[key]).reduce((a, b) => a + b, 0)

  const allAnswered = blocks.every(b =>
    Object.keys(scores[b.key]).length === 3 &&
    Object.values(scores[b.key]).every(v => v !== undefined)
  )

  const topBarriers = submitted
    ? blocks
        .map(b => ({ key: b.key, title: b.title, score: blockTotal(b.key) }))
        .sort((a, b) => b.score - a.score)
        .filter(b => b.score >= 6)
    : []

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Шапка */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="ArrowLeft" size={18} />
            <span className="text-sm">На главную</span>
          </Link>
          <div className="text-sm font-medium text-primary">Модуль 1 · От обучения к практике</div>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-12 space-y-16">

        {/* Hero модуля */}
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Образовательный модуль · Бесплатно
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance">
            От обучения к практике
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Почему начинающие психологи откладывают старт — и как это изменить. 
            Без мотивационных призывов. С пониманием механизмов.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-2">
            <span className="flex items-center gap-1.5"><Icon name="Clock" size={15} className="text-primary" /> 1,5 часа</span>
            <span className="flex items-center gap-1.5"><Icon name="Monitor" size={15} className="text-primary" /> Асинхронный онлайн</span>
            <span className="flex items-center gap-1.5"><Icon name="Users" size={15} className="text-primary" /> Психологи на старте</span>
          </div>
        </div>

        {/* Переключатель */}
        <div className="flex rounded-xl bg-muted p-1 max-w-sm mx-auto">
          <button
            onClick={() => setActiveSection("read")}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeSection === "read" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
            }`}
          >
            Материал модуля
          </button>
          <button
            onClick={() => setActiveSection("quiz")}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeSection === "quiz" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
            }`}
          >
            Самодиагностика
          </button>
        </div>

        {/* === РАЗДЕЛ: МАТЕРИАЛ === */}
        {activeSection === "read" && (
          <div className="space-y-10">

            {/* Логика модуля */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-bold">Образовательная логика</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Модуль построен на принципе постепенного снижения тревоги через понимание, а не через мотивационные призывы. Каждый элемент работает на одну цель: уменьшить дистанцию между «я учусь» и «я практикую» — не за счёт игнорирования страхов, а за счёт их называния.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { step: "1", title: "Нормализация", desc: "Это нормально и объяснимо" },
                    { step: "2", title: "Концептуализация", desc: "Понять механизм" },
                    { step: "3", title: "Операционализация", desc: "Критерии готовности" },
                    { step: "4", title: "Переход к действию", desc: "Конкретные первые шаги" },
                  ].map(item => (
                    <div key={item.step} className="flex gap-4 p-4 rounded-xl bg-muted/50">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{item.title}</div>
                        <div className="text-muted-foreground text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Почему откладывают */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-bold">Почему специалисты откладывают старт</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Исследования профессионального развития (Ronnestad & Skovholt, 2003) показывают: начинающие специалисты систематически занижают свою компетентность. Это не случайность — это закономерный этап, который проходят почти все.
                </p>
                <div className="space-y-4">
                  {(
                    [
                      {
                        icon: "ShieldAlert",
                        title: "Страх навредить",
                        text: "Страх навредить — признак профессиональной зрелости, а не некомпетентности. Опасен не тот специалист, который боится — а тот, кто не боится совсем.",
                      },
                      {
                        icon: "Eye",
                        title: "Страх оценки",
                        text: "Большинство клиентов не оценивают профессиональную технику. Они оценивают, чувствуют ли себя услышанными. И этим навыком вы уже обладаете.",
                      },
                      {
                        icon: "Target",
                        title: "Перфекционизм",
                        text: "Перфекционизм маскируется под профессиональную ответственность, но функционирует как избегание. Его признак: цель «быть готовым» постоянно перемещается.",
                      },
                      {
                        icon: "BookOpen",
                        title: "«Мне нужно ещё учиться»",
                        text: "Обучение через практику — это тоже обучение, и зачастую самое эффективное. Это убеждение используется не как план развития, а как оправдание бездействия.",
                      },
                    ] as { icon: string; title: string; text: string }[]
                  ).map(item => (
                    <div key={item.title} className="flex gap-4 p-5 rounded-xl bg-muted/40">
                      <Icon name={item.icon} size={22} className="text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold mb-1">{item.title}</div>
                        <div className="text-muted-foreground text-sm leading-relaxed">{item.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Синдром самозванца */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-bold">Синдром самозванца</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Синдром самозванца — не диагноз. Это психологический феномен, который переживают около 70% людей в разные периоды жизни. Среди специалистов помогающих профессий он особенно распространён.
                </p>
                <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="font-semibold mb-2 text-primary">Диагностический вопрос</div>
                  <p className="text-sm leading-relaxed text-foreground/90">
                    «Что именно мне нужно знать или уметь, чтобы я почувствовал себя готовым?»<br />
                    <span className="text-muted-foreground">Если ответ конкретный — это реальный пробел. Если размытый или постоянно меняется — это синдром самозванца.</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 5 критериев готовности */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-bold">5 критериев достаточной готовности</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Идеальная готовность не существует. Достаточная готовность — это наличие минимального профессионального фундамента, который позволяет начать работу этично и безопасно.
                </p>
                <div className="space-y-3">
                  {[
                    "Базовые профессиональные знания в рамках своего подхода",
                    "Понимание границ компетентности — что вы берёте, а что нет",
                    "Готовность обращаться за супервизией",
                    "Соблюдение этических принципов",
                    "Готовность учиться через практику",
                  ].map((c, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <span className="text-sm leading-relaxed">{c}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Ключевой вывод */}
            <Card className="border-none shadow-lg bg-primary/5">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-bold">Ключевой вывод</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Исследования самоэффективности (Бандура) показывают: уверенность формируется через опыт успешных действий, а не предшествует им. Это не мотивационный призыв — это нейропсихология.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ждать, пока станет комфортно — стратегически неверно. Дискомфорт уменьшится после первых сессий, первых ошибок, которые окажутся не катастрофой.
                </p>
                <Button size="lg" className="mt-2" onClick={() => setActiveSection("quiz")}>
                  Пройти самодиагностику
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

          </div>
        )}

        {/* === РАЗДЕЛ: САМОДИАГНОСТИКА === */}
        {activeSection === "quiz" && !submitted && (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Самодиагностика барьеров</h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
                Оцените каждое утверждение по шкале 0–3. Здесь нет правильных и неправильных ответов — цель понять, что именно удерживает вас.
              </p>
              <div className="flex justify-center gap-6 text-xs text-muted-foreground pt-1">
                <span>0 — совсем не про меня</span>
                <span>1 — иногда</span>
                <span>2 — часто</span>
                <span>3 — очень точно</span>
              </div>
            </div>

            {blocks.map(block => (
              <Card key={block.key} className="border-none shadow-lg">
                <CardContent className="p-6 sm:p-8 space-y-5">
                  <h3 className="font-semibold text-lg">{block.title}</h3>
                  {block.statements.map((stmt, idx) => (
                    <div key={idx} className="space-y-2">
                      <p className="text-sm text-muted-foreground leading-relaxed">{stmt}</p>
                      <div className="flex gap-2">
                        {[0, 1, 2, 3].map(val => (
                          <button
                            key={val}
                            onClick={() => setScore(block.key, idx, val)}
                            className={`w-11 h-11 rounded-lg text-sm font-semibold border transition-all ${
                              scores[block.key][idx] === val
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-muted/50 text-muted-foreground border-transparent hover:border-primary/40"
                            }`}
                          >
                            {val}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}

            <div className="text-center">
              <Button
                size="lg"
                disabled={!allAnswered}
                onClick={() => setSubmitted(true)}
                className="px-10"
              >
                Показать результат
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
              {!allAnswered && (
                <p className="text-muted-foreground text-xs mt-2">Ответьте на все утверждения</p>
              )}
            </div>
          </div>
        )}

        {/* === РЕЗУЛЬТАТЫ === */}
        {activeSection === "quiz" && submitted && (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Ваш результат</h2>
              <p className="text-muted-foreground text-sm">
                Вот как распределились ваши барьеры:
              </p>
            </div>

            <div className="space-y-4">
              {blocks
                .map(b => ({ ...b, score: blockTotal(b.key) }))
                .sort((a, b) => b.score - a.score)
                .map(block => {
                  const level = getLevel(block.score)
                  const pct = Math.round((block.score / 9) * 100)
                  return (
                    <Card key={block.key} className="border-none shadow-md">
                      <CardContent className="p-6 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">{block.title}</span>
                          <span className={`text-sm font-medium ${level.color}`}>{level.label}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-700"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <div className="text-xs text-muted-foreground flex justify-between">
                          <span>{block.score} из 9 баллов</span>
                          <span>{pct}%</span>
                        </div>
                        {block.score >= 6 && (
                          <div className="p-3 rounded-lg bg-primary/5 border border-primary/15 text-sm text-foreground/90 leading-relaxed">
                            <span className="font-medium text-primary">Рекомендация: </span>
                            {recommendations[block.key]}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
            </div>

            {topBarriers.length === 0 && (
              <Card className="border-none shadow-md bg-green-500/5 border-green-500/20">
                <CardContent className="p-6 text-center space-y-2">
                  <Icon name="CheckCircle" size={40} className="text-green-500 mx-auto" />
                  <p className="font-semibold">Выраженных барьеров не обнаружено</p>
                  <p className="text-muted-foreground text-sm">
                    Ни один блок не набрал 6+ баллов. Возможно, вы уже достаточно готовы — или пришло время сделать первый шаг.
                  </p>
                </CardContent>
              </Card>
            )}

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center space-y-4">
                <h3 className="text-xl font-bold">Хотите разобраться глубже?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
                  Полный курс «Психолог на виду» включает работу с каждым барьером, конкретные алгоритмы выхода на практику и поддержку куратора.
                </p>
                <Link to="/#contact">
                  <Button size="lg" className="px-8">
                    Узнать о курсе
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <div className="text-center">
              <button
                onClick={() => { setSubmitted(false); setScores({ A: {}, B: {}, C: {}, G: {}, D: {} }) }}
                className="text-sm text-muted-foreground hover:text-foreground underline transition-colors"
              >
                Пройти заново
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}