import Link from 'next/link';
import React from 'react';
import { useState, useRef, MutableRefObject } from 'react';
import { useRouter } from 'next/router';
import { Button } from '../components/Button';
import { NavbarItems } from '../utils/AppData';

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const [itemHover, setItemHover] = useState(0);
  

  const span1 = useRef() as MutableRefObject<HTMLSpanElement>
  const span2 = useRef() as MutableRefObject<HTMLSpanElement>
  const span3 = useRef() as MutableRefObject<HTMLSpanElement>

  const backgroundColor = (router.pathname === '/') ? 'color-black-fill' : 'bg-white'
  const homeBannerVisible = (router.pathname === '/') ? 'flex' : 'hidden'
  const logo = (router.pathname === '/') ? 'logo-white.svg' : 'logo-black.svg'
  const color = (router.pathname === '/') ? 'text-white' : 'text-black'
  const isHome = (router.pathname === '/') ? true : false
  const isFixed = (router.pathname === '/') ? false : true

  const styles = {
    container: {
      display: 'flex',
      width: '100%',
      top: 0,
      zIndex: '500',
      boxShadow: isFixed ? '0 0 8px -2px black' : '',
      height: isHome ? 'calc(100vh - 10px)': '',
      position: isFixed ? 'fixed' as 'fixed' : 'relative' as 'relative'
    },
    image: {
      backgroundImage: isHome ? 'url("/assets/images/home-banner.jpg")' : '',
      backgroundPosition: 'center',
      width: '100%',
      height: isHome ? 'calc(100vh - 10px)' : '',
      backgroundSize: 'cover',
      position: isHome ? 'absolute' as 'absolute' : 'relative' as 'relative',
      top: '0',
    },
    span: {
      borderTop: '4px solid #B5363A'
    },
    burgherMenu: {
      borderTopColor: isHome ? 'white' : 'black'
    }
  }

  const burgerClickOpen = () => {
    span2.current.classList.remove('border-t-[2px]')
    span1.current.classList.add('origin-left')
    span1.current.classList.add('rotate-[42deg]')
    span3.current.classList.add('origin-left')
    span3.current.classList.add('-rotate-[42deg]')
  }

  const burgerClickClose = () => {
    span2.current.classList.add('border-t-[2px]')
    span1.current.classList.remove('origin-left')
    span1.current.classList.remove('rotate-[42deg]')
    span3.current.classList.remove('origin-left')
    span3.current.classList.remove('-rotate-[42deg]')
  }

  const burgerClickItem = () => {
    setIsOpen(false);
    burgerClickClose();
  }

  
  return (
    <>
      <div style={styles.container}>
        <div style={styles.image}>
          <div className={`navbar z-50 w-full h-[90px] items-center px-5 flex ${backgroundColor}`}>
            <nav className="flex justify-between items-end w-full z-20">
              <div className='cursor-pointer'>
                <Link href='/'>
                  <img alt='logo' src={`/assets/images/${logo}`} className='logo' style={{width: '135px', height: '44px'}}/>
                </Link>
              </div>
              <div className={`hidden lg:flex text-base w-full justify-center ${color}`}>
                {NavbarItems.map( (item) => (
                  <div 
                    className='flex relative items-end'
                    onMouseEnter={() => setItemHover(item.id)}
                    onMouseLeave={() => setItemHover(0)}
                    key={item.id}
                  >
                    <Link href={item.link} key={item.link}>
                      <a className="mx-12">{item.title}</a>
                    </Link>
                    <div className='flex justify-center absolute bottom-[-23px] w-full'>
                      <div 
                        className={`
                          duration-150 w-[68px]
                          ${isHome ? 'bg-white' : 'bg-[#333843]'}  
                          ${itemHover == item.id ? 'h-[16px]' : 'h-[0px]'}`
                        }
                      ></div>
                    </div>
                  </div>
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
                    <span ref={span1} style={styles.burgherMenu} className='block w-full border-t-[2px] rounded-full'></span>
                    <span ref={span2} style={styles.burgherMenu} className='block w-full border-t-[2px] rounded-full'></span>
                    <span ref={span3} style={styles.burgherMenu} className='block w-full border-t-[2px] rounded-full'></span>
                  </div>
                </button>
              </div>
            </nav>
            
          </div>
          <div
            className={`fixed z-10 lg:hidden inset-0 bg-gray-800 bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}
          >
            <div 
              className="text-primary-dark-blue flex flex-col text-center mx-5 my-20 py-4 rounded"
              style={{backgroundColor: 'white'}}
            >
              {NavbarItems.map( (item) => (
                <Link href={item.link} key={item.link}>
                  <a className="py-2" onClick={burgerClickItem}>{item.title}</a>
                </Link>
              ))}
            </div>

          </div>
          <div className={`${homeBannerVisible} flex-col text-white w-full absolute top-0 h-full items-center justify-center`}>
            <div className='flex flex-col justify-between items-center' style={{height: '330px'}}>
              <div className="flex flex-col items-center font-bold text-center w-[306px] md:w-[700px]">
                <div 
                  style={{lineHeight: '55px', color: 'white'}}
                  className="text-2xl md:text-[2.5rem]"
                >We will assist your business with innovation, achievement and grow!</div>
                <span className='block w-36 my-6' style={styles.span}></span>
                <div className='text-xl' style={{color: 'white'}}>Business strategies that actually work</div>
              </div>
              <div className='mt-16 md:mt-0'>
                <Button 
                  title="Discover our services" 
                  link='/consulting'
                  animate='bottom'
                  mainBgColor='#B5363A'
                  animateBgColor='#FFFFFF'
                  mainFontColor='#FFFFFF'
                  animateFontColor='#333843'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}