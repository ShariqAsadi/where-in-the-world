import Countries from '@/components/Countries';
import { getCountries } from '@/utils/api';

export default async function Home() {
  const countries = await getCountries();

  return <Countries countries={countries} />;
}
