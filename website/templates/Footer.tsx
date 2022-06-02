import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <div style={{backgroundColor: "#333843"}}>
    <div
      className="container flex flex-col-reverse lg:flex-row py-3 justify-between items-center z-20 text-sm sm:text-base"
      style={{ color: '#eeeeee' }}
    >
      <div className="xl:w-1/3"></div>
      <p className="xl:w-1/3">© Anders Capital Gmbh — 2020. All rights reserved.</p>
      <div className="xl:w-1/3 flex items-center justify-center">
        <div className="cursor-pointer mb-3 lg:mb-0">
          <Link href="/imprint">
            <p>Imprint</p>
          </Link>
          <span className="w-full border-t-2 border-white rounded-xl block"></span>
        </div>
      </div>
    </div>
  </div>
);

export { Footer };
