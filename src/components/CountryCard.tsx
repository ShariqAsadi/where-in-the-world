import { Country } from '@/types/common';
import Image from 'next/image';
import CountryAttribute from './CountryAttribute';

interface CountryCardProps {
  country: Country;
}

export default function CountryCard(props: CountryCardProps) {
  const { flags, name, population, region, capital } = props.country;
  return (
    <article className='flex flex-col rounded-md w-[264px] overflow-hidden'>
      <picture className='w-full h-[160px] relative'>
        <Image fill alt={flags.alt} src={flags.svg} />
      </picture>

      <footer className='p-6'>
        <h4 className='text-lg font-extrabold mb-4'>{name.common}</h4>
        <CountryAttribute name='Population' value={population} />
        <CountryAttribute name='Region' value={region} />
        <CountryAttribute name='Capital' value={capital[0]} />
      </footer>
    </article>
  );
}
