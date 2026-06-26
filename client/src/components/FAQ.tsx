import { useState } from 'react'

const faqs = [
  {
    q: 'Do I need to be home during the detail?',
    a: 'Not necessarily! As long as we have access to your vehicle and a water source nearby (if needed), you don\'t have to be present. Just let us know your preferences when you book.',
  },
  {
    q: 'How long does a detail take?',
    a: 'It depends on the service. A basic exterior wash takes about 1 hour, an interior detail takes roughly 2 hours, and a full detail typically takes 3–4 hours. Paint correction can take 4–8 hours depending on the severity.',
  },
  {
    q: 'What do I need to provide?',
    a: 'Nothing! We bring all of our own professional equipment, products, and water. We just need access to your vehicle and enough space to work around it.',
  },
  {
    q: 'How often should I get my car detailed?',
    a: 'For most daily drivers, a full interior and exterior detail every 3–6 months is ideal, with light exterior washes in between. Our monthly or bi-monthly maintenance plans are a great way to keep your car consistently clean.',
  },
  {
    q: 'Can you remove pet hair from my car?',
    a: 'Yes! Pet hair removal is included in our interior detail package. We use specialized tools to extract embedded fur from carpet and upholstery.',
  },
  {
    q: 'Is ceramic coating worth it?',
    a: 'Absolutely, especially if you want long-term paint protection. Ceramic coating bonds to your paint at a molecular level, providing years of hydrophobic protection, UV resistance, and enhanced gloss — far beyond what wax can offer.',
  },
  {
    q: 'Do you service my area?',
    a: 'We cover a wide service area. Contact us with your zip code or address and we\'ll confirm availability. We\'re continuously expanding our coverage, so don\'t hesitate to ask!',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, all major credit and debit cards, Venmo, Zelle, and Apple Pay. Payment is collected upon completion of the service.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Got Questions?
          </p>
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`card-dark transition-all duration-200 cursor-pointer ${
                open === i ? 'border-[#C9A84C]/50' : 'hover:border-[#2a2a2a]'
              }`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-white font-semibold text-sm md:text-base">{item.q}</h4>
                <span
                  className={`text-[#C9A84C] text-xl shrink-0 transition-transform duration-200 ${
                    open === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </div>
              {open === i && (
                <p className="text-gray-400 text-sm leading-relaxed mt-4 pt-4 border-t border-[#2a2a2a]">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
