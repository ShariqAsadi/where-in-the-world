import AllCountries from '@/components/AllCountries';
import { getCountries } from '@/utils/api';

export default async function Home() {
  const countries = await getCountries();

  return <AllCountries countries={countries} />;
}
