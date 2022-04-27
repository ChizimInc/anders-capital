import { AppColors } from "../utils/AppConfig"
import { MutableRefObject, useRef, useState } from "react";

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
        className={`w-full md:w-[340px] 
          ${props.height == 'long' ? 'md:h-[380px]' : 'md:h-[280px]'} mx-3 my-5 md:my-0 flex flex-col 
          ${animate ? 'bg-slate-800 text-white' :'bg-white text-black'}`
        }
        style={styles.container}
        onMouseEnter={animateHandler}
        onMouseLeave={animateHandler}
      >
        <div className="flex justify-evenly items-center">
          <div className="w-full flex items-center">
            <span className={`block h-6 border-r-4 mr-4 ${animate ? 'border-slate-100' : 'border-slate-900'}`}></span>
            <p className="text-base md:text-[0.8rem] lg:text-xl">{props.title}</p>
          </div>
          <div className="flex flex-col w-16 items-end h-[75px] justify-center">
            <img 
              src={props.image} 
              alt="logo" 
              className="mr-5" 
              style={styles.imageFilter}
            />
          </div>
        </div>
        <div className="mx-5 text-base md:text-sm lg:text-base mb-3">{props.text}</div>
        <div className="flex justify-end items-end h-full">
          <span className={`block w-full border-t-2 ${animate ? 'border-red-500' : 'border-slate-900'}`}></span>
        </div>
      </div>
    </>
  )
}

export { ServicesCard }