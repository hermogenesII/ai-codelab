import { useState } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import DesignProbabilityChart from './components/DesignProbabilityChart';
import DesignProbabilitySources from './components/DesignProbabilitySources';
import TailwindBootstrapAnalysis from './components/TailwindBootstrapAnalysis';
import GradientAnalysis from './components/GradientAnalysis';

function App() {
  const [currentView, setCurrentView] = useState('landing');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage />;
      case 'probabilities':
        return <DesignProbabilityChart />;
      case 'sources':
        return <DesignProbabilitySources />;
      case 'frameworks':
        return <TailwindBootstrapAnalysis />;
      case 'gradients':
        return <GradientAnalysis />;
      default:
        return <LandingPage />;
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
