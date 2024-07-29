import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string | null
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      {cta ? (<Card.Cta>{cta}</Card.Cta>): null}
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'I’ve given talks and spoken at events all around the world and been interviewed on many national and international TV programs.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="I’ve given talks and spoken at events all around the world and been interviewed multiple times on TV."
      intro="One of my favourite things is to share my learnings with ohers on stage. I have given talks at conferences across the globe from Singapore, London, Australia and USA cities. I have also appeared on TV a few times in Singapore and Australia."
    >
      <div className="space-y-20">
        <SpeakingSection title="Talks">
          <Appearance
            href="#"
            title="NFTs and the future of digital art"
            description="A talk where I demonstrated the creation of NFT from scratch in front of the students using generative AI as a tool for creating digital art."
            event="Invited Speaker, St Paul's Girls School, London"
            cta=""
          />
          <Appearance
            href="#"
            title="Creating Your First Voice App Using on Amazon Alexa"
            description="Demonstrated the creation of a voice app using Amazon Alexa and how to publish it to the Alexa store using VoiceFlow."
            event=" Minerva Talk, St James Girls School, London"
            cta=""
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
