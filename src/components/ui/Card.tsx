interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({
  children,
  className = '',
  hover = true,
}: CardProps) {
  return (
    <div
      className={`
        bg-background-light border border-white/10 rounded-xl p-6
        ${hover ? 'card-hover hover:border-primary/30' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
