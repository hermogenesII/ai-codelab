import React, { useState, useEffect } from 'react';

const CreativityAgentEnhancedLanding: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPalette, setCurrentPalette] = useState(0);

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

  const creativePalettes = [
    { name: 'Art Nouveau', colors: ['#CD853F', '#8FBC8F', '#D4AF37'], emoji: '🏛️' },
    { name: 'Japanese', colors: ['#228B22', '#DC143C', '#FFD700'], emoji: '🏯' },
    { name: 'African', colors: ['#CC5500', '#FFDB58', '#000080'], emoji: '🦁' },
    { name: 'Psychedelic', colors: ['#00FF00', '#008080', '#FF00FF'], emoji: '🌈' }
  ];

  const principles = [
    {
      icon: '🚫',
      title: 'Break AI Patterns',
      description: 'Ditch Inter fonts, blue buttons (#3B82F6), and 8px grids',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: '🌍',
      title: 'Cultural Inspiration',
      description: 'Draw from Japanese aesthetics, African patterns, indigenous art',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      icon: '🎨',
      title: 'Creative Color Theory',
      description: 'Terracotta + Sage + Gold instead of generic purple/pink gradients',
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: '🏢',
      title: 'Big Tech Excellence',
      description: 'Learn from Apple, Google, Microsoft, and Netflix design philosophies',
      color: 'from-blue-400 to-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.3) 0%, transparent 50%)`
        }}
      />

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-xl z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                <span className="text-white font-bold text-xl">🎨</span>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  Creativity Agent
                </span>
                <div className="text-xs text-purple-300 opacity-75">AI Design Revolution</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'palettes', 'principles', 'examples', 'getstarted'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-purple-200 hover:text-white transition-all duration-300 hover:scale-105 capitalize text-sm font-medium"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
              🚀 Transform AI Design
            </span>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
              Break the AI
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Design Matrix
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
              Transform generic AI-generated designs into <strong className="text-white">creative masterpieces</strong>.
              Fight probability bias with cultural inspiration, mathematical beauty, and human-centered innovation.
            </p>
          </div>

          {/* Interactive Color Palette Demo */}
          <div className="mb-12">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <span className="text-purple-300 text-lg">🎨 Live Color Palette:</span>
              <div className="flex space-x-2">
                {creativePalettes[currentPalette].colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white/20 shadow-lg"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentPalette((prev) => (prev + 1) % creativePalettes.length)}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white text-sm font-medium transition-colors"
              >
                {creativePalettes[currentPalette].emoji} {creativePalettes[currentPalette].name}
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('getstarted')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-2xl text-white font-bold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-400/40 transition-all duration-300 hover:scale-105"
            >
              🎯 Start Creating
            </button>
            <button
              onClick={() => scrollToSection('palettes')}
              className="px-8 py-4 border-2 border-purple-400/50 hover:border-purple-300 rounded-2xl text-purple-300 hover:text-white font-semibold text-lg backdrop-blur-sm bg-purple-900/20 hover:bg-purple-800/30 transition-all duration-300"
            >
              🌈 Explore Palettes
            </button>
          </div>
        </div>
      </section>

      {/* Color Palettes Section */}
      <section id="palettes" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              🎨 Creative Color Palettes
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Ditch generic blues and purples. Embrace cultural colors that tell stories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {creativePalettes.map((palette, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{palette.emoji}</span>
                  <span className="text-purple-300 font-semibold">{palette.name}</span>
                </div>
                <div className="flex space-x-3 mb-4">
                  {palette.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-xl border-2 border-white/20 shadow-lg"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="text-sm text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Perfect for {palette.name.toLowerCase()} inspired designs
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              ⚡ Core Principles
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Four pillars that transform AI-generated designs into human-centered innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${principle.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                    {principle.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{principle.title}</h3>
                    <p className="text-purple-200 leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              🔄 Before → After
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              See the transformation from generic AI to creative excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                before: '"Create a user dashboard"',
                after: '"Design a dashboard inspired by Japanese Zen gardens with asymmetrical stone placements representing data points, using forest green, crimson red, and antique gold colors"',
                icon: '📊',
                improvement: 'Cultural depth, organic layouts, meaningful colors'
              },
              {
                before: '"Design a fitness tracking app"',
                after: '"Create a fitness app with African Kente cloth patterns for progress visualization, incorporating rhythmic typography and organic curved elements"',
                icon: '💪',
                improvement: 'Pattern storytelling, rhythmic design, cultural authenticity'
              }
            ].map((example, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{example.icon}</div>
                <div className="space-y-6">
                  <div>
                    <div className="text-red-400 font-semibold mb-2">❌ BEFORE:</div>
                    <div className="text-purple-200 italic">"{example.before}"</div>
                  </div>
                  <div className="border-t border-purple-500/20 pt-6">
                    <div className="text-green-400 font-semibold mb-2">✅ AFTER:</div>
                    <div className="text-purple-100">"{example.after}"</div>
                  </div>
                  <div className="text-sm text-purple-300 bg-purple-900/30 rounded-lg p-3">
                    🎯 <strong>Key Improvements:</strong> {example.improvement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="getstarted" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              🚀 Ready to Transform Your Designs?
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Start using the Creativity Agent today. Break free from AI design patterns and create truly innovative, culturally-rich interfaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-2xl text-white font-bold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-400/40 transition-all duration-300 hover:scale-105">
                🎨 Apply Creativity Rules
              </button>
              <button className="px-8 py-4 border-2 border-purple-400/50 hover:border-purple-300 rounded-2xl text-purple-300 hover:text-white font-semibold text-lg backdrop-blur-sm bg-purple-900/20 hover:bg-purple-800/30 transition-all duration-300">
                📚 Read Full Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🎨</span>
            </div>
            <span className="text-purple-300 font-semibold">Creativity Agent v1.6.0</span>
          </div>
          <p className="text-purple-400 text-sm">
            Transform AI design from probability-driven to human-centered innovation 🌟
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CreativityAgentEnhancedLanding;
