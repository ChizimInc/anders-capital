import { Button } from "../components/Button";

type IImageAndTitleProps = {
  color?: string;
}

const ImageAndTitle = (props: IImageAndTitleProps) => {
  const styles = {
    container: {
      backgroundColor: props.color ? props.color : '',
      color: '#333843'
    },
    borderImage: {
      width: '400px',
      height: '475px',
      border: '7px solid #333843'
    },
    image: {
      backgroundImage: 'url("/assets/images/home-image.svg")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '478px',
      height: '442px',
    },
    title: {
      color: '#B5363A',
      fontWeight: '600'
    },
    text: {
      fontWeight: '700',
    }
  }
  return (
    <>
      <div style={styles.container}>
        <div className="container py-16 imageAndTitle">
          <div className="flex justify-between items-center flex-col-reverse lg:flex-row">
            <div 
              style={styles.borderImage} 
              className="mt-16 lg:mt-0 imageAndTitle-borderImage absolute hidden lg:block"
            >
              
            </div>
            <div className="lg:hidden mt-16 mb-8 lg:mb-0 w-full flex justify-center lg:justify-start">
              <Button 
                title="Find out more" 
                link='/about' 
                animate='left'
                mainBgColor='#B5363A'
                animateBgColor='#333843'
                mainFontColor='#FFFFFF'
                animateFontColor='#FFFFFF'
              />
            </div>
            <div 
              style={styles.image}
              className="mt-[60px] imageAndTitle-image z-10 lg:ml-5 lg:mt-[12px]"
            ></div>
            
            <div className="lg:w-1/3 xl:w-1/2 flex flex-col justify-center items-start">
              <div>
                <div 
                  style={styles.title}
                  className="ml-[9px]"
                >Welcome to Anders Capital</div>
                <div 
                  style={styles.text} 
                  className="text-4xl md:text-5xl leading-[35px] md:leading-[57px]"
                >
                    Comprehensive improvement of the financial aspects of your business.
                </div>
              </div>
              <div className="hidden lg:flex mt-16 mb-8 lg:mb-0 w-full justify-center lg:justify-start">
                <Button 
                  title="Find out more" 
                  link='/about' 
                  animate='left'
                  mainBgColor='#B5363A'
                  animateBgColor='#333843'
                  mainFontColor='#FFFFFF'
                  animateFontColor='#FFFFFF'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { ImageAndTitle }