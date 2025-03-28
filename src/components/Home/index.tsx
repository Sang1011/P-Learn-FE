"use client";

import * as React from 'react';
import HeroSection from './HeroSection';
import withLoading from '@/hoc/withLoading';

function HomePage () {
  return (
    <section style={{minHeight: "400px", width: "100%"}}>
        <HeroSection/>
    </section>
  );
}

export default withLoading(HomePage);