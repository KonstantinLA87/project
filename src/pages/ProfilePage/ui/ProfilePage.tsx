import { fetchProfileData, ProfileReducer } from 'entities/Profile';
import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileCard } from '../../../entities/Profile/ui/ProfileCard/ProfileCard';
import { classNames } from '../../../shared/lib/classNames/classNames';

const reducers: ReducersList = {
  profile: ProfileReducer,
}

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = memo(({ className }) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <h1>{t('title')}</h1>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
