import { Specialist } from "../components/Specialist"
import { AppColors } from "../utils/AppConfig"

const TeamRow = () => {
  return (
    <>
      <div style={{backgroundColor: AppColors.whiteGray}} className="py-14">
        <div className="container flex flex-col md:flex-row justify-between items-start flex-wrap">
          <Specialist 
            image="/assets/images/team/Finhub2762.jpg"
            name="Dorian Bujor"
            position="Chief Sales Officer"
            margin
          />
          <Specialist 
            image="/assets/images/team/Finhub2810.jpg"
            name="Arteom Cebanu"
            position="Director of Corporate Affairs"
          />
          <Specialist 
            image="/assets/images/team/Finhub2762.jpg"
            name="Dorian Bujor"
            position="Chief Sales Officer"
            margin
          />
          <Specialist 
            image="/assets/images/team/Finhub2762.jpg"
            name="Dorian Bujor"
            position="Chief Sales Officer"
          />
          <Specialist 
            image="/assets/images/team/Finhub2762.jpg"
            name="Dorian Bujor"
            position="Chief Sales Officer"
            margin
          />
        </div>
      </div>
    </>
  )
}
export { TeamRow }