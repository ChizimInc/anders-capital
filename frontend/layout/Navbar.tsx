import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter()
  const backgroundColor = (router.pathname === '/') ? 'color-black-fill' : 'bg-white'

  const items = [
    {
      title: 'About Us',
      link: '/about'
    },
    {
      title: 'Services',
      link: '/services'
    },
    {
      title: 'Specialists',
      link: '/specialists'
    },
    {
      title: 'Partnership',
      link: '/partnership'
    },
    {
      title: 'Contact',
      link: '/contact'
    },
  ]
  return (
    <>
      <div className={`fixed z-50 top-0 w-full h-20 items-center px-5 ${backgroundColor}`}>
        <nav className="flex items-center z-20 h-12">
          <div className='w-36'>
            <img alt='logo' src="/assets/images/logo-white.svg"  className='h-12'/>
          </div>
          <div className="lg:block text-lg text-gray flex">
            {items.map( (item) => (
              <Link href={item.link} key={item.link}>
                <a className="hover:text-black mx-10">{item.title}</a>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}