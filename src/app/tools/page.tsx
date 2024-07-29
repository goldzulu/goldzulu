import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Tools',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Tools() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I often receive inquiries regarding the tools I utilize for software development, productivity enhancement, or indulging in items that create a facade of productivity while actually procrastinating. Here is an extensive compilation of my preferred resources."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="Apple M1 Mac Studio Ultra">
            This is my primary workstation. It’s the fastest computer I’ve ever
            had and in the line of work that I do with lots of AI LLM inteferencing, 
            it’s a game changer.
          </Tool>
          <Tool title="Samsung U28D590 4k 12.5 Inch">
            This is a cost effective monitor with great contrast and refresh rate.
            It replaces my previous Apple Thunderbolt Display which stand has given way
            to the wear and tear of time.
          </Tool>
          <Tool title="Apple Wireless Bluetooth Keyboard">
            Love the feel of this keyboard as well as the convinient fact that it has
            a built in touch id sensor for authentication has saved me so many hours of
            typing in my password.
          </Tool>
          <Tool title="Apple Wireless Bluetooth Mouse">
            I have tried many mice but nothing beats the Apple mouse with its simplicity
            and how it doubles up like a trackpad where you can swipe and scroll anywhere
            on the surface of the mouse.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Micosoft VS Code">
            I have been using VS Code for a while now and it has become my go to editor
            for all things development. It has a great ecosystem of plugins and extensions
            that make it a great tool for any developer.
          </Tool>
          <Tool title="iTerm2">
            This terminal emulator is a must have for any developer. It has a lot of
            features that make it stand out from the crowd. I use it for everything
            from running scripts to managing my servers. It has recently added AI features
            too.
          </Tool>
          <Tool title="XCode">
            For all my iOS development needs, XCode is the go to tool. It has matured over
            years with lots of features that just go naturally with the flow of iOS development.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Adobe Suite">
            From Photoshop to Illustrator, Adobe has been the go to tool for all my design
            needs. I have been using them way back before their acquisition of Macromedia.
            Put your hands up if you remember Fireworks or Drumbeat!
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Raycast">
            OMG. Productivity tool of the year. I can’t believe how much time I’ve saved
            by using this tool. It’s like Alfred on steroids. I can’t recommend it enough.
            If you want to try them out, do use my affiliate link <Link href="https://raycast.com/?via=goldzulu" className="transition hover:text-teal-500 dark:hover:text-teal-400">here</Link>
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
