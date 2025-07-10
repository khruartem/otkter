import { FC } from "react";

import { Header } from "../../sections/header";
import { Footer } from "../../sections/footer";

import { TMainLayoutProps } from "./types";

export const MainLayout: FC<TMainLayoutProps> = ({ children, className }) => {
  return (
    <>
      <Header />
      <main className={className}>
        {children}
      </main>
      <Footer />
    </>
  );
};
