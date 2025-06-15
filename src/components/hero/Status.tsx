import { Briefcase, Zap } from "lucide-react"

const Status = () => {
  return (
    <div className="mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl text-emerald-300 rounded-full text-sm font-semibold border border-emerald-400/30 shadow-2xl shadow-emerald-500/20 group hover:shadow-emerald-400/40 transition-all duration-500">
            <Briefcase className="w-5 h-5" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
              <span className="text-base">Available for Immediate Start</span>
            </div>
            <Zap className="w-5 h-5 animate-pulse" />
          </div>
    </div>
  )
}

export default Status
