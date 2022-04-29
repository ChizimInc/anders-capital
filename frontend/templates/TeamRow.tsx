import { Specialist } from "../components/Specialist"
import { AppColors } from "../utils/AppConfig"

const TeamRow = () => {
  return (
    <>
      <div style={{backgroundColor: AppColors.whiteGray}} className="py-14">
        <div className="container flex flex-col md:flex-row justify-between items-start flex-wrap">
          <Specialist 
            image="/assets/images/team/Finhub2012.jpg"
            name="Vitali Chebanu"
            position="CEO"
            margin
          />
          <Specialist 
            image="/assets/images/team/Finhub2011.jpg"
            name="Alexander Syrbu"
            position="Chief Legal Officer"
          />
          <Specialist 
            image="/assets/images/team/Finhub2810.jpg"
            name="Arteom Cebanu"
            position="Director of Corporate Affairs"
            margin
          />
          
          <Specialist 
            image="/assets/images/team/Finhub2762.jpg"
            name="Dorian Bujor"
            position="Chief Sales Officer"
          />
        </div>
      </div>
    </>
  )
}
export { TeamRow }