import cls from './ProfilePageHeader.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, ProfileActions, updateProfileData } from 'entities/Profile/';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({className}) => {
  const {t} = useTranslation('profile');

  const readOnly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(ProfileActions.setReadOnly(false));
  }, [])

  const onCancelEdit = useCallback(() => {
    dispatch(ProfileActions.cancelEdit());
  }, [])

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [])

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <h1>{t('title')}</h1>
      {readOnly
        ?
          <Button 
            theme={ButtonTheme.OUTLINED}
            className={cls.editBtn}
            onClick={onEdit}
          >
            {t('edit')}
          </Button>
        :
          <>
            <Button 
              theme={ButtonTheme.OUTLINED_RED}
              className={cls.cancelBtn}
              onClick={onCancelEdit}
            >
              {t('cancel')}
            </Button>
            <Button 
              theme={ButtonTheme.OUTLINED}
              className={cls.saveBtn}
              onClick={onSave}
            >
              {t('save')}
            </Button>
          </>
      }
    </div>
  );
};