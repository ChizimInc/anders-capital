import { AppColors } from "../utils/AppConfig";

type ISpecialistProps = {
  image: string;
  name: string;
  position: string;
  margin?: boolean;
}

const Specialist = (props: ISpecialistProps) => {
  const styles = {
    image: {
      backgroundImage: `url(${props.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    iconContainer: {
      backgroundColor: AppColors.black,
      marginTop: '-13px'
    }
  }

  return (
    <>
      <div className={`w-full md:w-44 border-b-2 border-slate-600 md:mx-5 my-5 lg:my-0 ${props.margin ? 'lg:mt-[60px]' : ''}`} >
        <div style={styles.image} className="h-[92vw] sm:h-[565px] md:h-[168px]"></div>
        <div className="flex flex-col items-center">
          <div 
            style={styles.iconContainer} 
            className="flex justify-center items-center p-[0.15rem] h-[23px] border-2"
          >
            <img alt="in" src="/assets/icons/in.svg" className="w-[70%]"/>
          </div>
          <p className="text-black font-semibold">{props.name}</p>
          <p className="text-[13px] mb-1">{props.position}</p>
        </div>
      </div>
    </>
  )
}

export { Specialist }