const services = [
  {
    icon: '🚿',
    title: 'Exterior Wash & Shine',
    description:
      'Hand wash, clay bar decontamination, tire dressing, window cleaning, and a protective wax coat to make your paint pop.',
    features: ['Hand wash & dry', 'Clay bar treatment', 'Tire & trim dressing', 'Window cleaning', 'Hand wax application'],
  },
  {
    icon: '🪑',
    title: 'Interior Detailing',
    description:
      'Deep vacuuming, shampoo extraction, leather conditioning, UV protectant on all plastics, and odor elimination.',
    features: ['Deep vacuum', 'Carpet shampoo & extraction', 'Leather cleaning & conditioning', 'Plastic UV protectant', 'Odor elimination'],
  },
  {
    icon: '✨',
    title: 'Full Detail Package',
    description:
      'The complete inside-out treatment. Everything from our exterior and interior services combined into one premium package.',
    features: ['Complete exterior service', 'Complete interior service', 'Engine bay cleaning', 'Convertible top treatment', 'Multi-point inspection'],
    featured: true,
  },
  {
    icon: '🎨',
    title: 'Paint Correction',
    description:
      'Machine polishing to remove swirl marks, light scratches, water spots, and oxidation — restoring depth and clarity to your paint.',
    features: ['Swirl mark removal', 'Scratch reduction', 'Water spot removal', 'Paint oxidation correction', 'High-gloss finish'],
  },
  {
    icon: '🛡️',
    title: 'Ceramic Coating',
    description:
      'Long-lasting nano-ceramic protection that bonds to your paint for years of hydrophobic shine and defense against contaminants.',
    features: ['Multi-year protection', 'Hydrophobic surface', 'UV damage resistance', 'Enhanced gloss', 'Easier maintenance'],
  },
  {
    icon: '🗓️',
    title: 'Maintenance Plans',
    description:
      'Keep your vehicle looking its best year-round with our scheduled monthly or bi-monthly wash and maintenance service.',
    features: ['Monthly or bi-monthly visits', 'Consistent results', 'Priority scheduling', 'Discounted rates', 'Flexible packages'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="section-heading">Our Services</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From a quick maintenance wash to a full paint correction, every service is performed with
            professional-grade products and meticulous attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`card-dark flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A84C]/40 ${
                s.featured ? 'border-[#C9A84C]/60 ring-1 ring-[#C9A84C]/20' : ''
              }`}
            >
              {s.featured && (
                <span className="self-start bg-[#C9A84C] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <div className="text-4xl">{s.icon}</div>
              <h3 className="text-xl font-bold text-white">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
              <ul className="mt-2 flex flex-col gap-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-[#C9A84C]">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-auto gold-btn text-sm text-center">
                Book This Service
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
