import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';

// Most probable AI-generated dashboard data
const chartData = [
  { name: 'Jan', revenue: 12000, users: 12500, orders: 245 },
  { name: 'Feb', revenue: 15000, users: 13200, orders: 312 },
  { name: 'Mar', revenue: 18000, users: 14800, orders: 387 },
  { name: 'Apr', revenue: 22000, users: 15600, orders: 423 },
  { name: 'May', revenue: 19000, users: 14200, orders: 356 },
  { name: 'Jun', revenue: 25000, users: 16800, orders: 489 },
  { name: 'Jul', revenue: 28000, users: 18200, orders: 523 },
  { name: 'Aug', revenue: 24000, users: 17500, orders: 467 },
  { name: 'Sep', revenue: 26000, users: 18900, orders: 498 },
  { name: 'Oct', revenue: 29000, users: 20100, orders: 534 },
  { name: 'Nov', revenue: 31000, users: 21500, orders: 567 },
  { name: 'Dec', revenue: 33000, users: 22800, orders: 589 },
];

const DashboardChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Analytics Overview</h3>
          <p className="text-sm text-gray-600">Monthly performance metrics and growth trends</p>
        </div>
        <div className="flex items-center space-x-2">
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
          <AreaChart data={chartData}>
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
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                fontSize: '14px'
              }}
              labelStyle={{ color: '#374151', fontWeight: '600' }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3B82F6"
              strokeWidth={2}
              fill="url(#revenueGradient)"
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2, fill: '#FFFFFF' }}
            />
            <Area
              type="monotone"
              dataKey="users"
              stroke="#10B981"
              strokeWidth={2}
              fill="url(#usersGradient)"
              dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2, fill: '#FFFFFF' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">$280,000</div>
          <div className="text-sm text-gray-600">Total Revenue</div>
          <div className="text-xs text-green-600 mt-1">+12.1% from last month</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">22,800</div>
          <div className="text-sm text-gray-600">Active Users</div>
          <div className="text-xs text-green-600 mt-1">+8.9% from last month</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">4,890</div>
          <div className="text-sm text-gray-600">Total Orders</div>
          <div className="text-xs text-green-600 mt-1">+4.0% from last month</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;
