export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-white font-bold text-sm leading-none">Н</span>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-bold tracking-tight">НАДПО</span>
          <span className="text-[10px] text-muted-foreground font-medium tracking-wide uppercase">Академия</span>
        </div>
      </div>
    </div>
  )
}
