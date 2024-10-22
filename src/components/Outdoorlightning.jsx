import React, { useEffect } from 'react'
import Header from './heaeder'
import Footer from './Footer'
import useFetch from '../store/myfetch'
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineCurrencyPound } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import useBasket from '../store/basket';
import { Link } from 'react-router-dom';
import useInfo from '../store/SotreInfo';
import banner from './../assets/img/outdoorbanner.jpg'

function Outdoorlightning() {

    const addtobasket = useBasket((state) => state.addTobasket)
    const getdata = useFetch((state) => state.getData)
    const mydata = useFetch((state) => state.mydata)
    const sendInfo = useInfo((state) => state.getInfo)

    function handleaddtobasket(e) {
        let name = e.currentTarget.parentElement.previousElementSibling.children[0].innerHTML
        let price = e.currentTarget.previousElementSibling.children[0].children[0].children[1].innerHTML
        let image = e.currentTarget.parentElement.previousElementSibling.previousElementSibling.children[0].children[1].getAttribute('src')
        let number = 1
        addtobasket(name, price, image, number)
    }

    function handleInfo(e) {
        let name = e.currentTarget.nextElementSibling.children[0].innerHTML
        let image = e.currentTarget.children[0].children[1].getAttribute('src')
        let price = e.currentTarget.nextElementSibling.nextElementSibling.children[0].children[0].children[0].children[1].innerHTML
        let description = e.currentTarget.parentElement.getAttribute('data-description')
        sendInfo(name, price, image, description)
    }


    useEffect(() => {
        getdata()
    }, [])
    return (
        <>
            <Header />
            <section className='w-full h-[40vh] flex flex-wrap px-[50px] relative'>
                <figure className='w-full h-full absolute top-0 left-0'>
                    <img className='w-full h-full object-cover' src={banner} alt="" />
                </figure>
                <div className='w-full h-full flex flex-wrap relative z-[2] content-center'>
                    <h1 className='w-full h-fit py-[20px] font-futuram text-white text-[28px]'>Outdoor Lighting</h1>
                    <p className='w-1/2 h-fit font-futuras py-[10px] text-white'>Outdoor lighting is a must if you want to enjoy your home and garden even after dark. With the right combination of outdoor lighting, you can illuminate your house with fantastic effects that both you and your neighbors will enjoy.</p>
                </div>
            </section>
            <section className='w-full h-fit py-[40px] flex flex-wrap justify-center'>
                <div className='w-[95%] md:w-[85%] h-[90%] flex flex-wrap content-between justify-between'>
                    {mydata && mydata.map((item) => {
                        if (item.category == 'Outdoor Lighting') {
                            return (
                                <div data-description={item.description} key={item.id} className='w-[47%] md:w-[40%] my-[20px] lg:w-[23%] h-[48%] lg:h-[95%] bg-white flex flex-wrap  relative'>
                                    <span className='w-fit h-fit  absolute text-[25px] top-[10px] z-[5] right-[10px] group cursor-pointer'>
                                        <span className='w-fit h-fit group-hover:flex hidden'><AiFillHeart /></span>
                                        <span className='w-fit h-fit group-hover:hidden flex'><AiOutlineHeart /></span>
                                    </span>
                                    <figure onClick={handleInfo} className='w-full h-[60%] relative cursor-pointer'>
                                        <Link to='/Info' className='w-full h-full flex flex-wrap'>
                                            <span className='w-full h-full absolute top-0 left-0 bg-[#dbdbdb44]'></span>
                                            <img loading='lazy' className='w-full h-full object-cover' src={item.image} alt="" />
                                        </Link>
                                    </figure>
                                    <div className='w-full h-[25%] flex flex-wrap'>
                                        <p className='w-full h-1/2 flex items-center font-futuram text-[18px]'>{item.name}</p>
                                    </div>
                                    <div className='w-full h-[15%] flex flex-wrap'>
                                        <div className='w-1/2 h-full flex flex-wrap'>
                                            <div className='w-full h-1/2 flex flex-wrap '>
                                                <span className='w-fit h-full flex items-center font-futuram '><span className='w-fit h-full flex items-center '><MdOutlineCurrencyPound /></span><span>{item.price}</span></span>
                                            </div>
                                            <div className='w-full h-1/2 flex flex-wrap  items-center'>
                                                <span className='w-[8px] h-[8px] rounded-[8px] bg-green-500'></span>
                                                <span className='w-fit h-full flex items-center font-futuras text-[14px] px-[3px]'>In stock</span>
                                            </div>
                                        </div>
                                        <div onClick={handleaddtobasket} className='w-1/2 h-full flex justify-end items-end'>
                                            <span className='w-fit h-fit  text-[28px] cursor-pointer'><MdOutlineShoppingBag /></span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Outdoorlightning