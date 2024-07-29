import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/dtportrait.png'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About GoldZulu',
  description:
    'GoldZulu - Innovative IT leader, AI enthusiast, voice tech expert, and blockchain pioneer.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="GoldZulu"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m GoldZulu, an innovative IT leader specializing in AI, voice tech, and blockchain, based in London.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              With over 22 years of experience in leadership and advisory roles, I&apos;ve been at the forefront of emerging technologies, driving innovation and adoption across businesses.
            </p>
            <p>
              My expertise spans across three cutting-edge domains: Artificial Intelligence, Voice Technology, and Blockchain/Web3. As an AWS Certified Alexa Skill Builder and a proud member of the AWS Community Builder program, I&apos;ve been chosen for my expertise in Machine Learning and Generative AI.
            </p>
            <p>
              In the AI realm, I work extensively with Machine Learning, OpenAI, Azure AI, AWS Bedrock, and Open Source LLMs. I&apos;ve implemented AI solutions across various platforms, pushing the boundaries of what&apos;s possible with artificial intelligence.
            </p>
            <p>
              My voice tech journey has led me to become an expert in Amazon Alexa (ASK SDK, Skill Flow Builder) and Google Assistant Actions. I&apos;ve developed complex voice applications that seamlessly integrate with IoT devices and other emerging technologies.
            </p>
            <p>
              In the blockchain space, I&apos;ve had the privilege of winning global hackathons, including the EthGlobal Ethonline 2022 and the Moralis Filecoin Hackathon, where I clinched the grand prize for a voice-activated crypto wallet. I&apos;m proficient in Ethereum smart contracts, NFT marketplaces, and DApp development.
            </p>
            <p>
              Today, I operate at the intersection of AI, voice tech, and blockchain/web3, constantly pushing the boundaries of what&apos;s possible. Whether it&apos;s developing AI-powered applications, creating complex Alexa skills, or solving intricate blockchain problems, I&apos;m always ready for the next challenge.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/voicetechguy1" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="https://github.com/goldzulu" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/dzulkifleetaib" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:goldzulu222@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              goldzulu222@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}