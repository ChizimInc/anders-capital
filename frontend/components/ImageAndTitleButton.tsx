type IButtonProps = {
  title: string;
}

const styles = {
  container: {
    backgroundColor: '#B5363A',
    color: 'white'
  },
  text: {
    fontSize: '10pt'
  }
}

const ImageAndTitleButton = (props: IButtonProps) => {
  return (
    <>
      <div style={styles.container} className="py-3 px-6 font-bold">
        <p style={styles.text}>{props.title}</p>
      </div>
    </>
  )
}

export { ImageAndTitleButton }