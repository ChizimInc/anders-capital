import Link from "next/link";
import { useState } from "react";

type IButtonProps = {
  title: string;
  link: string;
  animate: 'bottom' | 'left' 
  mainBgColor: string,
  animateBgColor: string,
  mainFontColor: string,
  animateFontColor: string,
}

const styles = {
  text: {
    fontSize: '10pt'
  }
}

const Button = (props: IButtonProps) => {
  const [buttonHover, setButtonHover] = useState(false)

  return (
    <>
      <Link href={props.link}>
        <div 
          className={`
            py-3 px-6 ease-in duration-300 relative
          `}
          style={{
            backgroundColor: props.mainBgColor,
            color: buttonHover ? props.animateFontColor : props.mainFontColor
          }}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          <div className="font-bold cursor-pointer" >
            <p 
              style={styles.text} 
              className="z-30 relative"
            >{props.title}
            </p>
          </div>
          <div 
            className="z-20 absolute bottom-0 left-0 duration-300"
            style={{
              backgroundColor: props.animateBgColor,
              height: props.animate == "bottom" ? buttonHover ? '100%' : '1px' 
                    : props.animate == "left" ? '100%' : '',
              width: props.animate == "left" ? buttonHover ? '100%' : '3px'
                   : props.animate == "bottom" ? '100%' : ''
            }}
          ></div>
        </div>
      </Link>
    </>
  )
}

export { Button }