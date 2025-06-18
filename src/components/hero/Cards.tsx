import { Linkedin, Github } from 'lucide-react'

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { icon: Linkedin, label: "LinkedIn", value: "/in/carmelo-salis", gradient: "from-blue-500 to-cyan-500" },
            { icon: Github, label: "Git Hub", value: "@Carmelo85S", gradient: "from-purple-500 to-indigo-500" }
          ].map((contact, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-500 group cursor-default transform hover:-translate-y-2 hover:shadow-2xl">
                <div className={`w-12 h-12 bg-gradient-to-r ${contact.gradient} rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-lg`}>
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-slate-300 text-sm mb-2">{contact.label}</p>
                <p className="text-white font-semibold group-hover:text-cyan-300 transition-colors">{contact.value}</p>
              </div>
            </div>
          ))}
        </div>
  )
}

export default Cards
