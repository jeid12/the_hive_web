interface FeatureCardProps {
  icon: string
  title: string
  description: string
  environment?: 'entrance' | 'depths' | 'core' | 'summit'
}

export default function FeatureCard({
  icon,
  title,
  description,
  environment,
}: FeatureCardProps) {
  const envClasses = environment ? `env-${environment}` : ''
  
  return (
    <div
      className={`
        group relative bg-background-light border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8
        transition-all duration-300 hover:border-primary/30 hover:-translate-y-1
        hover:shadow-lg hover:shadow-primary/10 overflow-hidden
        ${envClasses}
      `}
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
      
      <div className="relative z-10">
        <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 group-hover:animate-float">
          {icon}
        </div>
        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      </div>
    </div>
  )
}
