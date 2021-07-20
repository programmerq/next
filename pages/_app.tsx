import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { DocsContextProvider } from "components/DocsPage/context";
import theme from "components/theme";
import { GTMPageView } from "utils/gtm";
import "components/global-styles.css";
import "components/Search/search.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  console.log(router.route.startsWith("/docs/"));

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    const onRouteChangeComplete = (url: string) => GTMPageView(url);

    router.events.on("routeChangeComplete", onRouteChangeComplete);

    const cleanup = () =>
      router.events.off("routeChangeComplete", onRouteChangeComplete);

    return cleanup;
  }, [router.events]);

  if (router.route.startsWith("/docs/")) {
    return (
      <DocsContextProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </DocsContextProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
};

export default MyApp;
