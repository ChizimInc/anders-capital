import Image from "next/image";

const Footer = () => (
  <div style={{backgroundColor: "#333843"}}>
    <div
      className="container flex flex-col-reverse lg:flex-row py-3 justify-between items-center z-20 text-sm sm:text-base"
      style={{ color: '#eeeeee' }}
    >
      <div></div>
      <p>© Anders Capital Gmbh — 2020. All rights reserved.</p>
      <div>
        <div className="cursor-pointer mb-3 lg:mb-0">
          <p>Imprint</p>
          <span className="w-full border-t-2 border-white rounded-xl block"></span>
        </div>
      </div>
    </div>
  </div>
);

export { Footer };
