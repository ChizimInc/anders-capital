import { motion } from "framer-motion";
import Link from "next/link";
import { AppColors } from "../utils/AppConfig";

type IButtonProps = {
  title: string;
  link: string;
}

const styles = {
  container: {
    backgroundColor: AppColors.red,
    color: 'white'
  },
  text: {
    fontSize: '10pt'
  }
}

const Button = (props: IButtonProps) => {
  return (
    <>
      <motion.div whileTap={{ scale: 0.95 }}>
        <Link href={props.link}>
          <div 
            style={styles.container} 
            className="py-3 px-6 font-bold cursor-pointer ease-in duration-300 hover:scale-105 hover:rounded-xl"
          >
            <p style={styles.text}>{props.title}</p>
          </div>
        </Link>
      </motion.div>
    </>
  )
}

export { Button }