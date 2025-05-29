"use client"

import { Logo } from "@/components/ui/logo";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const timer = setTimeout(() => {
      redirect('/home');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Logo size={150} />
    </div>
  );
}
