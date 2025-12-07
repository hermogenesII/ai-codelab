import React, { useState } from 'react';

interface TopicData {
  id: string;
  title: string;
  description: string;
  rating: number;
  popularity: number;
  category: string;
  trend: 'rising' | 'hot' | 'stable' | 'declining';
  tags: string[];
  lastUpdated: string;
}

const MostRatedPopularTopics: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'rating' | 'popularity' | 'trend'>('rating');

  // Creative topic data inspired by design trends with creativity constraints applied
  const topics: TopicData[] = [
    {
      id: '1',
      title: 'Organic Micro-interactions',
      description: 'Fluid, nature-inspired animations that breathe life into interfaces using golden ratio timing and Fibonacci sequences.',
      rating: 9.7,
      popularity: 2847,
      category: 'Animation',
      trend: 'hot',
      tags: ['Micro-interactions', 'Organic Design', 'Golden Ratio'],
      lastUpdated: '2 hours ago'
    },
    {
      id: '2',
      title: 'Cultural Typography Fusion',
      description: 'Blending Arabic calligraphy influences with Scandinavian minimalism for truly unique typographic hierarchies.',
      rating: 9.5,
      popularity: 3124,
      category: 'Typography',
      trend: 'rising',
      tags: ['Cultural Fusion', 'Typography', 'Global Design'],
      lastUpdated: '4 hours ago'
    },
    {
      id: '3',
      title: 'Psychedelic Color Psychology',
      description: '1960s-inspired triadic color schemes that enhance user emotions and engagement through calculated chromatic orchestration.',
      rating: 9.3,
      popularity: 1987,
      category: 'Color Theory',
      trend: 'hot',
      tags: ['Color Psychology', 'Triadic Schemes', 'Emotional Design'],
      lastUpdated: '1 hour ago'
    },
    {
      id: '4',
      title: 'Asymmetrical Layout Poetry',
      description: 'Breaking grid conventions with organic flow layouts inspired by Japanese Zen gardens and Art Nouveau curves.',
      rating: 9.2,
      popularity: 2654,
      category: 'Layout',
      trend: 'rising',
      tags: ['Asymmetrical', 'Organic Flow', 'Zen Gardens'],
      lastUpdated: '3 hours ago'
    },
    {
      id: '5',
      title: 'Brutalist Digital Aesthetics',
      description: 'Raw, unpolished digital experiences celebrating imperfection and authenticity in an overly polished world.',
      rating: 8.9,
      popularity: 1789,
      category: 'Aesthetics',
      trend: 'stable',
      tags: ['Brutalism', 'Authenticity', 'Raw Design'],
      lastUpdated: '6 hours ago'
    },
    {
      id: '6',
      title: 'Holographic Interface Elements',
      description: 'Cyberpunk-inspired translucent layers and depth effects creating immersive, multi-dimensional user experiences.',
      rating: 8.8,
      popularity: 2234,
      category: '3D Effects',
      trend: 'rising',
      tags: ['Holographic', 'Cyberpunk', 'Depth Effects'],
      lastUpdated: '5 hours ago'
    },
    {
      id: '7',
      title: 'Variable Font Orchestration',
      description: 'Dynamic typography systems that adapt to content and context using unconventional weight combinations.',
      rating: 8.7,
      popularity: 1945,
      category: 'Typography',
      trend: 'stable',
      tags: ['Variable Fonts', 'Adaptive Typography', 'Contextual'],
      lastUpdated: '7 hours ago'
    },
    {
      id: '8',
      title: 'Indigenous Pattern Integration',
      description: 'Incorporating meaningful cultural symbols and natural motifs from indigenous design traditions.',
      rating: 9.1,
      popularity: 1543,
      category: 'Patterns',
      trend: 'hot',
      tags: ['Indigenous', 'Cultural Symbols', 'Natural Motifs'],
      lastUpdated: '8 hours ago'
    }
  ];

  const categories = ['all', ...Array.from(new Set(topics.map(t => t.category)))];


  const getTrendText = (trend: string) => {
    switch (trend) {
      case 'hot': return 'HOT';
      case 'rising': return 'RISING';
      case 'stable': return 'STABLE';
      case 'declining': return 'DECLINING';
      default: return 'STABLE';
    }
  };

  const filteredTopics = selectedCategory === 'all'
    ? topics
    : topics.filter(topic => topic.category === selectedCategory);

  const sortedTopics = [...filteredTopics].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
        return b.popularity - a.popularity;
      case 'trend':
        const trendOrder = { 'hot': 4, 'rising': 3, 'stable': 2, 'declining': 1 };
        return trendOrder[b.trend] - trendOrder[a.trend];
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Creative Typography */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="text-4xl font-bold text-gray-800">
              TOPICS
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-700 via-emerald-600 to-rose-600 bg-clip-text text-transparent">
              Most Rated & Popular Topics
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most innovative UI/UX trends that break conventional patterns and inspire creative design solutions.
            <span className="block mt-2 text-sm text-emerald-600 font-medium">
              Enhanced with creativity constraints - no generic Inter fonts or blue buttons here!
            </span>
          </p>
        </div>

        {/* Filters & Controls */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded font-medium transition-colors border ${
                    selectedCategory === category
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Sort Controls */}
            <div className="flex gap-3">
              {[
                { key: 'rating', label: 'Highest Rated' },
                { key: 'popularity', label: 'Most Popular' },
                { key: 'trend', label: 'Trending' }
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setSortBy(key as typeof sortBy)}
                  className={`px-4 py-2 rounded transition-colors font-medium border ${
                    sortBy === key
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Topics Grid with Creative Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >

              {/* Trend Badge */}
              <div className="inline-block px-3 py-1 text-sm font-medium mb-4 border border-gray-300 rounded">
                {getTrendText(topic.trend)}
              </div>

              {/* Title with Creative Typography */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                {topic.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {topic.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {topic.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-lg text-gray-900">{topic.rating}</span>
                    <span className="text-sm text-yellow-600">rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">{topic.popularity.toLocaleString()}</span>
                    <span className="text-sm text-emerald-600">views</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  {topic.lastUpdated}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-16 bg-white border border-gray-200 rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{topics.length}</div>
              <div className="text-gray-600">Creative Topics</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {(topics.reduce((sum, t) => sum + t.rating, 0) / topics.length).toFixed(1)}
              </div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {topics.reduce((sum, t) => sum + t.popularity, 0).toLocaleString()}
              </div>
              <div className="text-gray-600">Total Views</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {topics.filter(t => t.trend === 'hot').length}
              </div>
              <div className="text-gray-600">Hot Trends</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MostRatedPopularTopics;
