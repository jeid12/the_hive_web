'use client'

import { useState } from 'react'
import { Section, SectionHeader, Card } from '@/components/ui'

const contactLinks = [
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    title: 'GitHub',
    description: 'View the source code, report issues, or contribute to the project.',
    link: 'https://github.com/IshKevin/the_hive',
    linkText: 'View Repository',
    external: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
    title: 'Discord',
    description: 'Join our community to discuss the game and connect with other players.',
    link: '#', // TODO: Add actual Discord invite link
    linkText: 'Coming Soon',
    disabled: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    description: 'Have questions or want to collaborate? Send us an email.',
    link: 'mailto:contact@thehive.game', // TODO: Replace with actual email
    linkText: 'Send Email',
    external: true,
  },
]

const faqs = [
  {
    question: 'Is The Hive free to play?',
    answer: 'Yes! The Hive is completely free. It was created as an indie game project and is available to play directly in your browser.',
  },
  {
    question: 'What browsers are supported?',
    answer: 'The game runs on all modern browsers including Chrome, Firefox, Edge, and Safari. For the best experience, we recommend using the latest version of Chrome.',
  },
  {
    question: 'Can I contribute to the project?',
    answer: 'Absolutely! The game is open source. Visit our GitHub repository to report bugs, suggest features, or submit pull requests.',
  },
  {
    question: 'Will there be updates or new content?',
    answer: 'We have plans for future enhancements including sound effects, custom sprites, and additional levels. Follow us on GitHub to stay updated.',
  },
  {
    question: 'Can I use assets from the game?',
    answer: 'The game currently uses placeholder assets. For any usage questions, please contact us directly. Remember to credit the project in your work.',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    // TODO: Implement actual form submission (e.g., to Formspree, Netlify Forms, or custom API)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="hidden sm:block absolute top-20 left-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="hidden sm:block absolute bottom-20 right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-accent-honey/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <span className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 block">📬</span>
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl">
            Questions, feedback, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
      </Section>

      {/* Contact Links Section */}
      <Section dark>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {contactLinks.map((item, index) => (
            <Card key={index} className="p-4 sm:p-6 md:p-8 text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mb-4 sm:mb-6 ${item.disabled ? 'bg-gray-800 text-gray-500' : 'bg-primary/10 text-primary'}`}>
                {item.icon}
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
                {item.description}
              </p>
              {item.disabled ? (
                <span className="inline-flex items-center justify-center gap-2 text-gray-500 font-medium text-sm">
                  {item.linkText}
                </span>
              ) : (
                <a
                  href={item.link}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center justify-center gap-2 text-primary hover:text-primary-light font-medium transition-colors text-sm sm:text-base"
                >
                  {item.linkText}
                  {item.external && (
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </a>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <SectionHeader 
              title="Send a Message"
              subtitle="Fill out the form and we'll get back to you as soon as possible"
              centered={false}
            />
            
            {submitted ? (
              <Card className="p-6 sm:p-8 text-center">
                <span className="text-4xl sm:text-5xl block mb-3 sm:mb-4">✅</span>
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                  Thank you for reaching out. We&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary hover:text-primary-light transition-colors text-sm sm:text-base"
                >
                  Send another message
                </button>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background-light border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background-light border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background-light border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="feedback">Game Feedback</option>
                    <option value="bug">Bug Report</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background-light border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-background font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          {/* FAQ Section */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6" hover={false}>
                  <h3 className="font-medium text-white mb-2 flex items-start gap-3">
                    <span className="text-primary">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 text-sm pl-6">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Social CTA */}
      <Section dark>
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-5xl block mb-6">🌍</span>
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Join the Community
          </h2>
          <p className="text-gray-400 mb-8">
            Follow the project, share your feedback, and connect with other players 
            who love indie games.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/IshKevin/the_hive"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 text-white px-6 py-3 rounded-lg transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Star on GitHub
            </a>
            <a
              href="https://github.com/IshKevin/the_hive/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 text-white px-6 py-3 rounded-lg transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Report an Issue
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}
