import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { 
  Users, Brain, Bot, LineChart, Shield, Zap, 
  BarChart, Search, Database, Mail, Settings, Code,
  Check, Award, Target, Cloud, Lock, ArrowRight
} from 'lucide-react';

const heroProducts = [
  {
    title: "AI Analytics Suite",
    description: "Transform your data into actionable insights",
    features: ["Real-time analytics", "Predictive modeling", "Custom dashboards"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    id: "ai-analytics"
  },
  {
    title: "SmartBot AI",
    description: "Intelligent customer service automation",
    features: ["24/7 customer support", "Multi-language support", "Seamless integration"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
    id: "smartbot"
  },
  {
    title: "Neural Engine",
    description: "Advanced machine learning platform",
    features: ["Deep learning models", "Automated training", "Model deployment"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    id: "neural-engine"
  }
];

const products = [
  {
    icon: <Brain className="h-12 w-12 text-indigo-600" />,
    title: "AI Analytics Suite",
    description: "Transform your business data into actionable insights with our advanced analytics platform.",
    features: [
      "Real-time data analysis",
      "Predictive modeling",
      "Custom dashboards",
      "Automated reporting"
    ],
    price: "Starting at $499/month",
    id: "ai-analytics",
    popular: true
  },
  {
    icon: <Bot className="h-12 w-12 text-indigo-600" />,
    title: "SmartBot AI",
    description: "Intelligent customer service automation powered by advanced natural language processing.",
    features: [
      "24/7 customer support",
      "Multi-language support",
      "Custom training",
      "Analytics dashboard"
    ],
    price: "Starting at $299/month",
    id: "smartbot",
    popular: false
  },
  {
    icon: <LineChart className="h-12 w-12 text-indigo-600" />,
    title: "Neural Engine",
    description: "Enterprise-grade machine learning platform for building and deploying AI models.",
    features: [
      "Deep learning models",
      "Automated training",
      "Model deployment",
      "API integration"
    ],
    price: "Starting at $999/month",
    id: "neural-engine",
    popular: false
  }
];

const features = [
  {
    icon: <Shield className="h-8 w-8 text-indigo-600" />,
    title: "Enterprise Security",
    description: "Bank-grade encryption and security protocols"
  },
  {
    icon: <Cloud className="h-8 w-8 text-indigo-600" />,
    title: "Cloud Integration",
    description: "Seamless integration with major cloud providers"
  },
  {
    icon: <Database className="h-8 w-8 text-indigo-600" />,
    title: "Data Management",
    description: "Advanced data processing and storage solutions"
  },
  {
    icon: <Settings className="h-8 w-8 text-indigo-600" />,
    title: "Custom Configuration",
    description: "Flexible settings and customization options"
  }
];

const testimonials = [
  {
    quote: "The AI Analytics Suite has transformed our decision-making process, leading to a 40% increase in operational efficiency.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechCorp Inc."
  },
  {
    quote: "SmartBot AI has reduced our customer response time by 80% while maintaining high satisfaction rates.",
    author: "Michael Rodriguez",
    role: "Head of Customer Success",
    company: "Global Solutions"
  },
  {
    quote: "Neural Engine's capabilities have accelerated our ML model development by 3x. Game-changing platform.",
    author: "Emily Patel",
    role: "AI Research Director",
    company: "DataTech Labs"
  }
];

const ProductPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Ready-to-use AI solutions designed to transform your business operations
            </p>
          </div>

          <div className="relative h-[500px] overflow-hidden rounded-lg">
            {heroProducts.map((product, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                  <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
                    <p className="text-xl mb-6">{product.description}</p>
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="h-5 w-5 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex space-x-4">
                      <Link
                        to="/waitlist"
                        className="bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 hover-lift flex items-center"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                      <Link
                        to={`/product/${product.id}`}
                        className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-indigo-600 hover-lift"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                  <div className="relative h-full">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
              <p className="mt-4 text-xl text-gray-600">
                Choose the right AI solution for your business
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover-lift h-full flex flex-col">
                  <div className="p-8 flex-grow">
                    <div className="mb-4">{product.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <ul className="space-y-3 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-8 border-t border-gray-100">
                    <p className="text-lg font-semibold text-indigo-600 mb-6">{product.price}</p>
                    <div className="space-y-4">
                      <Link
                        to="/waitlist"
                        className={`block w-full ${
                          product.popular ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-800 hover:bg-gray-900'
                        } text-white text-center px-6 py-3 rounded-md font-semibold transition-colors button-hover`}
                      >
                        Get Started
                      </Link>
                      <Link
                        to={`/product/${product.id}`}
                        className="block w-full text-center px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-md font-semibold hover:bg-gray-50 transition-colors button-hover"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Enterprise Features</h2>
              <p className="mt-4 text-xl text-gray-600">
                All our products come with enterprise-grade features
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover-lift h-full">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Client Success Stories</h2>
              <p className="mt-4 text-xl text-gray-600">
                See what our clients have to say about our products
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="bg-white p-8 rounded-lg shadow-lg hover-lift h-full">
                  <div className="mb-6">
                    <Award className="h-8 w-8 text-indigo-600" />
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to transform your business?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join industry leaders already leveraging our AI solutions
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 hover-lift"
              >
                Contact Sales
              </Link>
              <Link
                to="/waitlist"
                className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-indigo-600 hover-lift"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default ProductPage;