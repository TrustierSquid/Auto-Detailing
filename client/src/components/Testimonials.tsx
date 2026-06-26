const reviews = [
  {
    name: 'Marcus T.',
    location: 'Local Customer',
    rating: 5,
    text: 'Absolutely blown away by the results. My 10-year-old car looks brand new inside and out. The team was professional, on time, and went above and beyond. Will definitely be booking again.',
  },
  {
    name: 'Jessica R.',
    location: 'Local Customer',
    rating: 5,
    text: "I've tried other mobile detailers but none come close to this level of quality. My white car is spotless and the interior smells amazing. Worth every penny.",
  },
  {
    name: 'David K.',
    location: 'Local Customer',
    rating: 5,
    text: "Got the full detail package before selling my car. The buyer couldn't believe how clean it was and I got $1,500 more than my original asking price. These guys paid for themselves 10x over.",
  },
  {
    name: 'Sarah M.',
    location: 'Local Customer',
    rating: 5,
    text: "Monthly maintenance plan customer here. My car always looks perfect and I love that I don't have to go anywhere. Super easy to book and very reliable.",
  },
  {
    name: 'Carlos B.',
    location: 'Local Customer',
    rating: 5,
    text: 'The paint correction service removed swirl marks I thought would never come out. My car looks like it just came off the showroom floor. Absolutely incredible work.',
  },
  {
    name: 'Amy L.',
    location: 'Local Customer',
    rating: 5,
    text: "Had my SUV detailed for a road trip. Every inch was cleaned perfectly. Two kids and a dog had destroyed that interior — now it's immaculate. Highly recommend!",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Customer Reviews
          </p>
          <h2 className="section-heading">What Our Clients Say</h2>
          <div className="flex items-center justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#C9A84C] text-xl">★</span>
            ))}
            <span className="text-gray-400 text-sm ml-2">5.0 average rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="card-dark flex flex-col gap-4 transition-all duration-300 hover:border-[#C9A84C]/30"
            >
              <div className="flex gap-0.5">
                {[...Array(r.rating)].map((_, i) => (
                  <span key={i} className="text-[#C9A84C]">★</span>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic">"{r.text}"</p>
              <div className="mt-auto pt-4 border-t border-[#2a2a2a] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] font-bold text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{r.name}</p>
                  <p className="text-gray-500 text-xs">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
