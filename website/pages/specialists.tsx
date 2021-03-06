import { Banner } from "../features/Banner"
import { PageDescription } from "../features/PageDescription"
import { Advisors } from "../templates/Advisors"
import { TeamRow } from "../templates/TeamRow"

const Specialist = () => {
  return (
    <>
      <Banner title="Specialist" subTitle="Specialist" />
      <PageDescription 
        title="Meet our leading specialists" 
        header="A team that can change your business!"
        description="Financial consultation allows you to combine personal information about your company with our extensive experience 
        gained in international practices."
      />
      <TeamRow />
      <Advisors />
    </>
  )
}

export default Specialist