import { Award } from "lucide-react"

const ProfileSection = () => {
  return (
    <div>
      <div className="mb-12 relative inline-block group">
          <div className="relative">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-2 shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-500">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl font-bold text-transparent bg-gradient-to-br from-cyan-300 to-purple-300 bg-clip-text">
                CS
              </div>
            </div>
            {/* Animated rings */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border border-purple-400/20 animate-pulse"></div>
          </div>
          
          {/* Floating badges */}
          <div className="absolute top-4 -right-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold animate-bounce shadow-lg shadow-yellow-500/30 flex items-center gap-1">
            <Award className="w-3 h-3 inline mr-1" />
            HIRING
          </div>
        </div>
    </div>
  )
}

export default ProfileSection
