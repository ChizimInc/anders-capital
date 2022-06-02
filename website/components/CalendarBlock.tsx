import { Calendar } from "../utils/AppData"
import { AppColors } from "../utils/AppConfig"

const styles = {
  span: {
    display: 'block',
    borderTop: `3px solid ${AppColors.black}`,
    width: '43px',
    borderRadius: '10px',
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

const CalendarBlock = () => {
  return (
    <>
      <div className="container flex justify-center mt-16 mb-24 font-semibold">
        <div className="w-full md:w-2/5 text-black shadow-2xl border-b-2 border-b-slate-500">
          <div className="flex flex-col items-center justify-center text-[16pt]">
            <span style={styles.span}></span>
            <p className="mt-5">Business hours</p>
          </div>
          <div className="mt-7 mx-10 mb-10">
            {
              Calendar.map( (item) => (
                <div key={item.key}>
                  <div className="flex justify-between my-[9px] text-[11pt]">
                    <div>{item.day}</div>
                    <div>{item.hour}</div>
                  </div>
                  {(item.key === Calendar.length) ? '' : <span style={styles.spanGrayFull}></span>} 
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export { CalendarBlock }