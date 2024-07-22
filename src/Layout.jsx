import React from 'react'
import Header from './components/Header/Header/Header'
// import Home from './components/Header/Home/Home'
import Footer from './components/Header/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout(){
    return(
        <>
        <Header/>
        <Outlet />
        <Footer/>
        </>
    )
}

export default Layout