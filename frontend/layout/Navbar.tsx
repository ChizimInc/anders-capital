import Link from 'next/link';
import { useState, useRef, MutableRefObject } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  

  const span1 = useRef() as MutableRefObject<HTMLSpanElement>
  const span2 = useRef() as MutableRefObject<HTMLSpanElement>
  const span3 = useRef() as MutableRefObject<HTMLSpanElement>

  const backgroundColor = (router.pathname === '/') ? 'color-black-fill' : 'bg-white'

  const burgerClickOpen = () => {
    span2.current.classList.add('border-t-0')
    span1.current.classList.add('origin-left')
    span1.current.classList.add('rotate-[42deg]')
    span3.current.classList.add('origin-left')
    span3.current.classList.add('-rotate-[42deg]')
  }

  const burgerClickClose = () => {
    span2.current.classList.remove('border-t-0')
    span1.current.classList.remove('origin-left')
    span1.current.classList.remove('rotate-[42deg]')
    span3.current.classList.remove('origin-left')
    span3.current.classList.remove('-rotate-[42deg]')
  }

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
      <div className={`navbar z-50 w-full h-24 items-center px-5 flex ${backgroundColor}`}>
        <nav className="flex justify-between items-end w-full z-20">
          <div>
            <img alt='logo' src="/assets/images/logo-white.svg" className='logo' style={{width: '135px', height: '44px'}}/>
          </div>
          <div className="hidden lg:flex text-base w-full justify-center text-gray">
            {items.map( (item) => (
              <Link href={item.link} key={item.link}>
                <a className="hover:text-black mx-10">{item.title}</a>
              </Link>
            ))}
          </div>
          <div style={{height: '43px'}} className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block lg:hidden focus:outline-none"
            >
              <div 
                className={`w-7 flex justify-between flex-col`} 
                style={{height: '21px'}} 
                onClick={isOpen ? burgerClickClose : burgerClickOpen}
              >
                <span ref={span1} className='block w-full border-t-[2px] rounded-full'></span>
                <span ref={span2} className='block w-full border-t-[2px] rounded-full'></span>
                <span ref={span3} className='block w-full border-t-[2px] rounded-full'></span>
              </div>
            </button>
          </div>
        </nav>
        
      </div>
      <div
        className={`fixed lg:hidden inset-0 bg-gray-800 bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white text-primary-dark-blue flex flex-col text-center mx-5 my-20 py-4 rounded">
          {items.map( (item) => (
            <Link href={item.link} key={item.link}>
              <a className="py-2" onClick={() => setIsOpen(false)}>{item.title}</a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}