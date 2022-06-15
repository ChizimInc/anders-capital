import { MutableRefObject, useRef, useState } from "react";
import { AppColors } from "../utils/AppConfig";
import { motion } from 'framer-motion'

type IPartnershipProps = {
  image: string;
  title: string;
  text: string;
}

const PartnershipLogoBlock = (props: IPartnershipProps) => {
  const textContainerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [mouseHandler, setMouseHanlder] = useState(false)

  const styles = {
    container: {
      boxShadow: '#9d9797 0px 0px 3px 0px'
    },
    image: {
      backgroundImage: `url(${props.image})`,
      width: '80%',
      height: '28%',
      backgroundSize: 'cover'
    }
  }

  const variants = {
    hidden: { x:-50 },
    visible: { x: 0 },
  }

  return (
    <>
      <div 
        className="
          w-full sm:w-[400px] h-[180px] mx-3 my-5 md:my-0 flex flex-col items-center 
          justify-center text-black relative
        " 
        style={styles.container}
        onMouseEnter={() => setMouseHanlder(true)}
        onMouseLeave={() => setMouseHanlder(false)}
      >
        <div className={`flex-col flex items-center h-[75px] justify-center`}>
          <img src={props.image} alt="logo" className="w-[75%] " />
        </div>
        <div className={`w-full flex flex-col items-center`}>
          <span className="block w-[85%] border-t-2 mt-6 mb-2"></span>
          <p>{props.title}</p>
        </div>
        <div 
          className={`flex text-[12px] text-white items-center justify-center w-full z-50 absolute bottom-0`}
          style={{
            backgroundColor: AppColors.black,
            height: mouseHandler ? '100%' : '1px',
            padding: mouseHandler ? '15px' : '0',
            transition: '.25s',
            borderBottomColor: AppColors.red,
            borderBottomWidth: mouseHandler ? '3px' : '',
            borderBottomStyle: 'solid'
          }}
        >
          <div className="relative h-full flex justify-center items-center">
            {mouseHandler ? props.text : null}
            <div
              className={`
                absolute bottom-[-25px] px-2 py-[1px] cursor-pointer bg-app-color-500
                ${mouseHandler ? 'flex' : 'hidden'}
              `}
            >Go to partner site</div>
          </div>
        </div>
      </div>
    </>
  )
}

export { PartnershipLogoBlock }