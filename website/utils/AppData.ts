import { AppConfig } from "./AppConfig"

export const NavbarItems = [
  {
    id: 1,
    title: 'About Us',
    link: '/about'
  },
  {
    id: 2,
    title: 'Services',
    link: '/consulting'
  },
  {
    id: 3,
    title: 'Specialists',
    link: '/specialists'
  },
  {
    id: 4,
    title: 'Partnership',
    link: '/partnership'
  },
  {
    id: 5,
    title: 'Contact',
    link: '/contact'
  },
]

export const Calendar = [
  {
    key: 1,
    day: 'Monday',
    hour: '8 am – 19 pm'
  },
  {
    key: 2,
    day: 'Tuesday',
    hour: '8 am – 19 pm'
  },
  {
    key: 3,
    day: 'Wednesday',
    hour: '8 am – 19 pm'
  },
  {
    key: 4,
    day: 'Thursday',
    hour: '8 am – 19 pm'
  },
  {
    key: 5,
    day: 'Friday',
    hour: '8 am – 19 pm'
  },
  {
    key: 6,
    day: 'Saturday',
    hour: '10 am – 14 pm'
  },
  {
    key: 7,
    day: 'Sunday',
    hour: 'Closed'
  },
]
  
export const Contact = [
  {
    key: 1,
    title: 'Phone',
    contact: AppConfig.phone,
    action: 'Call us'
  },
  {
    key: 2,
    title: 'E-mail',
    contact: AppConfig.email,
    action: 'Send a message'
  },
  {
    key: 3,
    title: 'Adress',
    contact: AppConfig.adress,
    action: 'Get directions'
  }
]