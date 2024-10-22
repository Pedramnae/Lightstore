import React from 'react'
import logo from './../assets/img/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";


function Footer() {

    function handlAccordion(e) {
        let stat = e.currentTarget.getAttribute('data-stat')
        let accordion = e.currentTarget.nextElementSibling
        let height = e.currentTarget.getAttribute('data-h')
        if (stat == 'close') {
            e.currentTarget.children[1].classList.add('[transform:_rotateX(180deg)]')
            e.currentTarget.setAttribute('data-stat', 'open')
            accordion.classList.add('flex')
            accordion.classList.remove('hidden')
            setTimeout(() => {
                accordion.style.height= height+'px'
                accordion.classList.add('opacity-[1]')
                accordion.classList.remove('h-0')
                accordion.classList.remove('opacity-0')
            }, 10);
        }
        else {
            e.currentTarget.children[1].classList.remove('[transform:_rotateX(180deg)]')
            e.currentTarget.setAttribute('data-stat', 'close')
            setTimeout(() => {
                accordion.classList.add('hidden')
                accordion.classList.remove('flex')
            }, 400);
            accordion.style.height='0px'
            accordion.classList.remove('opacity-[1]')
            accordion.classList.add('h-0')
            accordion.classList.add('opacity-0')
        }

    }

    return (
        <footer className='w-full h-fit flex flex-wrap'>
            <div className='w-full h-fit flex flex-wrap bg-[#671d1a] content-center py-[60px]'>
                <h3 className='w-full h-fit py-[10px]  font-futuram text-center text-[3vw] md:text-[2vw] text-white'>Sign-up to our newsletter and get 10% off your first order*</h3>
                <div className='w-full h-fit flex flex-wrap justify-center'>
                    <input placeholder='E-mail' className='w-[70%] lg:w-[600px] outline-none h-[40px] md:h-[50px] text-futuras ps-[20px]' type="text" />
                    <button className='w-[70%] my-[10px] justify-center lg:justify-normal lg:my-0 lg:w-fit h-[40px] md:h-[50px] mx-[10px] flex items-center px-[20px] font-futuram text-white bg-gray-900 duration-[0.4s] hover:bg-gray-700'>SIGN UP</button>
                </div>
            </div>
            <div className='w-full h-[75%] flex flex-wrap bg-[#fffae8] content-start'>
                <figure className='w-full h-fit py-[10px] flex justify-center items-center'>
                    <img className='h-[80px]  object-contain' src={logo} alt="" />
                </figure>
                <div className='w-full h-fit py-[10px] hidden md:flex flex-wrap  justify-center'>
                    <div className='w-[200px]  h-fit flex flex-wrap'>
                        <h3 className='w-full h-fit py-[15px] font-futuram flex justify-start text-[22px]'>Customer Service</h3>
                        <nav className='w-full h-fit flex'>
                            <ul className='w-full h-fit flex flex-wrap'>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>Customer service</li>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>Shipping information</li>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>Return policy</li>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>Register your return or claim</li>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>terms & conditions</li>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>Privacy policy</li>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>Cookies</li>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>Company order / B2B</li>
                            </ul>
                        </nav>
                    </div>
                    <div className='w-[200px]  h-fit flex flex-wrap'>
                        <h3 className='w-full h-fit py-[15px] font-futuram flex justify-start text-[22px]'>Selection</h3>
                        <nav className='w-full h-fit flex'>
                            <ul className='w-full h-fit flex flex-wrap'>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>Brands</li>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>Lightning</li>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>Outdoor Lightning</li>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>Smart Home</li>
                            </ul>
                        </nav>
                    </div>
                    <div className='w-[200px]  h-fit flex flex-wrap'>
                        <h3 className='w-full h-fit py-[15px] font-futuram flex justify-start text-[22px]'>Inspiration</h3>
                        <nav className='w-full h-fit flex'>
                            <ul className='w-full h-fit flex flex-wrap'>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>Inspiration</li>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>Room</li>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>Gift ideas</li>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>Special Offers</li>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>% Sale</li>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>Black Friday 2024</li>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>Cyber Monday 2024</li>
                            </ul>
                        </nav>
                    </div>
                    <div className='w-[200px]  h-fit flex flex-wrap'>
                        <h3 className='w-full h-fit py-[15px] font-futuram flex justify-start text-[22px]'>Our company</h3>
                        <nav className='w-full h-fit flex'>
                            <ul className='w-full h-fit flex flex-wrap'>
                                <li className='w-full h-fit flex py-[8px] font-futuras text-[14px] cursor-pointer justify-start hover:underline'>About us</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='w-full h-fit flex justify-center py-[10px]'>
                    <span className='w-fit h-fit mx-[10px] cursor-pointer  text-[52px]'><FaFacebook /></span>
                    <span className='w-fit h-fit mx-[10px] cursor-pointer  text-[52px]'><FaInstagram /></span>
                </div>


                <div className='w-full h-fit flex flex-wrap md:hidden'>
                    <div className='w-full h-fit flex flex-wrap overflow-hidden' >
                        <div data-h='320' data-stat='close' onClick={handlAccordion} className='w-full h-fit  px-[10px] py-[20px] border-t justify-between cursor-pointer flex flex-wrap'>
                            <h4 className='w-fit h-fit font-futuram text-[18px]'>Customer Service</h4>
                            <span className='w-fit h-fit text-[22px] duration-[0.4s]'><MdKeyboardArrowDown /></span>
                        </div>
                        <div className='w-full h-0  overflow-hidden flex flex-wrap opacity-0 duration-[0.4s]'>
                            <ul className='w-full h-fit flex  flex-wrap'>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>Customer Service</li>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>Shipping Information</li>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>Return Policy</li>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>Register your return or claim</li>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>Terms & Conditions</li>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>Privacy Policy</li>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>Cookies</li>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>Company order / B2B</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full h-fit flex flex-wrap overflow-hidden ' >
                        <div data-h='160' data-stat='close' onClick={handlAccordion} className='w-full h-fit  px-[10px] py-[20px] border-t justify-between cursor-pointer flex flex-wrap'>
                            <h4 className='w-fit h-fit font-futuram text-[18px]'>Selection</h4>
                            <span className='w-fit h-fit text-[22px] duration-[0.4s]'><MdKeyboardArrowDown /></span>
                        </div>
                        <div className='w-full h-0  overflow-hidden flex flex-wrap opacity-0 duration-[0.4s]'>
                            <ul className='w-full h-fit flex  flex-wrap'>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>Brands</li>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>Lightning</li>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>Outdoor Lightning</li>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>Smart Home</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full h-fit flex flex-wrap overflow-hidden ' >
                        <div data-h='280' data-stat='close' onClick={handlAccordion} className='w-full h-fit  px-[10px] py-[20px] border-t justify-between cursor-pointer flex flex-wrap'>
                            <h4 className='w-fit h-fit font-futuram text-[18px]'>Inspiration</h4>
                            <span className='w-fit h-fit text-[22px] duration-[0.4s]'><MdKeyboardArrowDown /></span>
                        </div>
                        <div className='w-full h-0  overflow-hidden flex flex-wrap opacity-0 duration-[0.4s]'>
                            <ul className='w-full h-fit flex  flex-wrap'>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>Inspiration</li>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>Room</li>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>Gift Ideas</li>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>Special Offers</li>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>% Sale</li>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>Black Friday 2024</li>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>Cyber Monday 2024</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full h-fit flex flex-wrap overflow-hidden ' >
                        <div data-h='40' data-stat='close' onClick={handlAccordion} className='w-full h-fit  px-[10px] py-[20px] border-t justify-between cursor-pointer flex flex-wrap'>
                            <h4 className='w-fit h-fit font-futuram text-[18px]'>Our company</h4>
                            <span className='w-fit h-fit text-[22px] duration-[0.4s]'><MdKeyboardArrowDown /></span>
                        </div>
                        <div className='w-full h-0  overflow-hidden flex flex-wrap opacity-0 duration-[0.4s]'>
                            <ul className='w-full h-fit flex  flex-wrap'>
                                <li className='w-full h-fit py-[10px] flex font-futuras text-[12px] cursor-pointer hover:underline ps-[10px]'>About us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer