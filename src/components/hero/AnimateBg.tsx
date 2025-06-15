const AnimateBg = () => {
  return (
    <div>
      <div className="absolute inset-0">
        {/* Floating orbs with better animation */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000 opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-500 opacity-80"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent bg-[length:50px_50px] animate-pulse opacity-30"></div>
      </div>
    </div>
  )
}

export default AnimateBg
