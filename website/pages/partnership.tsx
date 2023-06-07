import { Banner } from "../features/Banner"
import { PageDescription } from "../features/PageDescription"
import { PartnershipLogoBlock } from "../templates/PartnershipLogoBlock"

const Partnership = () => {
  return (
    <>
      <Banner title="Partnership" subTitle="Partnership" />
      <PageDescription 
        title="Our partners & projects" 
        header="Building strong partnerships that ensure the way to success!"
      />
      <div className="container mb-10 flex flex-col md:flex-row justify-center items-center">
        <PartnershipLogoBlock 
          image="/assets/images/partnership/finhub-logo.svg" 
          title="Crowdfunding Company"
          text="Online platform that was created to communicate potential investors with promising projects in one trading arena, 
          where the borrower quickly and profitably receives the amount he needs, and the investor invests profitably."
        />
        <PartnershipLogoBlock 
          image="/assets/images/partnership/icod-logo.svg" 
          title="Law Company"
          text="ANDERS CAPITAL GmbH combined lawyers and economists with experience in Western and Eastern Europe and created a 
          project of professional advice on a wide range of legal, economic and financial issues, the activities of companies and 
          individuals."
        />
        <PartnershipLogoBlock 
          image="/assets/images/partnership/healthity-logo.svg" 
          title="Healthy Products"
          text="Healthyty is a trademark for the production, development of health products. Currently, the project is 100% 
          owned by WINGS BUSINESS s.r.o."
        />
      </div>
      <div className="container mb-10 flex flex-col md:flex-row justify-center items-center">
        <PartnershipLogoBlock 
          image="/assets/images/partnership/ekson-logo.svg" 
          title="Bio Energy Production"
          text="The implemented project provides for the collection and burning of biological gas from municipal solid waste 
          with a high methane content during the generation of electric and thermal energy."
        />
        <PartnershipLogoBlock 
          image="/assets/images/partnership/green-landscape-logo.svg" 
          title="Landscape Design"
          text="Provides services in the field of landscape design, the supply of green spaces, construction and the supply of 
          materials and construction equipment."
        />
        <PartnershipLogoBlock 
          image="/assets/images/partnership/novello-logo.svg" 
          title="Construction Company"
          text="GTS 8 s.r.o is a partner of the Italian company Novello, together with which it is implementing a construction 
          project in Uzbekistan."
        />
      </div>
      <div className="container mb-10 flex flex-col md:flex-row justify-center items-center">
        <PartnershipLogoBlock 
          image="/assets/images/partnership/daac-hermes-logo.svg" 
          title="Car Showroom"
          text="GTS 8 s.r.o collaborates with the DAAC-Hermes holding, which sells cars in Moldova. Buying Skoda cars and accessories 
          and supplying them to DAAC-Hermes."
        />
        <PartnershipLogoBlock 
          image="/assets/images/partnership/tecnogen-logo.svg" 
          title="Steel Technology"
          text="A company for the production of equipment and tanks made of steel for food related to wineries, breweries, dairies, etc."
        />
        <PartnershipLogoBlock 
          image="/assets/images/partnership/vioinox-logo.svg" 
          title="Steel Production"
          text="Production Enterprise of the complete cycle for the production of storage equipment made of stainless steel, together 
          with the Italian company TECNOGEN."
        />
      </div>
      <div className="container mb-10 flex flex-col md:flex-row justify-center items-center">
        <PartnershipLogoBlock 
          image="/assets/images/partnership/kodeson.svg" 
          title="Product Development"
          text="Kodeson is an expert team with over 10 years of experience in software development that adjusts to your specific needs without wasting your time."
        />
        <PartnershipLogoBlock 
          image="/assets/images/partnership/fhss.svg" 
          title="Consulting Company"
          text="Finhub Scaling Solutions is a B2B consulting company, offering a broad range of professional services, primarily within Sales, IT and Finances & Legal. Based on our experience of over a decade within the EU market and highly skillful and dedicated team of experts, we deliver personalized and cost-effective solutions to our customers. "
        />
      </div>
    </>
  )
}

export default Partnership