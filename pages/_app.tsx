import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import "../styles/globals.css";

export const AppContext = createContext<{
  started?: boolean;
  setStarted?: Dispatch<SetStateAction<boolean>>;
}>({});

type AppProps = {
  Component: React.FC<JSX.ElementAttributesProperty>;
  pageProps: JSX.ElementAttributesProperty;
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [started, setStarted] = useState(false);
  const [context, setContext] = useState({ started, setStarted });

  useEffect(() => {
    setContext({ started, setStarted });
  }, [started, setStarted]);

  return (
    <AppContext.Provider value={context}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};

export default App;
