import Image from "next/image";

const Footer = () => (
  <div style={{backgroundColor: "#333843"}}>
    <div
      className="container flex flex-col lg:flex-row py-3 justify-center items-center z-20 text-sm sm:text-base"
      style={{ color: '#eeeeee' }}
    >
      <p>© Anders Capital Gmbh — 2020. All rights reserved.</p>
    </div>
  </div>
);

export { Footer };
