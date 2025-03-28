"use client";
import { useState, useEffect } from "react";
import LoadingWrapper from "@/components/common/LoadingWrapper";

const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }, []);

    if (loading) return <LoadingWrapper />;

    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
