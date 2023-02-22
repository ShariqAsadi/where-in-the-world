import DarkModeSwitcher from './DarkModeSwitcher';

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center h-20 sm:px-20 px-4 bg-white shadow-elements dark:bg-dark-elements'>
      <h1 className='text-light-text sm:text-2xl text-sm font-extrabold dark:text-white'>
        Where in the world?
      </h1>
      <DarkModeSwitcher />
    </nav>
  );
}
