interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title.split(' ').map((word, i, arr) => (
          <span key={i}>
            {i === arr.length - 1 ? (
              <span className="text-gradient">{word}</span>
            ) : (
              <>{word} </>
            )}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
