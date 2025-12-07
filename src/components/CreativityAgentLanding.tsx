import React, { useState, useEffect } from 'react';

const CreativityAgentLanding: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const bigTechCompanies = [
    {
      name: 'Apple',
      philosophy: 'Human Interface Guidelines',
      colors: ['#1D1D1F', '#007AFF', '#34C759'],
      insight: 'Spatial relationships & subtle animations'
    },
    {
      name: 'Google',
      philosophy: 'Material Design 3',
      colors: ['#4285F4', '#EA4335', '#FBBC05'],
      insight: 'Dynamic theming & fluid motion'
    },
    {
      name: 'Microsoft',
      philosophy: 'Fluent Design',
      colors: ['#0078D4', '#107C10', '#FF8C00'],
      insight: 'Light, depth & meaningful motion'
    },
    {
      name: 'Netflix',
      philosophy: 'Cinematic Storytelling',
      colors: ['#E50914', '#B81D24', '#000000'],
      insight: 'Bold typography & seamless transitions'
    }
  ];

  const creativePrinciples = [
    {
      title: 'Avoid Generic Patterns',
      description: 'Break free from Inter fonts, blue buttons (#3B82F6), and 8px grids',
      color: 'emerald'
    },
    {
      title: 'Cultural Inspiration',
      description: 'Draw from Japanese aesthetics, African patterns, and indigenous art',
      color: 'amber'
    },
    {
      title: 'Creative Color Theory',
      description: 'Use terracotta + sage + gold instead of purple/pink/indigo gradients',
      color: 'rose'
    },
    {
      title: 'Big Tech Excellence',
      description: 'Learn from Apple, Google, Microsoft, and Netflix design philosophies',
      color: 'teal'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-amber-50 to-rose-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">CA</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                Creativity Agent
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'principles', 'bigtech', 'examples', 'getstarted'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-600 hover:text-emerald-600 transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-emerald-200 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -top-12 -right-12 w-12 h-12 bg-amber-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}></div>

            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-emerald-600 via-amber-600 to-rose-600 bg-clip-text text-transparent">
                Transform AI Designs
              </span>
              <br />
              <span className="text-gray-800">Into Creative Masterpieces</span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Break free from generic patterns. Learn from big tech excellence.
              Create truly unique, culturally-inspired interfaces that stand out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('getstarted')}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-amber-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Start Creating
              </button>
              <button
                onClick={() => scrollToSection('bigtech')}
                className="px-8 py-4 border-2 border-emerald-300 text-emerald-700 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300"
              >
                Learn from Big Tech
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Creativity Principles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four fundamental principles that transform generic AI designs into creative excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {creativePrinciples.map((principle, index) => (
              <div
                key={principle.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 bg-${principle.color}-100 rounded-xl flex items-center justify-center mb-6`}>
                  <div className={`w-8 h-8 bg-${principle.color}-600 rounded-lg`}></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Tech Section */}
      <section id="bigtech" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Learn from Big Tech Excellence</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reverse-engineer the design philosophies of industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bigTechCompanies.map((company, index) => (
              <div
                key={company.name}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex space-x-2">
                    {company.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{company.name}</h3>
                    <p className="text-sm text-gray-500">{company.philosophy}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{company.insight}</p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Key Insight
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Creative Transformations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how generic prompts become extraordinary designs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-red-600 font-bold text-lg">G</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Generic Input</h3>
              </div>
              <p className="text-gray-600 mb-6">"Create a dashboard for a SaaS analytics app"</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                  Uses Inter font
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded mr-2"></div>
                  Blue primary color (#3B82F6)
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-400 rounded mr-2"></div>
                  8px grid spacing
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl p-8 shadow-lg border-2 border-emerald-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-emerald-600 font-bold text-lg">C</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Creative Output</h3>
              </div>
              <p className="text-gray-600 mb-6">
                "Design a dashboard inspired by Japanese Zen gardens with asymmetrical stone placements representing data points, using forest green and crimson red colors with antique gold accents, avoiding standard grid layouts and generic blue interfaces"
              </p>
              <div className="space-y-2 text-sm text-emerald-700">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-emerald-500 rounded mr-2"></div>
                  Cultural inspiration
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-amber-500 rounded mr-2"></div>
                  Creative color scheme
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-rose-500 rounded mr-2"></div>
                  Organic layout patterns
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="getstarted" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Ready to Create Extraordinary Designs?</h2>
          <p className="text-lg text-gray-600 mb-12">
            Join the movement to break free from generic AI design patterns.
            Create interfaces that inspire, delight, and stand out.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-bold text-2xl">EP</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Enhanced Prompts</h3>
              <p className="text-gray-600 text-sm">Transform generic requests into creative specifications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-600 font-bold text-2xl">TT</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Trending Topics</h3>
              <p className="text-gray-600 text-sm">Discover the most innovative design trends</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-rose-600 font-bold text-2xl">DA</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Design Analytics</h3>
              <p className="text-gray-600 text-sm">Analyze design patterns and probabilities</p>
            </div>
          </div>

          <button className="px-12 py-4 bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 text-white rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Explore the Creativity Agent
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">CA</span>
                </div>
                <span className="text-lg font-bold">Creativity Agent</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming AI designs into creative masterpieces since 2025.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Principles</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Avoid Generic Patterns</li>
                <li>Cultural Inspiration</li>
                <li>Creative Color Theory</li>
                <li>Big Tech Excellence</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Design Probabilities</li>
                <li>Trending Topics</li>
                <li>Creativity Agent</li>
                <li>Framework Analysis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Big Tech</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Apple HIG</li>
                <li>Google Material</li>
                <li>Microsoft Fluent</li>
                <li>Netflix Design</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Creativity Agent. Breaking design conventions, one interface at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreativityAgentLanding;
