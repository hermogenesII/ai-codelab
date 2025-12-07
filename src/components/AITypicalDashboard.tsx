import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  BarChart,
  Bar
} from 'recharts';
import {
  TrendingUp,
  Users,
  DollarSign,
  ShoppingCart,
  Activity,
  BarChart3,
  PieChart
} from 'lucide-react';

// Most probable AI-generated data patterns
const revenueData = [
  { month: 'Jan', revenue: 12000, users: 12500, orders: 245, conversion: 3.2 },
  { month: 'Feb', revenue: 15000, users: 13200, orders: 312, conversion: 3.5 },
  { month: 'Mar', revenue: 18000, users: 14800, orders: 387, conversion: 4.1 },
  { month: 'Apr', revenue: 22000, users: 15600, orders: 423, conversion: 4.8 },
  { month: 'May', revenue: 19000, users: 14200, orders: 356, conversion: 3.9 },
  { month: 'Jun', revenue: 25000, users: 16800, orders: 489, conversion: 4.2 },
  { month: 'Jul', revenue: 28000, users: 18200, orders: 523, conversion: 4.5 },
  { month: 'Aug', revenue: 24000, users: 17500, orders: 467, conversion: 4.1 },
  { month: 'Sep', revenue: 26000, users: 18900, orders: 498, conversion: 4.3 },
  { month: 'Oct', revenue: 29000, users: 20100, orders: 534, conversion: 4.6 },
  { month: 'Nov', revenue: 31000, users: 21500, orders: 567, conversion: 4.8 },
  { month: 'Dec', revenue: 33000, users: 22800, orders: 589, conversion: 5.0 }
];

const categoryData = [
  { name: 'Electronics', value: 35, color: '#3B82F6' },
  { name: 'Clothing', value: 25, color: '#10B981' },
  { name: 'Books', value: 20, color: '#F59E0B' },
  { name: 'Home', value: 15, color: '#EF4444' },
  { name: 'Other', value: 5, color: '#8B5CF6' }
];

const AITypicalDashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$280,000',
      change: '+12.1%',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'Active Users',
      value: '22,800',
      change: '+8.9%',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Total Orders',
      value: '4,890',
      change: '+4.0%',
      icon: ShoppingCart,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Conversion Rate',
      value: '4.8%',
      change: '+0.5%',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  const recentActivities = [
    { user: 'Sarah Johnson', action: 'completed purchase', amount: '$299.99', time: '2m ago', avatar: 'SJ' },
    { user: 'Mike Chen', action: 'signed up', time: '5m ago', avatar: 'MC' },
    { user: 'Emma Davis', action: 'left review', time: '12m ago', avatar: 'ED' },
    { user: 'Alex Rodriguez', action: 'updated profile', time: '1h ago', avatar: 'AR' },
    { user: 'Lisa Wang', action: 'made payment', amount: '$149.99', time: '2h ago', avatar: 'LW' }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header - AI typical pattern */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
              <p className="text-sm text-gray-600 mt-1">Welcome back! Here's your analytics summary.</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Export Data
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                View Reports
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards - AI typical grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className={`bg-white rounded-lg border ${stat.borderColor} p-6 shadow-sm`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className={`text-sm mt-2 ${
                    stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section - AI typical layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart - AI typical area chart */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Revenue Analytics</h3>
                <p className="text-sm text-gray-600">Monthly performance overview</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Revenue</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Users</span>
                </div>
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      fontSize: '14px'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    fill="url(#revenueGradient)"
                  />
                  <Area
                    type="monotone"
                    dataKey="users"
                    stroke="#10B981"
                    strokeWidth={2}
                    fill="url(#usersGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Orders Chart - AI typical bar chart */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Orders Overview</h3>
                <p className="text-sm text-gray-600">Monthly order volume</p>
              </div>
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6B7280' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      fontSize: '14px'
                    }}
                  />
                  <Bar
                    dataKey="orders"
                    fill="#8B5CF6"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bottom Section - AI typical mixed layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activity Feed - AI typical pattern */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              <Activity className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-gray-600">{activity.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.user}</span> {activity.action}
                      {activity.amount && (
                        <span className="font-medium text-green-600 ml-1">{activity.amount}</span>
                      )}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              View All Activity
            </button>
          </div>

          {/* Category Breakdown - AI typical pie chart representation */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Category Breakdown</h3>
                <p className="text-sm text-gray-600">Sales by category</p>
              </div>
              <PieChart className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {categoryData.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span className="text-sm text-gray-900">{category.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{category.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions - AI typical utility section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
            <div className="grid grid-cols-1 gap-3">
              <button className="p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-left">
                <div className="font-medium">Add Product</div>
                <div className="text-sm opacity-75">Create new item</div>
              </button>
              <button className="p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-left">
                <div className="font-medium">View Reports</div>
                <div className="text-sm opacity-75">Analytics dashboard</div>
              </button>
              <button className="p-4 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors text-left">
                <div className="font-medium">Manage Users</div>
                <div className="text-sm opacity-75">User administration</div>
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AITypicalDashboard;
