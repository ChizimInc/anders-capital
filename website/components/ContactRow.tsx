import { Contact } from "../utils/AppData"
import { AppColors } from "../utils/AppConfig"

const ContactRow = () => {
  const styles = {
    container: {
      borderLeftColor: AppColors.grey,
      borderRightColor: AppColors.grey,
    }
  }

  return (
    <>
      <div style={{backgroundColor: AppColors.whiteGray}} className="mb-5">
        <div className="container text-black flex flex-col md:flex-row md:h-20 font-semibold items-center">
          {
            Contact.map( (item) => (
              <div 
                key={item.key} 
                className={`w-full md:h-full md:w-1/3 flex px-10 md:px-0 py-5 md:py-0 items-center md:justify-center ${item.key == 2 ? 'border-x-2' : ''}`}
                style={styles.container}
              >
                <div className="">
                  <p className="text-[10pt]">{item.contact}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export { ContactRow }