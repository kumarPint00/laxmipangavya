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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! We\'ll get back to you within 24 hours.'
        });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <h1 className="text-2xl font-bold text-amber-900">Lakshmi Panchagavya</h1>
              <p className="text-sm text-amber-700">Ayurvedic Clinic</p>
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
              <h3 className="font-bold text-xl text-amber-900 mb-3 text-center">Visit Our Clinic & Store</h3>
              <div className="text-amber-800 text-center space-y-2">
                <p className="font-semibold">Vigneshwara Apartments</p>
                <p className="text-sm">Opp. Union Bank</p>
                <p className="text-sm">Beside Prerana Hospital</p>
                <p className="text-sm">Balaji Nagar, Kukatpally</p>
                <p className="text-sm">Hyderabad - 500072</p>
                <p className="mt-4 font-semibold">Clinic Hours:</p>
                <p className="text-sm">Everyday: 11:00 AM - 7:00 PM</p>
                <p className="text-sm text-green-600 font-semibold">Open All Days</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border-2 border-amber-200 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4 text-center">📞</div>
              <h3 className="font-bold text-xl text-amber-900 mb-3 text-center">Call Us</h3>
              <div className="text-amber-800 text-center space-y-2">
                <p className="font-semibold">Customer Care:</p>
                <a href="tel:+918919453812" className="text-lg block hover:text-amber-600 transition">
                  089194 53812
                </a>
                <p className="font-semibold mt-3">Additional Contacts:</p>
                <a href="tel:+916304692638" className="block hover:text-amber-600 transition">
                  063046 92638
                </a>
                <a href="tel:+919901222925" className="block hover:text-amber-600 transition">
                  099012 22925
                </a>
                <p className="mt-4 text-sm">Available during clinic hours</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border-2 border-amber-200 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4 text-center">📧</div>
              <h3 className="font-bold text-xl text-amber-900 mb-3 text-center">Email Us</h3>
              <div className="text-amber-800 text-center space-y-2">
                <p className="font-semibold">General Inquiries:</p>
                <a href="mailto:clinic@laxmipanchagavya.com" className="block hover:text-amber-600 transition">
                  clinic@laxmipanchagavya.com
                </a>
                <p className="font-semibold mt-3">WhatsApp Support:</p>
                <a 
                  href="https://wa.me/918919453812" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-amber-600 transition"
                >
                  089194 53812
                </a>
                <p className="mt-4 text-sm">Response time: Within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Contact Form and Additional Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-2xl border-2 border-amber-200 shadow-lg">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Send Us a Message</h2>
              
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 border-2 border-green-500 text-green-800' 
                    : 'bg-red-100 border-2 border-red-500 text-red-800'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
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
                  disabled={isSubmitting}
                  className="w-full bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
                    <h4 className="font-bold text-amber-900 mb-2">🌿 What is Naadi Parikshan?</h4>
                    <p className="text-amber-800 text-sm">Naadi Parikshan is a holistic analysis of your health status by checking your pulse to determine Vata, Pitta, Kapha balance.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-2">💊 Are your medicines natural?</h4>
                    <p className="text-amber-800 text-sm">Yes! Our medicines are 100% natural, made from Panchagavya (cow by-products). No tests, surgery, or operations required.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-2">🏪 Do you have organic products?</h4>
                    <p className="text-amber-800 text-sm">Yes, all kinds of organic products are available at our stores for a healthy lifestyle.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-2">👨‍⚕️ Can I consult with an Ayurvedic doctor?</h4>
                    <p className="text-amber-800 text-sm">Yes! We offer free consultations with our expert team.</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-amber-900 to-orange-900 text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Clinic Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Every Day</span>
                    <span className="font-bold text-xl">11:00 AM - 7:00 PM</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-amber-700 text-center">
                    <p className="text-green-300 font-semibold text-lg">✓ Open All Days</p>
                    <p className="text-amber-100 text-sm mt-2">📍 Vigneshwara Apartments, Opp. Union Bank</p>
                    <p className="text-amber-100 text-sm">Beside Prerana Hospital, Balaji Nagar</p>
                    <p className="text-amber-100 text-sm">Kukatpally, Hyderabad - 500072</p>
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
            <div className="text-center px-6">
              <div className="text-8xl mb-4">🗺️</div>
              <p className="text-xl text-amber-900 font-semibold mb-2">Lakshmi Ayurvedic Clinic & Stores</p>
              <p className="text-amber-700 font-medium">Vigneshwara Apartments, Opp. Union Bank</p>
              <p className="text-amber-700">Beside Prerana Hospital, Balaji Nagar</p>
              <p className="text-amber-700">Kukatpally, Hyderabad - 500072</p>
              <a 
                href="https://maps.google.com/?q=Vigneshwara+Apartments+Opp+Union+Bank+Balaji+Nagar+Kukatpally+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-amber-900 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition"
              >
                📍 Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918919453812?text=Hello%20Dr.%20Lakshmi,%20I%20would%20like%20to%20book%20an%20appointment%20for%20Naadi%20diagnosis"
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
            Call Clinic
          </span>
        </a>

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
            Email Clinic
          </span>
        </a>
      </div>
    </div>
  );
}
