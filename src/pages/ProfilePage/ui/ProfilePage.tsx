import { ProfileReducer } from 'entities/Profile';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: ProfileReducer,
}

const ProfilePage: FC = memo(() => {
  const { t } = useTranslation('profile');

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        <h1>{t('title')}</h1>
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
