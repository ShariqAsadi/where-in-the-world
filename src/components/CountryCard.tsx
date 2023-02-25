import Image from 'next/image';
import CountryAttribute from './CountryAttribute';

interface CountryCardProps {
  image: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  imageAlt: string;
}

export default function CountryCard(props: CountryCardProps) {
  const { image, name, population, region, capital, imageAlt } = props;
  return (
    <article className='flex flex-col rounded-md w-[264px] overflow-hidden'>
      <picture className='w-full h-[160px] relative'>
        <Image fill alt={imageAlt} src={image} />
      </picture>

      <footer className='p-6'>
        <h4 className='text-lg font-extrabold mb-4'>{name}</h4>
        <CountryAttribute name='Population' value={population} />
        <CountryAttribute name='Region' value={region} />
        <CountryAttribute name='Capital' value={capital} />
      </footer>
    </article>
  );
}
