'use client';
import {MenuProps, Dropdown} from 'antd';
import {TbWorld} from 'react-icons/tb';
import FButton from '@/components/basicUI/FButton';
import { useLanguage } from '@/hooks/useLanguage';
import { useTranslations } from 'next-intl';

export default function LanguageSwitcher() {
  const {locale, changeLanguage} = useLanguage();
  const t = useTranslations("homepage");
  
  const items: MenuProps['items'] = [
    {key: 'en', label: t("language.en"), onClick: () => changeLanguage('en')},
    {key: 'vi', label: t("language.vi"), onClick: () => changeLanguage('vi')}
  ];

  return (
    <Dropdown menu={{items}} trigger={['click']} placement="bottomRight">
      <FButton type="default" icon={<TbWorld fontSize={24} />} />
    </Dropdown>
  );
}
