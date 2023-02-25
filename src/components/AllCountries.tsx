'use client';
import { Countries } from '@/types/common';
import { useState } from 'react';
import CountryCard from './CountryCard';
import Search from './Search';

interface CountriesProps {
  countries: Countries;
}

export default function AllCountries(props: CountriesProps) {
  const { countries } = props;
  const [searchedCountries, setSearchedCountries] = useState(countries);

  const handleSearch = (value: string) => {
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(value)
    );
    setSearchedCountries(filteredCountries);
  };

  return (
    <div className='sm:px-20 sm:pt-12 px-4 pt-6'>
      <Search handleSearch={handleSearch} />
      <section className='flex gap-[75px] flex-wrap mt-12 justify-center'>
        {searchedCountries.map((country) => {
          const { name, flags, capital, population, region } = country;
          return (
            <CountryCard
              key={name.common}
              image={flags.svg}
              imageAlt={flags.alt}
              name={name.common}
              capital={capital[0]}
              population={population}
              region={region}
            />
          );
        })}
      </section>
    </div>
  );
}
