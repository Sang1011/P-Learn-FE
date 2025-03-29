"use client";

import * as React from 'react';
import HeroSection from './HeroSection';
import withLoading from '@/hoc/withLoading';
import BrowseCourseSection from './BrowseCourseSection';

function HomePage () {
  return (
    <section style={{minHeight: "400px", width: "100%"}}>
        <HeroSection/>
        <BrowseCourseSection/>
    </section>
  );
}

export default withLoading(HomePage);