import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "../styles/globals.css";

type AppProps = {
  Component: React.FC<JSX.ElementAttributesProperty>;
  pageProps: JSX.ElementAttributesProperty;
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!started && (Component.name === "Home" || Component.name === "Start")) {
      setStarted(true);
    } else if (
      !started &&
      (Component.name === "Resultaat" || Component.name === "Oneens")
    ) {
      router.replace("/");
    }
  }, [Component, started, setStarted]);

  return <Component {...pageProps} />;
};

export default App;
