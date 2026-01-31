import { Section } from '@/components/ui'
import Button from '@/components/ui/Button'

export default function CTASection() {
  return (
    <Section dark className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="hidden sm:block absolute top-0 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="hidden sm:block absolute bottom-0 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-accent-honey/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Icon */}
        <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6 animate-float">
          🐝
        </div>

        {/* Title */}
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
          Ready to Enter{' '}
          <span className="text-gradient">The Hive?</span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto">
          Join the swarm and experience an adventure like no other. 
          Your journey into The Hive begins now.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Button 
            href="https://github.com/IshKevin/the_hive" 
            external 
            size="lg"
            className="animate-pulse-honey w-full sm:w-auto"
          >
            <span className="mr-2">🎮</span>
            Start Playing
          </Button>
          
          <Button 
            href="https://github.com/IshKevin/the_hive" 
            external 
            variant="secondary" 
            size="lg"
            className="w-full sm:w-auto"
          >
            <svg className="mr-2 w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View Source Code
          </Button>
        </div>

        {/* Additional links */}
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
          <a 
            href="/gameplay" 
            className="text-gray-400 hover:text-primary transition-colors"
          >
            Learn the Controls →
          </a>
          <a 
            href="/about" 
            className="text-gray-400 hover:text-primary transition-colors"
          >
            Meet the Team →
          </a>
          <a 
            href="/media" 
            className="text-gray-400 hover:text-primary transition-colors"
          >
            View Gallery →
          </a>
        </div>
      </div>
    </Section>
  )
}
