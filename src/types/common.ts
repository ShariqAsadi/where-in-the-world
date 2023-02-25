import React from 'react';

export interface BaseChildren {
  children: React.ReactNode;
}

export type Countries = Country[];
export interface Country {
  name: Name;
  tld: string[];
  currencies: Currencies;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  borders: string[];
  population: number;
  flags: Flags;
}

export interface Currencies {
  [key: string]: Currency;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Languages {
  [name: string]: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  [name: string]: Natives;
}

export interface Natives {
  official: string;
  common: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}
