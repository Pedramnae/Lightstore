import React, { useEffect, useRef } from 'react'
import Header from './heaeder'
import Footer from './Footer'
import { GoHome } from "react-icons/go";
import { BsBox2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { TbGiftCardFilled } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import useUser from '../store/myuser';


function Userpage() {

    const username = useRef()
    const changeuserflag = useUser((state) => state.changeflag)
    const userflag = useUser((state) => state.localExist)
    function handleLogOut() {
        if (confirm('are you sure you want to log out?')) {
            localStorage.removeItem('user')
            username.current.parentElement.classList.add('hidden')
            username.current.parentElement.classList.remove('felx')
            username.current.parentElement.nextElementSibling.classList.remove('hidden')
            username.current.parentElement.nextElementSibling.classList.add('felx')
        }
        let stat = false
        changeuserflag(stat)
    }

    useEffect(() => {
        let user = localStorage.getItem('user')
        user = JSON.parse(user)
        if (user != null) {
            let stat = true
            changeuserflag(stat)
            username.current.parentElement.classList.remove('hidden')
            username.current.parentElement.classList.add('felx')
            username.current.parentElement.nextElementSibling.classList.add('hidden')
            username.current.parentElement.nextElementSibling.classList.remove('felx')
            username.current.innerHTML = 'Hi, nice to see you ' + user.name + '!'
        } else {
            username.current.parentElement.classList.add('hidden')
            username.current.parentElement.classList.remove('felx')
            username.current.parentElement.nextElementSibling.classList.remove('hidden')
            username.current.parentElement.nextElementSibling.classList.add('felx')
        }
    },[userflag])

    return (
        <>
            <Header />
            <section className='w-full h-[70vh] flex flex-wrap justify-center py-[30px]'>
                <div className='w-full lg:w-[80%] h-full flex flex-wrap '>
                    <div className='w-full lg:w-[20%] h-fit py-[20px] lg:py-0 lg:h-full flex '>
                        <ul className='w-full h-full flex flex-wrap justify-center lg:justify-normal lg:content-start lg:border-none border-b border-b-black'>
                            <li className='w-fit lg:w-full h-full lg:h-fit px-[10px] lg:px-0 py-[20px] items-center  flex flex-wrap'>
                                <span className='w-fit h-full flex items-center text-[12px] lg:text-[16px] xl:text-[25px]  pe-[10px] cursor-pointer'><GoHome /></span>
                                <span className='w-fit h-full flex items-center  text-[12px] lg:text-[16px] font-futuras cursor-pointer'>My oages</span>
                            </li>
                            <li className='w-fit lg:w-full h-full lg:h-fit px-[10px] lg:px-0 py-[20px] items-center  flex flex-wrap'>
                                <span className='w-fit h-full flex items-center text-[12px] lg:text-[16px] xl:text-[25px]  pe-[10px] cursor-pointer'><BsBox2 /></span>
                                <span className='w-fit h-full flex items-center  text-[12px] lg:text-[16px] font-futuras cursor-pointer'>My orders</span>
                            </li>
                            <li className='w-fit lg:w-full h-full lg:h-fit px-[10px] lg:px-0 py-[20px] items-center  flex flex-wrap'>
                                <span className='w-fit h-full flex items-center text-[12px] lg:text-[16px] xl:text-[25px]  pe-[10px] cursor-pointer'><FaRegHeart /></span>
                                <span className='w-fit h-full flex items-center  text-[12px] lg:text-[16px] font-futuras cursor-pointer'>My favorite</span>
                            </li>
                            <li className='w-fit lg:w-full h-full lg:h-fit px-[10px] lg:px-0 py-[20px] items-center  flex flex-wrap'>
                                <span className='w-fit h-full flex items-center text-[12px] lg:text-[16px] xl:text-[25px]  pe-[10px] cursor-pointer'><FiUser /></span>
                                <span className='w-fit h-full flex items-center  text-[12px] lg:text-[16px] font-futuras cursor-pointer'>My profile</span>
                            </li>
                            <li className='w-fit lg:w-full h-full lg:h-fit px-[10px] lg:px-0 py-[20px] items-center  flex flex-wrap'>
                                <span className='w-fit h-full flex items-center text-[12px] lg:text-[16px] xl:text-[25px]  pe-[10px] cursor-pointer'><TbGiftCardFilled /></span>
                                <span className='w-fit h-full flex items-center  text-[12px] lg:text-[16px] font-futuras cursor-pointer'>My giftcards</span>
                            </li>
                            <li className='w-fit lg:w-full h-full lg:h-fit px-[10px] lg:px-0 py-[20px] items-center  flex flex-wrap'>
                                <span className='w-fit h-full flex items-center text-[12px] lg:text-[16px] xl:text-[25px]  pe-[10px] cursor-pointer'><IoLogOutOutline /></span>
                                <span onClick={handleLogOut} className='w-fit h-full flex items-center  text-[12px] lg:text-[16px] font-futuras cursor-pointer'>Log out</span>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full lg:w-[80%] h-fit py-[20px] lg:py-0 lg:h-full flex lg:ps-[50px] lg:justify-normal lg:items-start justify-center items-center'>
                        <div className='w-[400px] h-fit px-[15px] py-[15px] flex flex-wrap bg-[#ebebeb]'>
                            <h3 ref={username} className='w-full h-fit py-[10px] font-futurab flex justify-start'>Hi, nice to see you !</h3>
                            <p className='w-full h-fit text-left flex justify-start font-futuras'>Here on your customer page, you can easily manage your orders and follow your deliveries, see your favorites or manage your personal information. Welcome!</p>
                        </div>
                        <div className='w-[400px] h-fit px-[15px] py-[15px] flex flex-wrap bg-[#ebebeb]'>
                            <h3 className='w-full h-fit py-[10px] font-futurab flex justify-start'>please first login to your account</h3>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Userpage