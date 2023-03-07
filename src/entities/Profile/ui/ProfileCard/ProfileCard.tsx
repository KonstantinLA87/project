import cls from './ProfileCard.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextStyle } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readOnly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className, 
    data, 
    isLoading, 
    error,
    readOnly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  
  const {t} = useTranslation('profile');

  if(isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    )
  }

  if(error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text style={TextStyle.ERROR} title={t('profile error title')} text={t('profile error body')} />
      </div>
    )
  }
  
  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>

      <div className={cls.data}>

        <Avatar src={data?.avatar} alt="Avatar" />
        
        <div className={cls.data_wrap}>
          <div className={cls.column}>
            <Input 
              value={data?.first} 
              placeholder={t('name')}
              className={cls.input} 
              label="Имя"
              onChange={onChangeFirstname}
              readOnly={readOnly}
            />
            <Input 
              value={data?.lastname} 
              placeholder={t('lastname')}
              className={cls.input}
              label="Фамилия"
              onChange={onChangeLastname}
              readOnly={readOnly}
            />
            <Input 
              value={data?.age} 
              placeholder={t('your age')}
              className={cls.input} 
              label="Возраст"
              onChange={onChangeAge}
              readOnly={readOnly}
            />
            <CountrySelect
              className={cls.input}
              value={data?.country}
              onChange={onChangeCountry}
              readOnly={readOnly}
            />
          </div>
          <div className={cls.column}>
            <Input 
              value={data?.city} 
              placeholder={t('Your city')}
              className={cls.input}
              label="Город"
              onChange={onChangeCity}
              readOnly={readOnly}
            />
            <Input 
              value={data?.username} 
              placeholder={t('Username')}
              className={cls.input}
              label="Username"
              onChange={onChangeUsername}
              readOnly={readOnly}
            />
            <Input 
              value={data?.avatar} 
              placeholder={t('avatar')}
              className={cls.input}
              label="Avatar"
              onChange={onChangeAvatar}
              readOnly={readOnly}
            />
            <CurrencySelect
              className={cls.input}
              value={data?.currency}
              onChange={onChangeCurrency}
              readOnly={readOnly}
            />
          </div>
        </div>
      </div>

    </div>
  );
};