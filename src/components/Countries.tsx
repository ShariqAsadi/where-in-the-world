'use client';
import { Countries } from '@/types/common';
import { useState } from 'react';
import Search from './Search';

interface CountriesProps {
  countries: Countries;
}

export default function AllCountries(props: CountriesProps) {
  const [search, setSearch] = useState('');
  const { countries } = props;
  return (
    <div className='sm:px-20 sm:pt-12 px-4 pt-6'>
      <Search value={search} handleSearch={setSearch} />
      {countries.map((country) => {
        return <div key={country.name.common}>{country.name.common}</div>;
      })}
    </div>
  );
}
