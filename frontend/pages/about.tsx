import { Banner } from "../features/Banner"
import { PageDescription } from "../features/PageDescription"
import { ImageAndTextbook } from "../templates/ImageAndTextbook"
import { AppColors } from "../utils/AppConfig"

const AboutUs = () => {
  return (
    <>
      <Banner title="About us" subTitle="About us" />
      <PageDescription 
        title="Welcome to Anders Capital" 
        header="Comprehensive improvement of the financial aspects of your business."
        description="Anders Capital GMbH is a financial consulting company, specialising in the development of projects in the 
        “real sectors” of the economy: manufacturing, energy, construction, development, jurisprudence and others.
        Anders Capital can assist your business on any step of its existence in terms of financial, development or managerial 
        perspective.We offer a wide range of financial services, that insure high quality and loyalty to our customers."
      />
      <ImageAndTextbook color={AppColors.whiteGray} />
    </>
  )
}

export default AboutUs