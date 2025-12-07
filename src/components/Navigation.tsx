import React from 'react';
import { BarChart3, FileText, Code, Palette, Sparkles, TrendingUp, Rocket } from 'lucide-react';

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onViewChange }) => {
  const views = [
    {
      id: 'creativity-landing',
      label: 'Creativity Agent',
      description: 'Transform AI designs into creative masterpieces',
      icon: Rocket,
      color: 'bg-gray-900'
    },
    {
      id: 'probabilities',
      label: 'Design Probabilities',
      description: 'Font, spacing, color probabilities',
      icon: BarChart3,
      color: 'bg-blue-500'
    },
    {
      id: 'sources',
      label: 'Research Sources',
      description: 'Methodology & evidence',
      icon: FileText,
      color: 'bg-purple-500'
    },
    {
      id: 'frameworks',
      label: 'Frameworks',
      description: 'Tailwind vs Bootstrap analysis',
      icon: Code,
      color: 'bg-orange-500'
    },
    {
      id: 'gradients',
      label: 'Gradients',
      description: 'Gradient usage probabilities',
      icon: Palette,
      color: 'bg-pink-500'
    },
    {
      id: 'creativity',
      label: 'Creativity Agent',
      description: 'Generate creative, non-generic designs',
      icon: Sparkles,
      color: 'bg-purple-500'
    },
    {
      id: 'trending',
      label: 'Trending Topics',
      description: 'Most rated & popular design topics now',
      icon: TrendingUp,
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg">
      <div className="flex flex-col h-full">
        {/* Logo/Brand */}
        <div className="flex items-center px-6 py-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">AI Design Analysis</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {views.map((view) => (
            <button
              key={view.id}
              onClick={() => onViewChange(view.id)}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                currentView === view.id
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              title={view.description}
            >
              <view.icon className="w-5 h-5 mr-3" />
              {view.label}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="text-xs text-gray-500">
            Analyze & Generate Creative Designs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
