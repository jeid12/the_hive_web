import Image from 'next/image'
import { Section, SectionHeader } from '@/components/ui'

const screenshots = [
  { src: '/images/Screenshot from 2026-02-01 11-05-02.png', label: 'Gameplay Scene 1' },
  { src: '/images/Screenshot from 2026-02-01 11-09-17.png', label: 'Gameplay Scene 2' },
  { src: '/images/Screenshot from 2026-02-01 11-09-30.png', label: 'Gameplay Scene 3' },
  { src: '/images/Screenshot from 2026-02-01 11-09-40.png', label: 'Gameplay Scene 4' },
  { src: '/images/Screenshot from 2026-02-01 11-10-01.png', label: 'Gameplay Scene 5' },
  { src: '/images/Screenshot from 2026-02-01 11-10-43.png', label: 'Gameplay Scene 6' },
]

export default function MediaSection() {
  return (
    <Section id="media">
      <SectionHeader 
        title="Game Gallery"
        subtitle="Explore the world of The Hive"
      />

      {/* Featured video */}
      <div className="mb-12">
        <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
          <video 
            controls
            className="w-full h-full object-cover"
            poster="/images/Screenshot from 2026-02-01 11-05-02.png"
          >
            <source src="/images/video of the game.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Screenshot grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {screenshots.map((item, index) => (
          <div 
            key={index}
            className="animate-scale-in group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/30 transition-all duration-300">
              <Image 
                src={item.src}
                alt={item.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
