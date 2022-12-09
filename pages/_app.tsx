import { ComponentType, useEffect, useState } from 'react';
import '../styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from "@mui/material";
import { Layout } from '../components/layout';
import { theme, darkTheme } from "../utils/theme";
import type { AppProps } from 'next/app'
import { withLDProvider, useLDClient } from 'launchdarkly-react-client-sdk';
import { v4 as uuid } from 'uuid';
import {
  createInstance,
  OptimizelyProvider,
} from '@optimizely/react-sdk';

const optimizelyClient = createInstance({ sdkKey:'2vDJVty5bzpbsWsQtLKZp' });

function isClientValid() {
  return optimizelyClient.getOptimizelyConfig() !== null;
}

function App({ Component, pageProps }: AppProps) {
  const ldClient = useLDClient();

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
      <OptimizelyProvider
          optimizely={optimizelyClient}
          // Generally React SDK runs for one client at a time i.e for one user throughout the lifecycle.
          // You can provide the user Id here once and the SDK will memoize and reuse it throughout the application lifecycle.
          // For this example, we are simulating 10 different users so we will ignore this and pass override User IDs to the useDecision hook for demonstration purpose.
          user={{ id: 'user123' }}
        >
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </OptimizelyProvider>
    </>
  );
}

export default withLDProvider({
  clientSideID: '6388e31e60eee7118fbd96a7',
  
})(App as ComponentType<{}>);