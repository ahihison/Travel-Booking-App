"use client";
import { useState, useEffect } from "react";
interface OnlyClientProps {
  children: React.ReactNode;
}
const OnlyClient = ({ children }: OnlyClientProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return <>{children}</>;
};

export default OnlyClient;
