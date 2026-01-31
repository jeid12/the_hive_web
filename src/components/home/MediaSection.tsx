import { Section, SectionHeader, MediaPlaceholder } from '@/components/ui'

const screenshots = [
  { label: 'Main Menu', type: 'screenshot' as const },
  { label: 'The Entrance', type: 'screenshot' as const },
  { label: 'The Depths', type: 'screenshot' as const },
  { label: 'The Core', type: 'screenshot' as const },
  { label: 'The Summit', type: 'screenshot' as const },
  { label: 'Victory Screen', type: 'screenshot' as const },
]

export default function MediaSection() {
  return (
    <Section id="media">
      <SectionHeader 
        title="Game Gallery"
        subtitle="Explore the world of The Hive"
      />

      {/* Featured video/gif placeholder */}
      <div className="mb-12">
        <MediaPlaceholder 
          type="video" 
          label="Gameplay Trailer"
          aspectRatio="wide"
          className="max-w-4xl mx-auto shadow-2xl shadow-black/50"
        />
      </div>

      {/* Screenshot grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {screenshots.map((item, index) => (
          <div 
            key={index}
            className="animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <MediaPlaceholder 
              type={item.type}
              label={item.label}
            />
          </div>
        ))}
      </div>
    </Section>
  )
}
