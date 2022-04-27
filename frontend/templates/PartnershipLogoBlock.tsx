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
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(true)
  }

  const closeHandler = () => {
    setIsOpen(false)
  }

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
        className="w-full sm:w-[400px] h-[180px] mx-3 my-5 md:my-0 flex flex-col items-center justify-center text-black" 
        style={styles.container}
        onMouseEnter={openHandler}
        onMouseLeave={closeHandler}
      >
        <div className={`${isOpen ? 'hidden' : 'flex'} flex-col items-center h-[75px] justify-center`}>
          <img src={props.image} alt="logo" className="w-[75%] " />
        </div>
        <div className={`${isOpen ? 'hidden' : 'flex'} w-full flex-col items-center`}>
          <span className="block w-[85%] border-t-2 mt-6 mb-2"></span>
          <p>{props.title}</p>
        </div>
        <motion.div 
          className={`${isOpen ? 'flex' : 'hidden'} p-2 text-[12px] text-white h-full items-center justify-center`} 
          style={{backgroundColor: AppColors.black}}
          ref={textContainerRef} 
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          {props.text}
        </motion.div>
      </div>
    </>
  )
}

export { PartnershipLogoBlock }