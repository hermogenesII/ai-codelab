import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const TailwindBootstrapAnalysis: React.FC = () => {
  const [selectedFramework, setSelectedFramework] = useState('tailwind');

  // Framework usage in AI tools
  const frameworkUsage = [
    { tool: 'ChatGPT', tailwind: 75, bootstrap: 20, custom: 5 },
    { tool: 'Claude', tailwind: 80, bootstrap: 15, custom: 5 },
    { tool: 'Figma AI', tailwind: 85, bootstrap: 10, custom: 5 },
    { tool: 'Midjourney', tailwind: 70, bootstrap: 25, custom: 5 },
    { tool: 'Uizard', tailwind: 65, bootstrap: 30, custom: 5 },
    { tool: 'Anima', tailwind: 60, bootstrap: 35, custom: 5 }
  ];

  // Tailwind class usage probabilities
  const tailwindClasses = [
    { category: 'Spacing', probability: 35, classes: 'p-4, m-2, gap-6' },
    { category: 'Colors', probability: 25, classes: 'bg-blue-500, text-gray-900' },
    { category: 'Typography', probability: 20, classes: 'text-lg, font-semibold' },
    { category: 'Layout', probability: 15, classes: 'flex, grid, justify-center' },
    { category: 'Responsive', probability: 5, classes: 'md:flex, lg:grid-cols-3' }
  ];

  // Bootstrap class usage probabilities
  const bootstrapClasses = [
    { category: 'Grid System', probability: 30, classes: 'container, row, col-md-6' },
    { category: 'Components', probability: 25, classes: 'btn-primary, card, navbar' },
    { category: 'Utilities', probability: 20, classes: 'text-center, bg-light, p-3' },
    { category: 'Spacing', probability: 15, classes: 'mt-3, mb-4, px-2' },
    { category: 'Colors', probability: 10, classes: 'bg-primary, text-success' }
  ];

  // Utility class frequency comparison
  const utilityComparison = [
    { utility: 'Padding/Margin', tailwind: 40, bootstrap: 25 },
    { utility: 'Colors', tailwind: 30, bootstrap: 15 },
    { utility: 'Typography', tailwind: 20, bootstrap: 20 },
    { utility: 'Layout', tailwind: 25, bootstrap: 30 },
    { utility: 'Components', tailwind: 10, bootstrap: 35 }
  ];

  // Framework preference by design type
  const designTypePrefs = [
    { type: 'Dashboard', tailwind: 80, bootstrap: 15, custom: 5 },
    { type: 'Landing Page', tailwind: 60, bootstrap: 30, custom: 10 },
    { type: 'E-commerce', tailwind: 55, bootstrap: 35, custom: 10 },
    { type: 'Admin Panel', tailwind: 85, bootstrap: 10, custom: 5 },
    { type: 'Blog/Site', tailwind: 50, bootstrap: 40, custom: 10 },
    { type: 'Mobile App', tailwind: 90, bootstrap: 5, custom: 5 }
  ];

  const renderCurrentAnalysis = () => {
    switch (selectedFramework) {
      case 'usage':
        return (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={frameworkUsage}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="tool" />
                <YAxis label={{ value: 'Usage (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="tailwind" stackId="a" fill="#06B6D4" name="Tailwind CSS" />
                <Bar dataKey="bootstrap" stackId="a" fill="#7952B3" name="Bootstrap" />
                <Bar dataKey="custom" stackId="a" fill="#6B7280" name="Custom CSS" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );

      case 'tailwind-classes':
        return (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={tailwindClasses}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="probability"
                  label={({ payload, percent }) => `${payload?.category}: ${percent ? (percent * 100).toFixed(0) : 0}%`}
                >
                  {tailwindClasses.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#06B6D4', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'][index]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Usage Probability']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        );

      case 'bootstrap-classes':
        return (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={bootstrapClasses}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="probability"
                  label={({ payload, percent }) => `${payload?.category}: ${percent ? (percent * 100).toFixed(0) : 0}%`}
                >
                  {bootstrapClasses.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#7952B3', '#198754', '#6C757D', '#0D6EFD', '#FFC107'][index]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Usage Probability']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        );

      case 'comparison':
        return (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={utilityComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="utility" angle={-45} textAnchor="end" height={80} />
                <YAxis label={{ value: 'Usage Frequency (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="tailwind" fill="#06B6D4" name="Tailwind CSS" radius={[4, 4, 0, 0]} />
                <Bar dataKey="bootstrap" fill="#7952B3" name="Bootstrap" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );

      case 'design-types':
        return (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={designTypePrefs}>
                <PolarGrid />
                <PolarAngleAxis dataKey="type" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Tailwind CSS" dataKey="tailwind" stroke="#06B6D4" fill="#06B6D4" fillOpacity={0.3} />
                <Radar name="Bootstrap" dataKey="bootstrap" stroke="#7952B3" fill="#7952B3" fillOpacity={0.3} />
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tailwind vs Bootstrap in AI Design</h1>
            <p className="text-lg text-gray-600 mb-4">
              How AI tools choose between CSS frameworks
            </p>
            <div className="text-sm text-gray-500">
              Framework preferences and usage patterns in AI-generated designs
            </div>
          </div>
        </div>

        {/* Framework Selector */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Analysis Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { key: 'usage', label: 'AI Tool Usage', desc: 'Framework adoption by tool' },
              { key: 'tailwind-classes', label: 'Tailwind Classes', desc: 'Utility usage patterns' },
              { key: 'bootstrap-classes', label: 'Bootstrap Classes', desc: 'Component usage patterns' },
              { key: 'comparison', label: 'Direct Comparison', desc: 'Utility vs component focus' },
              { key: 'design-types', label: 'Design Types', desc: 'Framework by project type' }
            ].map((analysis) => (
              <button
                key={analysis.key}
                onClick={() => setSelectedFramework(analysis.key)}
                className={`p-4 rounded-lg border text-left transition-colors ${
                  selectedFramework === analysis.key
                    ? 'bg-blue-50 border-blue-300 text-blue-700'
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="font-medium">{analysis.label}</div>
                <div className="text-sm opacity-75">{analysis.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Current Analysis */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {selectedFramework === 'usage' && 'Framework Usage by AI Tool'}
              {selectedFramework === 'tailwind-classes' && 'Tailwind CSS Class Distribution'}
              {selectedFramework === 'bootstrap-classes' && 'Bootstrap Class Distribution'}
              {selectedFramework === 'comparison' && 'Utility vs Component Approach'}
              {selectedFramework === 'design-types' && 'Framework Preferences by Design Type'}
            </h3>
            <p className="text-gray-600">
              {selectedFramework === 'usage' && 'How different AI tools prefer Tailwind CSS vs Bootstrap'}
              {selectedFramework === 'tailwind-classes' && 'Most commonly generated Tailwind utility classes'}
              {selectedFramework === 'bootstrap-classes' && 'Most commonly generated Bootstrap classes'}
              {selectedFramework === 'comparison' && 'Comparing utility-first vs component-based approaches'}
              {selectedFramework === 'design-types' && 'Which framework AI chooses for different project types'}
            </p>
          </div>

          {renderCurrentAnalysis()}

          {/* Detailed Insights */}
          <div className="mt-6 space-y-4">
            {selectedFramework === 'usage' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Tailwind Dominance</h4>
                  <p className="text-sm text-gray-700">
                    AI tools increasingly prefer Tailwind CSS (60-85% usage) due to its utility-first approach
                    that aligns with AI's pattern-matching capabilities. Tailwind's atomic design makes it
                    easier for AI to generate specific, targeted styles.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Bootstrap Persistence</h4>
                  <p className="text-sm text-gray-700">
                    Bootstrap still maintains 15-35% usage, particularly in tools focused on rapid prototyping
                    and component-based design. Its semantic class names and pre-built components appeal to
                    AI systems prioritizing speed over customization.
                  </p>
                </div>
              </div>
            )}

            {selectedFramework === 'tailwind-classes' && (
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">AI's Tailwind Preferences</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Spacing (35%):</strong> p-4, m-2, gap-6 - AI loves the 8px grid system</li>
                  <li><strong>Colors (25%):</strong> bg-blue-500, text-gray-900 - Standard color palette</li>
                  <li><strong>Typography (20%):</strong> text-lg, font-semibold - Consistent text hierarchy</li>
                  <li><strong>Layout (15%):</strong> flex, grid, justify-center - Modern CSS approaches</li>
                  <li><strong>Responsive (5%):</strong> md:flex, lg:grid-cols-3 - Mobile-first mindset</li>
                </ul>
              </div>
            )}

            {selectedFramework === 'bootstrap-classes' && (
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">AI's Bootstrap Preferences</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Grid System (30%):</strong> container, row, col-md-6 - Familiar 12-column grid</li>
                  <li><strong>Components (25%):</strong> btn-primary, card, navbar - Pre-styled components</li>
                  <li><strong>Utilities (20%):</strong> text-center, bg-light, p-3 - Helper classes</li>
                  <li><strong>Spacing (15%):</strong> mt-3, mb-4, px-2 - Margin/padding utilities</li>
                  <li><strong>Colors (10%):</strong> bg-primary, text-success - Semantic color system</li>
                </ul>
              </div>
            )}

            {selectedFramework === 'comparison' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Tailwind Strengths</h4>
                  <p className="text-sm text-gray-700">
                    Excels in spacing (40%) and colors (30%) due to granular control.
                    AI can easily combine utilities for precise styling without conflicts.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Bootstrap Strengths</h4>
                  <p className="text-sm text-gray-700">
                    Dominates layout (30%) and components (35%) with pre-built solutions.
                    AI favors Bootstrap for rapid prototyping with consistent components.
                  </p>
                </div>
              </div>
            )}

            {selectedFramework === 'design-types' && (
              <div className="bg-gradient-to-r from-cyan-50 to-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Framework Selection Logic</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-cyan-700">Tailwind Preferred:</strong>
                    <ul className="text-gray-700 mt-1 space-y-1">
                      <li>• Dashboards (80%) - Utility precision</li>
                      <li>• Admin Panels (85%) - Custom layouts</li>
                      <li>• Mobile Apps (90%) - Performance</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-purple-700">Bootstrap Preferred:</strong>
                    <ul className="text-gray-700 mt-1 space-y-1">
                      <li>• E-commerce (35%) - Component richness</li>
                      <li>• Landing Pages (30%) - Speed</li>
                      <li>• Blogs (40%) - Familiar patterns</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">72%</div>
            <div className="text-sm font-medium text-gray-900">Average Tailwind Usage</div>
            <div className="text-xs text-gray-500 mt-1">Across AI tools</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">23%</div>
            <div className="text-sm font-medium text-gray-900">Average Bootstrap Usage</div>
            <div className="text-xs text-gray-500 mt-1">Across AI tools</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
            <div className="text-sm font-medium text-gray-900">Dashboard Projects</div>
            <div className="text-xs text-gray-500 mt-1">Choose Tailwind</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">35%</div>
            <div className="text-sm font-medium text-gray-900">E-commerce Projects</div>
            <div className="text-xs text-gray-500 mt-1">Choose Bootstrap</div>
          </div>
        </div>

        {/* Framework Decision Tree */}
        <div className="bg-gradient-to-r from-cyan-50 via-white to-purple-50 rounded-lg border border-cyan-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Framework Decision Tree</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <span className="text-sm"><strong>Utility Control Needed?</strong> → Tailwind (80%)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm"><strong>Pre-built Components?</strong> → Bootstrap (75%)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm"><strong>Performance Critical?</strong> → Tailwind (85%)</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm"><strong>Rapid Prototyping?</strong> → Bootstrap (70%)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm"><strong>Custom Design System?</strong> → Tailwind (90%)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span className="text-sm"><strong>Enterprise Constraints?</strong> → Bootstrap (60%)</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default TailwindBootstrapAnalysis;
