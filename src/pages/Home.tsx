import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { 
  Brain, BarChart, Shield, Zap, Code, Users, Workflow, LineChart,
  Database, Cloud, Lock, Award, Globe, Target, Rocket, Heart,
  CheckCircle, TrendingUp, MessageCircle, Cpu, Network
} from 'lucide-react';

export default function Home() {
  const [stats, setStats] = useState({
    clients: 0,
    countries: 0,
    projects: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        clients: Math.min(prev.clients + 5, 500),
        countries: Math.min(prev.countries + 1, 30),
        projects: Math.min(prev.projects + 10, 1000),
        satisfaction: Math.min(prev.satisfaction + 1, 98)
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Brain className="h-12 w-12 text-indigo-600" />,
      title: "AI-Powered Analytics",
      description: "Transform raw data into actionable insights with our advanced analytics platform powered by state-of-the-art machine learning algorithms"
    },
    {
      icon: <Workflow className="h-12 w-12 text-indigo-600" />,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation that learns and adapts to your business processes"
    },
    {
      icon: <LineChart className="h-12 w-12 text-indigo-600" />,
      title: "Predictive Insights",
      description: "Leverage advanced forecasting models to anticipate market trends and optimize business decisions"
    }
  ];

  const services = [
    {
      icon: <Code className="h-10 w-10 text-indigo-600" />,
      title: "Custom AI Development",
      description: "Tailored AI solutions built specifically for your business needs and objectives"
    },
    {
      icon: <Database className="h-10 w-10 text-indigo-600" />,
      title: "Data Strategy",
      description: "Expert guidance on data collection, processing, and utilization for AI implementation"
    },
    {
      icon: <Cloud className="h-10 w-10 text-indigo-600" />,
      title: "Cloud Integration",
      description: "Seamless integration of AI solutions with your existing cloud infrastructure"
    },
    {
      icon: <Shield className="h-10 w-10 text-indigo-600" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures and regulatory compliance"
    }
  ];

  const industries = [
    {
      icon: <TrendingUp className="h-8 w-8 text-indigo-600" />,
      title: "Finance",
      description: "Risk assessment, fraud detection, and algorithmic trading solutions"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-indigo-600" />,
      title: "Customer Service",
      description: "AI-powered chatbots and customer interaction analysis"
    },
    {
      icon: <Cpu className="h-8 w-8 text-indigo-600" />,
      title: "Manufacturing",
      description: "Predictive maintenance and quality control automation"
    },
    {
      icon: <Network className="h-8 w-8 text-indigo-600" />,
      title: "Healthcare",
      description: "Medical imaging analysis and patient care optimization"
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-16 w-16 text-indigo-600" />,
      title: "Industry Recognition",
      description: "Named Top AI Solution Provider 2023"
    },
    {
      icon: <CheckCircle className="h-16 w-16 text-indigo-600" />,
      title: "Client Success",
      description: "98% Client Satisfaction Rate"
    },
    {
      icon: <Globe className="h-16 w-16 text-indigo-600" />,
      title: "Global Impact",
      description: "Serving Clients in 30+ Countries"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="min-h-[600px] relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
              alt="AI Technology Visualization"
              className="absolute inset-0 w-full h-full object-cover image-hover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
          </div>
          
          <div className="bg-[#7C3AED] text-white p-12 flex flex-col justify-center min-h-[600px]">
            <div className="stagger-children">
              <h1 className="text-5xl font-bold mb-4 leading-tight gradient-text animate-slide-up">
                Transform Your Business<br />
                with Custom AI Solutions
              </h1>
              
              <p className="text-lg mb-12 leading-relaxed animate-slide-up">
                Partner with ALAI Solutions for tailored AI consulting and development services 
                that drive innovation and growth. Our expert team delivers cutting-edge solutions 
                that help you stay ahead of the competition.
              </p>
              
              <div className="flex gap-6">
                <Link
                  to="/contact"
                  className="bg-[#1C1C1C] text-white px-8 py-3 rounded-md font-semibold hover:bg-black transition-colors button-hover"
                >
                  Schedule Free Consultation
                </Link>
                <Link
                  to="/product"
                  className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[#7C3AED] transition-colors button-hover"
                >
                  Explore Our Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ScrollReveal>
              <div className="p-6">
                <div className="text-4xl font-bold mb-2 gradient-text animate-pulse-slow">
                  {stats.clients}+
                </div>
                <div className="text-gray-400">Satisfied Clients</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="p-6">
                <div className="text-4xl font-bold mb-2 gradient-text animate-pulse-slow">
                  {stats.countries}+
                </div>
                <div className="text-gray-400">Countries Served</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="p-6">
                <div className="text-4xl font-bold mb-2 gradient-text animate-pulse-slow">
                  {stats.projects}+
                </div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              <div className="p-6">
                <div className="text-4xl font-bold mb-2 gradient-text animate-pulse-slow">
                  {stats.satisfaction}%
                </div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Enterprise AI Solutions</h2>
              <p className="mt-4 text-xl text-gray-600">
                Cutting-edge AI technology tailored for your business needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="bg-white p-8 rounded-lg shadow-lg card-hover card-3d">
                  <div className="mb-4 animate-float">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Industries We Serve</h2>
              <p className="mt-4 text-xl text-gray-600">
                Tailored AI solutions for diverse business sectors
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="bg-gray-50 p-8 rounded-lg hover-lift card-3d">
                  <div className="mb-4 animate-float">{industry.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Our Achievements</h2>
              <p className="mt-4 text-xl text-gray-200">
                Recognition of our commitment to excellence
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="text-center glass-effect p-8 rounded-lg hover-lift">
                  <div className="mb-6 flex justify-center animate-float">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-200">{achievement.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Our Technology Stack</h2>
              <p className="mt-4 text-xl text-gray-600">
                Built with cutting-edge technologies for optimal performance
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'TensorFlow', 'PyTorch', 'OpenAI', 'AWS',
              'Google Cloud', 'Azure', 'Kubernetes', 'Docker'
            ].map((tech, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-lg text-center gradient-border hover-lift">
                  <p className="font-semibold text-gray-800">{tech}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to transform your business?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join industry leaders already leveraging our AI solutions
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/contact"
                className="bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700 button-hover"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/product"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-indigo-50 button-hover"
              >
                View Solutions
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}