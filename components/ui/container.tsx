import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-[1440px] w-screen mx-auto px-12 lg:px-8 md:px-4 h-full">
      {children}
    </main>
  );
};

export default Container;
