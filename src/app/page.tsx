'use client'

import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import { Inter, Instrument_Serif, Roboto_Mono, Syne, Chakra_Petch } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500'],
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
}

const word = {
  hidden: { opacity: 0, y: `0.8em` },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 60,
      damping: 14,
    },
  },
}

// Logo & domain animation
const logoAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1,
      ease: easeOut,
    },
  },
}

// Subtitle animation (after heading)
const subtitleAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3, // after title animation
      duration: 0.8,
      ease: easeOut,
    },
  },
}

// Buttons animation
const buttonAnim = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3.5,
      duration: 0.7,
      ease: easeOut,
    },
  },
}

export default function Home() {
  return (
    <div className={`${inter.className} min-h-screen bg-black text-white overflow-hidden relative flex flex-col items-center justify-center`}>
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .9), rgba(255, 255, 255, 0)), url('/orbitvid.gif')`,
          backgroundSize: "100%",
          backgroundPosition: "center 70%",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 z-10 animate-glow" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-amber-800/10 to-black"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[180%] max-w-[1800px] aspect-square rounded-full bg-gradient-radial from-amber-600/30 via-amber-800/20 to-transparent opacity-60"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150vw] h-[150vw] rounded-full border border-amber-500/20"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120vw] h-[120vw] rounded-full border border-amber-500/10"></div>

      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 w-full flex-1">

        {/* Logo */}
        <motion.div
          className="flex flex-col items-center mb-6"
          variants={logoAnim}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/orbitstudiologolight.png"
            alt="The Orbit Studio Logo"
            width={70}
            height={70}
            priority
            className="mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,1)] animate-pulse"

          />
          <span className="white-grad">
            <span className={`text-white text-sm font-light tracking-wide px-4 py-4 relative z-[1] ${robotoMono.className}`}>
              theorbitstudio
            </span>
          </span>
        </motion.div>

        {/* Animated Heading */}
        <motion.h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 ${instrumentSerif.className}`}
          style={{ lineHeight: 1.1 }}
        >
          <motion.span
            className="block"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {"Activating The Next Wave".split(" ").map((wordText, idx) => (
              <motion.span key={idx} variants={word} className="inline-block mr-2">
                {wordText}
              </motion.span>
            ))}
          </motion.span>

          <motion.span
            className="block md:inline"
            variants={{
              ...container,
              visible: {
                ...container.visible,
                transition: {
                  ...container.visible.transition,
                  delayChildren: 1.8, // delay second line after first
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {"Of Web3 Builders".split(" ").map((wordText, idx) => (
              <motion.span key={idx} variants={word} className="inline-block mr-2">
                {wordText}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={`text-gray-400 text-sm sm:text-base md:text-lg mb-8 max-w-xl mx-auto ${robotoMono.className}`}

          variants={subtitleAnim}
          initial="hidden"
          animate="visible"
        >
          <span className="block sm:hidden">Introducing The Orbit Studio —</span>
          <span className="block sm:hidden">a DevRel & Community Activation studio</span>
          <span className="block sm:hidden mb-1">for Web3 protocols, built by builders, for builders.</span>
          <span className="hidden sm:inline">
            Introducing The Orbit Studio — a DevRel & Community Activation studio for Web3 protocols, built by builders, for builders.
          </span>
        </motion.p>

        <motion.form
          className={`${robotoMono.className} flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto mb-3`}
          variants={buttonAnim}
          initial="hidden"
          animate="visible"
        >
          <a
            href="https://the-orbit-studio.notion.site/on-boarding"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 rounded-lg bg-gradient-to-r from-orange-400 to-amber-600 text-white font-medium shadow-md hover:from-orange-500 hover:to-amber-700 transition cursor-pointer"
          >
            Get Started
          </a>



          <a href="https://calendly.com/hello-theorbit/30min" target="_blank"
            rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/15 transition cursor-pointer">
            Book A Call
          </a>
        </motion.form>
      </main>

      <footer className="z-10 w-full text-center text-xs text-gray-500 pb-4">
        created by <a href="https://x.com/bikash1376" className="underline">bikash</a>
      </footer>
    </div>
  );
}
