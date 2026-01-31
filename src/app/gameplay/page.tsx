import { Metadata } from 'next'
import { Section, SectionHeader, Card, MediaPlaceholder } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Gameplay',
  description: 'Learn how to play The Hive - controls, mechanics, and game systems explained.',
}

const controls = [
  { key: '⬅️', label: 'Left Arrow', action: 'Move Left' },
  { key: '➡️', label: 'Right Arrow', action: 'Move Right' },
  { key: '⬆️', label: 'Up Arrow', action: 'Move Up' },
  { key: '⬇️', label: 'Down Arrow', action: 'Move Down' },
  { key: 'R', label: 'R Key', action: 'Restart Level' },
  { key: '🖱️', label: 'Mouse Click', action: 'Navigate Menus' },
]

const mechanics = [
  {
    icon: '🎯',
    title: 'Objective System',
    description: 'Complete objectives scattered throughout the game world. Each achievement brings you closer to mastering The Hive.',
    details: [
      'Clear objectives guide your progress',
      'Collect items and reach checkpoints',
      'Visual and audio feedback rewards your efforts',
      'Track your progress with on-screen indicators',
    ],
  },
  {
    icon: '⚠️',
    title: 'Hazard Navigation',
    description: 'Navigate through various hazards and obstacles. Study their patterns and time your movements carefully.',
    details: [
      'Hazards are clearly marked for visibility',
      'They follow predictable patterns',
      'Each area has unique challenges',
      'Observe before acting for best results',
    ],
  },
  {
    icon: '🗺️',
    title: 'World Exploration',
    description: 'Explore an expansive world filled with secrets and discoveries. Every corner has something to offer.',
    details: [
      'Smooth camera follows your movement',
      'Area names display as you explore',
      'Coordinates help with navigation',
      'Backtrack to find missed secrets',
    ],
  },
]

const environments = [
  {
    name: 'Starting Zone',
    emoji: '🏠',
    color: 'bg-accent-honey/20 border-accent-honey/30',
    description: 'Your journey begins here. A gentle introduction to the core mechanics.',
    tips: ['Learn the basics before advancing', 'Take time to explore'],
  },
  {
    name: 'The Depths',
    emoji: '🌑',
    color: 'bg-accent-dark/20 border-accent-dark/30',
    description: 'Venture deeper into challenging territory. The difficulty ramps up here.',
    tips: ['Watch for hidden paths', 'Timing becomes crucial'],
  },
  {
    name: 'The Core',
    emoji: '🔥',
    color: 'bg-accent-amber/20 border-accent-amber/30',
    description: 'The heart of The Hive. Navigate carefully through intense challenges.',
    tips: ['Stay focused and patient', 'Use everything you learned'],
  },
  {
    name: 'The Summit',
    emoji: '⭐',
    color: 'bg-accent-gold/20 border-accent-gold/30',
    description: 'The final challenge awaits. Prove your mastery of The Hive.',
    tips: ['This is the ultimate test', 'Victory is within reach'],
  },
]

const gameFlow = [
  { step: 1, title: 'Loading Screen', desc: 'Game assets load with a progress bar' },
  { step: 2, title: 'Main Menu', desc: 'Choose to start your game or view the tutorial' },
  { step: 3, title: 'Introduction', desc: 'Learn the basics of The Hive' },
  { step: 4, title: 'Gameplay', desc: 'Navigate through all game areas' },
  { step: 5, title: 'Victory', desc: 'Celebrate your triumph!' },
  { step: 6, title: 'Credits', desc: 'See the team behind the game' },
]

export default function GameplayPage() {
  return (
    <div className="pt-14 sm:pt-16 md:pt-20">
      {/* Hero Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="hidden sm:block absolute top-20 left-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="hidden sm:block absolute bottom-20 right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-accent-amber/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <span className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 block">🎮</span>
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
            How to <span className="text-gradient">Play</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl">
            Master the controls and mechanics to conquer The Hive
          </p>
        </div>
      </Section>

      {/* Controls Section */}
      <Section dark>
        <SectionHeader 
          title="Controls"
          subtitle="Simple and intuitive — get moving in seconds"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {controls.map((control, index) => (
              <Card key={index} className="text-center p-3 sm:p-4 md:p-6">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{control.key}</div>
                <div className="text-white font-medium mb-1 text-sm sm:text-base">{control.label}</div>
                <div className="text-gray-400 text-xs sm:text-sm">{control.action}</div>
              </Card>
            ))}
          </div>
          
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-gray-400 text-sm sm:text-base px-4">
              <span className="text-primary">💡 Tip:</span> The game uses top-down movement. 
              Move in all four directions to navigate through the environments.
            </p>
          </div>
        </div>
      </Section>

      {/* Core Mechanics Section */}
      <Section>
        <SectionHeader 
          title="Core Mechanics"
          subtitle="Understanding the gameplay systems"
        />
        
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {mechanics.map((mechanic, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-4xl">{mechanic.icon}</span>
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white">
                    {mechanic.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {mechanic.description}
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {mechanic.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                      <span className="text-primary mt-0.5 sm:mt-1">✦</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <MediaPlaceholder 
                  type="gif" 
                  label={`${mechanic.title} Demo`}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Environments Section */}
      <Section dark>
        <SectionHeader 
          title="Game Zones"
          subtitle="Each area offers unique challenges and increasing difficulty"
        />
        
        <div className="grid md:grid-cols-2 gap-6">
          {environments.map((env, index) => (
            <Card key={index} className={`p-6 border ${env.color}`}>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{env.emoji}</span>
                <h3 className="font-heading text-xl font-semibold text-white">
                  {env.name}
                </h3>
              </div>
              <p className="text-gray-300 mb-4">{env.description}</p>
              <div>
                <h4 className="text-primary text-sm font-medium uppercase tracking-wider mb-2">
                  Tips
                </h4>
                <ul className="space-y-2">
                  {env.tips.map((tip, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Game Flow Section */}
      <Section>
        <SectionHeader 
          title="Game Flow"
          subtitle="Your journey from start to finish"
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/0" />
            
            <div className="space-y-8">
              {gameFlow.map((item, index) => (
                <div key={index} className="relative flex gap-6">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-background-light border-2 border-primary flex items-center justify-center text-primary font-bold shrink-0">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-heading text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Pro Tips Section */}
      <Section dark>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-5xl block mb-4">💡</span>
            <h2 className="font-heading text-3xl font-bold text-white">
              Pro Tips
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Observe First', tip: "Don't rush. Watch enemy patterns before moving through dangerous areas." },
              { title: 'Use All Directions', tip: 'Remember you can move in four directions. Use vertical movement to avoid enemies.' },
              { title: 'Track Your Progress', tip: 'Keep an eye on your score and progress indicators.' },
              { title: 'Press R to Restart', tip: "Got stuck or made a mistake? Press R to quickly restart the level." },
            ].map((item, i) => (
              <Card key={i} className="p-6">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.tip}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
