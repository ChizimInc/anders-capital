type IDescriptionProps = {
  title: string;
  header: string;
  description?: string;
}

const styles = {
  title: {
    color: '#B5363A',
    fontWeight: '600'
  },
  text: {
    fontWeight: '700',
  }
}

const PageDescription = (props: IDescriptionProps) => {
  return (
    <>
      <div>
        <div className="container my-16 text-black">
          <div 
            style={styles.title}
            className="ml-1"
          >{props.title}</div>
          <div 
            style={styles.text} 
            className="text-4xl md:text-5xl leading-[35px] md:leading-[57px]"
          >{props.header}</div>
          <div className={`mt-4 ${props.description ? 'block': 'hidden'}`}>
            {props.description}
          </div>
        </div>
      </div>
    </>
  )
}

export { PageDescription }
