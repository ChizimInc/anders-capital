import { AppConfig } from "../utils/AppConfig"
import { AppColors } from "../utils/AppConfig"
import { Calendar, Contact } from "../utils/AppData"

const styles = {
  span: {
    display: 'block',
    borderLeft: `3.5px solid ${AppColors.red}`,
    height: '24px',
    marginRight: '7px',
  },
  spanGray: {
    display: 'block',
    borderTop: `1px solid ${AppColors.grey}`,
    width: '145px',
    margin: '2px 0 2px 0'
  },
  spanGrayFull: {
    display: 'block',
    borderTop: `1px solid ${AppColors.grey}`,
    margin: '2px 0 2px 0'
  }
}

const CalendarAndContact = () => {
  return(
    <>
      <div className="py-12" style={{color: AppColors.black}}>
        <div className="container flex flex-col sm:flex-row justify-between font-semibold">
          <div className="sm:w-2/5">
            <div className="flex items-center text-[16pt]">
              <span style={styles.span}></span>
              <p>Business hours</p>
            </div>
            <div className="mt-7 ml-3">
              {
                Calendar.map( (item) => (
                  <div key={item.key}>
                    <div className="flex justify-between my-[6px] text-[11pt]">
                      <div>{item.day}</div>
                      <div>{item.hour}</div>
                    </div>
                    {(item.key === Calendar.length) ? '' : <span style={styles.spanGrayFull}></span>} 
                  </div>
                ))
              }
            </div>
          </div>
          <div className="sm:w-2/5 mt-10 sm:mt-0">
            <div className="flex items-center">
              <span style={styles.span}></span>
              <p className="text-[16pt]">Contact info</p>
            </div>
            <div className="pt-4 ml-3">
              {
                Contact.map( (item) => (
                  <div className="py-2" key={item.title}>
                    <p className="text-[11pt]">{item.title}:</p>
                    <span style={styles.spanGray}></span>
                    <p className="text-[10pt]">{item.contact}</p>
                    <div className="text-[11pt]">
                      <p 
                        style={{color: AppColors.red}}
                        className="cursor-pointer"
                      >{item.action}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { CalendarAndContact }