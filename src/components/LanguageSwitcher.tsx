'use client';
import {MenuProps, Dropdown} from 'antd';
import {TbWorld} from 'react-icons/tb';
import FButton from '@/components/basicUI/FButton';
import { useLanguage } from '@/hooks/useLanguage';
import { useTranslations } from 'next-intl';

export default function LanguageSwitcher() {
  const {language, changeLanguage} = useLanguage();
  const t = useTranslations("homepage");
  
  const items: MenuProps['items'] = [
    {key: 'en', label: t("language.en"), onClick: () => changeLanguage('en'), disabled: language === "en" ? true : false},
    {key: 'vi', label: t("language.vi"), onClick: () => changeLanguage('vi'), disabled: language === "vi" ? true : false}
  ];

  return (
    <Dropdown menu={{items}} trigger={['click']} placement="bottomRight">
      <FButton type="default" icon={<TbWorld fontSize={24} />} />
    </Dropdown>
  );
}
