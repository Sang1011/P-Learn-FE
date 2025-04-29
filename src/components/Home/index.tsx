"use client";

import * as React from 'react';
import HeroSection from './HeroSection';
import withLoading from '@/hoc/withLoading';
import BrowseCourseSection from './BrowseCourseSection';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

function HomePage () {
  const user = useSelector((state: RootState) => state.user.user);
  console.log(user);
  return (
    <section style={{minHeight: "400px", width: "100%"}}>
        <HeroSection/>
        <BrowseCourseSection/>
    </section>
  );
}

export default withLoading(HomePage);