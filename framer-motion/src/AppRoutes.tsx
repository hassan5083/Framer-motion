import { Routes, Route } from "react-router-dom";
import { MAIN_LINKS } from "./constants"; // Import your MAIN_LINKS constants
import { Home } from "./pages/home";
import { AboutPage } from "./pages/about";
import { PortfolioPage } from "./pages/portfolio";
import { ContactPage } from "./pages/contact";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={MAIN_LINKS.HOME} element={<Home />} />;
      <Route path={MAIN_LINKS.ABOUT} element={<AboutPage />} />;
      <Route path={MAIN_LINKS.PORTFOLIO} element={<PortfolioPage />} />;
      <Route path={MAIN_LINKS.CONTACT} element={<ContactPage />} />;
    </Routes>
  );
};
