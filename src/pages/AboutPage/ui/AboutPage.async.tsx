import { lazy } from 'react';

export const AboutPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error: some description
  setTimeout(() => { resolve(import('../ui/AboutPage')); }, 1500);
}));
