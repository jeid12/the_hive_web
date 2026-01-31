import { Metadata } from 'next'
import { Section, SectionHeader, Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about The Hive - an indie game adventure created with passion and creativity.',
}

const teamMembers = [
  {
    name: 'Kevin Ishimwe',
    role: 'Game Design & Development',
    bio: 'Creator and lead developer of The Hive. Passionate about crafting immersive gaming experiences that challenge and delight players.',
    avatar: '👨‍💻', // TODO: Replace with actual avatar image
  },
]

const techStack = [
  { name: 'Phaser 3', description: 'Game framework for HTML5 games', icon: '🎮' },
  { name: 'JavaScript ES6', description: 'Modern JavaScript with modules', icon: '⚡' },
  { name: 'HTML5 Canvas', description: 'Browser-native rendering', icon: '🖼️' },
  { name: 'Arcade Physics', description: 'Fast and efficient collision detection', icon: '💫' },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-honey/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="text-6xl mb-6 block">🐝</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="text-gradient">The Hive</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            An indie game adventure built with passion, creativity, 
            and a love for immersive gaming experiences.
          </p>
        </div>
      </Section>

      {/* Story Section */}
      <Section dark>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader 
              title="The Story Behind the Game" 
              centered={false}
            />
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
                <strong className="text-white">The Hive</strong> was born from a passion for 
                creating engaging, memorable gaming experiences. The game combines exploration, 
                strategy, and action into a cohesive adventure that keeps players coming back for more.
              </p>
              <p className="leading-relaxed">
                Every element of The Hive is designed with purpose — from the carefully crafted 
                environments to the responsive controls. We believe that great games are built 
                on attention to detail and respect for the player&apos;s time.
              </p>
              <p className="leading-relaxed">
                The warm amber and honey color palette reflects the game&apos;s theme, creating 
                a distinctive visual identity that sets The Hive apart from other indie titles.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <Card className="p-8">
              <h3 className="font-heading text-2xl font-semibold text-white mb-6">
                Design Philosophy
              </h3>
              <ul className="space-y-4">
                {[
                  { title: 'Player-First Design', desc: 'Every decision serves the player experience' },
                  { title: 'Accessible Gameplay', desc: 'Easy to learn, rewarding to master' },
                  { title: 'Visual Clarity', desc: 'Clear communication through design' },
                  { title: 'Meaningful Progress', desc: 'Every achievement feels earned' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-primary text-lg">✦</span>
                    <div>
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
            
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <SectionHeader 
          title="Meet the Team"
          subtitle="The creative minds behind The Hive"
        />
        
        <div className="max-w-2xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center p-8">
              {/* Avatar placeholder */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent-amber/20 flex items-center justify-center text-4xl border-2 border-primary/30">
                {member.avatar}
              </div>
              
              <h3 className="font-heading text-2xl font-semibold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-4">{member.role}</p>
              <p className="text-gray-400 leading-relaxed">{member.bio}</p>
              
              {/* Social links placeholder */}
              <div className="flex justify-center gap-4 mt-6">
                <a 
                  href="https://github.com/IshKevin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Tech Stack Section */}
      <Section dark>
        <SectionHeader 
          title="Built With"
          subtitle="The technology powering The Hive"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <Card key={index} className="text-center p-6">
              <span className="text-4xl block mb-4">{tech.icon}</span>
              <h3 className="font-heading text-lg font-semibold text-white mb-2">
                {tech.name}
              </h3>
              <p className="text-gray-400 text-sm">{tech.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Acknowledgments */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-5xl block mb-6">🙏</span>
          <h2 className="font-heading text-3xl font-bold text-white mb-6">
            Acknowledgments
          </h2>
          <div className="text-gray-400 space-y-4">
            <p>
              Special thanks to everyone who has supported <strong className="text-primary">The Hive</strong> 
              {' '}and helped bring this project to life.
            </p>
            <p>
              This game is dedicated to indie game enthusiasts everywhere who believe in 
              the power of creative, passionate game development.
            </p>
            <p className="text-sm pt-4 text-gray-500">
              The Hive is an indie game project created with love and dedication.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
