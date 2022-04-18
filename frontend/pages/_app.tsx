import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Base } from '../templates/Base';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Base>
    <Component {...pageProps} />
  </Base>
);

export default MyApp
