import type { AppProps /*, AppContext */ } from 'next/app';
import '_styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp;
