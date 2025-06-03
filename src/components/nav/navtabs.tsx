"use client"
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export const NavTabs = () => {
  const router = useRouter();
  const currentRoute = usePathname();

  const handleTabClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="bg-white px-4 py-2">       
      <div className="flex h-12 bg-gray-100 rounded-xl p-[3px]">
        <button
          onClick={() => handleTabClick('/home')}
          className={`flex-1 cursor-pointer py-3 px-6 rounded-sm text-sm font-medium transition-all duration-200 ${
            currentRoute === '/home'
              ? 'border-b-3 border-b-orange-400 text-black font-semibold'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          For You
        </button>

        <button
          onClick={() => handleTabClick('/trending')}
          className={`flex-1 cursor-pointer py-3 px-6 rounded-sm text-sm font-medium transition-all duration-200 ${
            currentRoute === '/trending'
              ? 'border-b-3 border-b-orange-400 text-black font-semibold'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Em alta
        </button>
      </div>
    </div>
  );
};