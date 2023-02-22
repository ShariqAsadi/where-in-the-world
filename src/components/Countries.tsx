'use client';
import { useState } from 'react';
import Search from './Search';

export default function Countries() {
  const [search, setSearch] = useState('');

  return (
    <div className='sm:px-20 sm:pt-12 px-4 pt-6'>
      <Search value={search} handleSearch={setSearch} />
    </div>
  );
}
