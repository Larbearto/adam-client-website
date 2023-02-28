import React, { useState } from 'react'
import NavLink from './NavLink'
import { GiDolphin } from 'react-icons/gi'
import { Menu, User, Calendar } from 'react-feather'
import useMediaQuery from '../../hooks/useMediaQuery'
import { type SelectedPage } from '../../shared/types'
import Link from 'next/link'

type Props = {
  isTopOfPage: boolean
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}
const Header = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = 'flex items-center justify-between'
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
  const navbarBackground = isTopOfPage
    ? ''
    : 'bg-gray-900 rounded-full w-full flex justify-center items-center mt-4 transition-all duration-300 h-20 text-gray-100'
  return (
<<<<<<< HEAD
    <nav>
      <div
        className={`${navbarBackground} fixed flex justify-evenly items-center w-full py-6 top-0 z-30`}
      >
        <div className={`flex justify-center items-center w-11/12`}>
          <div className={`${flexBetween} w-[97%] mx-auto gap-16`}>
=======
    <nav className='max-w-full px-2'>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-2`}>
        <div className={`${flexBetween} mx-auto w-11/12`}>
          <div className={`${flexBetween} w-full gap-32`}>
>>>>>>> fc4c2af (env variables updated)
            {/* LEFT SIDE */}
            <div className='flex items-center gap-4 font-montserrat'>
              <GiDolphin className='text-5xl text-gray-400' />
              <p className='text-gray-400 font-bold tracking-widest font-montserrat'>
                Coach Adam
              </p>
            </div>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
<<<<<<< HEAD
              <div className='flex items-center justify-between w-full'>
                <div
                  className={`items-center flex justify-center font-montserrat gap-8 text-gray-100 text-md w-full`}
                >
=======
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 font-semibold text-gray-500 lg:text-lg`}>
>>>>>>> fc4c2af (env variables updated)
                  <NavLink
                    page='Home'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <NavLink
                    page='About'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <NavLink
                    page='Contact Us'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
<<<<<<< HEAD

                  <div className='flex gap-4 text- font-semibold text-gray-200'>
                    <Link href='/login' className={`${flexBetween} gap-8`}>
                      <p className='font-semibold hover:shadow-2xl hover:border-2 hover:rounded-2xl px-3 py-2 transition-all hover:text-yellow-400'>
                        Sign In
                      </p>
                    </Link>
                    <div className='flex gap-3 p-2 border-2 border-transparent hover:border-2 hover:border-white hover:rounded-xl hover:text-yellow-400 transition-all duration-150'>
                      <NavLink
                        page='Calendar'
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                      <Calendar />
                    </div>
=======
                </div>
                <div className='flex gap-4 text-xl font-semibold text-gray-200'>
                  <Link href='/login' className={`${flexBetween} gap-8`}>
                    <p className='font-semibold hover:shadow-2xl hover:border-2 hover:rounded-2xl px-5 py-2 transition-all hover:text-yellow-400'>
                      Sign In
                    </p>
                  </Link>
                  <div className='flex gap-3 p-2 border-2 border-transparent hover:border-2 hover:border-white hover:rounded-xl hover:text-yellow-400 transition-all duration-150'>
                    <NavLink
                      page='Calendar'
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Calendar />
>>>>>>> fc4c2af (env variables updated)
                  </div>
                </div>
                <div className='flex justify-center items-center gap-4 bg-gray-200 rounded-full p-2'>
                  <User className='h-12 w-12 text-gray-400 bg-gray-500 rounded-full' />
                  <p className='text-gray-900 font-montserrat bg-gray-00'>
                    Welcome Back Swimmer!
                  </p>
                </div>
              </div>
            ) : (
              <div className='flex justify-center items-center gap-4 bg-gray-200 rounded-full px-2 py-1'>
                <button
                  className='rounded-full p-2 hover:border-gray-400 border-2 drop-shadow-md hover:shadow-xl transition-all duration-200'
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Menu className='h-8 w-8 text-gray-500 rounded-full  ' />
                </button>
                <User className='h-9 w-9 text-gray-400 bg-gray-500 rounded-full ' />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-gray-900 backdrop-blur-lg text-white  drop-shadow-xl'>
          {/* CLOSE ICON */}
          <div className='flex justify-end p-12'>
            <div className='border-2 px-2 pt-1 border-transparent text-white hover:border-yellow-400 hover:drop-shadow-lg hover:shadow-gray-900 transition-all duration-300 ease-out rounded-full'>
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Menu className='h-8 w-8 text-yellow-400 ' />
              </button>
            </div>
          </div>

          {/* MENU ITEMS */}
          <div className='ml-[33%] flex flex-col gap-10 text-2xl '>
            <NavLink
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavLink
              page='About'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavLink
              page='Calendar'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavLink
              page='Contact Us'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link href='/login' className={`${flexBetween} `}>
              <p className='font-semibold hover:shadow-2xl hover:border-2 hover:rounded-2xl px-3 py-2 transition-all hover:text-yellow-400'>
                Sign In
              </p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
