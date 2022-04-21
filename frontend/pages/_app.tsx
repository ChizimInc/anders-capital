import '../styles/globals.css'
import type { AppProps } from 'next/app'

import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

import { Base } from '../templates/Base';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <PerfectScrollbar>
    <Base>
      <Component {...pageProps} />
    </Base>
  </PerfectScrollbar>
);

export default MyApp
