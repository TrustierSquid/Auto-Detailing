import { useState } from 'react'

const services = [
  'Basic Exterior Wash',
  'Interior Detail',
  'Full Detail Package',
  'Paint Correction',
  'Ceramic Coating',
  'Maintenance Plan',
  'Other / Not Sure',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    vehicle: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thanks! We\'ll be in touch shortly to confirm your booking.')
  }

  return (
    <section id="contact" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="section-heading">
              Book Your Detail
              <br />
              <span className="text-[#C9A84C]">Today</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Ready to transform your vehicle? Fill out the form and we'll reach out within a few hours
              to confirm your appointment. Or give us a call — we're happy to help.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] text-xl shrink-0">
                  📞
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Phone</p>
                  <a href="tel:+10000000000" className="text-white font-semibold hover:text-[#C9A84C] transition-colors">
                    [PHONE NUMBER]
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] text-xl shrink-0">
                  📧
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:hello@example.com" className="text-white font-semibold hover:text-[#C9A84C] transition-colors">
                    [EMAIL ADDRESS]
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] text-xl shrink-0">
                  📍
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Service Area</p>
                  <p className="text-white font-semibold">[YOUR SERVICE AREA]</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] text-xl shrink-0">
                  🕐
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Hours</p>
                  <p className="text-white font-semibold">Mon – Sat: 8am – 6pm</p>
                  <p className="text-gray-400 text-sm">Sunday: By appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="card-dark flex flex-col gap-5"
          >
            <h3 className="text-white font-bold text-xl">Request a Booking</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-xs mb-1.5 uppercase tracking-wider">Full Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-xs mb-1.5 uppercase tracking-wider">Phone *</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="(555) 000-0000"
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-xs mb-1.5 uppercase tracking-wider">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="you@email.com"
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-xs mb-1.5 uppercase tracking-wider">Vehicle (Year, Make, Model)</label>
              <input
                name="vehicle"
                value={form.vehicle}
                onChange={handleChange}
                placeholder="e.g. 2020 Toyota Camry"
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-xs mb-1.5 uppercase tracking-wider">Service Interested In *</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C9A84C]/60 transition-colors appearance-none"
              >
                <option value="" disabled>Select a service...</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-400 text-xs mb-1.5 uppercase tracking-wider">Additional Notes</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Any specific concerns, preferred dates, or questions..."
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#C9A84C]/60 transition-colors resize-none"
              />
            </div>

            <button type="submit" className="gold-btn text-base py-4 w-full">
              Send Booking Request
            </button>

            <p className="text-gray-500 text-xs text-center">
              We'll respond within a few hours to confirm your appointment.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
