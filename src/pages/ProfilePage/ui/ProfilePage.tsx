import { fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, ProfileActions, ProfileReducer } from 'entities/Profile';
import { FC, memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileCard } from '../../../entities/Profile/ui/ProfileCard/ProfileCard';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { getProfileReadonly } from '../../../entities/Profile';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileValidateErrors } from '../../../entities/Profile/model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { Text, TextStyle } from 'shared/ui/Text/Text';
import { ValidateProfileError } from '../../../entities/Profile/model/types/profile';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
  profile: ProfileReducer,
}

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = memo(({ className }) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readOnly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.INCORRECT_AGE]: t('Wrong age value'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Wrong country value'),
    [ValidateProfileError.NO_DATA]: t('Wrong data value'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect user data'),
    [ValidateProfileError.SERVER_ERROR]: t('incorrect server data'),
  }

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(ProfileActions.updateProfile({ first: value || '' }))
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(ProfileActions.updateProfile({ lastname: value || '' }))
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    const newValue = value?.replace(/[^\d]/g, "");
    dispatch(ProfileActions.updateProfile({ age: Number(newValue || 0) }))
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(ProfileActions.updateProfile({ city: value || '' }))
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(ProfileActions.updateProfile({ username: value || '' }))
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(ProfileActions.updateProfile({ avatar: value || '' }))
  }, [dispatch]);
  
  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(ProfileActions.updateProfile({ currency }))
  }, [dispatch]);
  
  const onChangeCountry = useCallback((country: Country) => {
    dispatch(ProfileActions.updateProfile({ country }))
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        <div className={cls.validateErrorsWrapper}>
          {validateErrors?.length && validateErrors.map(err => (
            <Text 
              key={err}
              style={TextStyle.ERROR} 
              text={validateErrorTranslates[err]} 
            />
          ))}
        </div>
        <ProfileCard 
          data={formData} 
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readOnly={readOnly}
        />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
