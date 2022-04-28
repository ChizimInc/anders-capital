import { AppColors } from "../utils/AppConfig"

const advisorsArray = [
  {
    title: 'Calculate financial risks',
    src: '/assets/images/advisors/Calculate financial risks.svg'
  },
  {
    title: 'Estimate the costs of project',
    src: '/assets/images/advisors/Estimate the costs of project.svg'
  },
  {
    title: 'Evaluate the payback period',
    src: '/assets/images/advisors/Evaluate the payback period.svg'
  },
  {
    title: 'Draw up a financial strategy',
    src: '/assets/images/advisors/Draw up a financial strategy.svg'
  },
  {
    title: 'Allocate financial resources',
    src: '/assets/images/advisors/Allocate financial resources.svg'
  },
]

const Advisors = () => {
  return (
    <>
      <div className="mb-5 text-black font-semibold">
        <div className="container flex flex-col items-center justify-center">
          <p style={{color: AppColors.red}} className="text-[9pt] mt-5">Principles of our work</p>
          <div className="text-3xl w-[285px] text-center leading-[36px] mb-5">Our financial advisors will help to:</div>
          <div className="my-10 w-full">
            <h2 className="flex justify-between background flex-wrap">
              {
                advisorsArray.map( (item) => (
                  <div className="w-28 flex my-4 md:my-0 flex-col items-center">
                    <div className="bg-white w-[5rem] flex justify-center">
                      <img 
                        alt="icon" 
                        src={item.src}
                        className="w-[55%] mb-3"
                      />
                    </div>
                    <p className="text-[9pt] text-center">{item.title}</p>
                  </div>
                ))
              }
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export { Advisors }