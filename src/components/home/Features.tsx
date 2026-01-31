import { Section, SectionHeader, FeatureCard } from '@/components/ui'

const features = [
  {
    icon: '🐝',
    title: 'Swarm Mechanics',
    description: 'Experience unique gameplay where cooperation and strategy determine your success in The Hive.',
  },
  {
    icon: '🗺️',
    title: 'Expansive World',
    description: 'Explore diverse environments filled with secrets, challenges, and discoveries waiting to be uncovered.',
  },
  {
    icon: '⚡',
    title: 'Fast-Paced Action',
    description: 'React quickly and think strategically as you navigate through dynamic challenges and obstacles.',
  },
  {
    icon: '✨',
    title: 'Stunning Visuals',
    description: 'Immerse yourself in beautifully crafted environments with smooth animations and visual effects.',
  },
  {
    icon: '🎯',
    title: 'Progressive Challenge',
    description: 'Start simple and master increasingly complex mechanics as you advance through the game.',
  },
  {
    icon: '🎮',
    title: 'Play Instantly',
    description: 'Built with Phaser 3 for seamless browser play. No downloads required — jump in and play.',
  },
]

export default function Features() {
  return (
    <Section dark id="features">
      <SectionHeader 
        title="Key Features"
        subtitle="Discover what makes The Hive a unique gaming experience"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </Section>
  )
}
