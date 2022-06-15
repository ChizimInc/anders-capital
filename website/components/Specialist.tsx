import { AppColors } from "../utils/AppConfig";
import { useState } from "react"
import Image from 'next/image'

type ISpecialistProps = {
  image: string;
  name: string;
  link?: string;
  position: string;
  margin?: boolean;
}

const Specialist = (props: ISpecialistProps) => {
  const [mouseHandler, setMouseHandler] = useState(false)

  const styles = {
    image: {
      backgroundImage: `url(${props.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
  }

  return (
    <>
      <div 
        className={
          `w-full md:w-[230px] md:mx-5 my-5 lg:my-0
          ${props.margin ? 'lg:mt-[60px]' : ''}
        `}
        onMouseEnter={() => setMouseHandler(true)}
        onMouseLeave={() => setMouseHandler(false)} 
      >
        <div style={styles.image} className="h-[92vw] sm:h-[565px] md:h-[236px]"></div>
        <div className="flex flex-col items-center relative">
          <a 
            target="_blank" 
            rel="noreferrer"
            href={props.link} 
            className={`z-30 ${props.link && 'cursor-pointer' }`}>
            <div 
              style={{
                backgroundColor: mouseHandler ? AppColors.red : AppColors.black
              }} 
              className="flex z-30 justify-center items-center p-[0.35rem] h-[30px] mt-[-17px] border-2 transition"
            >
              <Image alt="in" src="/assets/icons/in.svg" width={20} height={13}/>
            </div>
          </a>
          <p 
            className={
              `font-semibold text-[14pt] z-30 
              ${mouseHandler ? 'text-white' : 'text-black'}
            `}
          >{props.name}</p>
          <p 
            className={
              `text-[17px] mb-1 z-30 
              ${mouseHandler ? 'text-white' : 'text-black'}
            `}
          >{props.position}</p>
          <div 
            className="absolute bottom-0 bg-app-color-400 z-20 w-full"
            style={{
              height: mouseHandler ? '99%' : '2%',
              transition: '.25s'
            }}
          ></div>
        </div>
      </div>
    </>
  )
}

export { Specialist }