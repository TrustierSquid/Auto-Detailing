const plans = [
  {
    name: 'Basic Exterior',
    price: '$75',
    duration: '~1 hr',
    description: 'A thorough exterior refresh to keep your paint protected and looking clean.',
    items: [
      'Hand wash & dry',
      'Tire & rim cleaning',
      'Tire dressing',
      'Window cleaning (exterior)',
      'Quick spray wax',
    ],
    cta: 'Book Now',
  },
  {
    name: 'Interior Detail',
    price: '$120',
    duration: '~2 hrs',
    description: 'Complete interior restoration — carpets, seats, surfaces, and more.',
    items: [
      'Full vacuum',
      'Carpet shampoo & extraction',
      'Seat cleaning (fabric or leather)',
      'Leather conditioning',
      'Plastic UV protectant',
      'Window cleaning (interior)',
      'Odor neutralizer',
    ],
    cta: 'Book Now',
  },
  {
    name: 'Full Detail',
    price: '$175',
    duration: '~3–4 hrs',
    description: 'Our most complete package. Inside and out, top to bottom — showroom ready.',
    items: [
      'Everything in Exterior',
      'Everything in Interior',
      'Clay bar decontamination',
      'Hand wax & paint sealant',
      'Door jamb cleaning',
      'Engine bay wipe-down',
    ],
    featured: true,
    cta: 'Book Now',
  },
  {
    name: 'Paint Correction',
    price: 'From $300',
    duration: '4–8 hrs',
    description: 'Machine polish to eliminate swirls, scratches, and dull oxidation.',
    items: [
      'Full exterior prep wash',
      'Clay bar treatment',
      'Single or multi-stage polish',
      'Swirl & scratch reduction',
      'Paint sealant finish coat',
    ],
    cta: 'Get a Quote',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Transparent Pricing
          </p>
          <h2 className="section-heading">Service Packages</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            No hidden fees. Pricing may vary slightly based on vehicle size and condition —
            contact us for an exact quote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative card-dark flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 ${
                p.featured
                  ? 'border-[#C9A84C]/70 ring-1 ring-[#C9A84C]/20'
                  : 'hover:border-[#C9A84C]/30'
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#C9A84C] text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                    Best Value
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-white">{p.name}</h3>
                <p className="text-gray-500 text-xs mt-1">{p.duration}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-[#C9A84C]">{p.price}</span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed border-b border-[#2a2a2a] pb-4">
                {p.description}
              </p>

              <ul className="flex flex-col gap-2 flex-1">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-[#C9A84C] mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-4 text-center text-sm font-semibold py-3 rounded transition-all duration-200 ${
                  p.featured
                    ? 'gold-btn'
                    : 'outline-btn'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          * SUVs, trucks, and vans may incur an additional charge. Ceramic coating quoted separately.
        </p>
      </div>
    </section>
  )
}
