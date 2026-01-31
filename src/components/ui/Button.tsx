import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  external?: boolean
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background'
  
  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-dark text-background shadow-lg hover:shadow-xl hover:shadow-primary/20',
    secondary: 'bg-background-lighter hover:bg-background-light text-white border border-white/10 hover:border-primary/50',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-background',
    ghost: 'bg-transparent text-primary hover:bg-primary/10',
  }
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  )
}
