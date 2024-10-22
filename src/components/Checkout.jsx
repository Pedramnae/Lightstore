import React, { useEffect , useRef } from 'react'
import Header from './heaeder'
import Footer from './Footer'
import useBasket from '../store/basket'
import { MdOutlineCurrencyPound } from "react-icons/md";

function Checkout() {
    const showtotal1 = useRef()
    const showtotal2 = useRef()
    const basketitems = useBasket((state) => state.basket)
    
    useEffect(() => {
        if (basketitems.length > 0) {
            calctotol()
        }
    }, [basketitems])

    function calctotol(e) {
        let totalprice = 0
        basketitems.map((item)=>{
            let price = item.totalprice
            price = Number(price)
            totalprice += price
        })
        showtotal1.current.innerHTML = '£'+totalprice
        showtotal2.current.innerHTML = '£'+totalprice
        console.log(totalprice);
    }
    return (
        <>
            <Header />
            <section className='w-full min-h-[60vh] flex flex-wrap justify-center'>
                <h2 className='w-full h-fit py-[30px] font-futurab text-[28px] flex justify-center bg-[#e9e9e9]'>Checkout</h2>
                {basketitems && basketitems.map((item, index) => {
                    return (
                        <div key={index} className='w-full md:w-[85%] item lgw-[75%] xl:w-[55%] h-fit flex flex-wrap  border-b border-b-black py-[10px]'>
                            <div className='w-full h-[140px] flex flex-wrap  py-[10px]'>
                                <figure className='w-1/4 h-full relative'>
                                    <span className='w-full h-full absolute top-0 left-0 bg-[#0000001b]'></span>
                                    <img className='w-full h-full object-contain' src={item.image} alt="" />
                                </figure>
                                <div className='w-3/4 h-full flex flex-wrap ps-[15px]'>
                                    <span className='w-full h-1/2 flex items-center font-futuram text-[12px] md:text-[15px]'>{item.name}</span>
                                    <div className='w-full h-1/2 flex flex-wrap justify-between'>
                                        <div className='w-fit  h-full flex flex-wrap '>
                                            <span className='w-fit h-full flex items-center px-[2px]'>
                                                <span className='w-[8px] h-[8px] bg-green-500 rounded-[10px]'></span>
                                            </span>
                                            <span className='fit h-full flex items-center  font-futurs text-[10px] md:text-[12px]'>In stock, ready to be shipped</span>
                                        </div>
                                        <div className='w-1/2 h-full flex flex-wrap'>
                                            <div className='w-full h-2/5 flex flex-wrap  justify-end'>
                                                <span className='w-1/3  h-full flex items-center font-futuras text-[11px] md:text-[14px]'>Unit price</span>
                                                <span className='w-1/3  h-full flex items-center font-futuras text-[11px] md:text-[14px]'>number</span>
                                                <span className='w-1/3  h-full flex items-center font-futuras text-[11px] md:text-[14px]'>Total</span>
                                            </div>
                                            <div className='w-full h-3/5 flex flex-wrap  justify-end'>
                                                <span className='w-1/3   h-full flex items-center font-futuras text-[11px] md:text-[14px]'>
                                                    <span className='w-fit h-full flex items-center'><MdOutlineCurrencyPound /></span>
                                                    <span className='w-fit h-full flex items-center font-futuras text-[13px]'>{item.price}</span>
                                                </span>
                                                <span className='w-1/3   h-full flex items-center font-futuras text-[11px] md:text-[14px]'>
                                                    <span className='w-fit h-full flex items-center font-futuras text-[13px]'>{item.number}</span>
                                                </span>
                                                <span className='w-1/3   h-full flex items-center font-futuras text-[11px] md:text-[14px]'>
                                                    <span className='w-fit h-full flex items-center'><MdOutlineCurrencyPound /></span>
                                                    <span className='w-fit h-full flex items-center font-futuras text-[11px] md:text-[14px]'>{item.totalprice}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className='w-full md:w-[85%] lgw-[75%] xl:w-[55%] h-fit flex flex-wrap py-[10px]'>
                    <div className='w-1/4 flex items-start '>
                        <h3 className='w-full h-fit font-futurab underline text-[16px] md:text-[20px] flex justify-center cursor-pointer bg-[#671d1a] text-white'>Check out</h3>
                    </div>
                    <div className='w-3/4 h-fit flex flex-wrap  justify-end'>
                        <div className='w-[60%] md:w-[50%] h-fit flex flex-wrap content-center'>
                            <div className='w-full h-fit py-[5px] bg-gray-400 flex justify-between px-[5px]'>
                                <span className='w-1/2  h-fit font-futurab text-[10px] md:text-[12px]'>Expected dispatch</span>
                                <span className='w-1/2  h-fit font-futuram text-[10px] md:text-[12px] flex justify-end'>3-9 business days</span>
                            </div>
                            <div className='w-full h-fit py-[5px]  flex justify-between px-[5px]'>
                                <span className='w-1/2  h-fit font-futuram text-[10px] md:text-[12px]'>Total</span>
                                <span ref={showtotal1} className='w-1/2  h-fit font-futuram text-[10px] md:text-[12px] flex justify-end'></span>
                            </div>
                            <div className='w-full h-fit py-[5px]  flex justify-between px-[5px]'>
                                <span className='w-1/2  h-fit font-futuram text-[10px] md:text-[12px]'>Shipping</span>
                                <span className='w-1/2  h-fit font-futuram text-[10px] md:text-[12px] flex justify-end'>£0</span>
                            </div>
                            <div className='w-full h-fit py-[5px] flex justify-between px-[5px]'>
                                <span className='w-1/2  h-fit font-futuram text-[10px] md:text-[12px]'>Total VAT/Sales Tax incl.</span>
                                <span ref={showtotal2} className='w-1/2  h-fit font-futurab text-[12px] md:text-[14px] flex justify-end'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Checkout