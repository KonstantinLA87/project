import { lazy } from 'react';

export const MainPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error: some description
  setTimeout(() => { resolve(import('../ui/MainPage')); }, 700);
}));
