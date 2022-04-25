import { Banner } from "../features/Banner"
import { PageDescription } from "../features/PageDescription"

const Contact = () => {
  return (
    <>
      <Banner title="Contact" subTitle="Contact" />
      <PageDescription 
        title="Contact info" 
        header="We are open for new projects!"
        description="Any inquiries or business offers? We are anticipating to get notifications from you!"
      />
    </>
  )
}

export default Contact