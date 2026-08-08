import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SwiftHaul Logistics | Premium Transportation Solutions",
  description: "SwiftHaul Logistics delivers reliable freight, cargo, and supply chain solutions across the nation. Fast, secure, and trusted transportation services for businesses of all sizes.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-2xl font-extrabold tracking-tight text-white">
            Swift<span className="text-orange-500">Haul</span>
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#fleet" className="hover:text-white transition">Fleet</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <div className="flex gap-3 items-center">
            <a href="/api/auth/signin" className="text-gray-300 hover:text-white text-sm font-medium transition">
              Sign In
            </a>
            <a href="#quote" className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition">
              Get a Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-orange-500 font-semibold tracking-widest text-sm mb-4 uppercase">
            Reliable Logistics, Delivered
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Moving Your Business<br />
            <span className="text-orange-500">Forward.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            End-to-end transportation and logistics solutions for enterprises that demand speed, safety, and reliability.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#quote" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition shadow-lg shadow-orange-500/25">
              Request a Quote
            </a>
            <a href="#services" className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-lg transition">
              Our Services
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "2.4M+", label: "Miles Delivered" },
            { value: "50,000+", label: "Shipments Annually" },
            { value: "1,200+", label: "Enterprise Clients" },
            { value: "99.7%", label: "On-Time Delivery" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-extrabold text-white mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-orange-500 font-semibold tracking-widest text-xs uppercase mb-3 text-center">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16">
            Comprehensive Logistics Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80",
                title: "Freight & Cargo",
                desc: "Full truckload, LTL, and intermodal freight services with real-time tracking and 24/7 support.",
              },
              {
                img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
                title: "Warehousing",
                desc: "Climate-controlled storage, cross-docking, and inventory management at strategic locations nationwide.",
              },
              {
                img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
                title: "Last-Mile Delivery",
                desc: "Same-day and next-day delivery with route optimization for urban and rural destinations.",
              },
            ].map((service) => (
              <div key={service.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 hover:border-orange-500/50 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <div
                    className="h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${service.img}')` }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-orange-500 font-semibold tracking-widest text-xs uppercase mb-3 text-center">Our Fleet</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16">
            Modern Fleet, Maximum Efficiency
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Semi-Trucks", img: "https://images.unsplash.com/photo-1586191582151-3e4cc7a7c370?w=600&q=80", count: "350+" },
              { name: "Box Trucks", img: "https://images.unsplash.com/photo-1599204606395-f5ce4c2b53b8?w=600&q=80", count: "200+" },
              { name: "Refrigerated", img: "https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?w=600&q=80", count: "120+" },
              { name: "Vans", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80", count: "500+" },
            ].map((vehicle) => (
              <div key={vehicle.name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
                <div className="h-40 overflow-hidden">
                  <div
                    className="h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${vehicle.img}')` }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-white font-bold">{vehicle.name}</h4>
                  <p className="text-orange-500 text-sm font-semibold">{vehicle.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Us */}
      <section id="about" className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-orange-500 font-semibold tracking-widest text-xs uppercase mb-3">Why SwiftHaul</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Driven by Technology,<br />
              Powered by People
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              With 15+ years of experience, SwiftHaul combines cutting-edge logistics technology with a dedicated team of professionals. Our AI-powered route optimization, real-time GPS tracking, and 24/7 command center ensure your cargo arrives on time, every time.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Real-Time Tracking", desc: "GPS-enabled fleet monitoring" },
                { title: "AI Route Planning", desc: "Optimal paths, lower costs" },
                { title: "24/7 Support", desc: "Dedicated logistics coordinators" },
                { title: "Insured Cargo", desc: "Full-value protection guarantee" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-orange-500 mt-1 shrink-0">◆</span>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div
              className="aspect-[4/5] rounded-2xl bg-cover bg-center shadow-2xl shadow-orange-500/10"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80')`,
              }}
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 rounded-2xl p-6 shadow-xl">
              <p className="text-3xl font-extrabold text-white">15+</p>
              <p className="text-white/80 text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="quote" className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Ship Smarter?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get a custom quote in under 24 hours. Tell us what you need, and we&apos;ll handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 flex-1"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-extrabold tracking-tight text-white">
              Swift<span className="text-orange-500">Haul</span>
            </span>
            <p className="text-gray-500 text-sm mt-4">
              Premium transportation and logistics solutions for the modern enterprise.
            </p>
          </div>
          {[
            {
              title: "Services",
              links: ["Freight", "Warehousing", "Last-Mile", "Cold Chain", "Cross-Border"],
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Press", "Sustainability", "Partners"],
            },
            {
              title: "Contact",
              links: ["(555) 123-4567", "hello@swifthaul.com", "125 Logistics Blvd", "Chicago, IL 60601"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <p className="text-gray-400 text-sm hover:text-white transition cursor-pointer">{link}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>© 2024 SwiftHaul Logistics. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white transition cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
