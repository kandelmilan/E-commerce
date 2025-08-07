import React from 'react'
import { Outlet } from 'react-router'
import Header from '../component/Header'
import Footer from '../component/Footer'

function Layout() {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout
