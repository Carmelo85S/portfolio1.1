import { MousePointerClick } from 'lucide-react'
import Heading from '../ui/Heading'
import Underline from '../ui/Underline'
import OpportunityList from './OpportunityList'
import FloatingParticles from '../FloatingParticles.tsx/FloatingParticles'
import Ready from './Ready'

const Connect = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-950 via-blue-900 to-slate-600 p-6 sm:p-10 overflow-hidden">
      
      <FloatingParticles />

      <div className="p-6 z-10 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-xl rounded-3xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 mb-8">
        <MousePointerClick className="w-12 h-12 text-cyan-300" />
      </div>

      <Heading title={'Let\'s Connect'} subtitle='Ready to contribute to your team.' />
      <Underline />

      <section className="z-10 w-full my-12">
        <OpportunityList />
      </section>
      <Ready />
    </section>
  )
}


export default Connect
