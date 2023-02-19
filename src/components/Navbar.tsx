import DarkModeSwitcher from './DarkModeSwitcher';

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center h-20 px-20 bg-white shadow-elements dark:bg-dark-elements'>
      <h1 className='text-light-text text-2xl font-extrabold dark:text-white'>
        Where in the world?
      </h1>
      <DarkModeSwitcher />
    </nav>
  );
}
