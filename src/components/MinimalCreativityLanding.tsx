import React from 'react';

const MinimalCreativityLanding: React.FC = () => {
  const bigTechInsights = [
    {
      company: 'Apple',
      principle: 'Human Interface Guidelines',
      insight: 'Spatial relationships & subtle animations'
    },
    {
      company: 'Google',
      principle: 'Material Design 3',
      insight: 'Dynamic theming & fluid motion'
    },
    {
      company: 'Microsoft',
      principle: 'Fluent Design',
      insight: 'Light, depth & meaningful motion'
    },
    {
      company: 'Netflix',
      principle: 'Cinematic Storytelling',
      insight: 'Bold typography & seamless transitions'
    },
    {
      company: 'Airbnb',
      principle: 'Trust & Belonging',
      insight: 'Authentic photography & warm color palettes'
    },
    {
      company: 'Slack',
      principle: 'Conversational Design',
      insight: 'Inclusive colors & contextual interactions'
    },
    {
      company: 'Spotify',
      principle: 'Music-Inspired Design',
      insight: 'Audio visualization & dynamic gradients'
    },
    {
      company: 'Stripe',
      principle: 'Developer-Centric Elegance',
      insight: 'Progressive disclosure & accessibility excellence'
    }
  ];

  const creativityPrinciples = [
    'Avoid Inter/Roboto fonts',
    'Skip blue (#3B82F6) primary colors',
    'Break 8px/16px spacing grids',
    'Eliminate centered card layouts',
    'Remove standard button styles',
    'Avoid predictable navigation patterns',
    'Skip generic glassmorphism effects',
    'Eliminate overused neumorphism',
    'Remove standard card shadows and borders'
  ];

  const creativeColors = [
    'Terracotta + Sage Green + Antique Gold',
    'Electric Lime + Deep Teal + Hot Magenta',
    'Forest Green + Crimson Red + Imperial Gold',
    'Burnt Orange + Mustard Yellow + Navy Blue',
    'Copper + Slate Gray + Cream',
    'Ultramarine + Burnt Sienna + Zinc White'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Header */}
        <header className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transform AI Designs Into Creative Masterpieces
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Break free from generic patterns. Learn from big tech excellence.
            Create interfaces that stand out from AI-generated designs.
          </p>
        </header>

        {/* Big Tech Analysis Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Learn from Big Tech Excellence
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            Reverse-engineer the design philosophies of industry leaders who break conventional patterns.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bigTechInsights.map((company, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {company.company}
                </h3>
                <p className="text-gray-600 mb-2">{company.principle}</p>
                <p className="text-sm text-gray-500">{company.insight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Creativity Rules Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Creativity Rules Engine
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Font Selection Rules
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>Prohibit: Inter, Roboto, Open Sans</li>
                <li>Prefer: Space Grotesk, Cal Sans, JetBrains Mono</li>
                <li>Require: Variable fonts, unconventional weights</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Color Theory Constraints
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>Prohibit: Blue (#3B82F6), Purple (#7C3AED)</li>
                <li>Require: Triadic color schemes</li>
                <li>Creative combinations:</li>
              </ul>
              <ul className="mt-3 space-y-1 text-sm text-gray-500">
                {creativeColors.slice(0, 3).map((color, index) => (
                  <li key={index}>{color}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Layout Rules
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>Avoid: 8px grid spacing</li>
                <li>Require: Golden ratio scaling</li>
                <li>Patterns: Asymmetrical balance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Generic Patterns to Avoid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Common Generic Patterns to Avoid
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            These are the tell-tale signs of AI-generated designs. Break these patterns to create truly original work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {creativityPrinciples.map((principle, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-gray-700">{principle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Transformation Examples */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Design Transformation Examples
          </h2>

          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Generic Input
              </h3>
              <p className="text-gray-600 mb-4">
                "Create a dashboard for a SaaS analytics app"
              </p>
              <p className="text-sm text-gray-500 mb-4">Common AI patterns detected:</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Inter font</li>
                <li>• Blue primary color (#3B82F6)</li>
                <li>• 8px grid spacing</li>
                <li>• Centered layout</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Creative Output
              </h3>
              <p className="text-gray-600 mb-4">
                "Design a dashboard inspired by Japanese Zen gardens with asymmetrical stone placements representing data points, using forest green and crimson red colors with antique gold accents, avoiding standard grid layouts and generic blue interfaces"
              </p>
              <p className="text-sm text-gray-500 mb-4">Creativity principles applied:</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Cultural inspiration (Japanese Zen)</li>
                <li>• Creative color scheme (forest green + crimson)</li>
                <li>• Organic layout (asymmetrical stone placements)</li>
                <li>• Unique metaphor (data as garden stones)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Implementation Patterns
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Practical Application Code
            </h3>
            <pre className="bg-gray-50 p-4 rounded text-sm overflow-x-auto">
{`// Color Constraint Application
const applyCreativityConstraints = (designSystem) => {
  const prohibitedColors = ['#3B82F6', '#7C3AED', '#EC4899', '#6366F1'];
  const creativePalettes = {
    artNouveau: ['#CD853F', '#8FBC8F', '#D4AF37'],
    psychedelic: ['#00FF00', '#008080', '#FF00FF'],
    japanese: ['#228B22', '#DC143C', '#FFD700']
  };

  return {
    ...designSystem,
    colors: creativePalettes.artNouveau,
    avoidGeneric: true
  };
};

// Layout Constraint Application
const enforceCreativeLayout = (layout) => {
  return {
    ...layout,
    spacing: 'golden_ratio',
    alignment: 'asymmetrical',
    flow: 'organic'
  };
};`}
            </pre>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Create Extraordinary Designs?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the movement to break free from generic AI design patterns.
            Create interfaces that inspire and stand out.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gray-900 text-white rounded border border-gray-900 font-medium">
              Explore Design Probabilities
            </button>
            <button className="px-8 py-3 bg-white text-gray-900 rounded border border-gray-300 font-medium">
              View Trending Topics
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            Breaking design conventions since 2025.
            Version 1.5.0
          </p>
        </footer>
      </div>
    </div>
  );
};

export default MinimalCreativityLanding;
