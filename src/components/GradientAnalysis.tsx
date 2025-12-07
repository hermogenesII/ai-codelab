import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const GradientAnalysis: React.FC = () => {
  const [selectedType, setSelectedType] = useState('background');

  // Background gradient probabilities
  const backgroundGradients = [
    { type: 'Blue to Indigo', probability: 25, colors: 'from-blue-50 to-indigo-100', description: 'Calm, professional' },
    { type: 'Blue to Cyan', probability: 20, colors: 'from-blue-400 to-cyan-400', description: 'Modern, tech' },
    { type: 'Purple to Pink', probability: 15, colors: 'from-purple-400 to-pink-400', description: 'Creative, vibrant' },
    { type: 'Green to Blue', probability: 12, colors: 'from-green-400 to-blue-400', description: 'Fresh, natural' },
    { type: 'Orange to Red', probability: 10, colors: 'from-orange-400 to-red-400', description: 'Energetic, warm' },
    { type: 'Gray to Blue', probability: 8, colors: 'from-gray-100 to-blue-50', description: 'Subtle, clean' },
    { type: 'Indigo to Purple', probability: 6, colors: 'from-indigo-500 to-purple-500', description: 'Deep, luxurious' },
    { type: 'Teal to Green', probability: 4, colors: 'from-teal-400 to-green-400', description: 'Cool, balanced' }
  ];

  // Gradient direction probabilities
  const gradientDirections = [
    { direction: '135deg (BR to TL)', probability: 35, css: 'linear-gradient(135deg, ...)' },
    { direction: 'to right', probability: 25, css: 'linear-gradient(to right, ...)' },
    { direction: 'to bottom', probability: 20, css: 'linear-gradient(to bottom, ...)' },
    { direction: '45deg (TR to BL)', probability: 10, css: 'linear-gradient(45deg, ...)' },
    { direction: 'to bottom right', probability: 5, css: 'linear-gradient(to bottom right, ...)' },
    { direction: 'radial', probability: 3, css: 'radial-gradient(...)' },
    { direction: 'conic', probability: 2, css: 'conic-gradient(...)' }
  ];

  // Button gradient probabilities
  const buttonGradients = [
    { style: 'Blue gradient', probability: 30, tailwind: 'bg-gradient-to-r from-blue-500 to-blue-600' },
    { style: 'Purple to pink', probability: 20, tailwind: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { style: 'Green gradient', probability: 15, tailwind: 'bg-gradient-to-r from-green-500 to-green-600' },
    { style: 'Orange to red', probability: 10, tailwind: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { style: 'Solid color (no gradient)', probability: 25, tailwind: 'bg-blue-500' }
  ];

  // Text gradient probabilities
  const textGradients = [
    { style: 'Blue to purple', probability: 25, usage: 'Headlines, branding' },
    { style: 'Pink to purple', probability: 20, usage: 'Creative, modern' },
    { style: 'Orange to red', probability: 15, usage: 'Energetic, bold' },
    { style: 'Green to blue', probability: 10, usage: 'Tech, professional' },
    { style: 'Solid text (no gradient)', probability: 30, usage: 'Body text, readability' }
  ];

  // Gradient opacity probabilities
  const opacityLevels = [
    { opacity: 'Full opacity (1.0)', probability: 40, description: 'Bold, vibrant gradients' },
    { opacity: 'High opacity (0.8-0.9)', probability: 30, description: 'Rich but not overwhelming' },
    { opacity: 'Medium opacity (0.5-0.7)', probability: 20, description: 'Subtle, background-friendly' },
    { opacity: 'Low opacity (0.3-0.4)', probability: 8, description: 'Very subtle overlays' },
    { opacity: 'Very low (0.1-0.2)', probability: 2, description: 'Barely visible' }
  ];

  const renderCurrentAnalysis = () => {
    switch (selectedType) {
      case 'background':
        return (
          <div className="space-y-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={backgroundGradients}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="type" angle={-45} textAnchor="end" height={80} />
                  <YAxis label={{ value: 'Probability (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Usage Probability']} />
                  <Bar dataKey="probability" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {backgroundGradients.slice(0, 4).map((gradient, index) => (
                <div key={index} className={`h-20 rounded-lg bg-gradient-to-br ${gradient.colors} flex items-center justify-center text-white font-medium shadow-sm`}>
                  {gradient.type} ({gradient.probability}%)
                </div>
              ))}
            </div>
          </div>
        );

      case 'directions':
        return (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={gradientDirections}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="probability"
                  label={({ name, value }) => `${name?.split(' ')[0] || name}: ${value}%`}
                >
                  {gradientDirections.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#84CC16'][index]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Usage Probability']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        );

      case 'buttons':
        return (
          <div className="space-y-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={buttonGradients}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="style" angle={-45} textAnchor="end" height={80} />
                  <YAxis label={{ value: 'Probability (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Usage Probability']} />
                  <Bar dataKey="probability" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {buttonGradients.slice(0, 4).map((button, index) => (
                <button key={index} className={`px-6 py-3 rounded-lg text-white font-medium ${button.tailwind.includes('gradient') ? button.tailwind : 'bg-blue-500'}`}>
                  {button.style} ({button.probability}%)
                </button>
              ))}
            </div>
          </div>
        );

      case 'text':
        return (
          <div className="space-y-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={textGradients}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="style" angle={-45} textAnchor="end" height={80} />
                  <YAxis label={{ value: 'Probability (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Usage Probability']} />
                  <Bar dataKey="probability" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              {textGradients.slice(0, 3).map((text, index) => (
                <div key={index} className="text-center">
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${text.style.toLowerCase().replace(' ', '-').replace(' to ', '-to-')} bg-clip-text text-transparent`}>
                    {text.style} Text Gradient
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{text.usage} ({text.probability}%)</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'opacity':
        return (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={opacityLevels}>
                <PolarGrid />
                <PolarAngleAxis dataKey="opacity" />
                <PolarRadiusAxis angle={90} domain={[0, 50]} />
                <Radar name="Usage Probability" dataKey="probability" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.3} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gradient Usage Probabilities</h1>
          <p className="text-lg text-gray-600 mb-4">
            How likely AI tools are to use different gradient styles and patterns
          </p>
          <div className="text-sm text-gray-500">
            Analysis of gradient usage in AI-generated landing pages and UI components
          </div>
        </div>
      </div>

      {/* Gradient Type Selector */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Gradient Type Analysis</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { key: 'background', label: 'Background', desc: 'Hero/section backgrounds' },
            { key: 'directions', label: 'Directions', desc: 'Gradient angles & types' },
            { key: 'buttons', label: 'Buttons', desc: 'CTA button gradients' },
            { key: 'text', label: 'Text', desc: 'Typography gradients' },
            { key: 'opacity', label: 'Opacity', desc: 'Gradient transparency' }
          ].map((type) => (
            <button
              key={type.key}
              onClick={() => setSelectedType(type.key)}
              className={`p-4 rounded-lg border text-left transition-colors ${
                selectedType === type.key
                  ? 'bg-blue-50 border-blue-300 text-blue-700'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="font-medium">{type.label}</div>
              <div className="text-sm opacity-75">{type.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Current Analysis */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {selectedType === 'background' && 'Background Gradient Combinations'}
            {selectedType === 'directions' && 'Gradient Direction & Type Preferences'}
            {selectedType === 'buttons' && 'Button Gradient Styles'}
            {selectedType === 'text' && 'Text Gradient Applications'}
            {selectedType === 'opacity' && 'Gradient Opacity Levels'}
          </h3>
          <p className="text-gray-600">
            {selectedType === 'background' && 'Most common background gradient combinations used by AI tools'}
            {selectedType === 'directions' && 'Preferred gradient directions and types in AI-generated designs'}
            {selectedType === 'buttons' && 'Gradient styles applied to call-to-action buttons'}
            {selectedType === 'text' && 'Text gradient usage patterns and applications'}
            {selectedType === 'opacity' && 'How transparent or opaque AI gradients typically are'}
          </p>
        </div>

        {renderCurrentAnalysis()}

        {/* Detailed Insights */}
        <div className="mt-6 space-y-4">
          {selectedType === 'background' && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Background Gradient Insights</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><strong>Blue tones dominate (55%):</strong> Professional, trustworthy, modern</li>
                <li><strong>Subtle gradients (60%):</strong> from-*-50 to-*-100 (light to medium)</li>
                <li><strong>Hero sections (80%):</strong> Most common placement for gradients</li>
                <li><strong>Brand colors (30%):</strong> Custom gradients using company colors</li>
                <li><strong>Full-width (90%):</strong> Gradients typically span full container width</li>
              </ul>
            </div>
          )}

          {selectedType === 'directions' && (
            <div className="bg-cyan-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Direction Preferences</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><strong>135deg (35%):</strong> Bottom-right to top-left - natural light direction</li>
                <li><strong>to right (25%):</strong> Left to right - horizontal flow</li>
                <li><strong>Linear gradients (95%):</strong> Radial (3%) and conic (2%) are rare</li>
                <li><strong>Tailwind classes (80%):</strong> bg-gradient-to-br, bg-gradient-to-r</li>
                <li><strong>Custom angles (15%):</strong> 45deg, 225deg for diagonal variety</li>
              </ul>
            </div>
          )}

          {selectedType === 'buttons' && (
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Button Gradient Patterns</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><strong>Primary CTAs (70%):</strong> Blue gradients for main actions</li>
                <li><strong>Brand colors (20%):</strong> Company-specific gradient combinations</li>
                <li><strong>Hover effects (60%):</strong> Darker gradient on hover states</li>
                <li><strong>Solid fallbacks (25%):</strong> No gradient for secondary actions</li>
                <li><strong>Subtle gradients (80%):</strong> 500 to 600 shade differences</li>
              </ul>
            </div>
          )}

          {selectedType === 'text' && (
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Text Gradient Usage</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><strong>Headlines only (60%):</strong> Body text rarely uses gradients</li>
                <li><strong>Brand elements (30%):</strong> Logos, main headings, hero text</li>
                <li><strong>High contrast (80%):</strong> Dark text on light backgrounds</li>
                <li><strong>Tailwind implementation (70%):</strong> bg-gradient-to-r bg-clip-text</li>
                <li><strong>Accessibility concerns (40%):</strong> Often avoided for readability</li>
              </ul>
            </div>
          )}

          {selectedType === 'opacity' && (
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Opacity Considerations</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><strong>Full opacity (40%):</strong> Bold, vibrant gradients for impact</li>
                <li><strong>High opacity (30%):</strong> Rich colors without being overwhelming</li>
                <li><strong>Background overlays (20%):</strong> Medium opacity for text readability</li>
                <li><strong>Subtle effects (10%):</strong> Low opacity for ambient backgrounds</li>
                <li><strong>Performance impact (60%):</strong> AI considers loading speed vs visual impact</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">65%</div>
          <div className="text-sm font-medium text-gray-900">Hero Sections</div>
          <div className="text-xs text-gray-500 mt-1">Use gradients</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">35%</div>
          <div className="text-sm font-medium text-gray-900">Blue Combinations</div>
          <div className="text-xs text-gray-500 mt-1">Most popular</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">135°</div>
          <div className="text-sm font-medium text-gray-900">Most Common</div>
          <div className="text-xs text-gray-500 mt-1">Gradient angle</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">40%</div>
          <div className="text-sm font-medium text-gray-900">Full Opacity</div>
          <div className="text-xs text-gray-500 mt-1">Gradient strength</div>
        </div>
      </div>

      {/* Gradient Examples */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Common AI Gradient Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Background Gradients</h4>
            <div className="space-y-3">
              <div className="h-12 rounded bg-gradient-to-br from-blue-50 to-indigo-100 text-white text-sm flex items-center justify-center font-medium">
                from-blue-50 to-indigo-100 (25%)
              </div>
              <div className="h-12 rounded bg-gradient-to-r from-purple-400 to-pink-400 text-white text-sm flex items-center justify-center font-medium">
                from-purple-400 to-pink-400 (15%)
              </div>
              <div className="h-12 rounded bg-gradient-to-br from-green-400 to-blue-400 text-white text-sm flex items-center justify-center font-medium">
                from-green-400 to-blue-400 (12%)
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Button Gradients</h4>
            <div className="space-y-3">
              <button className="w-full h-12 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium">
                from-blue-500 to-blue-600 (30%)
              </button>
              <button className="w-full h-12 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium">
                from-purple-500 to-pink-500 (20%)
              </button>
              <button className="w-full h-12 rounded bg-gradient-to-r from-green-500 to-green-600 text-white font-medium">
                from-green-500 to-green-600 (15%)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientAnalysis;
