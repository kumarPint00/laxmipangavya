import Link from "next/link";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "The Panchgavya Ghee has been a game-changer for my family's health. My children's immunity has improved significantly, and we no longer fall sick frequently. The pure quality and authentic taste are unmatched!",
      avatar: "👩",
      product: "Panchgavya Ghee",
      date: "2 weeks ago"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "I've been using their herbal supplements for 6 months now. My energy levels have improved dramatically, and I feel more vibrant than ever. The best part is there are no side effects!",
      avatar: "👨",
      product: "Herbal Supplements",
      date: "1 month ago"
    },
    {
      name: "Anita Desai",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: "Excellent products! The therapeutic oils have helped me manage my joint pain naturally. I've reduced my dependency on pain medication. Highly recommend to anyone with chronic pain.",
      avatar: "👵",
      product: "Therapeutic Oils",
      date: "3 weeks ago"
    },
    {
      name: "Vikram Singh",
      location: "Jaipur, Rajasthan",
      rating: 5,
      text: "Amazing quality! I've tried many Ayurvedic products, but Laxmi Panchgavya stands out. Their customer service is exceptional, and the products are truly authentic.",
      avatar: "👨‍💼",
      product: "Multiple Products",
      date: "1 week ago"
    },
    {
      name: "Meera Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "The skincare range is fantastic! My skin has never looked better. Natural ingredients really make a difference. I'm a customer for life!",
      avatar: "👩‍🦰",
      product: "Skincare Range",
      date: "2 months ago"
    },
    {
      name: "Suresh Reddy",
      location: "Hyderabad, Telangana",
      rating: 5,
      text: "Being diabetic, I was skeptical about Ayurvedic products. But the wellness tea has helped regulate my sugar levels naturally. Thank you, Laxmi Panchgavya!",
      avatar: "👴",
      product: "Wellness Tea",
      date: "1 month ago"
    },
    {
      name: "Kavita Joshi",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "The digestive churna has worked wonders for my family. We all have better digestion and feel lighter. Traditional wisdom really works!",
      avatar: "👩‍⚕️",
      product: "Digestive Churna",
      date: "3 weeks ago"
    },
    {
      name: "Arjun Mehta",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      text: "Fast delivery, excellent packaging, and top-notch quality. The hair oil has significantly reduced my hair fall. Very satisfied customer!",
      avatar: "🧑",
      product: "Hair Care Oil",
      date: "2 weeks ago"
    },
    {
      name: "Deepa Iyer",
      location: "Kochi, Kerala",
      rating: 5,
      text: "As an Ayurveda practitioner myself, I can vouch for the authenticity of these products. I recommend them to all my patients. Keep up the great work!",
      avatar: "👩‍⚕️",
      product: "Professional User",
      date: "1 month ago"
    }
  ];

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
            <li><Link href="/testimonials" className="text-amber-600">Testimonials</Link></li>
            <li><Link href="/contact" className="hover:text-amber-600 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Customer Stories
          </div>
          <h1 className="text-6xl font-bold mb-6">What Our Customers Say</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Real experiences from real people who trust Lakshmi Panchagavya Ayurvedic Clinic for their wellness journey
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-amber-800/50 backdrop-blur p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-amber-100">Google Rating</div>
            </div>
            <div className="bg-amber-800/50 backdrop-blur p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">184+</div>
              <div className="text-amber-100">Google Reviews</div>
            </div>
            <div className="bg-amber-800/50 backdrop-blur p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-amber-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-amber-200"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">⭐</span>
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-amber-800 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Product Badge */}
                <div className="mb-4">
                  <span className="bg-amber-100 text-amber-900 text-xs px-3 py-1 rounded-full font-semibold">
                    {testimonial.product}
                  </span>
                </div>
                
                {/* Customer Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-amber-200">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <div className="font-bold text-amber-900">{testimonial.name}</div>
                    <div className="text-sm text-amber-700">{testimonial.location}</div>
                    <div className="text-xs text-amber-600 mt-1">{testimonial.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-900 mb-4">Video Testimonials</h2>
            <p className="text-xl text-amber-700">Hear directly from our satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl h-64 flex items-center justify-center border-2 border-amber-200 hover:shadow-xl transition-all">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-amber-900 font-semibold">Video Testimonial {item}</p>
                  <button className="mt-4 bg-amber-900 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition">
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Trusted By Thousands</h2>
            <p className="text-xl text-amber-700">Certifications and recognitions we're proud of</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "✅", title: "Certified Organic" },
              { icon: "🏆", title: "Quality Tested" },
              { icon: "🌿", title: "100% Natural" },
              { icon: "🔒", title: "Secure Payments" }
            ].map((badge, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl mb-3">{badge.icon}</div>
                <div className="font-bold text-amber-900">{badge.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-900 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Join Our Happy Customers</h2>
          <p className="text-xl text-amber-100 mb-8">
            Experience the difference yourself. Start your wellness journey with Laxmi Panchgavya today!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/products"
              className="bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Shop Now
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all transform hover:scale-105"
            >
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Leave Review Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-2xl border-2 border-amber-200 text-center">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Share Your Experience</h2>
            <p className="text-xl text-amber-700 mb-8">
              Have you tried our products? We'd love to hear from you!
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all transform hover:scale-105"
            >
              Write a Review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
