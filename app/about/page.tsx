import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-amber-50/95 backdrop-blur-sm shadow-md border-b-4 border-amber-900">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="text-3xl">🌿</div>
            <div>
              <h1 className="text-2xl font-bold text-amber-900">Laxmi Panchgavya</h1>
              <p className="text-sm text-amber-700">Ayurvedic</p>
            </div>
          </Link>
          
          <ul className="hidden md:flex gap-8 text-amber-900 font-semibold">
            <li><Link href="/" className="hover:text-amber-600 transition-colors">Home</Link></li>
            <li><Link href="/products" className="hover:text-amber-600 transition-colors">Products</Link></li>
            <li><Link href="/about" className="text-amber-600">About</Link></li>
            <li><Link href="/testimonials" className="hover:text-amber-600 transition-colors">Testimonials</Link></li>
            <li><Link href="/contact" className="hover:text-amber-600 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Story
          </div>
          <h1 className="text-6xl font-bold mb-6">The Laxmi Panchgavya Legacy</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            15+ years of dedication to authentic Ayurvedic healing and holistic wellness
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-10 rounded-2xl border-2 border-amber-200">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Mission</h2>
              <p className="text-amber-800 text-lg leading-relaxed">
                To preserve and propagate the ancient science of Ayurveda by providing authentic, high-quality Panchgavya products that promote holistic health and well-being. We are committed to making traditional Ayurvedic wisdom accessible to modern families.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-10 rounded-2xl border-2 border-amber-200">
              <div className="text-5xl mb-4">🔭</div>
              <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Vision</h2>
              <p className="text-amber-800 text-lg leading-relaxed">
                To become India's most trusted Ayurvedic brand, recognized for excellence in product quality, customer satisfaction, and contribution to sustainable, natural healthcare. We envision a healthier world where ancient wisdom guides modern wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-amber-900">Our Journey</h2>
              <p className="text-lg text-amber-800 leading-relaxed">
                Founded in 2011, Laxmi Panchgavya Ayurvedic began as a small family venture with a big dream: to bring the healing power of authentic Ayurveda to every household. Our founders, drawing from generations of Ayurvedic knowledge, started crafting traditional Panchgavya products using time-honored methods.
              </p>
              <p className="text-lg text-amber-800 leading-relaxed">
                Over the past 15 years, we've grown from a local shop to a trusted name across India, serving over 10,000 satisfied customers. Yet, we've never compromised on our core values: authenticity, purity, and the well-being of our customers.
              </p>
              <p className="text-lg text-amber-800 leading-relaxed">
                Every product we create is a blend of ancient wisdom and modern quality standards, tested rigorously to ensure you receive only the best nature has to offer.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition">
                <div className="text-5xl mb-4">🏆</div>
                <div className="text-3xl font-bold text-amber-900">15+</div>
                <div className="text-amber-700">Years of Excellence</div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition">
                <div className="text-5xl mb-4">👥</div>
                <div className="text-3xl font-bold text-amber-900">10K+</div>
                <div className="text-amber-700">Happy Customers</div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition">
                <div className="text-5xl mb-4">🌿</div>
                <div className="text-3xl font-bold text-amber-900">50+</div>
                <div className="text-amber-700">Premium Products</div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition">
                <div className="text-5xl mb-4">✅</div>
                <div className="text-3xl font-bold text-amber-900">100%</div>
                <div className="text-amber-700">Quality Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-amber-700">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌿",
                title: "Authenticity",
                desc: "We stay true to traditional Ayurvedic formulations and never compromise on authenticity"
              },
              {
                icon: "🔬",
                title: "Quality First",
                desc: "Rigorous testing and quality control ensure every product meets the highest standards"
              },
              {
                icon: "🌾",
                title: "Natural & Organic",
                desc: "100% natural ingredients sourced from certified organic farms across India"
              },
              {
                icon: "💚",
                title: "Customer Care",
                desc: "Your wellness journey is our priority. We're here to support you every step"
              },
              {
                icon: "🌍",
                title: "Sustainability",
                desc: "Eco-friendly practices from sourcing to packaging, protecting our planet"
              },
              {
                icon: "🤝",
                title: "Trust & Transparency",
                desc: "Open about our processes, ingredients, and methods. Nothing hidden"
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border-2 border-amber-200 hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="text-6xl mb-4 text-center">{value.icon}</div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3 text-center">{value.title}</h3>
                <p className="text-amber-800 text-center">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">How We Craft Excellence</h2>
            <p className="text-xl text-amber-100">From farm to your home, every step is carefully managed</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Organic Sourcing", desc: "We partner with certified organic farms for the finest ingredients" },
              { step: "02", title: "Traditional Processing", desc: "Using age-old Ayurvedic methods to preserve medicinal properties" },
              { step: "03", title: "Quality Testing", desc: "Rigorous lab testing and certification for purity and potency" },
              { step: "04", title: "Careful Packaging", desc: "Eco-friendly packaging to maintain freshness and reduce waste" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-amber-700 rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-amber-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-900 mb-4">Meet Our Experts</h2>
            <p className="text-xl text-amber-700">Dedicated professionals committed to your wellness</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Ramesh Kumar", role: "Chief Ayurvedic Consultant", emoji: "👨‍⚕️" },
              { name: "Smt. Lakshmi Devi", role: "Product Development Head", emoji: "👩‍🔬" },
              { name: "Dr. Priya Sharma", role: "Quality Assurance Manager", emoji: "👩‍⚕️" }
            ].map((member, idx) => (
              <div key={idx} className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border-2 border-amber-200 text-center hover:shadow-xl transition-all">
                <div className="text-8xl mb-4">{member.emoji}</div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2">{member.name}</h3>
                <p className="text-amber-700 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Join Our Wellness Journey</h2>
          <p className="text-xl text-amber-800 mb-8">
            Experience the Laxmi Panchgavya difference. Let ancient wisdom guide your path to health.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/products"
              className="bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all transform hover:scale-105"
            >
              Explore Products
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-amber-900 text-amber-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-100 transition-all transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
