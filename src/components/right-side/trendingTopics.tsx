import React from 'react';
import { TrendingUp, MoreHorizontal } from 'lucide-react';

export const TrendingTopics = () => {
  const trendingData = [
    {
      id: 1,
      category: "Tecnologia",
      topic: "#ReactJS",
      posts: "12.5K posts",
      trend: "up"
    },
    {
      id: 2,
      category: "Programação",
      topic: "#JavaScript",
      posts: "8.2K posts",
      trend: "up"
    },
    {
      id: 3,
      category: "Design",
      topic: "#UXDesign",
      posts: "5.8K posts",
      trend: "up"
    },
    {
      id: 4,
      category: "Brasil",
      topic: "#TechBrasil",
      posts: "3.1K posts",
      trend: "up"
    },
    {
      id: 5,
      category: "Desenvolvimento",
      topic: "#OpenSource",
      posts: "2.9K posts",
      trend: "up"
    },
    {
      id: 6,
      category: "Startups",
      topic: "#Innovation",
      posts: "1.8K posts",
      trend: "up"
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            <h2 className="font-semibold text-neutral-900 text-lg">Assuntos do momento</h2>
          </div>
          {/* <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </button> */}
        </div>
      </div>

      <div className="divide-y divide-gray-50">
        {trendingData.map((item, index) => (
          <div 
            key={item.id} 
            className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-xs text-gray-500 font-medium">
                    {index + 1} · {item.category}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">
                  {item.topic}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {item.posts}
                </p>
              </div>
              <div className="flex items-center gap-1 ml-3">
                <TrendingUp className="w-3 h-3 text-green-500" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cursor-pointer px-4 py-3 border-t border-gray-100">
        <button className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors cursor-pointer">
          Ver mais trending topics
        </button>
      </div>
    </div>
  );
};
