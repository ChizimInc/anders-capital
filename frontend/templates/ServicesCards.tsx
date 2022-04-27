import { AppColors } from "../utils/AppConfig"
import { ServicesCard } from "../components/ServicesCard"

const ServicesCards = () => {

  return (
    <>
      <div style={{backgroundColor: AppColors.whiteGray}} className="mb-5 py-5">
        <div className="container text-black font-semibold items-center justify-between">
          <div className="my-7 flex flex-col md:flex-row items-center justify-around">
            <ServicesCard 
              image="/assets/images/services/Analytics.svg" 
              title="Analytics"
              height="long"
              text="Investigation of: the present activities of the organization, internal and external communication of the business units, 
              market analysis in order to meet the customers’ needs and expectations, the competitive advantages of the company in terms of 
              market share growth and technological development."
            />
            <ServicesCard 
              image="/assets/images/services/Forecast.svg" 
              title="Forecast & Strategy"
              height="long"
              text="Estimating possible sales & market achievements of the organization, identifying promising areas, assessing the 
              investment and profitability rate from launch to maturity stage of the business. The consulting forecast is always based 
              on figures and facts, therefore the predictions are considered to be reliable data."
            />
            <ServicesCard 
              image="/assets/images/services/Internal.svg" 
              title="Internal Audit"
              height="long"
              text="Independent verification of the current activity of the company including identification of any issues that can 
              negatively influence your business. Verification of: accounting documents, sales department efficiency, technical support 
              services and any other areas of your organisation."
            />
          </div>
          <div className="my-7 flex flex-col md:flex-row items-center justify-around">
            <ServicesCard 
              image="/assets/images/services/Expert.svg" 
              title="Expert Advice"
              height="short"
              text="Guidance on any issues and tips for solving business problems in a creative and efficient manner. Directed one-time 
              or on the basis of a long-term contract."
            />
            <ServicesCard 
              image="/assets/images/services/Business.svg" 
              title="Business Optimization"
              height="short"
              text="Presentation or testing of new software, staff preparing, marketing strategies and other methods that will optimise 
              the work of your business and will increase supply efficiency at the lowest possible cost."
            />
            <ServicesCard 
              image="/assets/images/services/Investments.svg" 
              title="Investments"
              height="short"
              text="Creating new investment opportunities in global projects and as well creation of the opportunities to receive the 
              necessary funding for your business development."
            />
          </div>
        </div>
      </div>
    </>
  )
}

export { ServicesCards }