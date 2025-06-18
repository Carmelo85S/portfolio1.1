import { Award } from 'lucide-react'
import type { FloatingBadgesProps } from '../../type/type'

const FloatingBadges = ({ award }: FloatingBadgesProps) => {
  return (
    <div className="absolute top-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold animate-bounce shadow-lg shadow-yellow-500/30 flex items-center gap-1">
        <Award className="w-3 h-3 inline mr-1" />
        {award}
    </div>
    
  )
}

export default FloatingBadges


