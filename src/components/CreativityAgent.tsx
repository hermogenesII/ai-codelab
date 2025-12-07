import React, { useState } from 'react';
import { Sparkles, Copy, RefreshCw, Zap } from 'lucide-react';

const CreativityAgent: React.FC = () => {
  const [userPrompt, setUserPrompt] = useState('');
  const [enhancedPrompt, setEnhancedPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('art-deco');
  const [creativityLevel, setCreativityLevel] = useState(7);

  const styleInspirations = {
    'art-deco': {
      name: 'Art Deco (1920s)',
      description: 'Geometric patterns, gold accents, bold typography',
      constraints: 'Avoid: Inter font, blue colors, 8px grids. Require: Golden ratio, asymmetrical layouts'
    },
    'brutalist': {
      name: 'Brutalist (1970s)',
      description: 'Raw concrete aesthetics, unconventional layouts',
      constraints: 'Avoid: Rounded corners, pastel colors. Require: Sharp edges, bold contrasts'
    },
    'psychedelic': {
      name: 'Psychedelic (1960s)',
      description: 'Fluid forms, vibrant gradients, organic shapes',
      constraints: 'Avoid: Monochromatic schemes, rigid grids. Require: Color explosions, flowing forms'
    },
    'japanese': {
      name: 'Japanese Wabi-Sabi',
      description: 'Imperfection, asymmetry, natural materials',
      constraints: 'Avoid: Perfect symmetry, synthetic materials. Require: Organic imperfection, mindful spacing'
    },
    'cyberpunk': {
      name: 'Cyberpunk 1980s',
      description: 'Neon glows, digital grids, holographic elements',
      constraints: 'Avoid: Minimalism, natural colors. Require: Neon accents, digital textures'
    }
  };

  const generateEnhancedPrompt = () => {
    if (!userPrompt.trim()) return;

    const style = styleInspirations[selectedStyle as keyof typeof styleInspirations];

    const enhanced = `# CREATIVE DESIGN REQUEST

## Original Prompt
${userPrompt}

## Creativity Enhancement Applied
**Style Inspiration:** ${style.name} - ${style.description}

**Creativity Level:** ${creativityLevel}/10 (Higher = More Novel)

**Constraints & Requirements:**
${style.constraints}
- **Typography:** Use Fibonacci scale instead of standard sizes
- **Colors:** Implement triadic scheme with cultural influences
- **Spacing:** Apply golden ratio (1.618) instead of 8px grids
- **Layout:** Break conventional patterns with ${creativityLevel > 5 ? 'asymmetrical' : 'organic'} arrangements
- **Innovation:** Incorporate unexpected element combinations

## Enhanced Creative Prompt
Design a ${style.name.toLowerCase()}-inspired interface for: **${userPrompt}**

Apply these creativity constraints:
- **Aesthetic:** ${style.description}
- **Avoid Generic:** No Inter/Roboto fonts, no blue primaries, no 8px spacing
- **Require Novel:** ${style.constraints}
- **Creativity Focus:** ${creativityLevel > 7 ? 'Maximum innovation' : creativityLevel > 4 ? 'Balanced creativity' : 'Subtle enhancement'}

Generate a design that breaks from AI probability patterns and embraces ${style.name} aesthetics.`;

    setEnhancedPrompt(enhanced);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Could add a toast notification here
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 p-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-purple-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">AI Creativity Agent</h1>
          </div>
          <p className="text-lg text-gray-600 mb-4">
            Transform generic AI designs into creative, unique interfaces by countering probability bias
          </p>
          <div className="text-sm text-purple-700 bg-purple-100 px-4 py-2 rounded-lg inline-block">
            Fights AI's tendency to always choose Inter fonts, blue colors, and 8px spacing
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Transform Your Design Prompt</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Original Design Prompt
            </label>
            <textarea
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              placeholder="e.g., Create a dashboard for a SaaS analytics app"
              className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Style Inspiration
              </label>
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {Object.entries(styleInspirations).map(([key, style]) => (
                  <option key={key} value={key}>{style.name}</option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                {styleInspirations[selectedStyle as keyof typeof styleInspirations].description}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Creativity Level: {creativityLevel}/10
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={creativityLevel}
                onChange={(e) => setCreativityLevel(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Safe</span>
                <span>Balanced</span>
                <span>Wild</span>
              </div>
            </div>
          </div>

          <button
            onClick={generateEnhancedPrompt}
            className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Zap className="w-5 h-5" />
            <span>Generate Creative Prompt</span>
          </button>
        </div>
      </div>

      {/* Output Section */}
      {enhancedPrompt && (
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Enhanced Creative Prompt</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => copyToClipboard(enhancedPrompt)}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2"
              >
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </button>
              <button
                onClick={generateEnhancedPrompt}
                className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors flex items-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Regenerate</span>
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
              {enhancedPrompt}
            </pre>
          </div>

          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">How to Use</h4>
            <p className="text-sm text-green-700">
              Copy this enhanced prompt and paste it into your favorite AI design tool (Midjourney, DALL-E, ChatGPT with DALL-E, etc.).
              The constraints will force the AI to break from generic patterns and create truly creative designs.
            </p>
          </div>
        </div>
      )}

      {/* Creativity Rules Summary */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Creativity Rules Applied</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-red-600 mb-2">Elements to Avoid</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Inter, Roboto, Open Sans fonts</li>
              <li>• Blue (#3B82F6) primary colors</li>
              <li>• 8px/16px spacing grids</li>
              <li>• Centered, predictable layouts</li>
              <li>• Standard button/component styles</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-600 mb-2">Creativity Enhancements</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Historical/cultural style influences</li>
              <li>• Triadic color schemes</li>
              <li>• Golden ratio & Fibonacci scaling</li>
              <li>• Asymmetrical, organic layouts</li>
              <li>• Novel element combinations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativityAgent;
