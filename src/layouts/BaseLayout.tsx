import React, { FC } from "react";
import Footer from "src/components/smallculars/Base/Footer";
import JasesNav from "src/components/molecules/Base/JasesNav";

interface BaseLayoutProps {
  /**
   * Children To be populated inside the layout
   */
  children?: React.ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <main>
      <JasesNav />
      <section className="pt-2 w-full mx-auto px-3 relative min-h-full">
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default BaseLayout;
