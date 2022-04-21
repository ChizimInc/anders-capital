type IButtonProps = {
  title: string;
}

const styles = {
  container: {
    backgroundColor: '#B5363A'
  },
  text: {
    fontSize: '10pt'
  }
}

const BannerButton = (props: IButtonProps) => {
  return (
    <>
      <div style={styles.container} className="py-3 px-6 font-bold">
        <p style={styles.text}>{props.title}</p>
      </div>
    </>
  )
}

export { BannerButton }