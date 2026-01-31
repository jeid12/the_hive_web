import { Section, SectionHeader, MediaPlaceholder } from '@/components/ui'

export default function GameOverview() {
  return (
    <Section id="overview">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        {/* Content */}
        <div className="order-2 lg:order-1">
          <SectionHeader 
            title="Welcome to The Hive" 
            subtitle=""
            centered={false}
          />
          
          <div className="space-y-4 sm:space-y-6 text-gray-300">
            <p className="text-base sm:text-lg leading-relaxed">
              Step into a world where cooperation meets survival. The Hive is an 
              immersive indie game that challenges you to think, adapt, and overcome.
            </p>
            
            <p className="leading-relaxed text-sm sm:text-base">
              Whether you&apos;re exploring mysterious environments, solving intricate puzzles, 
              or facing unexpected challenges, every moment in <strong className="text-primary">The Hive</strong>
              {' '}is designed to keep you engaged and coming back for more.
            </p>

            <div className="pt-2 sm:pt-4">
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                What Awaits You:
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { emoji: '🗺️', name: 'Vast Exploration', desc: 'Discover hidden secrets and uncharted territories' },
                  { emoji: '🧩', name: 'Engaging Puzzles', desc: 'Challenge your mind with clever mechanics' },
                  { emoji: '⚔️', name: 'Intense Action', desc: 'Face thrilling challenges and obstacles' },
                  { emoji: '🎯', name: 'Strategic Gameplay', desc: 'Plan your moves and master the game' },
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl">{feature.emoji}</span>
                    <div className="text-sm sm:text-base">
                      <span className="text-white font-medium">{feature.name}</span>
                      <span className="text-gray-400"> — {feature.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Media */}
        <div className="order-1 lg:order-2">
          <div className="relative">
            {/* Main screenshot placeholder */}
            <MediaPlaceholder 
              type="screenshot" 
              label="Gameplay Screenshot"
              className="shadow-2xl shadow-black/50"
            />
            
            {/* Floating decorative elements - hidden on mobile */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-accent-honey/20 rounded-full blur-xl" />
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 bg-accent-amber/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </Section>
  )
}
