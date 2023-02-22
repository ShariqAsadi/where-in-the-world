'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

export default function DarkModeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isLightMode = theme === 'light';

  const handleToggle = () => {
    setTheme(isLightMode ? 'dark' : 'light');
  };

  return (
    <span className='font-semibold text-light-text text-base dark:text-white'>
      <button
        className='flex justify-center items-center gap-2 sm:text-base text-xs'
        onClick={handleToggle}
      >
        {isLightMode ? <RiSunLine /> : <RiMoonLine />}
        <p>{isLightMode ? 'Light Mode' : 'Dark Mode'}</p>
      </button>
    </span>
  );
}
