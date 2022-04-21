import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          sizes="32x32"
          key="favicon"
        />
        <link 
          rel="icon" 
          type="image/png"
          href={`${router.basePath}/favicon-96_x_96.png`}
          sizes="96x96"
        />
        <link 
          rel="icon" 
          type="image/png"
          href={`${router.basePath}/favicon-128_x_128.png`}
          sizes="128x128"
        />
        <link 
          rel="apple-touch-icon" 
          type="image/png"
          href={`${router.basePath}/favicon-128_x_128.png`}
          sizes="128x128"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };
