import { useState } from "react";
import { AppColors } from "../utils/AppConfig"

type IImageAndTitleProps = {
  color?: string;
}

const book = [
  {
    id: 1,
    title: 'Why choose us',
    text: [
      'Anders Capital Gmbh conducts observations, evaluates the general condition of the organization and its condition in specific regions of development. It examines venture capital actions, checks the lack of working capital, afterwards, on the basis of the received information, the probability of creating a reasonable choice for the business effective improvement is determined.',
      'Based on this, Anders Capital GmbH formed an exclusive opportunity to completely revise customer’s structure of collaboration and create new open doors to reveal the hidden capabilities of each particular business. Therefore, our customers use the opportunity to resort to such assistance, especially if the organization is in a difficult financial situation.'
    ]
  },
  {
    id: 2,
    title: 'Our principles',
    text: [
      'Anders Capital Gmbh enjoys incredible relevance, as it provides an opportunity to use the information and experience of its highly qualified specialists who can identify the causes of the financial problems that your business currently face and propose ideal measures that will provide the most effective solutions at the lowest possible cost.',
      'Our financial advisors will help to allocate your financial resources appropriately, estimate the costs of project implementation, evaluate the payback period of these projects, calculate financial risks and draw up a financial strategy for the efficient distribution of funds.'
    ]
  },
  {
    id: 3,
    title: 'Achievements',
    text: [
      'Anders Capital Gmbh entered the global financial market by creating successful projects in different parts of the world. Proper methodology and effective implementation of the financial services that we offer, added in our portfolio a range of successful and profitable businesses.',
      'Our achievements are considered to be the successful projects and partnerships that we have launched during the lifetime of our company.'
    ]
  }
]

const ImageAndTextbook = (props: IImageAndTitleProps) => {
  const [isActive, setIsActive] = useState(1)

  const openHandler = (id: number) => {
    setIsActive(id)
  }

  const styles = {
    container: {
      backgroundColor: props.color ? props.color : '',
      color: '#333843'
    },
    borderImage: {
      width: '396px',
      height: '493px',
      border: '7px solid #333843'
    },
    image: {
      backgroundImage: 'url("/assets/images/home-image.svg")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '434px',
      height: '471px',
      marginTop: '7px'
    },
    title: {
      color: '#B5363A',
      fontWeight: '600'
    },
    text: {
      fontWeight: '700',
    },
  }
  return (
    <>
      <div style={styles.container}>
        <div className="container py-16 imageAndTitle">
          <div className="flex justify-between items-center flex-col lg:flex-row">
            <div 
              style={styles.borderImage} 
              className="mt-16 lg:mt-0 imageAndTitle-borderImage absolute hidden lg:block"
            >
              
            </div>
            <div 
              style={styles.image}
              className="imageAndTitle-image z-10 lg:ml-5"
            ></div>
            <div className="lg:w-1/3 xl:w-1/2 flex flex-col py-5 text-black items-start">
              {
                book.map( (item) => (
                  <div 
                    key={item.id}
                    onClick={() => openHandler(item.id)}
                  >
                    <div className="flex items-center text-[16pt] cursor-pointer">
                      <span 
                        className="block h-[24px] mr-[7px]"
                        style={{
                          borderLeft: `3.5px solid ${isActive == item.id ? AppColors.red : AppColors.black}`
                        }}
                      ></span>
                      <p className="font-semibold">{item.title}</p>
                    </div>
                    <div className={`${isActive == item.id ? 'block' : 'hidden'}`}>
                      {
                        item.text.map( (itemtext) => (
                          <p key={itemtext} className="my-4">{itemtext}</p>
                        ))
                      }
                    </div>
                    <span 
                      className={`
                        block w-full h-1 border-t-[1px] 
                        ${isActive == item.id ? 'border-t-app-color-400' : 'border-t-app-color-300'} 
                      `}
                    ></span>
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

export { ImageAndTextbook }