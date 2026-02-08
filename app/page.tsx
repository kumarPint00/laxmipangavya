"use client";

import Link from "next/link";
import { useState } from "react";
import { testimonials } from "./data/testimonials";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-amber-50/95 backdrop-blur-sm shadow-md border-b-4 border-amber-900">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🌿</div>
            <div>
              <h1 className="text-2xl font-bold text-amber-900">Lakshmi Panchagavya</h1>
              <p className="text-sm text-amber-700">Ayurvedic Clinic</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-amber-900 font-semibold">
            <li><Link href="/" className="text-amber-600 transition-colors">Home</Link></li>

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
                ✨ Hyderabad's Trusted Ayurvedic Clinic - 4.8★ Rating
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
                Expert Naadi Diagnosis & Ayurvedic Healing
              </h2>
              <p className="text-xl text-amber-800 leading-relaxed">
                Experience authentic Ayurvedic treatment with Dr. Lakshmi (MD), specialist in Pulse (Naadi) Diagnosis. Located in Kukatpally, Hyderabad - offering traditional Panchagavya remedies and personalized treatments for holistic wellness.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/contact#appointment" className="bg-green-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-all transform hover:scale-105 shadow-lg">
                  Book Appointment
                </Link>
                <Link href="/about" className="border-2 border-amber-900 text-amber-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-100 transition-all transform hover:scale-105">
                  About Clinic
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-900">184+</div>
                  <div className="text-sm text-amber-700">Google Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-900">4.8★</div>
                  <div className="text-sm text-amber-700">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-900">Expert</div>
                  <div className="text-sm text-amber-700">Naadi Diagnosis</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="rounded-2xl h-96 lg:h-[500px] overflow-hidden shadow-2xl">
                <img src="/product.jpeg" alt="Panchagavya remedies - Lakshmi Panchagavya" className="w-full h-full object-cover transform rotate-3 hover:rotate-0 transition-transform duration-500" />
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

      {/* Key Features from Flyer - 100% Natural Treatment */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">🌿 "An Elixir of Life"</h3>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-6">
              A Vedic Treatment practice and a Divine Solution to cure diseases through the by-products from our great Indian Humped Cow
            </p>
            <div className="inline-block bg-white text-green-900 px-8 py-4 rounded-2xl font-bold text-2xl shadow-2xl">
              OUR MEDICINES ARE 100% NATURAL
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center border-2 border-white/20">
              <div className="text-5xl mb-3">⭐</div>
              <h4 className="text-2xl font-bold mb-2">NO TEST</h4>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center border-2 border-white/20">
              <div className="text-5xl mb-3">⭐</div>
              <h4 className="text-2xl font-bold mb-2">NO SURGERY</h4>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center border-2 border-white/20">
              <div className="text-5xl mb-3">⭐</div>
              <h4 className="text-2xl font-bold mb-2">NO OPERATION</h4>
            </div>
          </div>

          {/* Naadi Parikshan */}
          <div className="bg-amber-50 text-amber-900 p-8 rounded-2xl shadow-xl">
            <div className="text-center">
              <h4 className="text-3xl font-bold mb-4">🫱 Naadi Parikshan (Pulse Diagnosis)</h4>
              <p className="text-lg max-w-3xl mx-auto">
                A holistic analysis of your health status by checking your pulse. Determines Vata, Pitta, Kapha balance to provide personalized treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-red-100 text-red-900 px-6 py-3 rounded-full text-lg font-bold mb-6">
              Permanent Solution / Remedy for:
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Conditions We Treat</h3>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Natural, effective treatments for a wide range of health conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Menstrual Problems", icon: "🌸" },
              { name: "Iron Deficiency", icon: "💊" },
              { name: "Acidity", icon: "🔥" },
              { name: "Gastric Problems", icon: "🫃" },
              { name: "Indigestion", icon: "🍽️" },
              { name: "Hair Fall / Bald Head", icon: "💇" },
              { name: "Arthritis / Joint Pains", icon: "🦴" },
              { name: "Depression", icon: "🧠" },
              { name: "Thyroid, Sinus / Asthma", icon: "🫁" },
              { name: "Paralysis", icon: "♿" },
              { name: "Sexual Issues", icon: "❤️" },
              { name: "Infertility", icon: "👶" },
              { name: "Nervous Disorders", icon: "⚡" },
              { name: "Diabetes", icon: "🩸" },
              { name: "Blood Pressure", icon: "💓" },
              { name: "Obesity", icon: "⚖️" },
              { name: "PCOD", icon: "🌺" },
              { name: "Skin Allergy / Fairness", icon: "✨" },
              { name: "Pigmentation", icon: "🎨" },
              { name: "Piles", icon: "💢" },
              { name: "Kidney Stones / Infection", icon: "🫘" },
              { name: "Rheumatoid Arthritis (RA)", icon: "🦵" },
              { name: "Joint Pain", icon: "🤕" }
            ].map((condition, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all"
              >
                <div className="text-3xl">{condition.icon}</div>
                <div className="font-semibold text-amber-900">{condition.name}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-amber-900 to-orange-900 text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-xl">
              🌿 EAT NATURAL - LIVE HEALTHY 🌿
            </div>
            <p className="mt-6 text-lg text-amber-800 max-w-2xl mx-auto">
              All kinds of diseases are treated here with our remedies. No surgery or reports needed.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials (homepage excerpts) */}
      <section className="py-16 px-6 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold text-amber-900 mb-2">What Our Customers Say — 3 of them</h3>
            <p className="text-lg text-amber-700">Short excerpts from our recent patients (includes review #5)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[testimonials[0], testimonials[1], testimonials[4]].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-amber-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">{t.avatar}</div>
                  <div>
                    <div className="font-bold text-amber-900">{t.name}</div>
                    <div className="text-sm text-amber-700">{t.location}</div>
                  </div>
                </div>
                <p className="text-amber-800 italic">{"" + (t.text.length > 140 ? t.text.slice(0, 137) + '...' : t.text)}</p>
                <div className="mt-4 text-sm text-amber-600">— {t.date}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link href="/testimonials" className="inline-block bg-amber-900 text-white px-6 py-3 rounded-lg shadow-lg">Read All Testimonials</Link>
          </div>
        </div>
      </section>

      {/* Remedies section removed as requested */}

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 bg-white">"
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
                text: "Excellent remedies! The therapeutic oils have helped me manage my joint pain naturally.",
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
                Every remedy is crafted with devotion, following traditional methods passed down through generations. We source only the finest organic ingredients and ensure rigorous quality testing.
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
                  <div className="text-amber-200 text-sm">Certified Remedies</div>
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
      {/* Call to Action - Book Appointment */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-6xl mb-6">📅</div>
          <h2 className="text-5xl font-bold mb-6">Ready to Start Your Healing Journey?</h2>
          <p className="text-2xl mb-8 text-green-100">
            Book your appointment with Dr. Lakshmi for expert Naadi Diagnosis and personalized Ayurvedic treatment
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link
              href="/contact#appointment"
              className="bg-white text-green-900 px-10 py-5 rounded-xl font-bold text-xl hover:bg-green-50 transition-all transform hover:scale-105 shadow-2xl"
            >
              📅 Book Appointment Now
            </Link>
            <a
              href="tel:+918919453812"
              className="bg-green-900 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-green-950 transition-all transform hover:scale-105 shadow-2xl border-2 border-white"
            >
              📞 Customer Care: +91 8919453812
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
              <div className="text-4xl mb-3">🕐</div>
              <div className="font-bold text-lg mb-2">Open All Days</div>
              <div className="text-green-100">11:00 AM - 7:00 PM</div>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
              <div className="text-4xl mb-3">⭐</div>
              <div className="font-bold text-lg mb-2">4.8★ Rating</div>
              <div className="text-green-100">184+ Google Reviews</div>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
              <div className="text-4xl mb-3">🫱</div>
              <div className="font-bold text-lg mb-2">Expert Care</div>
              <div className="text-green-100">Naadi Diagnosis Specialist</div>
            </div>
          </div>
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
                    <p className="text-amber-800">Metro Station Kukatpally, Balaji Nagar Main Rd</p>
                    <p className="text-amber-800">Balaji Nagar, Kukatpally, Hyderabad, Telangana 500072</p>
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
                    <p className="text-amber-800">WhatsApp: +91 9901222925</p>
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
                  <h3 className="text-xl font-bold">Lakshmi Panchagavya</h3>
                  <p className="text-sm text-amber-200">Ayurvedic Clinic</p>
                </div>
              </div>
              <p className="text-amber-200 text-sm">
                Expert Ayurvedic treatments in Hyderabad. Dr. Lakshmi (MD) - Specialist in Pulse (Naadi) Diagnosis. Authentic Panchagavya remedies for holistic wellness.
              </p>
              <p className="text-amber-200 text-sm mt-2">📍 Kukatpally, Hyderabad</p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-amber-200 text-sm">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>

                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Visit Store</h4>
              <p className="text-amber-200 text-sm">Organic Panchagavya remedies are available at our clinic store. Visit us or contact for orders.</p>
              <Link href="/contact" className="text-amber-200 underline mt-2 block">Contact & Orders</Link>
            </div>
            
            {/* Social */}
            <div>
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4 mb-4">
                <a href="https://www.facebook.com/profile.php?id=61586780679749" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-amber-800 p-3 rounded-lg hover:bg-amber-700 transition text-2xl">📘</a>
                <a href="https://www.instagram.com/lakshmi_panchagavya?utm_source=qr&igsh=ZzFreGVuajhwb3p6" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-amber-800 p-3 rounded-lg hover:bg-amber-700 transition text-2xl">📷</a>
                <a href="#" className="bg-amber-800 p-3 rounded-lg hover:bg-amber-700 transition text-2xl">🐦</a>
                <a href="#" className="bg-amber-800 p-3 rounded-lg hover:bg-amber-700 transition text-2xl">💬</a>
              </div>
              <p className="text-amber-200 text-sm">
                Stay connected for wellness tips and exclusive offers
              </p>
            </div>
          </div>
          
          <div className="border-t border-amber-700 pt-8 text-center">
            <p className="text-amber-100 mb-2">© 2026 Lakshmi Panchagavya Ayurvedic Clinic. All rights reserved.</p>
            <p className="text-amber-200 text-sm">Dr. Lakshmi (MD) - Specialist in Pulse (Naadi) Diagnosis 🌿</p>
            <p className="text-amber-200 text-sm">📞 +91 8919453812 | 📍 Kukatpally, Hyderabad</p>
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
        className="fixed bottom-8 left-8 bg-amber-900 text-white p-4 rounded-full shadow-2xl hover:bg-amber-800 transition-all transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919901222925?text=Hello%20Dr.%20Lakshmi,%20I%20would%20like%20to%20book%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 group relative"
          aria-label="WhatsApp"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chat on WhatsApp
          </span>
        </a>

        {/* Phone Button */}
        <a
          href="tel:+918919453812"
          className="bg-amber-900 text-white p-4 rounded-full shadow-2xl hover:bg-amber-800 transition-all transform hover:scale-110 group relative"
          aria-label="Call Us"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Call Now
          </span>
        </a>
        {/* Book Appointment Button - NEW */}
        <Link
          href="/contact#appointment"
          className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-full shadow-2xl hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-110 group relative animate-pulse"
          aria-label="Book Appointment"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
          </svg>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            📅 Book Appointment
          </span>
        </Link>
        {/* Email Button */}
        <a
          href="mailto:clinic@laxmipanchagavya.com"
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all transform hover:scale-110 group relative"
          aria-label="Email Us"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Email Us
          </span>
        </a>
      </div>
    </>
  );
}
