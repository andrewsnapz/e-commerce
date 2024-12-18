import { type ReactNode } from "react";
import { PageLayoutWrapper, Main } from "./Styles.tsx";
import NavBar from "../nav-bar/index.tsx";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <PageLayoutWrapper>
      <NavBar />
      {/* <button aria-label="Open mobile menu" id="mobile-menu-button">
        <span aria-hidden="true">☰</span>
      </button> */}
      <nav id="slideout-menu">{/* Slideout menu content here */}</nav>
      <Main>{children}</Main>
    </PageLayoutWrapper>
  );
}
