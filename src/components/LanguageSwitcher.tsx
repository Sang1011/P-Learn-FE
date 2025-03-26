'use client';
import {useRouter, usePathname, useSearchParams} from 'next/navigation';
import {MenuProps, Dropdown} from 'antd';
import {TbWorld} from 'react-icons/tb';
import FButton from '@/components/basicUI/FButton';
import { useEffect } from 'react';
import Cookies from "js-cookie";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = Object.fromEntries(searchParams.entries()) as Record<string, string>;

  const changeLanguage = (locale: string) => {
    // Cập nhật cookie với path và thời gian hết hạn
    Cookies.set("PLearn_LOCALE", locale, { path: "/", expires: 30 });

    console.log("pathname", pathname);
    
    // Thay đổi locale trong URL chính xác hơn
    let path = pathname.replace(/^\/(vi|en)/, `/${locale}`);

    console.log("Updated path:", path);

    // Xử lý query params an toàn
    const search = query ? new URLSearchParams(query).toString() : "";
    console.log("Query params:", search);

    // Tạo URL mới
    const url = search ? `${path}?${search}` : path;

    // Cập nhật URL mà không reload trang
    router.replace(url);
};


  useEffect(() => {
    console.log("render");
  }, [])
  

  const items: MenuProps['items'] = [
    {key: 'en', label: 'English', onClick: () => changeLanguage('en')},
    {key: 'vi', label: 'Tiếng Việt', onClick: () => changeLanguage('vi')}
  ];

  return (
    <Dropdown menu={{items}} trigger={['click']} placement="bottomRight">
      <FButton type="default" icon={<TbWorld fontSize={24} />} />
    </Dropdown>
  );
}
