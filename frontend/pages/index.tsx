import { CalendarAndContact } from "../templates/CalendarAndContact";
import { ImageAndTitle } from "../templates/ImageAndTitle";
import { AppColors } from "../utils/AppConfig";

export default function Home() {
  return (
    <>
      <ImageAndTitle color={AppColors.whiteGray} />
      <CalendarAndContact />
    </>
  )
}