import Image from "next/image";
import { Inter, Orbitron, Space_Mono, Syne, Sora, Chakra_Petch, Outfit  } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

const spacemono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className={`${inter.className} min-h-screen bg-black text-white overflow-hidden relative`}>
      {/* Background gradient and planet effect */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0)), url('/orbitstudiobg.png')`,
          backgroundSize: "100%", // zoom out (100% = actual size)
          backgroundPosition: "center 70%",// shift image toward top to show lower parts
          backgroundBlendMode: "overlay",
          // filter: "blur(2px) brightness(0.7)"
        }}


      >
        <div className="absolute inset-0 z-10 animate-glow" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-amber-800/10 to-black"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[180%] max-w-[1800px] aspect-square rounded-full bg-gradient-radial from-amber-600/30 via-amber-800/20 to-transparent opacity-60"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150vw] h-[150vw] rounded-full border border-amber-500/20"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120vw] h-[120vw] rounded-full border border-amber-500/10"></div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 md:px-12 py-6">
        <div className="flex items-center space-x-2">
          {/* <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center"> */}
          {/* <div className="w-4 h-4 bg-black rounded-full"></div> */}
          {/* </div> */}
          <Image
            src="/orbitstudiologolight.png"
            alt="The Orbit Studio Logo"
            width={50}
            height={50}
            priority
          />  
          <span className="text-xl font-semibold md:flex hidden">THE ORBIT STUDIO </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-1">
            {/* <span className="text-gray-300">Discover</span> */}
            {/* <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg> */}
          </div>
          <div className="flex items-center space-x-1">
            {/* <span className="text-gray-300">Business</span>
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg> */}
          </div>
          <div className="flex items-center space-x-1">
            {/* <span className="text-gray-300">Builders</span>
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg> */}
          </div>
          <div className="flex items-center space-x-1">
            {/* <span className="text-gray-300">Community</span>
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg> */}
          </div>
          <div className="flex items-center space-x-1">
            {/* <span className="text-gray-300">About</span>
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg> */}
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="px-5 sm:px-6 py-2 text-sm sm:text-base bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors cursor-pointer">
            BOOK A CALL
          </button>
          {/* <button className="px-6 py-2 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors">
           
          </button> */}
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 mt-16 md:mt-12">
        <h1 className={`text-4xl ${chakraPetch.className} sm:text-5xl md:text-6xl lg:text-7xl sm:font-normal md:font-light mb-6`}>
          Activating<br />
          The Next Wave
        </h1>

        <p className="text-gray-300 text-lg sm:text-sm md:text-xl max-w-2xl mb-4">
          Introducing The Orbit Studio — a DevRel & Community Activation studio for Web3 protocols, built by builders, for builders.
        </p>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors cursor-pointer">
            GET STARTED
          </button>
          {/* <button className="text-gray-300 hover:text-white transition-colors underline underline-offset-4">
            View all Products
          </button> */}
        </div>
      </main>
    </div>
  )
}