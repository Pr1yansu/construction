import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const FrontendLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Toaster />
    </>
  );
};

export default FrontendLayout;
