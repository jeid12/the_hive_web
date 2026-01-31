interface MediaPlaceholderProps {
  type: 'screenshot' | 'video' | 'gif'
  label?: string
  aspectRatio?: 'video' | 'square' | 'wide'
  className?: string
}

export default function MediaPlaceholder({
  type,
  label,
  aspectRatio = 'video',
  className = '',
}: MediaPlaceholderProps) {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    wide: 'aspect-[21/9]',
  }

  const icons = {
    screenshot: '🖼️',
    video: '🎬',
    gif: '🎞️',
  }

  return (
    <div
      className={`
        relative ${aspectClasses[aspectRatio]} rounded-xl overflow-hidden
        bg-gradient-to-br from-background-lighter to-background-light
        border border-white/10 group cursor-pointer
        hover:border-primary/30 transition-all duration-300
        ${className}
      `}
    >
      {/* Placeholder pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(45deg, #1a1a24 25%, transparent 25%),
            linear-gradient(-45deg, #1a1a24 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #1a1a24 75%),
            linear-gradient(-45deg, transparent 75%, #1a1a24 75%)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }} />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
          {icons[type]}
        </span>
        <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">
          {label || `${type} placeholder`}
        </span>
        <span className="text-gray-600 text-xs mt-1">
          {/* TODO: Replace with actual game {type} */}
          Click to view
        </span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
    </div>
  )
}
