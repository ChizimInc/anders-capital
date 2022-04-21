const HomeBanner = () => {
  const styles = {
    container: {
      display: 'flex',
      height: 'calc(100vh - 100px)',
    },
    image: {
      backgroundImage: 'url("/assets/images/home-banner.jpg")',
      width: '100%',
      height: 'calc(100vh - 10px)',
      backgroundSize: 'cover',
      position: 'absolute' as 'absolute',
      top: '0',
    }
  }

  return(
    <>
      <div style={styles.container}>
        <div style={styles.image}>

        </div>
      </div>
    </>
  )
}

export { HomeBanner }