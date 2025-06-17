import FloatingBadges from "./FloatingBadges"

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
          <FloatingBadges award="Hiring" />
        </div>
    </div>
  )
}

export default ProfileSection
