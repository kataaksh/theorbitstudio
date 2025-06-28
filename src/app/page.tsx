import Image from "next/image";
import { Inter, Orbitron, Space_Mono, Syne, Sora, Chakra_Petch, Outfit, Instrument_Serif, Roboto_Mono } from 'next/font/google'

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



export default function Home() {
  return (
    <div className={`${inter.className} min-h-screen bg-black text-white overflow-hidden relative flex flex-col items-center justify-center`}>
      {/* Background gradient and planet effect */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0)), url('/orbitstudio.webp')`,
          backgroundSize: "100%", // zoom out (100% = actual size)
          backgroundPosition: "center 70%",// shift image toward top to show lower parts
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 z-10 animate-glow" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-amber-800/10 to-black"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[180%] max-w-[1800px] aspect-square rounded-full bg-gradient-radial from-amber-600/30 via-amber-800/20 to-transparent opacity-60"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150vw] h-[150vw] rounded-full border border-amber-500/20"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120vw] h-[120vw] rounded-full border border-amber-500/10"></div>

      {/* Minimal Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 w-full flex-1">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/orbitstudiologolight.png"
            alt="The Orbit Studio Logo"
            width={60}
            height={60}
            priority
            className="mb-2"
          />







          <span className="white-grad">
            <span className={`text-white text-sm font-light tracking-wide px-4 py-4 relative z-[1] ${robotoMono.className}`}>
              theorbitstudio.com
            </span>
          </span>







        </div>
        {/* Heading & Subheading - Responsive line breaks */}
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 ${instrumentSerif.className}`}
          style={{ lineHeight: 1.1 }}>
          <span className="block">Activating The Next Wave</span>
          <span className="block md:inline">Of Web3 Builders</span>
        </h1>
        <p className={`text-gray-300 text-base sm:text-lg mb-8 max-w-xl mx-auto ${robotoMono.className}`}>
          <span className="block sm:hidden">Introducing The Orbit Studio —</span>
          <span className="block sm:hidden">a DevRel & Community Activation studio</span>
          <span className="block sm:hidden mb-1">for Web3 protocols, built by builders, for builders.</span>
          <span className="hidden sm:inline">Introducing The Orbit Studio — a DevRel & Community Activation studio for Web3 protocols, built by builders, for builders.</span>
        </p>
        {/* Email Input & Button */}
        <form className={`${robotoMono.className} flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto mb-3`}>
        <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-orange-400 to-amber-600 text-white font-medium shadow-md hover:from-orange-500 hover:to-amber-700 transition">
  Get Started
</button>


          <button className="px-5 py-2.5 rounded-lg bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/15 transition">
  Book A Call
</button>


        </form>
        {/* Terms Checkbox */}
        {/* <div className="flex items-center justify-center mb-8 text-xs text-gray-400">
          <input type="checkbox" id="terms" className="mr-2 accent-amber-400" />
          <label htmlFor="terms">
            I agree to the <a href="#" className="underline text-gray-200">Terms and Conditions</a>
          </label>
        </div> */}
      </main>
      {/* Footer */}
      <footer className="z-10 w-full text-center text-xs text-gray-500 pb-4">
        created by <a href="#" className="underline">bikash</a>
      </footer>
    </div>
  )
}