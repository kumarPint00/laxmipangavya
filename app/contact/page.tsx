"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            <li><Link href="/about" className="hover:text-amber-600 transition-colors">About</Link></li>
            <li><Link href="/testimonials" className="hover:text-amber-600 transition-colors">Testimonials</Link></li>
            <li><Link href="/contact" className="text-amber-600">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Get In Touch
          </div>
          <h1 className="text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            We're here to help you on your wellness journey. Reach out to our team of experts.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl border-2 border-amber-200 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4 text-center">📍</div>
              <h3 className="font-bold text-xl text-amber-900 mb-3 text-center">Visit Our Store</h3>
              <div className="text-amber-800 text-center space-y-2">
                <p>123 Wellness Street</p>
                <p>Ayurveda Plaza, Heritage Building</p>
                <p>Your City, State - 123456</p>
                <p className="mt-4 font-semibold">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-sm">Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border-2 border-amber-200 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4 text-center">📞</div>
              <h3 className="font-bold text-xl text-amber-900 mb-3 text-center">Call Us</h3>
              <div className="text-amber-800 text-center space-y-2">
                <p className="font-semibold">Customer Care:</p>
                <p className="text-lg">+91 98765 43210</p>
                <p className="font-semibold mt-3">WhatsApp Support:</p>
                <p className="text-lg">+91 98765 43211</p>
                <p className="mt-4 text-sm">Available 24/7 for emergencies</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border-2 border-amber-200 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4 text-center">📧</div>
              <h3 className="font-bold text-xl text-amber-900 mb-3 text-center">Email Us</h3>
              <div className="text-amber-800 text-center space-y-2">
                <p className="font-semibold">General Inquiries:</p>
                <p>info@laxmipanchgavya.com</p>
                <p className="font-semibold mt-3">Customer Support:</p>
                <p>support@laxmipanchgavya.com</p>
                <p className="mt-4 text-sm">Response time: Within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Contact Form and Additional Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-2xl border-2 border-amber-200 shadow-lg">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-amber-900 font-semibold mb-2">Your Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:outline-none focus:border-amber-600 transition"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-amber-900 font-semibold mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:outline-none focus:border-amber-600 transition"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-amber-900 font-semibold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:outline-none focus:border-amber-600 transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-amber-900 font-semibold mb-2">Subject *</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:outline-none focus:border-amber-600 transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="product">Product Inquiry</option>
                    <option value="order">Order Status</option>
                    <option value="consultation">Ayurvedic Consultation</option>
                    <option value="wholesale">Wholesale/Bulk Orders</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-amber-900 font-semibold mb-2">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:outline-none focus:border-amber-600 transition resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* FAQ */}
              <div className="bg-white p-8 rounded-2xl border-2 border-amber-200 shadow-lg">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Quick Answers</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-amber-900 mb-2">📦 How long does delivery take?</h4>
                    <p className="text-amber-800 text-sm">We typically deliver within 3-5 business days across India.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-2">💳 What payment methods do you accept?</h4>
                    <p className="text-amber-800 text-sm">We accept UPI, cards, net banking, and cash on delivery.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-2">🔄 What is your return policy?</h4>
                    <p className="text-amber-800 text-sm">We offer a 7-day return policy for unopened products.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-2">👨‍⚕️ Can I consult with an Ayurvedic doctor?</h4>
                    <p className="text-amber-800 text-sm">Yes! We offer free consultations with our expert team.</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-amber-900 to-orange-900 text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-amber-700">
                    <p className="text-amber-100 text-sm">Emergency support available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-8 rounded-2xl border-2 border-amber-200 shadow-lg">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Follow Us</h3>
                <p className="text-amber-800 mb-4">Stay connected for wellness tips and exclusive offers</p>
                <div className="flex gap-4">
                  <a href="#" className="bg-amber-900 text-white p-4 rounded-lg hover:bg-amber-800 transition text-2xl">📘</a>
                  <a href="#" className="bg-amber-900 text-white p-4 rounded-lg hover:bg-amber-800 transition text-2xl">📷</a>
                  <a href="#" className="bg-amber-900 text-white p-4 rounded-lg hover:bg-amber-800 transition text-2xl">🐦</a>
                  <a href="#" className="bg-amber-900 text-white p-4 rounded-lg hover:bg-amber-800 transition text-2xl">💬</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 mb-8 text-center">Find Us Here</h2>
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-96 rounded-2xl flex items-center justify-center border-2 border-amber-200">
            <div className="text-center">
              <div className="text-8xl mb-4">🗺️</div>
              <p className="text-xl text-amber-900 font-semibold">Google Maps Integration</p>
              <p className="text-amber-700">123 Wellness Street, Your City</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
