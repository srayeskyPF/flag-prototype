import { ComponentType, useEffect, useState } from 'react';
import '../styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from "@mui/material";
import { Layout } from '../components/layout';
import { theme, darkTheme } from "../utils/theme";
import type { AppProps } from 'next/app'
import { withLDProvider, useLDClient } from 'launchdarkly-react-client-sdk';
import { v4 as uuid } from 'uuid';

function App({ Component, pageProps }: AppProps) {
  const ldClient = useLDClient();
  // const [items, setItems] = useState([]);

useEffect(() => {
  let LD_ID = localStorage.getItem('LD_ID');
  if(!LD_ID) {
    const unique_id = uuid();
    localStorage.setItem('LD_ID', JSON.stringify(unique_id));
  };
  LD_ID = localStorage.getItem('LD_ID') || '101010101';

  if(ldClient) {
    ldClient.identify({
      key: LD_ID,
    }, undefined);
  }
}, [ldClient]);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default withLDProvider({
  clientSideID: '6388e31e60eee7118fbd96a7',
  
})(App as ComponentType<{}>);