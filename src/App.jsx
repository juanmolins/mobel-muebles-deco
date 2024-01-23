import { BrowserRouter, useLocation } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { customTheme } from "./themeConfig";
import { ThemeProvider } from "@emotion/react";
import { useLayoutEffect } from "react";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <ThemeProvider theme={customTheme}>
            <AppRouter />
          </ThemeProvider>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
