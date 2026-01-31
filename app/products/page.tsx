"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      name: "Panchgavya Ghee",
      desc: "Pure cow ghee enriched with medicinal herbs for immunity and digestion",
      icon: "🧈",
      price: "₹499",
      category: "ghee",
      features: ["100% Pure", "A2 Milk", "Organic"],
      benefits: ["Boosts immunity", "Aids digestion", "Improves brain function"]
    },
    {
      name: "Herbal Supplements",
      desc: "Natural immunity boosters and wellness tonics from ancient Ayurvedic recipes",
      icon: "💊",
      price: "₹299",
      category: "supplements",
      features: ["Lab Tested", "No Chemicals", "Vegan"],
      benefits: ["Increases energy", "Strengthens immunity", "Reduces stress"]
    },
    {
      name: "Therapeutic Oils",
      desc: "Therapeutic oils for pain relief, rejuvenation and stress management",
      icon: "🧴",
      price: "₹399",
      category: "oils",
      features: ["Cold Pressed", "Aromatherapy", "Organic"],
      benefits: ["Relieves pain", "Reduces inflammation", "Promotes relaxation"]
    },
    {
      name: "Ayurvedic Soaps",
      desc: "Handmade natural soaps with herbal extracts for glowing skin",
      icon: "🧼",
      price: "₹149",
      category: "skincare",
      features: ["Handmade", "Chemical Free", "All Skin Types"],
      benefits: ["Natural cleansing", "Nourishes skin", "Anti-aging properties"]
    },
    {
      name: "Wellness Tea",
      desc: "Herbal tea blends for detox, immunity and peaceful sleep",
      icon: "🍵",
      price: "₹249",
      category: "tea",
      features: ["Organic", "Caffeine Free", "Antioxidants"],
      benefits: ["Detoxifies body", "Improves sleep", "Boosts metabolism"]
    },
    {
      name: "Skincare Range",
      desc: "Natural face packs, creams and serums from pure herbs",
      icon: "✨",
      price: "₹599",
      category: "skincare",
      features: ["Natural", "Anti-Aging", "Tested"],
      benefits: ["Reduces wrinkles", "Even skin tone", "Deep nourishment"]
    },
    {
      name: "Digestive Churna",
      desc: "Traditional powder blend for improved digestion and gut health",
      icon: "🌿",
      price: "₹199",
      category: "supplements",
      features: ["Traditional", "Natural", "Effective"],
      benefits: ["Improves digestion", "Reduces bloating", "Cleanses gut"]
    },
    {
      name: "Hair Care Oil",
      desc: "Herbal hair oil for strong, healthy and lustrous hair",
      icon: "💆",
      price: "₹349",
      category: "oils",
      features: ["Herbal", "No Chemicals", "Proven"],
      benefits: ["Reduces hair fall", "Promotes growth", "Prevents dandruff"]
    }
  ];

  const categories = [
    { id: "all", name: "All Products", icon: "🌟" },
    { id: "ghee", name: "Ghee", icon: "🧈" },
    { id: "supplements", name: "Supplements", icon: "💊" },
    { id: "oils", name: "Oils", icon: "🧴" },
    { id: "skincare", name: "Skincare", icon: "✨" },
    { id: "tea", name: "Tea", icon: "🍵" }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

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
            <li><Link href="/products" className="text-amber-600">Products</Link></li>
            <li><Link href="/about" className="hover:text-amber-600 transition-colors">About</Link></li>
            <li><Link href="/testimonials" className="hover:text-amber-600 transition-colors">Testimonials</Link></li>
            <li><Link href="/contact" className="hover:text-amber-600 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Our Premium Products</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Discover our complete range of authentic Ayurvedic products, each crafted with care and certified for quality
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 bg-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-amber-900 text-white shadow-lg"
                    : "bg-amber-100 text-amber-900 hover:bg-amber-200"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border-2 border-amber-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              >
                <div className="text-6xl mb-4 text-center">{product.icon}</div>
                <h3 className="text-xl font-bold text-amber-900 mb-3 text-center">{product.name}</h3>
                <p className="text-amber-800 mb-4 text-sm flex-grow">{product.desc}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-amber-900 text-sm mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, i) => (
                      <span key={i} className="bg-amber-100 text-amber-900 text-xs px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-amber-900 text-sm mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="text-xs text-amber-700 flex gap-2">
                        <span>✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-amber-200">
                  <div className="text-2xl font-bold text-amber-900">{product.price}</div>
                  <Link 
                    href="/contact" 
                    className="bg-amber-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-800 transition-all transform hover:scale-105"
                  >
                    Order
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-amber-900 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Our Ayurvedic experts are here to guide you to the right products for your wellness journey
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-100 transition-all transform hover:scale-105"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
