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
    <div className="bg-white sticky top-0 z-5">       
      <div className="flex h-12 rounded-md">
        <button
          onClick={() => handleTabClick('/home')}
          className={`flex-1 cursor-pointer py-[15px] hover:bg-gray-100 px-6 text-sm font-medium transition-all duration-200 ${
            currentRoute === '/home'
              ? 'border-b-3 border-b-orange-400 text-black font-semibold'
              : 'text-gray-600 hover:text-gray-800 border-b-3 border-b-neutral-100 hover:border-b-neutral-300'
          }`}
        >
          For You
        </button>

        <button
          onClick={() => handleTabClick('/trending')}
          className={`flex-1 cursor-pointer py-[15px] px-6 hover:bg-gray-100 text-sm font-medium transition-all duration-200 ${
            currentRoute === '/trending'
              ? 'border-b-3 border-b-orange-400 text-black font-semibold'
              : 'text-gray-600 hover:text-gray-800 border-b-3 border-b-neutral-100 hover:border-b-neutral-300'
          }`}
        >
          Em alta
        </button>
      </div>
    </div>
  );
};