"use client"
import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  href?: string;
}

interface NavTabsProps {
  tabs: Tab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
}

export const NavTabs: React.FC<NavTabsProps> = ({ 
  tabs, 
  activeTab, 
  onTabChange, 
  className = '' 
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(activeTab || tabs[0]?.id);

  const currentActiveTab = activeTab || internalActiveTab;

  const handleTabClick = (tab: Tab) => {
    if (tab.href) {
      window.location.href = tab.href;
    } else {
      setInternalActiveTab(tab.id);
      onTabChange?.(tab.id);
    }
  };

  return (
    <nav className={`${className}`}>
      <div className="flex">
        {tabs.map((tab) => {
          const isActive = currentActiveTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className={`
                relative px-6 py-4 cursor-pointer font-semibold text-sm transition-all duration-200
                ${isActive 
                  ? 'opacity-100' 
                  : 'opacity-60 hover:opacity-100'
                }
              `}
            >
              {tab.label}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FF7A00]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};