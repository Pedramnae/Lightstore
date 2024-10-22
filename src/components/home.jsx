import React from 'react'
import Header from './heaeder'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineCurrencyPound } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import topbanner from './../assets/img/topbanner.png'
import topbanner2 from './../assets/img/topbanner2.png'
import banner2 from './../assets/img/banner2.jpg'
import banner3 from './../assets/img/banner3.png'
import banner4 from './../assets/img/banner4.jpeg'
import banner5 from './../assets/img/banner5.jpg'
import banner6 from './../assets/img/banner6.jpg'
import banner7 from './../assets/img/banner7.png'
import banner8 from './../assets/img/banner8.jpg'
import banner9 from './../assets/img/banner9.jpg'
import banner10 from './../assets/img/banner10.jpg'
import banner11 from './../assets/img/banner11.jpg'
import img1 from './../assets/img/1.jpeg'
import img2 from './../assets/img/2.jpeg'
import img3 from './../assets/img/3.jpeg'
import img4 from './../assets/img/4.jpeg'
import img5 from './../assets/img/5.jpeg'
import img6 from './../assets/img/6.jpeg'
import useBasket from '../store/basket';


function Home() {

  const addtobasket = useBasket((state) => state.addTobasket)
  function handleaddtobasket(e) {
    let price = e.currentTarget.parentElement.previousElementSibling.children[0].children[0].children[1].innerHTML
    price = Number(price)
    let name = e.currentTarget.parentElement.parentElement.previousElementSibling.children[1].innerHTML
    let image = e.currentTarget.parentElement.parentElement.previousElementSibling.previousElementSibling.children[1].getAttribute('src')
    let number = 1
    addtobasket(name, price, image, number)
    console.log(image);

  }


  return (
    <>
      <Header />
      <section className='w-full flex h-[70vh] md:h-[35vh] lg:h-[50vh] xl:h-[60vh]  items-end'>

        <div className='w-full flex flex-wrap h-full'>
          <span className='w-full h-[5%] flex bg-[#878ea0] justify-center items-center font-futuras text-white text-[14px]'><span className='hover:underline cursor-pointer'>Last days of summer - 10-25% off outdoor lightning</span><span><MdOutlineKeyboardArrowRight /></span></span>
          <div className='w-full h-[95%] flex flex-wrap relative z-[2]'>
            <figure className='w-full h-full absolute top-0 left-0'>
              <img loading='lazy' className='w-full h-full md:flex hidden object-vover' src={topbanner} alt="" />
              <img loading='lazy' className='w-full h-full object-cover flex md:hidden' src={topbanner2} alt="" />
            </figure>
            <div className='w-full h-full relative z-[3] flex flex-wrap content-center'>
              <h3 className='w-full h-[15%] md:h-[40%]  flex items-end justify-center font-futuram text-white pb-[20px] text-[4vw] md:text-[2vw]'>Outdoor Lightning</h3>
              <p className='w-full h-[15%] md:h-[20%]  flex items-center justify-center font-futuram text-white text-[5.5vw] md:text-[3.5vw]'>Light up the last days of summer</p>
              <div className='w-full h-[15%] md:h-[40%] flex  items-center justify-center'>
                <span className='w-fit h-fit flex px-[20px] py-[10px] text-white font-futuram bg-[#878ea0] text-[4vw] md:text-[2vw] cursor-pointer duration-[0.4s] hover:bg-[#686d7a]'>10-25% off</span>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className='w-full h-[200vh] md:h-[160vh] lg:h-[110vh] flex flex-wrap content-between'>
        <nav className='w-full h-[10%] md:h-[20%] flex  '>
          <ul className='w-full h-full flex flex-wrap content-center justify-center  md:content-normal md:items-center border'>
            <li className='w-fit h-fit my-[4px] px-[15px] md:px-[20px] py-[8px] md:py-[10px] font-futuras mx-[10px] text-[12px] md:text-[15px] cursor-pointer  border border-[#4d4d4d] hover:bg-[#f3f3f3] duration-[0.4s] '>
              <Link to='/Lamp'>
                Lamps
              </Link>
            </li>
            <li className='w-fit h-fit my-[4px] px-[15px] md:px-[20px] py-[8px] md:py-[10px] font-futuras mx-[10px] text-[12px] md:text-[15px] cursor-pointer  border border-[#4d4d4d] hover:bg-[#f3f3f3] duration-[0.4s] '>
              <Link to='Outdoor-lightning'>
                Outdoor Lightning
              </Link>
            </li>
            <li className='w-fit h-fit my-[4px] px-[15px] md:px-[20px] py-[8px] md:py-[10px] font-futuras mx-[10px] text-[12px] md:text-[15px] cursor-pointer  border border-[#4d4d4d] hover:bg-[#f3f3f3] duration-[0.4s] '>
              <Link to='Lightsources'>
                Light Sorces
              </Link>
            </li>
            <li className='w-fit h-fit my-[4px] px-[15px] md:px-[20px] py-[8px] md:py-[10px] font-futuras mx-[10px] text-[12px] md:text-[15px] cursor-pointer  border border-[#4d4d4d] hover:bg-[#f3f3f3] duration-[0.4s] '>
              <Link to='Accessories'>
                Accessories
              </Link>
            </li>
            <li className='w-fit h-fit my-[4px] px-[15px] md:px-[20px] py-[8px] md:py-[10px] font-futuras mx-[10px] text-[12px] md:text-[15px] cursor-pointer  border border-[#4d4d4d] hover:bg-[#f3f3f3] duration-[0.4s] '>
              <Link to='Bathroom-lightning'>
                Bathroom Lightning
              </Link>
            </li>
            <li className='w-fit h-fit my-[4px] px-[15px] md:px-[20px] py-[8px] md:py-[10px] font-futuras mx-[10px] text-[12px] md:text-[15px] cursor-pointer  border border-[#4d4d4d] hover:bg-[#f3f3f3] duration-[0.4s] '>
              <Link to='Smart-home'>
                Smart home
              </Link>
            </li>
          </ul>
        </nav>
        <h2 className='w-full h-[5%] md:h-[15%] flex items-center  justify-center font-futuram text-[26px]'>In the spotlight</h2>
        <div className='w-full h-[85%] md:h-[65%] flex  items-center justify-center '>
          <div className='w-[95%] md:w-[85%] h-[90%] flex flex-wrap content-between justify-between'>

            <div className='w-[47%] md:w-[40%] lg:w-[23%] h-[48%] lg:h-[95%] bg-white flex flex-wrap  relative'>
              <span className='w-fit h-fit  absolute text-[25px] top-[10px] z-[5] right-[10px] group cursor-pointer'>
                <span className='w-fit h-fit group-hover:flex hidden'><AiFillHeart /></span>
                <span className='w-fit h-fit group-hover:hidden flex'><AiOutlineHeart /></span>
              </span>
              <figure className='w-full h-[60%] relative cursor-pointer'>
                <span className='w-full h-full absolute top-0 left-0 bg-[#dbdbdb44]'></span>
                <img loading='lazy' className='w-full h-full object-cover' src='https://i.ibb.co/nBBN15D/43533-01-01-d10d27f9db.webp' alt="" />
              </figure>
              <div className='w-full h-[25%] flex flex-wrap'>
                <h4 className='w-full h-1/2 flex  items-end font-futuras text-gray-600'>Ferm Living</h4>
                <p className='w-full h-1/2 flex items-center font-futuram text-[18px]'>Vuelta table lamp, white</p>
              </div>
              <div className='w-full h-[15%] flex flex-wrap'>
                <div className='w-1/2 h-full flex flex-wrap'>
                  <div className='w-full h-1/2 flex flex-wrap '>
                    <span className='w-fit h-full flex items-center font-futuram '>
                      <span className='w-fit h-full flex items-center '><MdOutlineCurrencyPound /></span>
                      <span className='w-fit h-fit'>127</span>
                    </span>
                  </div>
                  <div className='w-full h-1/2 flex flex-wrap  items-center'>
                    <span className='w-[8px] h-[8px] rounded-[8px] bg-green-500'></span>
                    <span className='w-fit h-full flex items-center font-futuras text-[14px] px-[3px]'>In stock</span>
                  </div>
                </div>
                <div className='w-1/2 h-full flex justify-end items-end'>
                  <span onClick={handleaddtobasket} className='w-fit h-fit  text-[28px] cursor-pointer'><MdOutlineShoppingBag /></span>
                </div>
              </div>
            </div>

            <div className='w-[47%] md:w-[40%] lg:w-[23%] h-[48%] lg:h-[95%] bg-white flex flex-wrap  relative'>
              <span className='w-fit h-fit  absolute text-[25px] top-[10px] z-[5] right-[10px] group cursor-pointer'>
                <span className='w-fit h-fit group-hover:flex hidden'><AiFillHeart /></span>
                <span className='w-fit h-fit group-hover:hidden flex'><AiOutlineHeart /></span>
              </span>
              <figure className='w-full h-[60%] relative cursor-pointer'>
                <span className='w-full h-full absolute top-0 left-0 bg-[#dbdbdb44]'></span>
                <img loading='lazy' className='w-full h-full object-cover' src='https://i.ibb.co/KzNXncm/46862-08-01-b0b7ebcaa6.webp' alt="" />
              </figure>
              <div className='w-full h-[25%] flex flex-wrap'>
                <h4 className='w-full h-1/2 flex  items-end font-futuras text-gray-600'>& Tradition</h4>
                <p className='w-full h-1/2 flex items-center font-futuram text-[18px]'>Flower pot portable table lamp VP9, mustard</p>
              </div>
              <div className='w-full h-[15%] flex flex-wrap'>
                <div className='w-1/2 h-full flex flex-wrap'>
                  <div className='w-full h-1/2 flex flex-wrap '>
                    <span className='w-fit h-full flex items-center font-futuram '><span className='w-fit h-full flex items-center '><MdOutlineCurrencyPound /></span><span className='w-fit h-fit'>121</span></span>
                  </div>
                  <div className='w-full h-1/2 flex flex-wrap  items-center'>
                    <span className='w-[8px] h-[8px] rounded-[8px] bg-green-500'></span>
                    <span className='w-fit h-full flex items-center font-futuras text-[14px] px-[3px]'>In stock</span>
                  </div>
                </div>
                <div className='w-1/2 h-full flex justify-end items-end'>
                  <span onClick={handleaddtobasket} className='w-fit h-fit  text-[28px] cursor-pointer'><MdOutlineShoppingBag /></span>
                </div>
              </div>
            </div>

            <div className='w-[47%] md:w-[40%] lg:w-[23%] h-[48%] lg:h-[95%] bg-white flex flex-wrap  relative'>
              <span className='w-fit h-fit  absolute text-[25px] top-[10px] z-[5] right-[10px] group cursor-pointer'>
                <span className='w-fit h-fit group-hover:flex hidden'><AiFillHeart /></span>
                <span className='w-fit h-fit group-hover:hidden flex'><AiOutlineHeart /></span>
              </span>
              <figure className='w-full h-[60%] relative cursor-pointer'>
                <span className='w-full h-full absolute top-0 left-0 bg-[#dbdbdb44]'></span>
                <img loading='lazy' className='w-full h-full object-cover' src='https://i.ibb.co/0XpqXJc/513557-01-1-Product-Image-Main-ece729a9c7.webp' alt="" />
              </figure>
              <div className='w-full h-[25%] flex flex-wrap'>
                <h4 className='w-full h-1/2 flex  items-end font-futuras text-gray-600'>New works</h4>
                <p className='w-full h-1/2 flex items-center font-futuram text-[18px]'>Margin ceiling lamp 70cm, Beige</p>
              </div>
              <div className='w-full h-[15%] flex flex-wrap'>
                <div className='w-1/2 h-full flex flex-wrap'>
                  <div className='w-full h-1/2 flex flex-wrap '>
                    <span className='w-fit h-full flex items-center font-futuram '><span className='w-fit h-full flex items-center '><MdOutlineCurrencyPound /></span><span className='w-fit h-fit'>447</span></span>
                  </div>
                  <div className='w-full h-1/2 flex flex-wrap  items-center'>
                    <span className='w-[8px] h-[8px] rounded-[8px] bg-green-500'></span>
                    <span className='w-fit h-full flex items-center font-futuras text-[14px] px-[3px]'>In stock</span>
                  </div>
                </div>
                <div className='w-1/2 h-full flex justify-end items-end'>
                  <span onClick={handleaddtobasket} className='w-fit h-fit  text-[28px] cursor-pointer'><MdOutlineShoppingBag /></span>
                </div>
              </div>
            </div>

            <div className='w-[47%] md:w-[40%] lg:w-[23%] h-[48%] lg:h-[95%] bg-white flex flex-wrap  relative'>
              <span className='w-fit h-fit  absolute text-[25px] top-[10px] z-[5] right-[10px] group cursor-pointer'>
                <span className='w-fit h-fit group-hover:flex hidden'><AiFillHeart /></span>
                <span className='w-fit h-fit group-hover:hidden flex'><AiOutlineHeart /></span>
              </span>
              <figure className='w-full h-[60%] relative cursor-pointer'>
                <span className='w-full h-full absolute top-0 left-0 bg-[#dbdbdb44]'></span>
                <img loading='lazy' className='w-full h-full object-cover' src='https://i.ibb.co/M6qJGzq/product4.jpg' alt="" />
              </figure>
              <div className='w-full h-[25%] flex flex-wrap'>
                <h4 className='w-full h-1/2 flex  items-end font-futuras text-gray-600'>Normann Copenhagen</h4>
                <p className='w-full h-1/2 flex items-center font-futuram text-[18px]'>Bau lampa nature, large 48.8</p>
              </div>
              <div className='w-full h-[15%] flex flex-wrap'>
                <div className='w-1/2 h-full flex flex-wrap'>
                  <div className='w-full h-1/2 flex flex-wrap '>
                    <span className='w-fit h-full flex items-center font-futuram '><span className='w-fit h-full flex items-center '><MdOutlineCurrencyPound /></span><span className='w-fit h-fit'>172</span></span>
                  </div>
                  <div className='w-full h-1/2 flex flex-wrap  items-center'>
                    <span className='w-[8px] h-[8px] rounded-[8px] bg-green-500'></span>
                    <span className='w-fit h-full flex items-center font-futuras text-[14px] px-[3px]'>In stock</span>
                  </div>
                </div>
                <div className='w-1/2 h-full flex justify-end items-end'>
                  <span onClick={handleaddtobasket} className='w-fit h-fit  text-[28px] cursor-pointer'><MdOutlineShoppingBag /></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <div className='w-full h-[20vh] flex items-center justify-center'>
        <button className='w-fit h-fit px-[20px] py-[10px] font-futuras text-white bg-[#671d1a] duration-[0.4s] hover:bg-[#842421]'>See all lightning</button>
      </div>
      <section className='w-full h-[80vh] md:h-[70vh] flex items-center justify-center'>
        <div className='w-full lg:w-[90%] h-[90%]  relative'>
          <figure className='w-full h-full absolute top-0 left-0 z-[3]'>
            <img loading='lazy' className='w-full h-full object-cover object-left md:object-center' src={banner2} alt="" />
          </figure>
          <div className='w-full h-full flex flex-wrap relative z-[4] content-center'>
            <h3 className='w-full h-[15%] md:h-[40%]  flex items-end justify-center font-futuram text-white pb-[20px] text-[4vw] md:text-[2vw]'>Automn arivvals</h3>
            <p className='w-full h-[15%] md:h-[20%]  flex items-center justify-center font-futuram text-white text-[5.5vw] md:text-[3.5vw]'>Shiny and new from HAY</p>
            <div className='w-full h-[15%] md:h-[40%] flex  items-center justify-center'>
              <span className='w-fit h-fit flex px-[20px] py-[10px] font-futuram bg-[#fffae8] text-[4vw] md:text-[2vw] lg:text-[1vw] cursor-pointer duration-[0.4s] hover:bg-[#eee8cf]'>Discover</span>
            </div>
          </div>
        </div>
      </section>



      <section className='w-full h-[150vh] sm:h-[200vh] md:h-[250vh] lg:h-[300vh] xl:h-[90vh] flex items-center justify-center '>
        <div className='w-full xl:w-[90%] h-[90%] flex flex-wrap justify-between'>
          <div className='w-full xl:w-[48%] h-[48%] xl:h-[90%]  relative'>
            <figure className='w-full h-full absolute top-0 left-0 z-[3]'>
              <img loading='lazy' className='w-full h-full object-cover' src={banner3} alt="" />
            </figure>
            <div className='w-full h-full flex flex-wrap relative z-[4] content-center'>
              <h3 className='w-full h-fit py-[15px]  flex items-end justify-center font-futuram text-white pb-[20px] text-[4vw] md:text-[2vw]'>Lightning design from Denmark</h3>
              <p className='w-full h-fit py-[15px]  flex items-center justify-center text-center font-futuram text-white text-[5.5vw] md:text-[3vw]'>Familiarize yourself with 101 copenhagen</p>
              <div className='w-full h-fit py-[15px] flex  items-center justify-center'>
                <span className='w-fit h-fit flex px-[20px] py-[10px] font-futuram bg-[#fffae8] text-[4vw] md:text-[2vw] lg:text-[1vw] cursor-pointer duration-[0.4s] hover:bg-[#eee8cf]'>Discover</span>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[48%] h-[48%] xl:h-[90%]  relative'>
            <figure className='w-full h-full absolute top-0 left-0 z-[3]'>
              <img loading='lazy' className='w-full h-full object-cover' src={banner4} alt="" />
            </figure>
            <div className='w-full h-full flex flex-wrap relative z-[4] content-center'>
              <h3 className='w-full h-fit py-[15px]  flex items-end justify-center font-futuram text-[#fbedb7] pb-[20px] text-[4vw] md:text-[2vw]'>Inspiration, design & benefits</h3>
              <p className='w-full h-fit py-[15px]  flex items-center justify-center text-center font-futuram text-[#fbedb7] text-[5.5vw] md:text-[3vw]'>Lightshop newsletter</p>
              <div className='w-full h-fit py-[15px] flex  items-center justify-center'>
                <span className='w-fit h-fit flex px-[20px] py-[10px] font-futuram bg-[#fbedb7] text-[4vw] md:text-[2vw] lg:text-[1vw] cursor-pointer duration-[0.4s] hover:bg-[#fff8dc]'>Sign up to our newsletter</span>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className='w-full h-[200vh] md:h-[160vh] lg:h-[110vh] flex flex-wrap content-start b'>
        <h2 className='w-full h-[5%] md:h-[15%] flex items-center  justify-center font-futuram text-[26px] '>In the spotlight</h2>
        <div className='w-full h-[85%] md:h-[65%] flex  items-center justify-center '>
          <div className='w-[95%] md:w-[85%] h-[90%] flex flex-wrap content-between justify-between'>

            <div className='w-[47%] md:w-[40%] lg:w-[23%] h-[48%] lg:h-[95%] bg-white flex flex-wrap  relative'>
              <span className='w-fit h-fit  absolute text-[25px] top-[10px] z-[5] right-[10px] group cursor-pointer'>
                <span className='w-fit h-fit group-hover:flex hidden'><AiFillHeart /></span>
                <span className='w-fit h-fit group-hover:hidden flex'><AiOutlineHeart /></span>
              </span>
              <figure className='w-full h-[60%] relative cursor-pointer'>
                <span className='w-full h-full absolute top-0 left-0 bg-[#dbdbdb44]'></span>
                <img loading='lazy' className='w-full h-full object-cover' src='https://i.ibb.co/0YnQyYf/507511-01-1-Product-Image-Main-6e3853602b.webp' alt="" />
              </figure>
              <div className='w-full h-[25%] flex flex-wrap'>
                <h4 className='w-full h-1/2 flex  items-end font-futuras text-gray-600'>& Tradition</h4>
                <p className='w-full h-1/2 flex items-center font-futuram text-[18px]'>flowerpot portable table lamp VP9, chrome</p>
              </div>
              <div className='w-full h-[15%] flex flex-wrap'>
                <div className='w-1/2 h-full flex flex-wrap'>
                  <div className='w-full h-1/2 flex flex-wrap '>
                    <span className='w-fit h-full flex items-center font-futuram '><span className='w-fit h-full flex items-center '><MdOutlineCurrencyPound /></span><span className='w-fit h-fit'>178</span></span>
                  </div>
                  <div className='w-full h-1/2 flex flex-wrap  items-center'>
                    <span className='w-[8px] h-[8px] rounded-[8px] bg-green-500'></span>
                    <span className='w-fit h-full flex items-center font-futuras text-[14px] px-[3px]'>In stock</span>
                  </div>
                </div>
                <div className='w-1/2 h-full flex justify-end items-end'>
                  <span onClick={handleaddtobasket} className='w-fit h-fit  text-[28px] cursor-pointer'><MdOutlineShoppingBag /></span>
                </div>
              </div>
            </div>

            <div className='w-[47%] md:w-[40%] lg:w-[23%] h-[48%] lg:h-[95%] bg-white flex flex-wrap  relative'>
              <span className='w-fit h-fit  absolute text-[25px] top-[10px] z-[5] right-[10px] group cursor-pointer'>
                <span className='w-fit h-fit group-hover:flex hidden'><AiFillHeart /></span>
                <span className='w-fit h-fit group-hover:hidden flex'><AiOutlineHeart /></span>
              </span>
              <figure className='w-full h-[60%] relative cursor-pointer'>
                <span className='w-full h-full absolute top-0 left-0 bg-[#dbdbdb44]'></span>
                <img loading='lazy' className='w-full h-full object-cover' src='https://i.ibb.co/99DZjgy/46864-01-01-85326e5a3f.webp' alt="" />
              </figure>
              <div className='w-full h-[25%] flex flex-wrap'>
                <h4 className='w-full h-1/2 flex  items-end font-futuras text-gray-600'>& Tradition</h4>
                <p className='w-full h-1/2 flex items-center font-futuram text-[18px]'>Manhattan portable table lamp SC52, bronzed brass</p>
              </div>
              <div className='w-full h-[15%] flex flex-wrap'>
                <div className='w-1/2 h-full flex flex-wrap'>
                  <div className='w-full h-1/2 flex flex-wrap '>
                    <span className='w-fit h-full flex items-center font-futuram '><span className='w-fit h-full flex items-center '><MdOutlineCurrencyPound /></span><span className='w-fit h-fit'>126</span></span>
                  </div>
                  <div className='w-full h-1/2 flex flex-wrap  items-center'>
                    <span className='w-[8px] h-[8px] rounded-[8px] bg-green-500'></span>
                    <span className='w-fit h-full flex items-center font-futuras text-[14px] px-[3px]'>In stock</span>
                  </div>
                </div>
                <div className='w-1/2 h-full flex justify-end items-end'>
                  <span onClick={handleaddtobasket} className='w-fit h-fit  text-[28px] cursor-pointer'><MdOutlineShoppingBag /></span>
                </div>
              </div>
            </div>

            <div className='w-[47%] md:w-[40%] lg:w-[23%] h-[48%] lg:h-[95%] bg-white flex flex-wrap  relative'>
              <span className='w-fit h-fit  absolute text-[25px] top-[10px] z-[5] right-[10px] group cursor-pointer'>
                <span className='w-fit h-fit group-hover:flex hidden'><AiFillHeart /></span>
                <span className='w-fit h-fit group-hover:hidden flex'><AiOutlineHeart /></span>
              </span>
              <figure className='w-full h-[60%] relative cursor-pointer'>
                <span className='w-full h-full absolute top-0 left-0 bg-[#dbdbdb44]'></span>
                <img loading='lazy' className='w-full h-full object-cover' src='https://i.ibb.co/Jp7GNQ3/product7.jpg' alt="" />
              </figure>
              <div className='w-full h-[25%] flex flex-wrap'>
                <h4 className='w-full h-1/2 flex  items-end font-futuras text-gray-600'>Audo copenhagen</h4>
                <p className='w-full h-1/2 flex items-center font-futuram text-[18px]'>Ray table lamp portable, black</p>
              </div>
              <div className='w-full h-[15%] flex flex-wrap'>
                <div className='w-1/2 h-full flex flex-wrap'>
                  <div className='w-full h-1/2 flex flex-wrap '>
                    <span className='w-fit h-full flex items-center font-futuram '><span className='w-fit h-full flex items-center '><MdOutlineCurrencyPound /></span><span className='w-fit h-fit'>186</span></span>
                  </div>
                  <div className='w-full h-1/2 flex flex-wrap  items-center'>
                    <span className='w-[8px] h-[8px] rounded-[8px] '></span>
                    <span className='w-fit h-full flex items-center font-futuras text-[14px] px-[3px]'>In stock</span>
                  </div>
                </div>
                <div className='w-1/2 h-full flex justify-end items-end'>
                  <span onClick={handleaddtobasket} className='w-fit h-fit  text-[28px] cursor-pointer'><MdOutlineShoppingBag /></span>
                </div>
              </div>
            </div>

            <div className='w-[47%] md:w-[40%] lg:w-[23%] h-[48%] lg:h-[95%] bg-white flex flex-wrap  relative'>
              <span className='w-fit h-fit  absolute text-[25px] top-[10px] z-[5] right-[10px] group cursor-pointer'>
                <span className='w-fit h-fit group-hover:flex hidden'><AiFillHeart /></span>
                <span className='w-fit h-fit group-hover:hidden flex'><AiOutlineHeart /></span>
              </span>
              <figure className='w-full h-[60%] relative cursor-pointer'>
                <span className='w-full h-full absolute top-0 left-0 bg-[#dbdbdb44]'></span>
                <img loading='lazy' className='w-full h-full object-cover' src='https://i.ibb.co/rFy444j/product8.jpg' alt="" />
              </figure>
              <div className='w-full h-[25%] flex flex-wrap'>
                <h4 className='w-full h-1/2 flex  items-end font-futuras text-gray-600'>& Tradition</h4>
                <p className='w-full h-1/2 flex items-center font-futuram text-[18px]'>Como portable table lamp SC53, blue</p>
              </div>
              <div className='w-full h-[15%] flex flex-wrap'>
                <div className='w-1/2 h-full flex flex-wrap'>
                  <div className='w-full h-1/2 flex flex-wrap '>
                    <span className='w-fit h-full flex items-center font-futuram '><span className='w-fit h-full flex items-center '><MdOutlineCurrencyPound /></span><span className='w-fit h-fit'>134</span></span>
                  </div>
                  <div className='w-full h-1/2 flex flex-wrap  items-center'>
                    <span className='w-[8px] h-[8px] rounded-[8px] '></span>
                    <span className='w-fit h-full flex items-center font-futuras text-[14px] px-[3px]'>In stock</span>
                  </div>
                </div>
                <div className='w-1/2 h-full flex justify-end items-end'>
                  <span onClick={handleaddtobasket} className='w-fit h-fit  text-[28px] cursor-pointer'><MdOutlineShoppingBag /></span>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className='w-full h-[10%] md:h-[20%] flex items-center justify-center'>
          <button className='w-fit h-fit px-[20px] py-[10px] font-futuras text-white bg-[#671d1a] duration-[0.4s] hover:bg-[#842421]'>See all lightning</button>
        </div>
      </section>
      <section className='w-full h-[90vh] md:h-[60vh] flex items-center justify-center'>
        <div className='w-[90%] h-[90%] flex relative'>
          <figure className='w-full h-full flex absolute top-0 left-0 z-[3]'>
            <img loading='lazy' className='w-full h-full object-cover' src={banner5} alt="" />
          </figure>
          <div className='w-full h-full felx flex-wrap content-center relative z-[4]'>
            <h3 className='w-full h-fit py-[15px]  flex items-end justify-center font-futuram text-white pb-[20px] text-[4vw] md:text-[2vw]'>Choose lightning by room</h3>
            <p className='w-full h-fit py-[15px]  flex items-center justify-center text-center font-futuram text-white text-[5.5vw] md:text-[3vw]'>Illuminat your home - inside and out</p>
            <div className='w-full h-fit py-[15px] flex  items-center justify-center'>
              <span className='w-fit h-fit flex px-[20px] py-[10px] font-futuram bg-[#fffae8] text-[4vw] md:text-[2vw] lg:text-[1vw] cursor-pointer duration-[0.4s] hover:bg-[#eee8cf]'>Discover</span>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full h-[120vh] sm:h-[180vh] md:h-[220vh] lg:h-[280vh] xl:h-[90vh] flex flex-wrap'>
        <div className='w-full  xl:w-1/2 h-1/2 xl:h-full flex flex-wrap relative'>
          <figure className='w-full h-full absolute top-0 left-0 z-[3]'>
            <img loading='lazy' className='w-full h-full object-cover' src={banner6} alt="" />
          </figure>
          <div className='w-full h-full flex flex-wrap content-center relative z-[4]'>
            <h3 className='w-full h-fit py-[15px]  flex items-end justify-center font-futuram text-white pb-[20px] text-[4vw] md:text-[2vw]'>Design expertist</h3>
            <p className='w-full h-fit py-[15px]  flex items-center justify-center text-center font-futuram text-white text-[5.5vw] md:text-[3vw]'>Stylish function from Avolt</p>
            <div className='w-full h-fit py-[15px] flex  items-center justify-center'>
              <span className='w-fit h-fit flex px-[20px] py-[10px] font-futuram bg-[#fffae8] text-[4vw] md:text-[2vw] lg:text-[1vw] cursor-pointer duration-[0.4s] hover:bg-[#eee8cf]'>Discover</span>
            </div>
          </div>
        </div>
        <div className='w-full  xl:w-1/2 h-1/2 xl:h-full flex flex-wrap relative'>
          <figure className='w-full h-full absolute top-0 left-0 z-[3]'>
            <img loading='lazy' className='w-full h-full object-cover' src={banner7} alt="" />
          </figure>
          <div className='w-full h-full flex flex-wrap content-center relative z-[4]'>
            <h3 className='w-full h-fit py-[15px]  flex items-end justify-center font-futuram text-white pb-[20px] text-[4vw] md:text-[2vw]'>Shiny & new</h3>
            <p className='w-full h-fit py-[15px]  flex items-center justify-center text-center font-futuram text-white text-[5.5vw] md:text-[3vw]'>This season's new arrivals</p>
            <div className='w-full h-fit py-[15px] flex  items-center justify-center'>
              <span className='w-fit h-fit flex px-[20px] py-[10px] font-futuram bg-[#fffae8] text-[4vw] md:text-[2vw] lg:text-[1vw] cursor-pointer duration-[0.4s] hover:bg-[#eee8cf]'>See all new arrival</span>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full h-[200vh] md:h-[160vh] lg:h-[110vh] flex flex-wrap content-start'>
        <h2 className='w-full h-[5%] md:h-[15%] flex items-center  justify-center font-futuram text-[26px] '>Bright ideas</h2>
        <div className='w-full h-[85%] md:h-[65%] flex  items-center justify-center '>
          <div className='w-[95%] md:w-[85%] h-[90%] flex flex-wrap content-between justify-between'>

            <div className='w-[47%] md:w-[40%] lg:w-[23%] h-[48%] lg:h-[95%] bg-white flex flex-wrap  relative'>
              <span className='w-fit h-fit  absolute text-[25px] top-[10px] z-[5] right-[10px] group cursor-pointer'>
                <span className='w-fit h-fit group-hover:flex hidden'><AiFillHeart /></span>
                <span className='w-fit h-fit group-hover:hidden flex'><AiOutlineHeart /></span>
              </span>
              <figure className='w-full h-[60%] relative cursor-pointer'>
                <span className='w-full h-full absolute top-0 left-0 bg-[#dbdbdb44]'></span>
                <img loading='lazy' className='w-full h-full object-cover' src='https://i.ibb.co/NsJTzsJ/p-14528-02-01-83195b0802.webp' alt="" />
              </figure>
              <div className='w-full h-[25%] flex flex-wrap'>
                <h4 className='w-full h-1/2 flex  items-end font-futuras text-gray-600'>Bosign</h4>
                <p className='w-full h-1/2 flex items-center font-futuram text-[18px]'>Cable organiser M, wooden print</p>
              </div>
              <div className='w-full h-[15%] flex flex-wrap'>
                <div className='w-1/2 h-full flex flex-wrap'>
                  <div className='w-full h-1/2 flex flex-wrap '>
                    <span className='w-fit h-full flex items-center font-futuram '><span className='w-fit h-full flex items-center '><MdOutlineCurrencyPound /></span><span className='w-fit h-fit'>25</span></span>
                  </div>
                  <div className='w-full h-1/2 flex flex-wrap  items-center'>
                    <span className='w-[8px] h-[8px] rounded-[8px] bg-green-500'></span>
                    <span className='w-fit h-full flex items-center font-futuras text-[14px] px-[3px]'>In stock</span>
                  </div>
                </div>
                <div className='w-1/2 h-full flex justify-end items-end'>
                  <span onClick={handleaddtobasket} className='w-fit h-fit  text-[28px] cursor-pointer'><MdOutlineShoppingBag /></span>
                </div>
              </div>
            </div>

            <div className='w-[47%] md:w-[40%] lg:w-[23%] h-[48%] lg:h-[95%] bg-white flex flex-wrap  relative'>
              <span className='w-fit h-fit  absolute text-[25px] top-[10px] z-[5] right-[10px] group cursor-pointer'>
                <span className='w-fit h-fit group-hover:flex hidden'><AiFillHeart /></span>
                <span className='w-fit h-fit group-hover:hidden flex'><AiOutlineHeart /></span>
              </span>
              <figure className='w-full h-[60%] relative cursor-pointer'>
                <span className='w-full h-full absolute top-0 left-0 bg-[#dbdbdb44]'></span>
                <img loading='lazy' className='w-full h-full object-cover' src='https://i.ibb.co/QY7rSLR/509629-01-1-Product-Image-Main-dfe6d990d4.webp' alt="" />
              </figure>
              <div className='w-full h-[25%] flex flex-wrap'>
                <h4 className='w-full h-1/2 flex  items-end font-futuras text-gray-600'>Bosign</h4>
                <p className='w-full h-1/2 flex items-center font-futuram text-[18px]'>Cable orgoniser XXL cable tify, white-white</p>
              </div>
              <div className='w-full h-[15%] flex flex-wrap'>
                <div className='w-1/2 h-full flex flex-wrap'>
                  <div className='w-full h-1/2 flex flex-wrap '>
                    <span className='w-fit h-full flex items-center font-futuram '><span className='w-fit h-full flex items-center '><MdOutlineCurrencyPound /></span><span className='w-fit h-fit'>66</span></span>
                  </div>
                  <div className='w-full h-1/2 flex flex-wrap  items-center'>
                    <span className='w-[8px] h-[8px] rounded-[8px] bg-green-500'></span>
                    <span className='w-fit h-full flex items-center font-futuras text-[14px] px-[3px]'>In stock</span>
                  </div>
                </div>
                <div className='w-1/2 h-full flex justify-end items-end'>
                  <span onClick={handleaddtobasket} className='w-fit h-fit  text-[28px] cursor-pointer'><MdOutlineShoppingBag /></span>
                </div>
              </div>
            </div>

            <div className='w-[47%] md:w-[40%] lg:w-[23%] h-[48%] lg:h-[95%] bg-white flex flex-wrap  relative'>
              <span className='w-fit h-fit  absolute text-[25px] top-[10px] z-[5] right-[10px] group cursor-pointer'>
                <span className='w-fit h-fit group-hover:flex hidden'><AiFillHeart /></span>
                <span className='w-fit h-fit group-hover:hidden flex'><AiOutlineHeart /></span>
              </span>
              <figure className='w-full h-[60%] relative cursor-pointer'>
                <span className='w-full h-full absolute top-0 left-0 bg-[#dbdbdb44]'></span>
                <img loading='lazy' className='w-full h-full object-cover' src='https://i.ibb.co/qJLGrrY/509632-01-1-Product-Image-Main-b537fab419.webp' alt="" />
              </figure>
              <div className='w-full h-[25%] flex flex-wrap'>
                <h4 className='w-full h-1/2 flex  items-end font-futuras text-gray-600'>Bosign</h4>
                <p className='w-full h-1/2 flex items-center font-futuram text-[18px]'>cable orgoniser XXL cable tidy, wood-white</p>
              </div>
              <div className='w-full h-[15%] flex flex-wrap'>
                <div className='w-1/2 h-full flex flex-wrap'>
                  <div className='w-full h-1/2 flex flex-wrap '>
                    <span className='w-fit h-full flex items-center font-futuram '><span className='w-fit h-full flex items-center '><MdOutlineCurrencyPound /></span><span className='w-fit h-fit'>65</span></span>
                  </div>
                  <div className='w-full h-1/2 flex flex-wrap  items-center'>
                    <span className='w-[8px] h-[8px] rounded-[8px] '></span>
                    <span className='w-fit h-full flex items-center font-futuras text-[14px] px-[3px]'>In stock</span>
                  </div>
                </div>
                <div className='w-1/2 h-full flex justify-end items-end'>
                  <span onClick={handleaddtobasket} className='w-fit h-fit  text-[28px] cursor-pointer'><MdOutlineShoppingBag /></span>
                </div>
              </div>
            </div>

            <div className='w-[47%] md:w-[40%] lg:w-[23%] h-[48%] lg:h-[95%] bg-white flex flex-wrap  relative'>
              <span className='w-fit h-fit  absolute text-[25px] top-[10px] z-[5] right-[10px] group cursor-pointer'>
                <span className='w-fit h-fit group-hover:flex hidden'><AiFillHeart /></span>
                <span className='w-fit h-fit group-hover:hidden flex'><AiOutlineHeart /></span>
              </span>
              <figure className='w-full h-[60%] relative cursor-pointer'>
                <span className='w-full h-full absolute top-0 left-0 bg-[#dbdbdb44]'></span>
                <img loading='lazy' className='w-full h-full object-cover' src='https://i.ibb.co/gjzMCHF/p-27257-02-01-be3c2beda3.webp' alt="" />
              </figure>
              <div className='w-full h-[25%] flex flex-wrap'>
                <h4 className='w-full h-1/2 flex  items-end font-futuras text-gray-600'>Bosign</h4>
                <p className='w-full h-1/2 flex items-center font-futuram text-[18px]'>Cable orgoniser XL, grey lid</p>
              </div>
              <div className='w-full h-[15%] flex flex-wrap'>
                <div className='w-1/2 h-full flex flex-wrap'>
                  <div className='w-full h-1/2 flex flex-wrap '>
                    <span className='w-fit h-full flex items-center font-futuram '><span className='w-fit h-full flex items-center '><MdOutlineCurrencyPound /></span><span className='w-fit h-fit'>41</span></span>
                  </div>
                  <div className='w-full h-1/2 flex flex-wrap  items-center'>
                    <span className='w-[8px] h-[8px] rounded-[8px] '></span>
                    <span className='w-fit h-full flex items-center font-futuras text-[14px] px-[3px]'>In stock</span>
                  </div>
                </div>
                <div className='w-1/2 h-full flex justify-end items-end'>
                  <span onClick={handleaddtobasket} className='w-fit h-fit  text-[28px] cursor-pointer'><MdOutlineShoppingBag /></span>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className='w-full h-[10%] md:h-[20%] flex items-center justify-center'>
          <button className='w-fit h-fit px-[20px] py-[10px] font-futuras text-white bg-[#671d1a] duration-[0.4s] hover:bg-[#842421]'>See all lightning accessories</button>
        </div>
      </section>
      <section className='w-full md:h-[180vh] lg:h-[220vh] xl:h-[70vh] flex flex-wrap'>
        <figure className='w-1/2 xl:w-1/4 h-1/2 xl:h-full'>
          <img loading='lazy' className='w-full h-full object-cover' src={banner8} alt="" />
        </figure>
        <figure className='w-1/2 xl:w-1/4 h-1/2 xl:h-full'>
          <img loading='lazy' className='w-full h-full object-cover' src={banner9} alt="" />
        </figure>
        <figure className='w-1/2 xl:w-1/4 h-1/2 xl:h-full'>
          <img loading='lazy' className='w-full h-full object-cover' src={banner10} alt="" />
        </figure>
        <figure className='w-1/2 xl:w-1/4 h-1/2 xl:h-full'>
          <img loading='lazy' className='w-full h-full object-cover' src={banner11} alt="" />
        </figure>
      </section>
      <section className='w-full h-[130vh] sm:h-[150vh] md:h-[190vh] lg:h-[150vh] flex flex-wrap '>
        <h2 className='w-full h-[10%] flex  justify-center items-end font-futuram text-center text-[26px]'>Share your illuminating design @lightshop.official</h2>
        <div className='w-full h-[90%] flex items-center justify-center '>
          <div className='w-full xl:w-[90%] h-[90%] flex flex-wrap '>
            <figure className='w-1/2 lg:w-1/3 h-1/3 lg:h-1/2 flex p-[10px]'>
              <img loading='lazy' className='w-full h-full object-cover' src={img1} alt="" />
            </figure>
            <figure className='w-1/2 lg:w-1/3 h-1/3 lg:h-1/2 flex p-[10px]'>
              <img loading='lazy' className='w-full h-full object-cover' src={img2} alt="" />
            </figure>
            <figure className='w-1/2 lg:w-1/3 h-1/3 lg:h-1/2 flex p-[10px]'>
              <img loading='lazy' className='w-full h-full object-cover' src={img3} alt="" />
            </figure>
            <figure className='w-1/2 lg:w-1/3 h-1/3 lg:h-1/2 flex p-[10px]'>
              <img loading='lazy' className='w-full h-full object-cover' src={img4} alt="" />
            </figure>
            <figure className='w-1/2 lg:w-1/3 h-1/3 lg:h-1/2 flex p-[10px]'>
              <img loading='lazy' className='w-full h-full object-cover' src={img5} alt="" />
            </figure>
            <figure className='w-1/2 lg:w-1/3 h-1/3 lg:h-1/2 flex p-[10px]'>
              <img loading='lazy' className='w-full h-full object-cover' src={img6} alt="" />
            </figure>
          </div>
        </div>
      </section>
      <div className='w-full h-[20vh] flex items-center justify-center'>
        <button className='w-fit h-fit px-[20px] py-[10px] font-futuras bg-[#fffae8] duration-[0.4s] cursor-pointer hover:bg-[#fffcf1]'>load more</button>
      </div>
      <Footer />
    </>

  )
}

export default Home