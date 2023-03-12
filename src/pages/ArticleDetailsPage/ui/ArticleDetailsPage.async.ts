import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(async () => await new Promise((resolve) => {
  // @ts-expect-error: some description
  setTimeout(() => { resolve(import('../ui/ArticleDetailsPage')); }, 700);
}));
