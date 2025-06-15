const Title = () => {
  return (
    <div className="mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-wide">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Full-Stack</span>
        <span className="text-white"> Web Developer</span>
      </h2>
      <div className="flex justify-center mb-6">
        <div className="h-1 w-48 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50"></div>
      </div>
      
      {/* Tech stack with enhanced styling */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {['React', 'Node.js', 'MongoDB', 'TypeScript'].map((tech) => (
          <div key={tech} className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-default group">
            <span className="group-hover:text-cyan-300 transition-colors">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Title
