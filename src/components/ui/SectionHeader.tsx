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
    <div className={`mb-8 sm:mb-10 md:mb-12 lg:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
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
        <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4 sm:px-0">
          {subtitle}
        </p>
      )}
    </div>
  )
}
