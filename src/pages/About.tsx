import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Target, Award, Rocket, Shield, Brain, Code, Globe,
  Cpu, Network, Database, Cloud, Lock, LineChart, Zap, Heart,
  BookOpen, GraduationCap, Briefcase, Medal, Trophy, Star,
  ChevronDown, ChevronUp, ChevronRight
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [stats, setStats] = useState({
    experience: 0,
    projects: 0,
    patents: 0,
    papers: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        experience: Math.min(prev.experience + 1, 15),
        projects: Math.min(prev.projects + 50, 1000),
        patents: Math.min(prev.patents + 1, 25),
        papers: Math.min(prev.papers + 2, 50)
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const values = [
    {
      icon: <Award className="h-12 w-12 text-indigo-600" />,
      title: "Excellence",
      description: "We strive for excellence in every solution we deliver, ensuring the highest quality AI implementations"
    },
    {
      icon: <Users className="h-12 w-12 text-indigo-600" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique needs and deliver tailored solutions"
    },
    {
      icon: <Shield className="h-12 w-12 text-indigo-600" />,
      title: "Trust",
      description: "We maintain the highest standards of security and privacy in all our AI implementations"
    },
    {
      icon: <Brain className="h-12 w-12 text-indigo-600" />,
      title: "Innovation",
      description: "We constantly push the boundaries of AI technology to deliver cutting-edge solutions"
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a vision to democratize AI for businesses",
      icon: <Rocket className="h-8 w-8 text-indigo-600" />
    },
    {
      year: "2019",
      title: "First Enterprise Client",
      description: "Successfully implemented AI solutions for a Fortune 500 company",
      icon: <Briefcase className="h-8 w-8 text-indigo-600" />
    },
    {
      year: "2020",
      title: "AI Recruitment Platform",
      description: "Launched our flagship AI-driven recruitment solution",
      icon: <Users className="h-8 w-8 text-indigo-600" />
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Expanded operations to serve clients worldwide",
      icon: <Globe className="h-8 w-8 text-indigo-600" />
    },
    {
      year: "2022",
      title: "Research Breakthrough",
      description: "Published groundbreaking research in neural networks",
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Named Top AI Solutions Provider by Tech Excellence Awards",
      icon: <Trophy className="h-8 w-8 text-indigo-600" />
    }
  ];

  const researchAreas = [
    {
      icon: <Brain className="h-10 w-10 text-indigo-600" />,
      title: "Neural Networks",
      description: "Advanced research in deep learning architectures"
    },
    {
      icon: <Cpu className="h-10 w-10 text-indigo-600" />,
      title: "Natural Language Processing",
      description: "Pushing boundaries in language understanding"
    },
    {
      icon: <Network className="h-10 w-10 text-indigo-600" />,
      title: "Computer Vision",
      description: "Innovative approaches to visual recognition"
    },
    {
      icon: <Database className="h-10 w-10 text-indigo-600" />,
      title: "Reinforcement Learning",
      description: "Developing adaptive learning systems"
    }
  ];

  const publications = [
    {
      title: "Advances in Neural Network Architecture",
      journal: "AI Research Quarterly",
      year: "2023",
      impact: "Cited by 150+ papers"
    },
    {
      title: "Novel Approaches to Transfer Learning",
      journal: "Machine Learning Journal",
      year: "2022",
      impact: "Featured in MIT Tech Review"
    },
    {
      title: "Efficient Training of Large Language Models",
      journal: "Computational Linguistics",
      year: "2023",
      impact: "Industry standard reference"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Former Google AI researcher with 15+ years in machine learning",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
      achievements: ["PhD in Computer Science", "50+ Published Papers", "Former Google AI Lead"]
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      bio: "20+ years experience in enterprise software development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      achievements: ["MIT Graduate", "30+ Patents", "Tech Innovation Award"]
    },
    {
      name: "Dr. Emily Patel",
      role: "Head of AI Research",
      bio: "PhD in Computer Science, specialized in deep learning",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      achievements: ["Stanford PhD", "AI Research Lead", "20+ Publications"]
    },
    {
      name: "David Kim",
      role: "Head of Product",
      bio: "Former Product Lead at Microsoft and Amazon",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
      achievements: ["Harvard MBA", "Product Excellence", "Innovation Leader"]
    }
  ];

  export default FaqSection;

  const faqs = [
    {
      question: "What makes your AI solutions different?",
      answer: "Our AI solutions are built on cutting-edge technology and customized for each client's specific needs. We combine deep industry expertise with advanced machine learning capabilities to deliver results that drive real business value."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary based on the complexity of the solution and your specific requirements. Typically, our basic implementations take 4-6 weeks, while more complex enterprise solutions may take 3-6 months."
    },
    {
      question: "Do you offer support after implementation?",
      answer: "Yes, we provide comprehensive post-implementation support including 24/7 technical assistance, regular maintenance updates, and continuous optimization services to ensure your AI solution performs at its best."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, and technology. Our solutions are adaptable to various business contexts and can be customized for specific industry requirements."
    },
    {
      question: "How do you ensure data security?",
      answer: "We maintain the highest standards of data security with bank-grade encryption, regular security audits, and compliance with international data protection regulations including GDPR and HIPAA."
    },
    {
      question: "What kind of ROI can we expect?",
      answer: "ROI varies by implementation, but our clients typically see 30-50% improvement in operational efficiency and 20-40% cost reduction within the first year of deployment."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollReveal>
              <h1 className="text-4xl font-bold mb-6">About ALAI Solutions</h1>
              <p className="text-xl max-w-3xl mx-auto">
                We're on a mission to democratize artificial intelligence and empower businesses 
                to make data-driven decisions with confidence.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ScrollReveal>
              <div className="p-6">
                <div className="text-4xl font-bold mb-2 gradient-text animate-pulse-slow">
                  {stats.experience}+
                </div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="p-6">
                <div className="text-4xl font-bold mb-2 gradient-text animate-pulse-slow">
                  {stats.projects}+
                </div>
                <div className="text-gray-400">Projects Delivered</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="p-6">
                <div className="text-4xl font-bold mb-2 gradient-text animate-pulse-slow">
                  {stats.patents}+
                </div>
                <div className="text-gray-400">Patents Filed</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              <div className="p-6">
                <div className="text-4xl font-bold mb-2 gradient-text animate-pulse-slow">
                  {stats.papers}+
                </div>
                <div className="text-gray-400">Research Papers</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="bg-white p-8 rounded-lg shadow-lg hover-lift">
                <Target className="h-12 w-12 text-indigo-600 mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-600 text-lg">
                  To be the global leader in providing accessible, intelligent AI solutions 
                  that transform how businesses operate and make decisions.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-lg hover-lift">
                <Rocket className="h-12 w-12 text-indigo-600 mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 text-lg">
                  To deliver innovative AI solutions that solve real business challenges, 
                  while maintaining the highest standards of security and ethical AI practices.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Research & Innovation</h2>
              <p className="mt-4 text-xl text-gray-600">
                Pushing the boundaries of AI technology
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="bg-white p-8 rounded-lg shadow-lg hover-lift">
                  <div className="mb-4">{area.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
              <p className="mt-4 text-xl text-gray-600">
                Key milestones in our mission to transform businesses
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={index} delay={index * 0.2}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2 pr-8 text-right">
                      <div className={`bg-white p-6 rounded-lg shadow-lg hover-lift ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                        <div className="flex items-center justify-end mb-4">
                          {milestone.icon}
                          <span className="text-2xl font-bold text-indigo-600 ml-4">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="w-1/2 pl-8">
                      {index % 2 !== 0 && (
                        <div className="bg-white p-6 rounded-lg shadow-lg hover-lift">
                          <div className="flex items-center mb-4">
                            {milestone.icon}
                            <span className="text-2xl font-bold text-indigo-600 ml-4">{milestone.year}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
              <p className="mt-4 text-xl text-gray-600">
                World-class experts leading the future of AI
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-indigo-600 mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="space-y-2">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <Star className="h-4 w-4 text-indigo-600 mr-2" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
              <p className="mt-4 text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="text-center bg-white p-8 rounded-lg shadow-lg hover-lift">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Security & Compliance</h2>
              <p className="mt-4 text-xl text-gray-300">
                Enterprise-grade security you can trust
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Shield />, name: "ISO 27001", desc: "Information Security Management" },
              { icon: <Lock />, name: "SOC 2 Type II", desc: "Security and Privacy Controls" },
              { icon: <Heart />, name: "HIPAA Compliant", desc: "Healthcare Data Protection" },
              { icon: <Shield />, name: "GDPR Compliant", desc: "Data Protection Standards" }
            ].map((cert, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="text-center bg-gray-800 p-6 rounded-lg hover-lift">
                  <div className="flex justify-center mb-4">
                    {React.cloneElement(cert.icon, { className: "h-8 w-8 text-indigo-600" })}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                  <p className="text-gray-400">{cert.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <p className="mt-4 text-xl text-gray-600">
                Find answers to common questions about our AI solutions
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-lg shadow-lg p-6 hover-lift">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="text-center mt-12">
                <p className="text-xl text-gray-600 mb-6">
                  Still have questions? We're here to help!
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Contact Us
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;