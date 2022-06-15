import { Banner } from "../features/Banner"
import { PageDescription } from "../features/PageDescription"

const Imprint = () => {
  return (
    <>
      <div className="bg-app-color-200">
        <Banner title="Imprint" subTitle="Imprint" />
        <div className="container flex justify-center items-center py-[17vh]">
          <div 
            className="w-full md:w-[400px] h-[240px] shadow-2xl border-l-2 border-slate-700 text-black font-semibold p-7"
          >
            <div className="flex flex-col h-full justify-around w-[250px]">
              <div>
                <p>Anders Capital AC GmbH & C0 KG</p>
                <p>Company nr. FN 529227 a</p>
              </div>
              <div>
                <p>Address: Beatrixgasse 27-2-15, 1030 Wien, Austria</p>
              </div>
              <div>Vitali Chebanu, Geschäftsführer</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Imprint