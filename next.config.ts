import {NextConfig} from 'next';
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
 
const nextConfig: NextConfig = {
    reactStrictMode: true
};
 
export default withNextIntl(nextConfig);