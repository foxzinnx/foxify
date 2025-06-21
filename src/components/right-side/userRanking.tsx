import React from 'react';
import { Eye, TrendingUp, Crown, Award, Medal } from 'lucide-react';

export const UserRanking = () => {
  const topUsers = [
    {
      id: 1,
      name: "Alan Dyogo",
      username: "@alandyogo",
      views: 45200,
      avatar: "/photo2.jpg",
      verified: true,
      trend: "+12%"
    },
    {
      id: 2,
      name: "Anderson Souza",
      username: "@real.an2",
      views: 38900,
      avatar: "/an2.jpg",
      verified: true,
      trend: "+8%"
    },
    {
      id: 3,
      name: "Ana Costa",
      username: "@anacreate",
      views: 32100,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      verified: false,
      trend: "+15%"
    },
    {
      id: 4,
      name: "Carlos Lima",
      username: "@carlosux",
      views: 28700,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      verified: true,
      trend: "+5%"
    },
    {
      id: 5,
      name: "Lucia Mendes",
      username: "@luciadesign",
      views: 24800,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
      verified: false,
      trend: "+3%"
    }
  ];

  const getRankIcon = (position: any) => {
    switch(position) {
      case 1: return <Crown className="w-4 h-4 text-yellow-500" />;
      case 2: return <Award className="w-4 h-4 text-gray-400" />;
      case 3: return <Medal className="w-4 h-4 text-amber-600" />;
      default: return <span className="text-gray-400 font-medium text-sm">#{position}</span>;
    }
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'k';
    }
    return views.toString();
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-orange-500" />
          <h3 className="font-semibold text-gray-900">Top Visualizações</h3>
        </div>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          24h
        </span>
      </div>

      <div className="space-y-3">
        {topUsers.map((user, index) => (
          <div key={user.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
            <div className="flex items-center justify-center w-6 h-6">
              {getRankIcon(index + 1)}
            </div>

            <div className="relative">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              {user.verified && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <p className="font-medium text-gray-900 text-sm truncate">{user.name}</p>
              </div>
              <p className="text-xs text-gray-500 truncate">{user.username}</p>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-1 text-sm text-gray-700">
                <Eye className="w-3 h-3" />
                <span className="font-medium">{formatViews(user.views)}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="w-3 h-3" />
                <span>{user.trend}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100">
        <button className="w-full text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors">
          Ver ranking completo
        </button>
      </div>
    </div>
  );
}