import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">НАДПО</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Национальная академия дополнительного профессионального образования
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 НАДПО. Все права защищены.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О курсе
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Чему научитесь
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Программа
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Стоимость
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Записаться
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Globe" className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="https://nadpo.ru" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  nadpo.ru
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Mail" className="h-4 w-4 text-primary flex-shrink-0" />
                <span>info@nadpo.ru</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Clock" className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Пн–Пт: 9:00–18:00 МСК</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
