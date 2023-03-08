'use client';
import debounce from 'lodash/debounce';
import { Countries } from '@/types/common';
import { useCallback, useState } from 'react';
import CountryCard from './CountryCard';
import Search from './Search';

interface CountriesProps {
  countries: Countries;
}

export default function AllCountries(props: CountriesProps) {
  const { countries } = props;
  const [searchedCountries, setSearchedCountries] = useState(countries);

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );
      setSearchedCountries(filteredCountries);
    }, 300),
    []
  );

  const handleSearch = (query: string) => {
    debouncedSearch(query);
  };

  return (
    <div className='sm:px-20 sm:pt-12 px-4 pt-6'>
      <Search handleSearch={handleSearch} />
      <section className='flex gap-[75px] flex-wrap mt-12 justify-center'>
        {searchedCountries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </section>
    </div>
  );
}
