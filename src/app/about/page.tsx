import { Metadata } from 'next'
import { Section, SectionHeader, Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about The Hive - an indie game adventure created with passion and creativity.',
}

const teamMembers = [
  {
    name: 'Kevin Ishimwe',
    role: 'Creator & Lead Developer',
    bio: 'Creator and lead developer of The Hive. Passionate about crafting immersive gaming experiences that challenge and delight players.',
    avatar: '👨‍💻',
  },
  {
    name: 'Bro Jeid',
    role: 'Co-Developer',
    bio: 'Visionary contributor and core architect of The Hive. Drives the technical direction and ensures exceptional quality.',
    avatar: '💻',
  },
  {
    name: 'Joshua',
    role: 'Game Designer',
    bio: 'Creative mind behind the gameplay mechanics and level design. Crafts engaging challenges that keep players immersed.',
    avatar: '🎮',
  },
  {
    name: 'Team Member',
    role: 'Artist',
    bio: 'Brings The Hive to life with stunning visuals and animations. Creates the vibrant world players explore.',
    avatar: '🎨',
  },
  {
    name: 'Team Member',
    role: 'Sound Designer',
    bio: 'Crafts the immersive audio landscape of The Hive. From buzzing ambience to epic soundtracks.',
    avatar: '🎵',
  },
  {
    name: 'Team Member',
    role: 'QA & Testing',
    bio: 'Ensures quality and polish in every aspect of the game. Catches bugs before players do.',
    avatar: '🔍',
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
    <div className="pt-14 sm:pt-16 md:pt-20">
      {/* Hero Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="hidden sm:block absolute top-20 left-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="hidden sm:block absolute bottom-20 right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-accent-honey/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <span className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 block">🐝</span>
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
            About <span className="text-gradient">The Hive</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl">
            An indie game adventure built with passion, creativity, 
            and a love for immersive gaming experiences.
          </p>
        </div>
      </Section>

      {/* Story Section */}
      <Section dark>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div>
            <SectionHeader 
              title="The Story Behind the Game" 
              centered={false}
            />
            <div className="space-y-4 sm:space-y-6 text-gray-300 text-sm sm:text-base">
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
            <Card className="p-4 sm:p-6 md:p-8">
              <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4 sm:mb-6">
                Design Philosophy
              </h3>
              <ul className="space-y-3 sm:space-y-4">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center p-5 sm:p-6 hover:border-primary/50 transition-colors">
              {/* Avatar placeholder */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent-amber/20 flex items-center justify-center text-3xl sm:text-4xl border-2 border-primary/30">
                {member.avatar}
              </div>
              
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
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
