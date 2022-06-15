import { AppColors } from "../utils/AppConfig"
import { MutableRefObject, useRef, useState } from "react";
import Image from 'next/image'

type IServicesProps = {
  image: string;
  title: string;
  text: string;
  height: 'long' | 'short'
}

const ServicesCard = (props: IServicesProps) => {
  const [animate, setAnimate] = useState(false);

  const styles = {
    container: {
      boxShadow: '#9d9797 0px 0px 3px 0px'
    },
    imageFilter: {
      filter: animate ? 'brightness(0) invert(1)' : ''
    }
  }

  const animateHandler = () => {
    setAnimate(!animate)
  }

  return (
    <>
      <div 
        className={`w-full md:w-[340px] bg-white
          ${props.height == 'long' ? 'md:h-[380px]' : 'md:h-[280px]'} mx-3 my-5 md:my-0 flex flex-col 
          ${animate ? 'text-[#ffffff]' :'text-black'}`
        }
        style={styles.container}
        onMouseEnter={animateHandler}
        onMouseLeave={animateHandler}
      >
        <div className="relative h-full z-[50]">
          <div className="flex justify-evenly md:my-3 items-center z-30">
            <div className="w-full flex items-center">
              <span className={`block h-6 border-r-4 mr-4 ${animate ? 'border-slate-100' : 'border-slate-900'}`}></span>
              <p className="text-base md:text-[0.8rem] lg:text-xl">{props.title}</p>
            </div>
            <div className="flex flex-col w-16 items-end h-[75px] justify-center">
              <Image
                src={props.image} 
                alt="logo" 
                className="mr-5" 
                style={styles.imageFilter}
                width={100}
                height={70}
              />
            </div>
          </div>
          <div className="z-30 mx-5 text-base md:text-sm lg:text-[11pt] font-medium mb-3">{props.text}</div>
          
          <div 
            className="z-[-1] w-full absolute bottom-0 left-0 duration-300 bg-[#333843]"
            style={{
              height: animate ? '100%' : '0%'
            }}
          ></div>
        </div>
      </div>
    </>
  )
}

export { ServicesCard }