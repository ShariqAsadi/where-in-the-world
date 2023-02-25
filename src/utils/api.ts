import { Countries } from '@/types/common';

const BASE_URL = 'https://restcountries.com/v3.1';

const MONTH = 1000 * 60 * 60 * 24 * 30;

const filters = [
  'name',
  'population',
  'region',
  'capital',
  'tld',
  'subregion',
  'currencies',
  'borders',
  'languages',
  'flags',
].join(',');

export async function getCountries() {
  const response = await fetch(`${BASE_URL}/all?fields=${filters}`, {
    next: { revalidate: MONTH },
  });
  const countries: Countries = await response.json();
  return countries;
}
