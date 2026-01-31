"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-amber-50/95 backdrop-blur-sm shadow-md border-b-4 border-amber-900">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🌿</div>
            <div>
              <h1 className="text-2xl font-bold text-amber-900">Laxmi Panchgavya</h1>
              <p className="text-sm text-amber-700">Ayurvedic</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-amber-900 font-semibold">
            <li><Link href="/" className="text-amber-600 transition-colors">Home</Link></li>
            <li><Link href="/products" className="hover:text-amber-600 transition-colors">Products</Link></li>
            <li><Link href="#benefits" className="hover:text-amber-600 transition-colors">Benefits</Link></li>
            <li><Link href="/testimonials" className="hover:text-amber-600 transition-colors">Testimonials</Link></li>
            <li><Link href="/about" className="hover:text-amber-600 transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-amber-600 transition-colors">Contact</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-amber-900 p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-amber-50 border-t border-amber-200 px-6 py-4">
            <ul className="space-y-3 text-amber-900 font-semibold">
              <li><Link href="/" onClick={() => setMobileMenuOpen(false)} className="block hover:text-amber-600">Home</Link></li>
              <li><Link href="/products" onClick={() => setMobileMenuOpen(false)} className="block hover:text-amber-600">Products</Link></li>
              <li><a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="block hover:text-amber-600">Benefits</a></li>
              <li><Link href="/testimonials" onClick={() => setMobileMenuOpen(false)} className="block hover:text-amber-600">Testimonials</Link></li>
              <li><Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-amber-600">About</Link></li>
              <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block hover:text-amber-600">Contact</Link></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-amber-50 via-amber-100 to-orange-50 py-24 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-8xl">🌿</div>
          <div className="absolute bottom-20 right-10 text-8xl">🌾</div>
          <div className="absolute top-1/2 left-1/4 text-6xl">🍃</div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-amber-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                ✨ 100% Natural & Organic
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
                Ancient Wisdom for Modern Wellness
              </h2>
              <p className="text-xl text-amber-800 leading-relaxed">
                Experience the healing power of traditional Ayurveda with our premium Panchgavya products. Crafted with ancient wisdom and certified quality for your holistic health.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/products" className="bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all transform hover:scale-105 shadow-lg">
                  Explore Products
                </Link>
                <Link href="/about" className="border-2 border-amber-900 text-amber-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-100 transition-all transform hover:scale-105">
                  Our Story
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-900">10K+</div>
                  <div className="text-sm text-amber-700">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-900">50+</div>
                  <div className="text-sm text-amber-700">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-900">15+</div>
                  <div className="text-sm text-amber-700">Years Legacy</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl h-96 lg:h-[500px] flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-9xl">🧘‍♀️</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">⭐</div>
                  <div>
                    <div className="font-bold text-amber-900">4.9/5 Rating</div>
                    <div className="text-sm text-amber-700">From 2000+ Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-100 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Products
            </div>
            <h3 className="text-5xl font-bold text-amber-900 mb-4">Premium Ayurvedic Collection</h3>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Discover our range of authentic Panchgavya products, each crafted with care and certified for quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Panchgavya Ghee",
                desc: "Pure cow ghee enriched with medicinal herbs for immunity and digestion",
                icon: "🧈",
                price: "₹499",
                features: ["100% Pure", "A2 Milk", "Organic"]
              },
              {
                name: "Herbal Supplements",
                desc: "Natural immunity boosters and wellness tonics from ancient Ayurvedic recipes",
                icon: "💊",
                price: "₹299",
                features: ["Lab Tested", "No Chemicals", "Vegan"]
              },
              {
                name: "Therapeutic Oils",
                desc: "Therapeutic oils for pain relief, rejuvenation and stress management",
                icon: "🧴",
                price: "₹399",
                features: ["Cold Pressed", "Aromatherapy", "Organic"]
              },
              {
                name: "Ayurvedic Soaps",
                desc: "Handmade natural soaps with herbal extracts for glowing skin",
                icon: "🧼",
                price: "₹149",
                features: ["Handmade", "Chemical Free", "All Skin Types"]
              },
              {
                name: "Wellness Tea",
                desc: "Herbal tea blends for detox, immunity and peaceful sleep",
                icon: "🍵",
                price: "₹249",
                features: ["Organic", "Caffeine Free", "Antioxidants"]
              },
              {
                name: "Skincare Range",
                desc: "Natural face packs, creams and serums from pure herbs",
                icon: "✨",
                price: "₹599",
                features: ["Natural", "Anti-Aging", "Tested"]
              }
            ].map((product, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border-2 border-amber-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProduct(idx)}
              >
                <div className="text-6xl mb-4">{product.icon}</div>
                <h4 className="text-2xl font-bold text-amber-900 mb-3">{product.name}</h4>
                <p className="text-amber-800 mb-4 min-h-[60px]">{product.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, i) => (
                    <span key={i} className="bg-white text-amber-900 text-xs px-3 py-1 rounded-full border border-amber-200">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-amber-200">
                  <div className="text-2xl font-bold text-amber-900">{product.price}</div>
                  <Link 
                    href="/contact" 
                    className="bg-amber-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-all transform hover:scale-105"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-amber-900 mb-4">Why Ayurveda?</h3>
            <p className="text-xl text-amber-700">Experience holistic wellness the natural way</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🌱", title: "100% Natural", desc: "No synthetic chemicals or preservatives" },
              { icon: "🔬", title: "Lab Tested", desc: "Quality certified and scientifically validated" },
              { icon: "🏛️", title: "Ancient Wisdom", desc: "5000+ years of proven Ayurvedic knowledge" },
              { icon: "🌍", title: "Eco-Friendly", desc: "Sustainable and environmentally conscious" },
              { icon: "💚", title: "No Side Effects", desc: "Safe for long-term use and all ages" },
              { icon: "🎯", title: "Targeted Solutions", desc: "Specific remedies for specific conditions" },
              { icon: "👨‍⚕️", title: "Expert Approved", desc: "Recommended by Ayurvedic practitioners" },
              { icon: "⚡", title: "Fast Results", desc: "Visible improvements within weeks" }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h4 className="text-lg font-bold text-amber-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-amber-700">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-100 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Testimonials
            </div>
            <h3 className="text-5xl font-bold text-amber-900 mb-4">What Our Customers Say</h3>
            <p className="text-xl text-amber-700">Real experiences from real people</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                location: "Mumbai",
                rating: 5,
                text: "The Panchgavya Ghee has been a game-changer for my family's health. Pure quality and authentic taste!",
                avatar: "👩"
              },
              {
                name: "Rajesh Kumar",
                location: "Delhi",
                rating: 5,
                text: "I've been using their herbal supplements for 6 months. My immunity has improved significantly!",
                avatar: "👨"
              },
              {
                name: "Anita Desai",
                location: "Bangalore",
                rating: 5,
                text: "Excellent products! The therapeutic oils have helped me manage my joint pain naturally.",
                avatar: "👵"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-amber-800 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-amber-900">{testimonial.name}</div>
                    <div className="text-sm text-amber-700">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
                Our Story
              </div>
              <h3 className="text-5xl font-bold mb-6">The Laxmi Panchgavya Legacy</h3>
              <p className="text-lg text-amber-100 leading-relaxed">
                For over 15 years, we've been dedicated to bringing authentic Ayurvedic healing to families across India. Our journey began with a simple mission: to preserve ancient wisdom and make it accessible to modern lives.
              </p>
              <p className="text-lg text-amber-100 leading-relaxed">
                Every product is crafted with devotion, following traditional methods passed down through generations. We source only the finest organic ingredients and ensure rigorous quality testing.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-amber-800 p-6 rounded-xl">
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-amber-200 text-sm">Years of Excellence</div>
                </div>
                <div className="bg-amber-800 p-6 rounded-xl">
                  <div className="text-3xl mb-2">✅</div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-amber-200 text-sm">Certified Products</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: "🌿", title: "Traditional Methods", desc: "Following age-old Ayurvedic practices" },
                { icon: "🔬", title: "Modern Testing", desc: "Advanced quality control & certification" },
                { icon: "🌾", title: "Organic Sourcing", desc: "Partnering with certified organic farms" },
                { icon: "💚", title: "Sustainable", desc: "Eco-friendly packaging and processes" },
                { icon: "👥", title: "Expert Team", desc: "Ayurvedic doctors and herbalists" },
                { icon: "🎯", title: "Customer First", desc: "Your wellness is our priority" }
              ].map((item, idx) => (
                <div key={idx} className="bg-amber-800/50 backdrop-blur p-6 rounded-xl flex gap-4 items-start hover:bg-amber-800 transition-colors">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-amber-200 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-amber-900 mb-4">Join Our Wellness Community</h3>
          <p className="text-xl text-amber-800 mb-8">
            Subscribe to receive exclusive offers, Ayurvedic tips, and wellness guides
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg border-2 border-amber-300 focus:outline-none focus:border-amber-600 text-amber-900"
            />
            <button className="bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all transform hover:scale-105 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
          <p className="text-sm text-amber-700 mt-4">🔒 We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-100 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Get In Touch
            </div>
            <h3 className="text-5xl font-bold text-amber-900 mb-4">Contact Us</h3>
            <p className="text-xl text-amber-700">We're here to help you on your wellness journey</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border-2 border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h4 className="font-bold text-xl text-amber-900 mb-2">Visit Our Store</h4>
                    <p className="text-amber-800">123 Wellness Street, Ayurveda Plaza</p>
                    <p className="text-amber-800">Your City, State - 123456</p>
                    <p className="text-amber-800 mt-2">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border-2 border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📞</div>
                  <div>
                    <h4 className="font-bold text-xl text-amber-900 mb-2">Call Us</h4>
                    <p className="text-amber-800">Customer Care: +91 98765 43210</p>
                    <p className="text-amber-800">WhatsApp: +91 98765 43211</p>
                    <p className="text-amber-800 mt-2">Available 24/7 for emergencies</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border-2 border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📧</div>
                  <div>
                    <h4 className="font-bold text-xl text-amber-900 mb-2">Email Us</h4>
                    <p className="text-amber-800">General: info@laxmipanchgavya.com</p>
                    <p className="text-amber-800">Support: support@laxmipanchgavya.com</p>
                    <p className="text-amber-800 mt-2">We respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border-2 border-amber-200">
              <h4 className="text-2xl font-bold text-amber-900 mb-6">Send us a Message</h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-amber-900 font-semibold mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:outline-none focus:border-amber-600"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-amber-900 font-semibold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:outline-none focus:border-amber-600"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-amber-900 font-semibold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:outline-none focus:border-amber-600"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-amber-900 font-semibold mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:outline-none focus:border-amber-600"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-900 to-orange-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">🌿</div>
                <div>
                  <h3 className="text-xl font-bold">Laxmi Panchgavya</h3>
                  <p className="text-sm text-amber-200">Ayurvedic</p>
                </div>
              </div>
              <p className="text-amber-200 text-sm">
                Authentic Ayurvedic products for holistic wellness. Bringing ancient wisdom to modern lives.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-amber-200 text-sm">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            
            {/* Products */}
            <div>
              <h4 className="font-bold text-lg mb-4">Our Products</h4>
              <ul className="space-y-2 text-amber-200 text-sm">
                <li><Link href="/products" className="hover:text-white transition">Panchgavya Ghee</Link></li>
                <li><Link href="/products" className="hover:text-white transition">Herbal Supplements</Link></li>
                <li><Link href="/products" className="hover:text-white transition">Therapeutic Oils</Link></li>
                <li><Link href="/products" className="hover:text-white transition">Wellness Products</Link></li>
              </ul>
            </div>
            
            {/* Social */}
            <div>
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4 mb-4">
                <a href="#" className="bg-amber-800 p-3 rounded-lg hover:bg-amber-700 transition text-2xl">📘</a>
                <a href="#" className="bg-amber-800 p-3 rounded-lg hover:bg-amber-700 transition text-2xl">📷</a>
                <a href="#" className="bg-amber-800 p-3 rounded-lg hover:bg-amber-700 transition text-2xl">🐦</a>
                <a href="#" className="bg-amber-800 p-3 rounded-lg hover:bg-amber-700 transition text-2xl">💬</a>
              </div>
              <p className="text-amber-200 text-sm">
                Stay connected for wellness tips and exclusive offers
              </p>
            </div>
          </div>
          
          <div className="border-t border-amber-700 pt-8 text-center">
            <p className="text-amber-100 mb-2">© 2026 Laxmi Panchgavya Ayurvedic. All rights reserved.</p>
            <p className="text-amber-200 text-sm">Dedicated to your wellness, naturally. 🌿</p>
            <div className="flex justify-center gap-6 mt-4 text-sm text-amber-200">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition">Shipping Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-amber-900 text-white p-4 rounded-full shadow-2xl hover:bg-amber-800 transition-all transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
}
