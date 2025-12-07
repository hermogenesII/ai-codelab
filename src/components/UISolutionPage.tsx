import React, { useState, useRef } from 'react';

interface DesignSystem {
  colors: {
    primary: string[];
    secondary: string[];
    accent: string[];
    background: string[];
  };
  typography: {
    fonts: string[];
    sizes: string[];
    weights: string[];
    lineHeights: string[];
  };
  spacing: {
    scale: string[];
    layout: {
      container: string;
      gutters: string;
      margins: string;
    };
  };
  components: {
    buttons: any[];
    inputs: any[];
    cards: any[];
    navigation: any[];
  };
  patterns: {
    layout: string[];
    interaction: string[];
    visual: string[];
  };
}

const UISolutionPage: React.FC = () => {
  const [activeApproach, setActiveApproach] = useState(1);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [designSystem, setDesignSystem] = useState<DesignSystem | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const approaches = [
    {
      id: 1,
      title: "🎯 Reference-Based Design",
      subtitle: "Browse, Copy & Reference Existing UI",
      description: "Find inspiration from existing designs while maintaining creative control"
    },
    {
      id: 2,
      title: "🔍 Design System Extraction",
      subtitle: "UI → JSON Design System",
      description: "Extract structured design data without recreating generic patterns"
    },
    {
      id: 3,
      title: "🛠️ Component Library Integration",
      subtitle: "JavaScript Components + Recommendations",
      description: "Leverage battle-tested components with curated recommendations"
    }
  ];

  const recommendations = [
    {
      name: "Radix UI",
      description: "Unstyled, accessible components for building high-quality design systems",
      pros: ["Accessibility-first", "Fully customizable", "Tree-shakeable"],
      website: "https://www.radix-ui.com",
      github: "https://github.com/radix-ui/primitives"
    },
    {
      name: "Headless UI",
      description: "Completely unstyled, fully accessible UI components for React",
      pros: ["Zero styling", "Accessibility built-in", "Framework agnostic"],
      website: "https://headlessui.com",
      github: "https://github.com/tailwindlabs/headlessui"
    },
    {
      name: "Chakra UI",
      description: "Simple, modular and accessible component library for React",
      pros: ["Themeable", "Accessible", "Developer experience"],
      website: "https://chakra-ui.com",
      github: "https://github.com/chakra-ui/chakra-ui"
    },
    {
      name: "Mantine",
      description: "React components library with 100+ components and hooks",
      pros: ["Extensive components", "TypeScript first", "Customizable themes"],
      website: "https://mantine.dev",
      github: "https://github.com/mantinedev/mantine"
    },
    {
      name: "Ant Design",
      description: "Enterprise-class UI design language and React components",
      pros: ["Enterprise-ready", "Internationalization", "Comprehensive"],
      website: "https://ant.design",
      github: "https://github.com/ant-design/ant-design"
    },
    {
      name: "Material-UI (MUI)",
      description: "React components implementing Google's Material Design",
      pros: ["Material Design", "Extensive ecosystem", "Active community"],
      website: "https://mui.com",
      github: "https://github.com/mui/material-ui"
    },
    {
      name: "React Spectrum",
      description: "Adobe's design system and component library for React",
      pros: ["Adobe design system", "Accessibility excellence", "Design tokens"],
      website: "https://react-spectrum.adobe.com",
      github: "https://github.com/adobe/react-spectrum"
    }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const extractDesignSystem = async () => {
    if (!uploadedImage) return;

    setIsAnalyzing(true);

    // Simulate AI analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate comprehensive design system JSON
    const extractedDesignSystem: DesignSystem = {
      colors: {
        primary: ["#1a365d", "#2b6cb0", "#3182ce", "#4299e1"],
        secondary: ["#2d3748", "#4a5568", "#718096", "#a0aec0"],
        accent: ["#38a169", "#48bb78", "#68d391", "#9ae6b4"],
        background: ["#f7fafc", "#edf2f7", "#e2e8f0", "#cbd5e0"]
      },
      typography: {
        fonts: ["Inter", "SF Pro Display", "Helvetica Neue"],
        sizes: ["0.75rem", "0.875rem", "1rem", "1.125rem", "1.25rem", "1.5rem", "2rem"],
        weights: ["300", "400", "500", "600", "700"],
        lineHeights: ["1.25", "1.375", "1.5", "1.625"]
      },
      spacing: {
        scale: ["0.25rem", "0.5rem", "0.75rem", "1rem", "1.5rem", "2rem", "3rem", "4rem"],
        layout: {
          container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          gutters: "space-x-4 sm:space-x-6 lg:space-x-8",
          margins: "my-8 sm:my-12 lg:my-16"
        }
      },
      components: {
        buttons: [
          {
            name: "Primary Button",
            styles: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg",
            variants: ["solid", "outline", "ghost"]
          }
        ],
        inputs: [
          {
            name: "Text Input",
            styles: "border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
            states: ["default", "focus", "error", "disabled"]
          }
        ],
        cards: [
          {
            name: "Content Card",
            styles: "bg-white rounded-xl shadow-lg p-6 border border-gray-100",
            layouts: ["default", "elevated", "outlined"]
          }
        ],
        navigation: [
          {
            name: "Header Nav",
            styles: "flex items-center justify-between py-4 border-b border-gray-200",
            responsive: true
          }
        ]
      },
      patterns: {
        layout: ["12-column grid", "container-centered", "flex-responsive"],
        interaction: ["hover states", "focus indicators", "loading states"],
        visual: ["consistent spacing", "color harmony", "typographic scale"]
      }
    };

    setDesignSystem(extractedDesignSystem);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              🛠️ Generic UI Solution Hub
            </h1>
            <p className="text-lg text-gray-600">
              Transform generic AI-generated UIs into creative, unique interfaces
            </p>
          </div>
        </div>
      </div>

      {/* Approach Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {approaches.map((approach) => (
            <button
              key={approach.id}
              onClick={() => setActiveApproach(approach.id)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                activeApproach === approach.id
                  ? 'border-indigo-500 bg-indigo-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {approach.title}
              </h3>
              <h4 className="text-sm font-medium text-indigo-600 mb-3">
                {approach.subtitle}
              </h4>
              <p className="text-gray-600 text-sm">
                {approach.description}
              </p>
            </button>
          ))}
        </div>

        {/* Approach Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {activeApproach === 1 && (
            <div className="p-8">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">🎯</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Reference-Based Design Approach
                  </h2>
                  <p className="text-gray-600">Find inspiration without copying generic patterns</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-4">✅ PROS</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700">Quick visual reference for design decisions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700">Maintains design consistency across projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700">Easy to implement and iterate upon</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700">Provides real-world context and constraints</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-4">❌ CONS</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-700">May perpetuate generic design patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-700">Limited creativity and originality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-700">Dependency on existing solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-700">May not address unique project needs</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Best Practices</h4>
                <ul className="text-blue-800 space-y-1">
                  <li>• Use references as inspiration, not templates</li>
                  <li>• Combine elements from multiple sources creatively</li>
                  <li>• Always adapt to your specific use case and brand</li>
                  <li>• Focus on solving user problems, not matching designs</li>
                </ul>
              </div>
            </div>
          )}

          {activeApproach === 2 && (
            <div className="p-8">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">🔍</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Design System Extraction
                  </h2>
                  <p className="text-gray-600">Extract structured data from UI images</p>
                </div>
              </div>

              {/* Image Upload */}
              <div className="mb-8">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  {uploadedImage ? (
                    <div>
                      <img
                        src={uploadedImage}
                        alt="Uploaded UI"
                        className="max-w-full max-h-64 mx-auto rounded-lg shadow-lg mb-4"
                      />
                      <button
                        onClick={() => setUploadedImage(null)}
                        className="text-red-600 hover:text-red-800 font-medium"
                      >
                        Remove Image
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="text-6xl mb-4">📸</div>
                      <p className="text-gray-600 mb-4">
                        Upload a UI screenshot to extract design system data
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                      >
                        Choose Image
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Analysis Button */}
              {uploadedImage && !designSystem && (
                <div className="text-center mb-8">
                  <button
                    onClick={extractDesignSystem}
                    disabled={isAnalyzing}
                    className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isAnalyzing ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Analyzing Design System...
                      </span>
                    ) : (
                      '🔍 Extract Design System'
                    )}
                  </button>
                </div>
              )}

              {/* Design System Output */}
              {designSystem && (
                <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{JSON.stringify(designSystem, null, 2)}</pre>
                </div>
              )}
            </div>
          )}

          {activeApproach === 3 && (
            <div className="p-8">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">🛠️</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Component Library Integration
                  </h2>
                  <p className="text-gray-600">Battle-tested components with curated recommendations</p>
                </div>
              </div>

              {/* Component Library Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {recommendations.map((lib, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{lib.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{lib.description}</p>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-2">Key Benefits:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {lib.pros.map((pro, i) => (
                          <li key={i} className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-3">
                      <a
                        href={lib.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                      >
                        Website →
                      </a>
                      <a
                        href={lib.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 text-sm font-medium"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Implementation Guide */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-indigo-900 mb-4">
                  🚀 Implementation Strategy
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-indigo-800 mb-2">1. Choose Your Foundation</h4>
                    <p className="text-indigo-700 text-sm">
                      Start with a headless library like Radix UI or Headless UI for maximum flexibility,
                      then layer your design system on top.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-800 mb-2">2. Build Your Design System</h4>
                    <p className="text-indigo-700 text-sm">
                      Use the extracted design system from Approach 2 to create consistent,
                      branded components.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-800 mb-2">3. Add Creative Constraints</h4>
                    <p className="text-indigo-700 text-sm">
                      Apply the Creativity Agent rules to ensure your components break
                      generic patterns.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-800 mb-2">4. Test & Iterate</h4>
                    <p className="text-indigo-700 text-sm">
                      Use real user feedback and A/B testing to refine your component
                      implementations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UISolutionPage;
