import { BsSearch } from 'react-icons/bs';

interface SearchProps {
  value: string;
  handleSearch: (value: string) => void;
}

export default function Search({ value, handleSearch }: SearchProps) {
  return (
    <div className='flex items-center relative text-light-input max-w-[480px] shadow-search dark:text-white'>
      <div className='absolute pl-8 pointer-events-none'>
        <BsSearch className='h-[18px] w-[18px]' />
      </div>
      <input
        type='text'
        value={value}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder='Search for a country...'
        className='py-[18px] pl-[74px] w-full truncate text-sm pr-4 rounded-[5px] dark:bg-dark-elements outline-0 shadow-search'
      />
    </div>
  );
}
