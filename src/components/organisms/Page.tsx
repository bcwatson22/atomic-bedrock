import { useEffect, ReactNode } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { Favicon, Footer, Header, Indicator, Providers } from '_molecules';
import { isLoading } from '_utils';

interface IProps {
  children: ReactNode;
}

const Page = ({ children }: IProps) => {

  useEffect(() => {

    isLoading(false);

    Router.events.on('routeChangeStart', () => isLoading(true));
    Router.events.on('routeChangeComplete', () => isLoading(false));

    return () => {

      Router.events.off('routeChangeStart', () => isLoading(false));
      Router.events.off('routeChangeComplete', () => isLoading(false));

    };

  }, []);

  return (
    <Indicator>
      <>
        <Head>
          <title>Atomic bedrock</title>
          <Favicon />
        </Head>
        <Providers>
          <div className="wrapper">
            <Header />
            <main role="main">
              <div className="inner">
                { children }
              </div>
            </main>
            <Footer />
          </div>
        </Providers>
      </>
    </Indicator>
  );

};

export default Page;
