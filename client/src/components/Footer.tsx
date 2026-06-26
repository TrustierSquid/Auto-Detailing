const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="text-[#C9A84C] text-xl font-extrabold tracking-wider uppercase mb-4">
              [BUSINESS NAME]
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Professional mobile auto detailing delivered to your door. Showroom quality, total convenience.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-400 text-sm hover:text-[#C9A84C] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="tel:+10000000000" className="hover:text-[#C9A84C] transition-colors">
                📞 [PHONE NUMBER]
              </a>
              <a href="mailto:hello@example.com" className="hover:text-[#C9A84C] transition-colors">
                📧 [EMAIL ADDRESS]
              </a>
              <p>📍 [SERVICE AREA]</p>
              <p>🕐 Mon–Sat: 8am – 6pm</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} [BUSINESS NAME]. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Professional Mobile Auto Detailing
          </p>
        </div>
      </div>
    </footer>
  )
}
