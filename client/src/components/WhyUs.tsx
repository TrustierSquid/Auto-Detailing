const reasons = [
  {
    icon: '🚗',
    title: 'We Come To You',
    description:
      'No driving to a shop. We bring everything needed and detail your vehicle at your home, office, or anywhere that works for you.',
  },
  {
    icon: '⭐',
    title: 'Pro-Grade Products',
    description:
      'We use only professional-grade detailing products — the same used by top-tier detailing studios — never cheap, diluted alternatives.',
  },
  {
    icon: '🕐',
    title: 'On Time, Every Time',
    description:
      'We respect your schedule. Our team arrives on time and completes the job efficiently without cutting corners on quality.',
  },
  {
    icon: '💯',
    title: 'Satisfaction Guaranteed',
    description:
      "If you're not 100% happy with the result, we'll make it right. Your satisfaction is the only metric that matters to us.",
  },
  {
    icon: '🌿',
    title: 'Eco-Friendly Approach',
    description:
      "Our waterless and low-water wash methods conserve water while delivering exceptional results that traditional methods can't match.",
  },
  {
    icon: '📅',
    title: 'Easy Online Booking',
    description:
      "Book in minutes online or by phone. We'll confirm your appointment and send reminders so you never have to think twice.",
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="section-heading">
              The Detail Shop
              <br />
              <span className="text-[#C9A84C]">That Comes To You</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              We started this business with one goal: make professional auto detailing as convenient and
              accessible as possible. No shop waits. No drop-offs. Just a perfectly detailed vehicle
              wherever you are.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-4">
                  <div className="text-2xl shrink-0 mt-0.5">{r.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{r.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{r.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image / visual */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
              alt="Detailer working on a vehicle"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 right-6 card-dark rounded-xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-2xl shrink-0">
                🏆
              </div>
              <div>
                <p className="text-white font-bold text-sm">Top-Rated Mobile Detailer</p>
                <p className="text-gray-400 text-xs mt-0.5">Hundreds of 5-star reviews from local customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
