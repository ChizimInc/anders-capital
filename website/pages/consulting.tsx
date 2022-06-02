import { Banner } from "../features/Banner"
import { PageDescription } from "../features/PageDescription"
import { ServicesCards } from "../templates/ServicesCards"

const Consulting = () => {
  return (
    <>
      <Banner title="Consulting Services" subTitle="Services" />
      <PageDescription 
        title="High level of competence" 
        header="Extensive financial consulting experience in collaboration with companies from various business sectors."
        description="Our specialists can assist your business at any point of the business life cycle, offering the most 
        revolutionary and effective methods to achieve your goals. We can provide opportunities for investment in major projects 
        across Europe and Asia. As well, we can assist you in rising funds for business projects in different business sectors."
      />
      <ServicesCards/>
    </>
  )
}

export default Consulting