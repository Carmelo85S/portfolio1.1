const Contact = () => {
  return (
    <div className="flex justify-center gap-6 mb-16">
        <button
            className="animate-pulse bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:from-red-400 hover:to-red-500 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-300"
            onClick={() => window.location.href = "mailto:carmelo.salis85@gmail.com"}
        >
            Contact me
        </button>   

    </div>
  )
}

export default Contact
