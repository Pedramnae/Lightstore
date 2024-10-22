import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './heaeder'
import { useState } from 'react'
import { MdOutlineCurrencyPound } from "react-icons/md";
import useInfo from '../store/SotreInfo'
import useBasket from '../store/basket';

function Info() {


    const info = useInfo((state) => state.info)
    const sendlocalinfo = useInfo((state) => state.localinfo)
    const getinfo = useInfo((state) => state.getInfo)
    const addtobasket = useBasket((state) => state.addTobasket)
    const [number, setNumber] = useState(1)
    const decnumber = useBasket((state)=>state.decnumber)
    const incnumber = useBasket((state)=>state.incnumber)



    useEffect(() => {
        let storageinfo = localStorage.getItem('info')
        if (storageinfo != null) {
            storageinfo = JSON.parse(storageinfo)
            sendlocalinfo(storageinfo)
        }
    }, [])




    function handleaddtobasket(e) {
        let name = e.currentTarget.parentElement.previousElementSibling.previousElementSibling.innerHTML
        let price = e.currentTarget.parentElement.previousElementSibling.children[1].innerHTML
        let image = e.currentTarget.parentElement.parentElement.previousElementSibling.children[0].children[1].getAttribute('src')
        let number = e.currentTarget.previousElementSibling.children[1].innerHTML
        number = Number(number)
        addtobasket(name, price, image, number)
    }

    return (
        <>
            <Header />
            <section className='w-full h-[150vh] md:h-[120vh] flex flex-wrap justify-center'>
                <div className='w-full md:w-[60%] lg:w-[50%] h-1/2 md:h-full flex flex-wrap '>
                    <figure className='w-full h-[60%] relative'>
                        <span className='w-full h-full absolute top-0 left-0 bg-[#00000028]'></span>
                        <img className='w-full h-full object-contain' src={info[0].image} alt="" />
                    </figure>
                    <div className='w-full h-[40%] flex flex-wrap content-center ps-[20px] lg:ps-0'>
                        <h2 className='w-full h-fit text-[28px] font-futuram'>Description</h2>
                        <p className='w-full h-fit text-[14px] text-left py-[20px]'>{info[0].description}</p>
                    </div>
                </div>
                <div className='w-full md:w-[40%] lg:w-[30%] h-1/2 md:h-full flex flex-wrap  px-[20px] content-start'>
                    <h2 className='w-full h-fit font-futuram py-[10px] text-[28px]'>{info[0].name}</h2>
                    <span className='w-full h-fit flex flex-wrap  py-[10px] items-center font-futurab text-[22px]'>
                        <span className='w-fit h-fit text-[30px]'><MdOutlineCurrencyPound /></span>
                        <span className='w-fit h-fit'>{info[0].price}</span>
                    </span>
                    <div className='w-full h-[100px] justify-between flex flex-wrap'>
                        <div className='w-[22%] h-[40%] border flex flex-wrap text-[#4a4d50]  border-black'>
                            <button onClick={() => { if (number - 1 > 0) { setNumber(number - 1) } }} className='w-1/3 h-full flex justify-center items-center text-[20px]'>-</button>
                            <div className='w-1/3 h-full flex justify-center items-center font-futuras text-[14px]'>{number}</div>
                            <button onClick={() => setNumber(number + 1)} className='w-1/3 h-full flex justify-center items-center text-[20px]'>+</button>
                        </div>
                        <button onClick={handleaddtobasket} className='w-[75%] h-[40%] flex items-center justify-center font-futuras bg-[#671d1a] hover:bg-[#8c231f] duration-[0.4s] text-white'>
                            Add to basket
                        </button>
                        <button className='w-full h-[40%] flex items-center justify-center font-futuras duration-[0.2s] hover:bg-[#eee] border border-[#000]'>Save as favorite</button>
                    </div>
                    <div className='w-full h-fit flex flex-wrap py-[20px] border items-center border-black'>
                        <div className='w-fit h-fit px-[25px] flex '>
                            <span className='w-[6px] h-[6px] rounded-[6px] bg-green-500 flex'></span>
                        </div>
                        <span className='w-fit h-fit font-futuras text-[14px] '>In stock, ready to be shipped</span>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Info