import { Meta } from '../layout/Meta';
import Navbar from '../layout/Navbar';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';


const Base = (props: any) => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <div style={{ marginTop: '75px' }}>{props.children}</div>
    <Footer />
  </div>
);

export { Base };