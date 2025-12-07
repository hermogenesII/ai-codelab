import { useState } from 'react';
import Navigation from './components/Navigation';
import DesignProbabilityChart from './components/DesignProbabilityChart';
import DesignProbabilitySources from './components/DesignProbabilitySources';
import TailwindBootstrapAnalysis from './components/TailwindBootstrapAnalysis';
import GradientAnalysis from './components/GradientAnalysis';
import CreativityAgent from './components/CreativityAgent';
import MostRatedPopularTopics from './components/MostRatedPopularTopics';
import MinimalCreativityLanding from './components/MinimalCreativityLanding';
import UISolutionPage from './components/UISolutionPage';

function App() {
  const [currentView, setCurrentView] = useState('creativity-landing');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'creativity-landing':
        return <MinimalCreativityLanding />;
      case 'probabilities':
        return <DesignProbabilityChart />;
      case 'sources':
        return <DesignProbabilitySources />;
      case 'frameworks':
        return <TailwindBootstrapAnalysis />;
      case 'gradients':
        return <GradientAnalysis />;
      case 'creativity':
        return <CreativityAgent />;
      case 'trending':
        return <MostRatedPopularTopics />;
      case 'ui-solution':
        return <UISolutionPage />;
      default:
        return <MinimalCreativityLanding />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      <div className="pl-64">
        {renderCurrentView()}
      </div>
    </div>
  );
}

export default App;
