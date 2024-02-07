import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import TranslationProvider from "../TranslationContext";

function Layout() {
  return (
    <TranslationProvider>
      <div className="site-wrapper">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </TranslationProvider>
  );
}

export default Layout;
