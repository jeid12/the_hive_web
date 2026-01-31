import { Metadata } from 'next'
import { Section, SectionHeader, MediaPlaceholder } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Media',
  description: 'Screenshots, gameplay videos, and visual assets from The Hive indie game.',
}

const screenshots = [
  { label: 'Main Menu', category: 'UI', description: 'The animated main menu with Start Game and Tutorial options' },
  { label: 'Tutorial Screen', category: 'UI', description: 'Interactive tutorial with controls explanation and practice area' },
  { label: 'Game Introduction', category: 'Story', description: 'Welcome to The Hive — your adventure begins' },
  { label: 'The Entrance', category: 'Environment', description: 'The warm amber glow of the starting zone' },
  { label: 'The Depths', category: 'Environment', description: 'Navigate through challenging darker areas' },
  { label: 'The Core', category: 'Environment', description: 'The heart of The Hive with intense challenges' },
  { label: 'The Summit', category: 'Environment', description: 'Golden heights — the final challenge' },
  { label: 'Item Collection', category: 'Gameplay', description: 'Collecting key items throughout the game' },
  { label: 'Enemy Encounter', category: 'Gameplay', description: 'Enemies patrol the environments' },
  { label: 'Victory Screen', category: 'Story', description: 'Triumph! You conquered The Hive!' },
  { label: 'End Scene', category: 'Story', description: 'The conclusion of your epic journey' },
  { label: 'Credits', category: 'UI', description: 'The team behind The Hive' },
]

const categories = ['All', 'Environment', 'Gameplay', 'Story', 'UI']

const videos = [
  { label: 'Full Gameplay Walkthrough', duration: '~5 min' },
  { label: 'Speedrun Attempt', duration: '~2 min' },
  { label: 'All Environments Tour', duration: '~3 min' },
]

const gifs = [
  { label: 'Item Collection Effect' },
  { label: 'Enemy Movement Patterns' },
  { label: 'Screen Transitions' },
  { label: 'Title Animation' },
]

export default function MediaPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-amber/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="text-6xl mb-6 block">🖼️</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Media <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Explore the visual world of The Hive
          </p>
        </div>
      </Section>

      {/* Featured Video Section */}
      <Section dark>
        <SectionHeader 
          title="Featured Video"
          subtitle="Watch The Hive in action"
        />
        
        <div className="max-w-5xl mx-auto">
          <MediaPlaceholder 
            type="video" 
            label="Official Gameplay Trailer"
            aspectRatio="wide"
            className="shadow-2xl shadow-black/50"
          />
          <p className="text-center text-gray-500 text-sm mt-4">
            {/* TODO: Replace with actual gameplay trailer */}
            Gameplay trailer coming soon
          </p>
        </div>
      </Section>

      {/* Screenshots Section */}
      <Section>
        <SectionHeader 
          title="Screenshots"
          subtitle="Captured moments from your adventure"
        />
        
        {/* Category filter (static for now) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${category === 'All' 
                  ? 'bg-primary text-background' 
                  : 'bg-background-light text-gray-400 hover:text-white hover:bg-background-lighter'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Screenshots Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="group"
            >
              <MediaPlaceholder 
                type="screenshot"
                label={screenshot.label}
              />
              <div className="mt-3">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-white font-medium">{screenshot.label}</h3>
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {screenshot.category}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Gameplay Videos Section */}
      <Section dark>
        <SectionHeader 
          title="Gameplay Videos"
          subtitle="Watch full gameplay sessions"
        />
        
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div key={index}>
              <MediaPlaceholder 
                type="video"
                label={video.label}
              />
              <div className="mt-3 flex items-center justify-between">
                <h3 className="text-white font-medium">{video.label}</h3>
                <span className="text-gray-500 text-sm">{video.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* GIFs Section */}
      <Section>
        <SectionHeader 
          title="Animated GIFs"
          subtitle="Quick glimpses of gameplay moments"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gifs.map((gif, index) => (
            <div key={index}>
              <MediaPlaceholder 
                type="gif"
                label={gif.label}
                aspectRatio="square"
              />
              <p className="mt-2 text-center text-gray-400 text-sm">{gif.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Press Kit Section */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-5xl block mb-6">📦</span>
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Press Kit
          </h2>
          <p className="text-gray-400 mb-8">
            Need assets for coverage or content creation? Download our press kit 
            with high-resolution screenshots, logos, and game information.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-background font-semibold px-6 py-3 rounded-lg transition-colors"
              disabled
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Press Kit
              <span className="text-xs opacity-70">(Coming Soon)</span>
            </button>
            
            <a 
              href="https://github.com/IshKevin/the_hive"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-background-lighter hover:bg-background-light border border-white/10 hover:border-primary/50 text-white font-semibold px-6 py-3 rounded-lg transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View Source Assets
            </a>
          </div>
        </div>
      </Section>

      {/* Usage Guidelines */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-6 text-center">
            Usage Guidelines
          </h2>
          
          <div className="bg-background-light border border-white/10 rounded-xl p-6 md:p-8">
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <span className="text-green-500">✓</span>
                <span>Use for reviews, articles, and content creation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500">✓</span>
                <span>Share on social media with credit</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500">✓</span>
                <span>Include in game jam showcases and portfolios</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500">✗</span>
                <span>Do not claim assets as your own work</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500">✗</span>
                <span>Do not use for commercial purposes without permission</span>
              </li>
            </ul>
            
            <p className="mt-6 text-sm text-gray-500">
              The Hive was created as an indie game project. 
              For any questions about asset usage, please{' '}
              <a href="/contact" className="text-primary hover:underline">contact us</a>.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
