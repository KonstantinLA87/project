import { lazy } from 'react';

export const ArticlesPageAsync = lazy(async () => await new Promise((resolve) => {
  // @ts-expect-error: some description
  setTimeout(() => { resolve(import('../ui/ArticlesPage')); }, 700);
}));
