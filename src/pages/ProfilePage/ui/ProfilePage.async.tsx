import { lazy } from 'react';

export const ProfilePageAsync = lazy(async () => await new Promise((resolve) => {
  // @ts-expect-error: some description
  setTimeout(() => { resolve(import('../ui/ProfilePage')); }, 1500);
}));
