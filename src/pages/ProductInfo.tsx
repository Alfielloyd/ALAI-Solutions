import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { 
  Brain, Bot, LineChart, Shield, Check, 
  ArrowRight, Cpu, Network, Database, Cloud,
  Settings, Code, Lock, Zap, Target, Globe
} from 'lucide-react';

const products = {
  'ai-analytics': {
    title: 'AI Analytics Suite',
    description: 'Transform your business data into actionable insights with our advanced analytics platform.',
    icon: <Brain className="h-16 w-16 text-indigo-600" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    features: [
      {
        title: 'Real-time Analytics',
        description: 'Get instant insights with real-time data processing and analysis',
        icon: <Zap />
      },
      {
        title: 'Predictive Modeling',
        description: 'Forecast trends and make data-driven decisions with advanced predictive models',
        icon: <Target />
      },
      {
        title: 'Custom Dashboards',
        description: 'Create personalized dashboards tailored to your specific needs',
        icon: <Settings />
      },
      {
        title: 'Data Integration',
        description: 'Seamlessly integrate with multiple data sources and formats',
        icon: <Database />
      }
    ],
    benefits: [
      'Increase operational efficiency by up to 40%',
      'Reduce decision-making time by 60%',
      'Improve forecast accuracy by 85%',
      'Automate up to 70% of reporting tasks'
    ],
    techSpecs: [
      'Built on TensorFlow and PyTorch',
      'REST API integration',
      'Real-time data processing',
      'Custom model training',
      'Enterprise-grade security'
    ]
  },
  'smartbot': {
    title: 'SmartBot AI',
    description: 'Intelligent customer service automation powered by advanced natural language processing.',
    icon: <Bot className="h-16 w-16 text-indigo-600" />,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
    features: [
      {
        title: '24/7 Support',
        description: 'Provide round-the-clock customer support with AI-powered responses',
        icon: <Network />
      },
      {
        title: 'Multi-language Support',
        description: 'Communicate with customers in over 50 languages',
        icon: <Globe />
      },
      {
        title: 'Analytics Dashboard',
        description: 'Track performance and customer satisfaction metrics',
        icon: <LineChart />
      },
      {
        title: 'Custom Training',
        description: 'Train the AI with your specific business knowledge',
        icon: <Brain />
      }
    ],
    benefits: [
      'Reduce response time by 80%',
      'Handle multiple conversations simultaneously',
      'Improve customer satisfaction by 45%',
      'Lower support costs by 60%'
    ],
    techSpecs: [
      'GPT-based language model',
      'Natural Language Processing',
      'Sentiment analysis',
      'Context-aware responses',
      'Multi-channel integration'
    ]
  },
  'neural-engine': {
    title: 'Neural Engine',
    description: 'Enterprise-grade machine learning platform for building and deploying AI models.',
    icon: <Cpu className="h-16 w-16 text-indigo-600" />,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    features: [
      {
        title: 'Deep Learning Models',
        description: 'Build and train sophisticated neural networks',
        icon: <Brain />
      },
      {
        title: 'Automated Training',
        description: 'Automate the model training and optimization process',
        icon: <Settings />
      },
      {
        title: 'Model Deployment',
        description: 'Deploy models to production with one click',
        icon: <Cloud />
      },
      {
        title: 'API Integration',
        description: 'Easy integration with existing systems via REST API',
        icon: <Code />
      }
    ],
    benefits: [
      'Accelerate ML model development by 3x',
      'Reduce model training time by 70%',
      'Improve model accuracy by 40%',
      'Scale deployments effortlessly'
    ],
    techSpecs: [
      'Distributed training support',
      'AutoML capabilities',
      'Model versioning',
      'A/B testing framework',
      'Performance monitoring'
    ]
  }
};

export default function ProductInfo() {
  const { productId } = useParams();
  const product = products[productId as keyof typeof products];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6 animate-float">{product.icon}</div>
                <h1 className="text-4xl font-bold mb-6">{product.title}</h1>
                <p className="text-xl mb-8">{product.description}</p>
                <Link
                  to="/waitlist"
                  className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg shadow-2xl image-hover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
              <p className="mt-4 text-xl text-gray-600">
                Everything you need to succeed
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="bg-white p-8 rounded-lg shadow-lg hover-lift">
                  <div className="mb-4 animate-float">
                    {React.cloneElement(feature.icon, { className: 'h-8 w-8 text-indigo-600' })}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Key Benefits</h2>
              <p className="mt-4 text-xl text-gray-300">
                Transform your business with proven results
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="flex items-center space-x-4 bg-gray-800 p-6 rounded-lg hover-lift">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-400" />
                  </div>
                  <p className="text-lg">{benefit}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Technical Specifications</h2>
              <p className="mt-4 text-xl text-gray-600">
                Built with cutting-edge technology
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.techSpecs.map((spec, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
                      </div>
                      <p className="text-gray-600">{spec}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to get started?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join our waitlist to be the first to know when {product.title} launches
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/waitlist"
                className="bg-white text-indigo-600 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 hover-lift"
              >
                Join Waitlist
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-indigo-600 hover-lift"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}