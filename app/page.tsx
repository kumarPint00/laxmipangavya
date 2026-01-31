import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-amber-50 shadow-md border-b-4 border-amber-900">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🌿</div>
            <div>
              <h1 className="text-2xl font-bold text-amber-900">Laxmi Panchgavya</h1>
              <p className="text-sm text-amber-700">Ayurvedic</p>
            </div>
          </div>
          <ul className="hidden md:flex gap-8 text-amber-900 font-semibold">
            <li><a href="#products" className="hover:text-amber-600 transition">Products</a></li>
            <li><a href="#about" className="hover:text-amber-600 transition">About</a></li>
            <li><a href="#contact" className="hover:text-amber-600 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-amber-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-amber-900 mb-6">Welcome to Laxmi Panchgavya Ayurvedic</h2>
          <p className="text-xl text-amber-800 mb-8 max-w-2xl mx-auto">
            Experience the healing power of traditional Ayurveda. Our premium quality Panchgavya products are crafted with ancient wisdom and modern standards.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-amber-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition">
              Shop Now
            </button>
            <button className="border-2 border-amber-900 text-amber-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-100 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-amber-900 mb-12 text-center">Our Premium Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Panchgavya Ghee",
                desc: "Pure cow ghee enriched with medicinal herbs",
                icon: "🧈"
              },
              {
                name: "Herbal Supplements",
                desc: "Natural immunity boosters and wellness tonics",
                icon: "💊"
              },
              {
                name: "Oils & Balms",
                desc: "Therapeutic oils for pain relief and rejuvenation",
                icon: "🧴"
              }
            ].map((product, idx) => (
              <div key={idx} className="bg-amber-50 p-8 rounded-lg border-2 border-amber-200 hover:shadow-lg transition">
                <div className="text-5xl mb-4">{product.icon}</div>
                <h4 className="text-2xl font-bold text-amber-900 mb-3">{product.name}</h4>
                <p className="text-amber-800">{product.desc}</p>
                <button className="mt-6 bg-amber-900 text-white px-6 py-2 rounded font-semibold hover:bg-amber-800 transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-amber-900 mb-6">Why Choose Laxmi Panchgavya?</h3>
              <ul className="space-y-4 text-amber-800">
                <li className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <span>100% natural and organic ingredients</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Traditional Ayurvedic formulations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Certified and quality tested</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Trusted by thousands of customers</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 h-64 rounded-lg flex items-center justify-center text-6xl">
              🌾
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-amber-900 mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl mb-4">📍</div>
              <h4 className="font-bold text-amber-900 mb-2">Location</h4>
              <p className="text-amber-800">Your Address Here</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">📞</div>
              <h4 className="font-bold text-amber-900 mb-2">Phone</h4>
              <p className="text-amber-800">+91 XXX XXX XXXX</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">📧</div>
              <h4 className="font-bold text-amber-900 mb-2">Email</h4>
              <p className="text-amber-800">info@laxmipanchgavya.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-amber-100">© 2026 Laxmi Panchgavya Ayurvedic. All rights reserved.</p>
          <p className="text-amber-200 text-sm mt-2">Dedicated to your wellness, naturally.</p>
        </div>
      </footer>
    </>
  );
}
