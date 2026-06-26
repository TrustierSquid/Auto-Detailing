export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/85" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
          Premium Mobile Auto Detailing
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          We Come <span className="text-[#C9A84C]">To You.</span>
          <br />
          Your Car Deserves
          <br />
          The Best.
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Professional mobile detailing services delivered right to your door.
          Showroom-quality results without the hassle of driving to a shop.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="gold-btn text-base px-8 py-4">
            Book Your Detail
          </a>
          <a href="#services" className="outline-btn text-base px-8 py-4">
            View Services
          </a>
        </div>

        {/* Quick stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '500+', label: 'Cars Detailed' },
            { value: '5★', label: 'Avg. Rating' },
            { value: '100%', label: 'Satisfaction' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[#C9A84C] text-2xl font-bold">{s.value}</p>
              <p className="text-gray-400 text-xs mt-1 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-0.5 h-8 bg-gradient-to-b from-[#C9A84C] to-transparent" />
        <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
      </div>
    </section>
  )
}
