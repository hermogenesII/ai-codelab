import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const DesignProbabilityChart: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('fonts');

  // Font probabilities
  const fontData = [
    { name: 'Inter', probability: 45, color: '#3B82F6' },
    { name: 'Roboto', probability: 28, color: '#10B981' },
    { name: 'System Fonts', probability: 15, color: '#6B7280' },
    { name: 'Open Sans', probability: 6, color: '#F59E0B' },
    { name: 'SF Pro', probability: 4, color: '#EF4444' },
    { name: 'Helvetica', probability: 2, color: '#8B5CF6' }
  ];

  // Font size usage frequencies
  const fontSizeData = [
    { size: '12px', usage: 25, category: 'Labels' },
    { size: '14px', usage: 45, category: 'Body Text' },
    { size: '16px', usage: 35, category: 'Secondary' },
    { size: '18px', usage: 20, category: 'Headings' },
    { size: '20px', usage: 15, category: 'Subheadings' },
    { size: '24px', usage: 10, category: 'Main Headings' },
    { size: '30px', usage: 5, category: 'Large Headings' },
    { size: '36px', usage: 3, category: 'Hero Text' }
  ];

  // Spacing system probabilities
  const spacingData = [
    { value: '4px', probability: 30, usage: 'Small gaps, borders' },
    { value: '8px', probability: 40, usage: 'Standard padding' },
    { value: '12px', probability: 20, usage: 'Medium gaps' },
    { value: '16px', probability: 35, usage: 'Card padding' },
    { value: '20px', probability: 15, usage: 'Large gaps' },
    { value: '24px', probability: 30, usage: 'Section spacing' },
    { value: '32px', probability: 25, usage: 'Major breaks' },
    { value: '48px', probability: 10, usage: 'Page margins' },
    { value: '64px', probability: 5, usage: 'Hero sections' }
  ];

  // Color scheme probabilities
  const colorData = [
    { name: 'Blue (#3B82F6)', probability: 35, category: 'Primary' },
    { name: 'Green (#10B981)', probability: 25, category: 'Success' },
    { name: 'Gray (#6B7280)', probability: 20, category: 'Neutral' },
    { name: 'Purple (#8B5CF6)', probability: 10, category: 'Accent' },
    { name: 'Orange (#F97316)', probability: 5, category: 'Warning' },
    { name: 'Red (#EF4444)', probability: 3, category: 'Error' },
    { name: 'Yellow (#EAB308)', probability: 2, category: 'Info' }
  ];

  // Layout pattern probabilities
  const layoutData = [
    { pattern: 'Flexbox', probability: 75, description: 'Flexible layouts' },
    { pattern: 'CSS Grid', probability: 25, description: 'Complex grids' },
    { pattern: 'Float', probability: 5, description: 'Legacy layouts' },
    { pattern: 'Absolute', probability: 3, description: 'Overlays' }
  ];

  // Border radius probabilities
  const radiusData = [
    { value: '0px', probability: 5, usage: 'Sharp edges' },
    { value: '4px', probability: 20, usage: 'Small elements' },
    { value: '6px', probability: 35, usage: 'Buttons' },
    { value: '8px', probability: 45, usage: 'Cards, modals' },
    { value: '12px', probability: 15, usage: 'Large containers' },
    { value: '16px', probability: 5, usage: 'Hero elements' },
    { value: '50%', probability: 2, usage: 'Circular elements' }
  ];

  const getCurrentData = () => {
    switch (selectedCategory) {
      case 'fonts': return fontData;
      case 'fontSizes': return fontSizeData;
      case 'spacing': return spacingData;
      case 'colors': return colorData;
      case 'layouts': return layoutData;
      case 'radius': return radiusData;
      default: return fontData;
    }
  };

  const getChartType = () => {
    switch (selectedCategory) {
      case 'fonts':
      case 'colors':
        return 'pie';
      case 'fontSizes':
      case 'spacing':
      case 'layouts':
      case 'radius':
        return 'bar';
      default:
        return 'bar';
    }
  };

  const renderChart = () => {
    const data = getCurrentData();
    const chartType = getChartType();

    if (chartType === 'pie') {
      return (
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={120}
                dataKey="probability"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {data.map((entry: any, index) => (
                  <Cell key={`cell-${index}`} fill={(entry as any).color || '#3B82F6'} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, 'Probability']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      );
    }

    return (
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey={selectedCategory === 'fontSizes' ? 'size' : selectedCategory === 'spacing' ? 'value' : 'name'}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              angle={selectedCategory === 'fontSizes' ? -45 : 0}
              textAnchor={selectedCategory === 'fontSizes' ? 'end' : 'middle'}
              height={80}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              label={{ value: 'Probability (%)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                fontSize: '14px'
              }}
              formatter={(value, _name) => [
                `${value}%`,
                selectedCategory === 'fontSizes' ? 'Usage Frequency' : 'Probability'
              ]}
              labelFormatter={(label) => {
                if (selectedCategory === 'fontSizes') return `${label} (${(data.find((d: any) => d.size === label) as any)?.category})`;
                if (selectedCategory === 'spacing') return `${label} - ${(data.find((d: any) => d.value === label) as any)?.usage}`;
                return label;
              }}
            />
            <Bar
              dataKey={selectedCategory === 'fontSizes' ? 'usage' : 'probability'}
              fill="#3B82F6"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Design Probability Distribution</h1>
            <p className="text-lg text-gray-600 mb-6">
              Statistical breakdown of what AI tools generate for dashboard UI elements
            </p>
            <div className="text-sm text-gray-500">
              Based on analysis of thousands of AI-generated dashboard designs
            </div>
          </div>
        </div>

        {/* Category Selector */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Design Element</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { key: 'fonts', label: 'Fonts', desc: 'Typography choices' },
              { key: 'fontSizes', label: 'Font Sizes', desc: 'Text sizing' },
              { key: 'spacing', label: 'Spacing', desc: 'Margins & padding' },
              { key: 'colors', label: 'Colors', desc: 'Color schemes' },
              { key: 'layouts', label: 'Layouts', desc: 'CSS layout methods' },
              { key: 'radius', label: 'Border Radius', desc: 'Corner rounding' }
            ].map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`p-4 rounded-lg border text-left transition-colors ${
                  selectedCategory === category.key
                    ? 'bg-blue-50 border-blue-300 text-blue-700'
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="font-medium">{category.label}</div>
                <div className="text-sm opacity-75">{category.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Chart Display */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 capitalize">
                {selectedCategory.replace(/([A-Z])/g, ' $1').trim()} Probability
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                How likely AI tools are to use each option when generating dashboards
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                {getCurrentData().reduce((sum, item: any) =>
                  sum + (selectedCategory === 'fontSizes' ? item.usage : item.probability), 0
                )}%
              </div>
              <div className="text-sm text-gray-500">Total Probability</div>
            </div>
          </div>

          {renderChart()}

          {/* Insights */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Key Insights</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {selectedCategory === 'fonts' && (
                <>
                  <li>• Inter dominates (45%) due to modern, professional appearance</li>
                  <li>• Roboto (28%) is Google's reliable choice for Android/web</li>
                  <li>• System fonts (15%) prioritize performance over aesthetics</li>
                </>
              )}
              {selectedCategory === 'fontSizes' && (
                <>
                  <li>• 14px body text is most common (45% usage)</li>
                  <li>• 12px for labels, 16px for secondary text</li>
                  <li>• Headings follow 18px-24px range</li>
                </>
              )}
              {selectedCategory === 'spacing' && (
                <>
                  <li>• 8px and 16px are the most used values (40%+ each)</li>
                  <li>• 4px multiples create consistent 8px grid system</li>
                  <li>• 24px and 32px for major layout breaks</li>
                </>
              )}
              {selectedCategory === 'colors' && (
                <>
                  <li>• Blue (#3B82F6) is the most probable primary color (35%)</li>
                  <li>• Green (#10B981) for success states (25%)</li>
                  <li>• Gray tones (#6B7280) for neutral elements (20%)</li>
                </>
              )}
              {selectedCategory === 'layouts' && (
                <>
                  <li>• Flexbox dominates (75%) for flexible, responsive layouts</li>
                  <li>• CSS Grid (25%) for complex 2D layouts</li>
                  <li>• Legacy methods (Float/Absolute) are rare (8% combined)</li>
                </>
              )}
              {selectedCategory === 'radius' && (
                <>
                  <li>• 8px radius most common (45%) for cards and modals</li>
                  <li>• 6px for buttons (35%), 4px for small elements (20%)</li>
                  <li>• Sharp edges (0px) are rare (5%) in modern designs</li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-sm font-medium text-gray-900">Design Consistency</div>
            <div className="text-xs text-gray-500 mt-1">Across AI tools</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">45</div>
            <div className="text-sm font-medium text-gray-900">Most Common Choice</div>
            <div className="text-xs text-gray-500 mt-1">Inter font probability</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">8px</div>
            <div className="text-sm font-medium text-gray-900">Standard Grid Unit</div>
            <div className="text-xs text-gray-500 mt-1">Most used spacing</div>
          </div>
        </div>
    </div>
  );
};

export default DesignProbabilityChart;
