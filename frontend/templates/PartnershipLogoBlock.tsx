type IPartnershipProps = {
  image: string;
  title: string;
  text: string;
}

const PartnershipLogoBlock = (props: IPartnershipProps) => {
  const styles = {
    container: {
      boxShadow: '#9d9797 0px 0px 3px 0px'
    },
    image: {
      backgroundImage: `url(${props.image})`,
      width: '80%',
      height: '28%',
      backgroundSize: 'cover'
    }
  }
  return (
    <>
      <div className="w-[300px] h-[165px] flex flex-col items-center justify-center text-black" style={styles.container}>
        <div className="flex flex-col items-center h-[75px] justify-center">
          <img src={props.image} alt="logo" className="w-[75%] " />
        </div>
        <div className="w-full flex flex-col items-center">
          <span className="block w-[85%] border-t-2 mt-6 mb-2"></span>
          <p>{props.title}</p>
        </div>
      </div>
    </>
  )
}

export { PartnershipLogoBlock }