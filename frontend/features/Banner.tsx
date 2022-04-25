type IBannerProps = {
  title: string;
  subTitle: string;
}

const Banner = (props: IBannerProps) => {
  return (
    <>
      <div 
        style={{backgroundColor: '#333843'}}
        className="w-full h-28 flex flex-col justify-center items-center text-white"
      >
        <div className="text-[21px] mb-1">{props.title}</div>
        <div className="text-[12px] mt-1 flex justify-center items-center">
          <p>Home</p>
          <span className="block h-3 border-l mx-2"></span>
          <p className="text-[12px]">{props.subTitle}</p>
        </div>
      </div>
    </>
  )
}

export { Banner }