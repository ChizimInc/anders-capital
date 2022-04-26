import { CalendarBlock } from "../components/CalendarBlock"
import { ContactRow } from "../components/ContactRow"
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
      <ContactRow />
      <CalendarBlock />
    </>
  )
}

export default Contact