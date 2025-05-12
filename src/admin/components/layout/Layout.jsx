import React from 'react'
import { Navbar, Footer, Sidebar } from '../index';
import "../dashboard.css";

const Layout = ({ children }) => {

    const handleSideBar = () => {
        document.querySelector("#sidebar").classList.toggle("hide-in");
    }

    return (
        <>
            <div className="flex overflow-x-hidden relative z-[9]">
                <div className='lg:w-[25vw] xl:w-[20vw] 2xl:w-[15vw] fixed top-0 h-screen z-[9999]'>
                    <Sidebar onMenuClick={handleSideBar} />
                </div>
                <div className={`lg:ms-[25vw] xl:ms-[20vw] 2xl:ms-[15vw]`}>
                    <Navbar onMenuClick={handleSideBar} />
                    <div className="bg-[#fff]">
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout
