import { useRef, React, useEffect, useState } from 'react'
import { GoCheck } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BsChatLeft } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineCurrencyPound } from "react-icons/md";
import german from './../assets/img/german.svg'
import uk from './../assets/img/uk.svg'
import logo from './../assets/img/logo.png'
import { Link } from 'react-router-dom';
import useBasket from '../store/basket';
import useUser from '../store/myuser';
import { IoMdClose } from "react-icons/io";


function Header() {

    const [inputs, setInputs] = useState({
        email: '',
        name: '',
        lastname: '',
        password: '',
        loginpassword: '',
        loginemail: ''
    })

    function handleinputs(e) {
        let name = e.currentTarget.getAttribute('data-name')
        let value = e.currentTarget.value
        switch (name) {
            case 'email': setInputs({ ...inputs, email: value }); break
            case 'name': setInputs({ ...inputs, name: value }); break
            case 'lastname': setInputs({ ...inputs, lastname: value }); break
            case 'password': setInputs({ ...inputs, password: value }); break
            case 'loginpassword': setInputs({ ...inputs, loginpassword: value }); break
            case 'loginemail': setInputs({ ...inputs, loginemail: value }); break
        }
    }


    const itemsinbasket = useRef()
    const header = useRef()
    const bigsearch = useRef()
    const sidemenu = useRef()
    const product = useRef()
    const other = useRef()
    const basket = useRef()
    const showtotal = useRef()
    const createaccount = useRef()
    const login = useRef()
    const userLoginSignUp = useRef()
    const openUserPage = useRef()

    const myusers = useUser((state) => state.users)
    const userflag = useUser((state) => state.localExist)
    const changeuserflag = useUser((state) => state.changeflag)
    const getusers = useUser((state) => state.getData)
    const getlocalbasket = useBasket((state) => state.getlocalbasket)
    const basketitems = useBasket((state) => state.basket)
    const removebasketitem = useBasket((state) => state.removefrombasket)
    const incnumber = useBasket((state) => state.incnumber)
    const decnumber = useBasket((state) => state.decnumber)
    const calcitemprice = useBasket((state) => state.calcitemprice)

    useEffect(() => {
        console.log(userflag);
        if (userflag) {
            openUserPage.current.previousElementSibling.classList.add('hidden')
            openUserPage.current.previousElementSibling.classList.remove('xl:flex')
            openUserPage.current.classList.remove('hidden')
            openUserPage.current.classList.add('xl:flex')
        } else {
            openUserPage.current.previousElementSibling.classList.remove('hidden')
            openUserPage.current.previousElementSibling.classList.add('xl:flex')
            openUserPage.current.classList.add('hidden')
            openUserPage.current.classList.remove('xl:flex')
        }
    }, [userflag])

    function handleLogin(e) {
        if (inputs.loginemail != '', inputs.loginpassword != '') {
            if (inputs.loginemail.search(/@/) == -1 || inputs.loginemail.search(/.com/) == -1 || (inputs.loginemail.search(/email/) == -1 && inputs.loginemail.search(/gmail/) == -1) || inputs.loginemail.length < 10) {
                alert('please enter valid email')
            } else {
                let finduser = 0
                let name = ''
                let email = ''
                myusers.map((user) => {
                    if (user.email == inputs.loginemail && user.password == inputs.loginpassword) {
                        finduser++
                        name = user.firstname
                        email = user.email
                    }
                })
                if (finduser != 0) {
                    alert('login successful welcomback ' + name)
                    let user = {
                        name: name,
                        email: email
                    }
                    localStorage.setItem('user', JSON.stringify(user))
                    let stat = true
                    changeuserflag(stat)
                    userLoginSignUp.current.classList.remove('flex')
                    userLoginSignUp.current.classList.add('hidden')
                    checkUser()
                    function checkUser() {
                        let user = JSON.parse(localStorage.getItem('user'))
                        if (user != null) {
                            openUserPage.current.previousElementSibling.classList.add('hidden')
                            openUserPage.current.previousElementSibling.classList.remove('xl:flex')
                            openUserPage.current.classList.remove('hidden')
                            openUserPage.current.classList.add('xl:flex')
                        }
                    }
                } else {
                    alert('sorry user not found')
                }
            }
        } else {
            alert('please fill all forms')
        }
    }

    function handleUserSection(e) {
        let name = e.currentTarget.getAttribute('data-name')
        if (name == 'create') {
            createaccount.current.classList.add('flex')
            createaccount.current.classList.remove('hidden')
            login.current.classList.remove('flex')
            login.current.classList.add('hidden')
            e.currentTarget.classList.remove('bg-gray-200')
            e.currentTarget.previousElementSibling.classList.add('bg-gray-200')
        } else {
            createaccount.current.classList.remove('flex')
            createaccount.current.classList.add('hidden')
            login.current.classList.add('flex')
            login.current.classList.remove('hidden')
            e.currentTarget.classList.remove('bg-gray-200')
            e.currentTarget.nextElementSibling.classList.add('bg-gray-200')
        }
    }

    function handleOpenCloseLoginSection(e) {
        let name = e.currentTarget.getAttribute('data-name')
        if (name == 'open') {
            userLoginSignUp.current.classList.add('flex')
            userLoginSignUp.current.classList.remove('hidden')
        } else {
            userLoginSignUp.current.classList.remove('flex')
            userLoginSignUp.current.classList.add('hidden')
        }
    }

    function handlecreateacount() {
        let name = inputs.name
        let lastname = inputs.lastname
        let email = inputs.email
        let password = inputs.password
        if (name != '' && lastname != '' && email != '' && password != '') {
            if (myusers.length > 0) {
                console.log(myusers);
                let error = 0
                myusers.forEach((item) => {
                    if (item.email == email) {
                        error++
                    }
                })
                if (error == 0) {
                    if (password.length < 8) {
                        alert('Password must be at least 8 characters')
                    } else if (email.search(/@/) == -1 || email.search(/.com/) == -1 || (email.search(/email/) == -1 && email.search(/gmail/) == -1) || email.length < 10) {
                        alert('Email must be valid')
                    } else {
                        sendAccountDetail(email, name, lastname, password)
                    }
                } else {
                    alert('account with this email already exist')
                }
            }
            else {
                console.log('khali bood', myusers);
                if (password.length < 8) {
                    alert('Password must be at least 8 characters')
                } else if (email.search(/@/) == -1 || email.search(/.com/) == -1 || (email.search(/email/) == -1 && email.search(/gmail/) == -1) || email.length < 10) {
                    alert('Email must be valid')
                } else {
                    sendAccountDetail(email, name, lastname, password)
                }
            }


        } else {
            alert('please fill all forms')
        }

    }

    function sendAccountDetail(email, name, lastname, password) {

        const accountDetail = {
            email: email,
            firstname: name,
            lastname: lastname,
            password: password
        };


        fetch('https://66ca087c59f4350f064e38bd.mockapi.io/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(accountDetail)
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(task => {
            alert('account successfuly created')
            getusers()
            userLoginSignUp.current.classList.remove('flex')
            userLoginSignUp.current.classList.add('hidden')
            let user = {
                name: accountDetail.firstname,
                email: accountDetail.email
            }
            localStorage.setItem('user', JSON.stringify(user))
            let stat = true
            changeuserflag(stat)
            checkUser()
            function checkUser() {
                let user = JSON.parse(localStorage.getItem('user'))
                if (user != null) {
                    openUserPage.current.previousElementSibling.classList.add('hidden')
                    openUserPage.current.previousElementSibling.classList.remove('xl:flex')
                    openUserPage.current.classList.remove('hidden')
                    openUserPage.current.classList.add('xl:flex')
                }
            }
        }).catch(error => {
            alert(error)
        })

    }

    function handleRemoveitem(e) {
        let image = e.currentTarget.parentElement.previousElementSibling.children[1].getAttribute('src')
        let name = e.currentTarget.nextElementSibling.innerHTML
        removebasketitem(name, image)
    }

    function handlenumber(e) {
        let name = e.currentTarget.getAttribute('data-name')
        if (name == 'minus') {
            let image = e.currentTarget.parentElement.parentElement.parentElement.previousElementSibling.children[1].getAttribute('src')
            decnumber(image)
            calcitemprice(image)
        } else {
            let image = e.currentTarget.parentElement.parentElement.parentElement.previousElementSibling.children[1].getAttribute('src')
            incnumber(image)
            calcitemprice(image)
        }
    }

    function hadnletotalprice() {
        let prices = document.querySelectorAll('.prices')
        let totalprice = 0
        prices.forEach((item) => {
            let value = item.innerHTML
            value = Number(value)
            totalprice += value
        })
        showtotal.current.innerHTML = totalprice
    }

    function handleSidemenuSections(e) {
        let name = e.currentTarget.getAttribute('data-name')
        if (name == 'products') {
            product.current.classList.add('flex')
            product.current.classList.remove('hidden')
            other.current.classList.add('hidden')
            other.current.classList.remove('flex')
            e.currentTarget.classList.remove('bg-[#eee8cf]')
            e.currentTarget.nextElementSibling.classList.add('bg-[#eee8cf]')
        } else {
            product.current.classList.remove('flex')
            product.current.classList.add('hidden')
            other.current.classList.remove('hidden')
            other.current.classList.add('flex')
            e.currentTarget.classList.remove('bg-[#eee8cf]')
            e.currentTarget.previousElementSibling.classList.add('bg-[#eee8cf]')
        }
    }

    function handleBasket(e) {
        let name = e.currentTarget.getAttribute('data-name')
        if (name == 'open') {
            basket.current.classList.add('right-0')
            basket.current.classList.remove('right-[-450px]')
            basket.current.previousElementSibling.classList.remove('hidden')
            setTimeout(() => {
                basket.current.previousElementSibling.classList.remove('opacity-[0]')
            }, 10)
        } else {
            basket.current.classList.remove('right-0')
            basket.current.classList.add('right-[-450px]')
            basket.current.previousElementSibling.classList.add('opacity-[0]')
            setTimeout(() => {
                basket.current.previousElementSibling.classList.add('hidden')
            }, 200)
        }
    }

    function handleSideMenu(e) {
        let stat = e.currentTarget.getAttribute('data-name')
        if (stat == 'open') {
            sidemenu.current.classList.remove('left-[-100%]')
            sidemenu.current.classList.add('left-0')
            sidemenu.current.nextElementSibling.classList.add('flex')
            sidemenu.current.nextElementSibling.classList.remove('hidden')
            setTimeout(() => {
                sidemenu.current.nextElementSibling.classList.remove('opacity-[0]')
            }, 200)
        } else {
            sidemenu.current.classList.add('left-[-100%]')
            sidemenu.current.classList.remove('left-0')
            sidemenu.current.nextElementSibling.classList.add('opacity-[0]')
            setTimeout(() => {
                sidemenu.current.nextElementSibling.classList.remove('flex')
                sidemenu.current.nextElementSibling.classList.add('hidden')
            }, 400)
        }
    }

    function handleBigSearch(e) {
        let name = e.currentTarget.getAttribute('data-name')
        if (name == 'open') {
            bigsearch.current.classList.add('flex')
            bigsearch.current.classList.remove('hidden')
        } else if (name == 'close') {
            bigsearch.current.classList.remove('flex')
            bigsearch.current.classList.add('hidden')
        }
    }

    function openlang(e) {
        let div = e.currentTarget.children[3]
        let stat = e.currentTarget.children[3].getAttribute('data-stat')
        let arrow = e.currentTarget.children[2].children[0]
        if (stat == 'close') {
            e.currentTarget.children[3].setAttribute('data-stat', 'open')
            div.classList.add('flex')
            div.classList.remove('hidden')
            arrow.classList.add('rotate-[180deg]')
            arrow.classList.remove('rotate-[0deg]')
        } else {
            e.currentTarget.children[3].setAttribute('data-stat', 'close')
            div.classList.remove('flex')
            div.classList.add('hidden')
            arrow.classList.remove('rotate-[180deg]')
            arrow.classList.add('rotate-[0deg]')
        }
    }

    useEffect(() => {
        if (basketitems.length > 0) {
            hadnletotalprice()
            itemsinbasket.current.classList.add('flex')
            itemsinbasket.current.classList.remove('hidden')
            itemsinbasket.current.innerHTML = basketitems.length
        }
        if (basketitems.length == 0) {
            showtotal.current.innerHTML = 0
            itemsinbasket.current.classList.remove('flex')
            itemsinbasket.current.classList.add('hidden')
        }
    }, [basketitems])

    useEffect(() => {
        getusers()
        let localbasket = localStorage.getItem('basket')
        if (localbasket != null) {
            getlocalbasket(JSON.parse(localbasket))
        }
        function checkUser() {
            let user = JSON.parse(localStorage.getItem('user'))
            if (user != null) {
                openUserPage.current.previousElementSibling.classList.add('hidden')
                openUserPage.current.previousElementSibling.classList.remove('xl:flex')
                openUserPage.current.classList.remove('hidden')
                openUserPage.current.classList.add('xl:flex')
            }
        }
        checkUser()

    }, [])


    return (
        <>
            <div className='w-full bg-[#eee8cf] h-[27px]  flex flex-wrap justify-end'>
                <ul className='w-[50%] h-full flex flex-wrap relative  overflow-hidden'>
                    <li className='w-fit h-full flex flex-wrap absolute top-[0%] animate-Totop1 left-[50%] translate-x-[-50%]  font-futuras text-[#464846] text-[14px]'>
                        <span className='h-full flex items-center  px-[5px]'><GoCheck /></span>
                        365 DAYS RETURN POLICY
                    </li>
                    <li className='w-fit h-full flex flex-wrap absolute top-[100%] animate-Totop2 left-[50%] translate-x-[-50%]  font-futuras text-[#464846] text-[14px]'>
                        <span className='h-full flex items-center  px-[5px]'><GoCheck /></span>
                        FAST WORLDWIDE SHIPPING
                    </li>
                    <li className='w-fit h-full flex flex-wrap absolute top-[200%] animate-Totop3 left-[50%] translate-x-[-50%]  font-futuras text-[#464846] text-[14px]'>
                        <span className='h-full flex items-center  px-[5px]'><GoCheck /></span>
                        LIGHTNING SPECIALIST SINCE 1999
                    </li>
                </ul>
                <div className='w-[25%] h-full flex flex-wrap justify-center '>
                    <div onClick={openlang} className='w-[120px] h-full flex flex-wrap relative justify-evenly  cursor-pointer'>
                        <figure className='w-[26px] h-[26px]  rounded-[20px] overflow-hidden '>
                            <img className='w-full h-full object-cover' src={uk} alt="" />
                        </figure>
                        <span className='w-fit h-full px-[5px] font-futuram text-[14px] flex items-center text-[#464846]'>English</span>
                        <div className='w-fit h-full  text-[#464846] text-[20px]'><MdKeyboardArrowDown className=' duration-[0.4s] h-full flex items-center' /></div>
                        <div data-stat='close' className='w-[120px] h-fit hidden flex-wrap absolute top-[100%] left-0 z-[11]'>
                            <div className='w-full h-fit flex flex-wrap py-[10px] bg-white justify-evenly cursor-pointer'>

                                <figure className='w-[26px] h-[26px]  rounded-[20px] overflow-hidden '>
                                    <img className='w-full h-full object-cover' src={uk} alt="" />
                                </figure>
                                <span className='w-fit h-full px-[5px] font-futuram text-[14px] flex items-center text-[#464846]'>English</span>
                            </div>
                            <div className='w-full h-fit flex flex-wrap py-[10px] bg-white justify-evenly cursor-pointer'>
                                <figure className='w-[26px] h-[26px]  rounded-[20px] overflow-hidden '>
                                    <img className='w-full h-full object-cover' src={german} alt="" />
                                </figure>
                                <span className='w-fit h-full px-[5px] font-futuram text-[14px] flex items-center text-[#464846]'>Deutsch</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header ref={header} className='w-full h-[63px] xl:h-[180px] flex flex-wrap bg-[#fffae8] justify-center content-start z-[10] sticky top-0'>
                <div className='w-full h-full flex flex-wrap justify-center px-[20px] xl:px-0 relative'>
                    <div className='w-full xl:w-[90%] h-full xl:h-[65%] flex flex-wrap '>
                        <div className='w-1/3 h-full  flex justify-start items-center'>
                            <div className='w-[50%] h-[60%] duration-[0.4s] py-[10px] hidden xl:flex flex-wrap [border-bottom:1px_solid_black] group'>
                                <input className='w-[80%] h-full flex   bg-[#fff0] ps-[10px] font-futuras text-[14px] text-black outline-none' placeholder='Search' type="text" />
                                <span className='w-[20%] h-full  flex justify-center items-center text-[25px] cursor-pointer'><CiSearch /></span>
                            </div>
                            {/* side menu click */}
                            {/* side menu click */}
                            {/* side menu click */}
                            <div className='w-full h-full xl:hidden flex flex-wrap justify-start items-center'>
                                <span data-name='open' onClick={handleSideMenu} className='w-fit h-fit px-[10px]  text-[25px] cursor-pointer'><FiMenu /></span>
                                <span data-name='open' onClick={(event) => { handleBigSearch(event) }} className='w-fit h-fit px-[10px]  text-[25px] cursor-pointer'><CiSearch /></span>
                            </div>
                        </div>
                        <div className='w-1/3 h-full flex flex-wrap items-center justify-center py-[5px] xl:py-0'>
                            <Link to='/'>
                                <figure className='w-[45px] xl:w-[65px] h-full cursor-pointer'>
                                    <img className='w-full h-full object-contain' src={logo} alt="" />
                                </figure>
                            </Link>
                        </div>
                        <div className='w-1/3 h-full flex flex-wrap justify-end items-center '>
                            <span className='w-fit h-fit p-[15px] hidden xl:flex text-[20px] cursor-pointer '><BsChatLeft /></span>
                            <span data-name='open' onClick={handleOpenCloseLoginSection} className='w-fit h-fit p-[15px] hidden text-[20px] cursor-pointer '><FiUser /></span>
                            <span ref={openUserPage} className='w-fit h-fit p-[15px] hidden text-[20px] cursor-pointer '><Link to='/Userpage'><FiUser /></Link></span>
                            <span className='w-fit h-fit pe-[10px] xl:p-[15px] flex text-[20px] cursor-pointer '><FaRegHeart /></span>
                            <span onClick={handleBasket} data-name='open' className='w-fit h-fit xl:p-[15px] flex text-[22px] cursor-pointer relative'>
                                <span ref={itemsinbasket} className='w-[22px] h-[22px] rounded-[16px] text-[12px] font-futuras text-white hidden items-center justify-center bg-[#671d1a] absolute top-0 right-0'>1</span>
                                <MdOutlineShoppingBag />
                            </span>
                        </div>
                    </div>
                    <div className='w-[90%] h-[35%] hidden xl:flex flex-wrap '>
                        <div className='w-1/2 h-full flex flex-wrap items-center justify-start'>
                            <span className='w-fit h-fit hover:underline font-futuram cursor-pointer text-black px-[8px]'><Link to='/Lamp'>Lamps</Link></span>
                            <span className='w-fit h-fit hover:underline font-futuram cursor-pointer text-black px-[8px]'><Link to='/Outdoor-lightning'>Outdoor Lightning</Link></span>
                            <span className='w-fit h-fit hover:underline font-futuram cursor-pointer text-black px-[8px]'><Link to='/Lightsources'>Light Sorces</Link></span>
                        </div>
                        <div className='w-1/2 h-full flex flex-wrap items-center justify-end'>
                            <span className='w-fit h-fit hover:underline font-futuram cursor-pointer text-black px-[8px]'><Link to='/Accessories'>Accessories</Link></span>
                            <span className='w-fit h-fit hover:underline font-futuram cursor-pointer text-black px-[8px]'><Link to='/Bathroom-lightning'>Bathroom Lightning</Link></span>
                            <span className='w-fit h-fit hover:underline font-futuram cursor-pointer text-black px-[8px]'><Link to='/Smart-home'>Smart home</Link></span>
                        </div>
                    </div>
                    {/* Bigsearch */}
                    {/* Bigsearch */}
                    {/* Bigsearch */}
                    <div ref={bigsearch} className='w-full h-full absolute hidden items-start top-0 left-0 bg-[#fffae8]'>
                        <div className='w-full h-[80%] flex flex-wrap [border-bottom:1px_solid_black]'>
                            <input className='w-[92%] h-full  font-futuram ps-[20px] bg-[#fff0] outline-0' placeholder='Search' type="text" />
                            <span data-name='close' onClick={(event) => { handleBigSearch(event) }} className='w-[4%] h-full flex items-center justify-center  text-[25px] cursor-pointer'><AiOutlineClose /></span>
                            <span className='w-[4%] h-full flex items-center justify-center  text-[25px] cursor-pointer'><CiSearch /></span>
                        </div>
                    </div>
                </div>

            </header>
            {/* sidemenu */}
            {/* sidemenu */}
            {/* sidemenu */}
            <div ref={sidemenu} className='w-[390px] sm:w-[440px] h-[100vh] z-[50] flex fixed top-0 left-[-100%] duration-[0.4s] bg-[#fffae8]'>
                <div className='w-full h-full flex flex-wrap relative content-start'>
                    <span data-name='close' onClick={handleSideMenu} className='w-fit h-fit top-[20px] right-[20px] cursor-pointer text-[25px] absolute'><AiOutlineClose /></span>
                    <div className='w-full h-[7%] flex justify-center'>
                        <figure className='w-[30%] h-full '>
                            <img className='w-full h-full object-contain' src={logo} alt="" />
                        </figure>
                    </div>
                    <div className='w-full h-[7%]  flex flex-wrap'>
                        <span data-name='products' onClick={handleSidemenuSections} className='w-1/2 h-full flex items-center justify-center cursor-pointer duration-[0.4s] font-futuram'>
                            Products
                        </span>
                        <span data-name='other' onClick={handleSidemenuSections} className='w-1/2 h-full flex items-center justify-center cursor-pointer duration-[0.4s] font-futuram bg-[#eee8cf]'>
                            Other
                        </span>
                    </div>
                    <div ref={product} className='w-full h-[50%] flex flex-wrap'>
                        <nav className='w-full h-[65%] flex '>
                            <ul className='w-full h-full flex flex-wrap'>
                                <li className='w-full h-1/4 flex items-center font-futuras px-[20px] text-[18px] justify-between cursor-pointer [border-bottom:1px_solid_#eee8cf]'>
                                    <span className=''>Lightning</span>
                                    <span className=' text-[22px]'><MdOutlineKeyboardArrowRight /></span>
                                </li>
                                <li className='w-full h-1/4 flex items-center font-futuras px-[20px] text-[18px] justify-between cursor-pointer [border-bottom:1px_solid_#eee8cf]'>
                                    <span className=''>Outdoor Lightning</span>
                                    <span className=' text-[22px]'><MdOutlineKeyboardArrowRight /></span>
                                </li>
                                <li className='w-full h-1/4 flex items-center font-futuras px-[20px] text-[18px] justify-between cursor-pointer [border-bottom:1px_solid_#eee8cf]'>
                                    <span className=''>Accessories</span>
                                    <span className=' text-[22px]'><MdOutlineKeyboardArrowRight /></span>
                                </li>
                                <li className='w-full h-1/4 flex items-center font-futuras px-[20px] text-[18px] justify-between cursor-pointer [border-bottom:1px_solid_#eee8cf]'>
                                    <span className=''>Room</span>
                                    <span className=' text-[22px]'><MdOutlineKeyboardArrowRight /></span>
                                </li>
                            </ul>
                        </nav>
                        <div className='w-full h-[35%]  flex flex-wrap'>
                            <div className='w-1/3 flex flex-wrap cursor-pointer'>
                                <span className='w-full h-[75%] flex items-center justify-center text-[40px]'><FiUser /></span>
                                <span className='w-full h-[25%]  flex items-center justify-center font-futuras text-[14px]'>My Pages</span>
                            </div>
                            <div className='w-1/3 flex flex-wrap cursor-pointer'>
                                <span className='w-full h-[75%] flex items-center justify-center text-[40px]'><FaRegHeart /></span>
                                <span className='w-full h-[25%]  flex items-center justify-center font-futuras text-[14px]'>My Favorites</span>
                            </div>
                            <div className='w-1/3 flex flex-wrap cursor-pointer'>
                                <span className='w-full h-[75%] flex items-center justify-center text-[40px]'><BsChatLeft /></span>
                                <span className='w-full h-[25%]  flex items-center justify-center font-futuras text-[14px]'>Customer Service</span>
                            </div>
                        </div>
                    </div>
                    <div ref={other} className='w-full h-[50%] hidden flex-wrap content-start'>
                        <nav className='w-full h-[48%] flex '>
                            <ul className='w-full h-full flex flex-wrap'>
                                <li className='w-full h-1/3 flex items-center font-futuras px-[20px] text-[18px] justify-between cursor-pointer [border-bottom:1px_solid_#eee8cf]'>
                                    <span className=''>New Arivvals</span>
                                </li>
                                <li className='w-full h-1/3 flex items-center font-futuras px-[20px] text-[18px] justify-between cursor-pointer [border-bottom:1px_solid_#eee8cf]'>
                                    <span className=''>Brands</span>
                                </li>
                                <li className='w-full h-1/3 flex items-center font-futuras px-[20px] text-[18px] justify-between cursor-pointer [border-bottom:1px_solid_#eee8cf]'>
                                    <span className=''>Special Offers</span>
                                </li>
                            </ul>
                        </nav>
                        <div className='w-full h-[35%]  flex flex-wrap'>
                            <div className='w-1/3 flex flex-wrap cursor-pointer'>
                                <span className='w-full h-[75%] flex items-center justify-center text-[40px]'><FiUser /></span>
                                <span className='w-full h-[25%]  flex items-center justify-center font-futuras text-[14px]'>My Pages</span>
                            </div>
                            <div className='w-1/3 flex flex-wrap cursor-pointer'>
                                <span className='w-full h-[75%] flex items-center justify-center text-[40px]'><FaRegHeart /></span>
                                <span className='w-full h-[25%]  flex items-center justify-center font-futuras text-[14px]'>My Favorites</span>
                            </div>
                            <div className='w-1/3 flex flex-wrap cursor-pointer'>
                                <span className='w-full h-[75%] flex items-center justify-center text-[40px]'><BsChatLeft /></span>
                                <span className='w-full h-[25%]  flex items-center justify-center font-futuras text-[14px]'>Customer Service</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[36%] flex items-end'>
                        <span className='w-full h-[25%] flex flex-wrap bg-[#eee8cf] justify-between'>
                            <div className='w-fit h-full flex flex-wrap px-[25px]'>
                                <span className='w-fit h-full flex items-center '><FiUser /></span>
                                <span className='w-fit h-full px-[10px] flex items-center font-futuram'>My Pages</span>
                            </div>
                            <div className='w-fit px-[25px] h-full flex items-center'>
                                <select className='bg-[#eee8cf] text-black font-futuras' name="" id="">
                                    <option selected value="English">English</option>
                                    <option value="Deutsch">Deutsch</option>
                                </select>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <span className='w-full h-[100vh] duration-[0.2s] hidden fixed top-0 left-0 bg-[#0000007a] z-[49] opacity-[0]'>

            </span>
            {/* basket */}
            {/* basket */}
            {/* basket */}
            {/* basket */}
            <div ref={basket} className='w-[400px] md:w-[450px] h-[100vh] flex duration-[0.4s] bg-white fixed top-0 right-[-450px] z-[50]'>
                <div className='w-full h-full flex flex-wrap relative'>
                    <div className='w-full h-[15%] flex flex-wrap justify-between items-center px-[20px] '>
                        <h3 className='w-fit h-fit font-futuram  text-[28px] text-[#671d1a]'>Shopping bag</h3>
                        <span data-name='close' onClick={handleBasket} className='w-fit text-[#671d1a] h-fit cursor-pointer text-[25px] '><AiOutlineClose /></span>
                    </div>
                    <div className='w-full h-[70%]  flex flex-wrap overflow-y-scroll content-start'>
                        {basketitems && basketitems.map((item, index) => {
                            return (
                                <div key={index} className='w-full h-[30%] flex flex-wrap border-b border-b-black py-[10px]'>
                                    <figure className='w-1/3 h-full relative'>
                                        <span className='w-full h-full absolute top-0 left-0 bg-[#0000001f]'></span>
                                        <img className='w-full h-full object-cover' src={item.image} alt="" />
                                    </figure>
                                    <div className='w-2/3 h-full flex flex-wrap relative '>
                                        <span onClick={handleRemoveitem} className='w-fit h-fit text-[#671d1a] absolute top-[10px] right-[10px] cursor-pointer'><AiOutlineClose /></span>
                                        <p className='w-full  h-1/2 flex items-center justify-start font-futuras ps-[5px] text-[#671d1a] text-[15px]'>{item.name}</p>
                                        <div className='w-full h-1/2 flex flex-wrap justify-between px-[20px]'>
                                            <div className='w-fit h-full flex flex-wrap  items-center'>
                                                <button data-name='minus' onClick={handlenumber} className='w-[25px] text-white h-fit flex justify-center bg-gray-400 px-[10px]  text-[18px]'>-</button>
                                                <div className='w-fit h-fit   px-[10px] text-[18px]'>{item.number}</div>
                                                <button data-name='plus' onClick={handlenumber} className='w-[25px] text-white h-fit flex justify-center bg-gray-400 px-[10px]   text-[18px]'>+</button>
                                            </div>
                                            <div className='w-fit h-full flex items-center '>
                                                <span className='w-fit px-[3px]'><MdOutlineCurrencyPound /></span>
                                                <span data-price={item.price} className='w-fit prices'>{item.totalprice}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className='w-full h-[20%] flex flex-wrap '>
                            <div className='w-full h-1/2 flex flex-wrap justify-between px-[10px]'>
                                <span className='w-fit h-full flex items-center font-futuras text-[#671d1a]'>Shipping</span>
                                <span className='w-fit h-full flex items-center font-futuras text-[#671d1a]'><MdOutlineCurrencyPound />0</span>
                            </div>
                            <div className='w-full h-1/2 flex flex-wrap justify-between px-[10px]'>
                                <span className='w-fit h-full flex items-center font-futuras text-[#671d1a]'>Total VAT/Sales Tax incl.</span>
                                <span className='w-fit h-full flex items-center font-futuras text-[#671d1a]'><MdOutlineCurrencyPound /><span ref={showtotal}></span></span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[15%] flex items-center justify-center px-[20px] '>
                        <button className='w-full h-[40%] flex justify-center items-center text-white font-futuram bg-[#671d1a] duration-[0.4s] hover:bg-[#812926]'><Link to='/Checkout'>Start checkout</Link></button>
                    </div>
                </div>
            </div>
            {/* login signup */}
            {/* login signup */}
            {/* login signup */}
            {/* login signup */}
            <div ref={userLoginSignUp} className='w-full bg-[#0000003f] min-h-[100vh] z-[50] hidden flex-wrap fixed top-0 left-0 justify-center items-center'>
                <span data-name='close' onClick={handleOpenCloseLoginSection} className='w-fit h-fit fixed top-[40px] right-[40px] cursor-pointer'>
                    <span className='w-[50px] h-[50px] rounded-[25px] flex items-center justify-center text-[30px] text-white border border-white'><IoMdClose /></span>
                </span>
                <div className='w-[480px] h-fit flex flex-wrap bg-white'>
                    <div className='w-full h-fit flex flex-wrap'>
                        <span onClick={handleUserSection} data-name='login' className='w-1/2 h-fit flex justify-center py-[10px] cursor-pointer bg-gray-200 font-futuram text-[18px]'>Login</span>
                        <span onClick={handleUserSection} data-name='create' className='w-1/2 h-fit flex justify-center py-[10px] cursor-pointer  font-futuram text-[18px]'>Create account</span>
                    </div>
                    <div ref={createaccount} className='w-full h-fit flex flex-wrap'>
                        <div className='w-full h-fit flex justify-center py-[10px]'>
                            <input onChange={handleinputs} data-name='email' required placeholder='email *' className='w-[90%] h-[50px] border rounded-0 outline-none ps-[15px] border-black' type="email" />
                        </div>
                        <div className='w-full h-fit flex justify-center py-[10px]'>
                            <input onChange={handleinputs} data-name='name' required placeholder='firstname *' className='w-[90%] h-[50px] border rounded-0 outline-none ps-[15px] border-black' type="text" />
                        </div>
                        <div className='w-full h-fit flex justify-center py-[10px]'>
                            <input onChange={handleinputs} data-name='lastname' required placeholder='lastname *' className='w-[90%] h-[50px] border rounded-0 outline-none ps-[15px] border-black' type="text" />
                        </div>
                        <div className='w-full h-fit flex justify-center py-[10px]'>
                            <input onChange={handleinputs} data-name='password' required placeholder='password *' className='w-[90%] h-[50px] border rounded-0 outline-none ps-[15px] border-black' type="password" />
                        </div>
                        <div className='w-full h-fit py-[10px] flex items-center justify-center'>
                            <button onClick={handlecreateacount} className='w-fit h-fit font-futuram bg-gray-100 px-[20px] py-[10px] text-gray-500'>Create account</button>
                        </div>
                    </div>
                    <div ref={login} className='w-full h-fit hidden flex-wrap'>
                        <div className='w-full h-fit flex justify-center py-[10px]'>
                            <input onChange={handleinputs} data-name='loginemail' required placeholder='email' className='w-[90%] h-[50px] border rounded-0 outline-none ps-[15px] border-black' type="email" />
                        </div>
                        <div className='w-full h-fit flex justify-center py-[10px]'>
                            <input onChange={handleinputs} data-name='loginpassword' required placeholder='password' className='w-[90%] h-[50px] border rounded-0 outline-none ps-[15px] border-black' type="password" />
                        </div>
                        <div className='w-full h-fit py-[10px] flex items-center justify-center'>
                            <button onClick={handleLogin} className='w-fit h-fit font-futuram bg-gray-100 px-[20px] py-[10px] text-gray-500'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header