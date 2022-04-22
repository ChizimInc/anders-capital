import { ImageAndTitleButton } from "../components/ImageAndTitleButton";

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
      marginLeft: '8px',
      marginTop: '12px'
    },
    title: {
      color: '#B5363A',
      fontWeight: '600'
    },
    text: {
      fontWeight: '700',
      lineHeight: '57px'
    }
  }
  return (
    <>
      <div style={styles.container}>
        <div className="container py-16">
          <div className="flex justify-between flex-col-reverse lg:flex-row">
            <div 
              style={styles.borderImage} 
              className="mt-16 lg:mt-0 imageAndTitle-borderImage"
            >
              <div 
                style={styles.image}
                className="imageAndTitle-image"
              ></div>
            </div>
            <div className="lg:w-1/3 xl:w-1/2 flex flex-col justify-center items-start">
              <div>
                <div 
                  style={styles.title}
                  className="ml-3"
                >Welcome to Anders Capital</div>
                <div 
                  style={styles.text} 
                  className="text-5xl"
                >
                    Comprehensive improvement of the financial aspects of your business.
                </div>
              </div>
              <div className="mt-16">
                <ImageAndTitleButton title="Find out more" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { ImageAndTitle }