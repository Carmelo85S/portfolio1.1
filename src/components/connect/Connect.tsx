import { MousePointerClick } from 'lucide-react'
import Heading from '../ui/Heading'
import Underline from '../ui/Underline'
import ConnectList from './ConnectList'
import OpportunityList from './OpportunityList'

const Connect = () => {
    
  return (
    <section className="min-h-screen flex flex-col items-center bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-800 p-6 sm:p-10 overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-xl rounded-3xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 mb-8">
        <MousePointerClick className="w-12 h-12 text-cyan-300"/>
      </div>
      <Heading title={'Lets Connect'} subtitle='Ready to contribute to your team.'/>
      <Underline />
      <section className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 items-stretch">
        <ConnectList />
        <OpportunityList />
      </section>
    </section>
  )
}

export default Connect
