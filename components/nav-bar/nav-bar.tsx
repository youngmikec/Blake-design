import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// react icons
import { FiMenu } from 'react-icons/fi';
import { FaTimes, FaFacebookF } from 'react-icons/fa';
import { TbBrandTwitter } from 'react-icons/tb';
import { BsInstagram, BsBehance } from 'react-icons/bs';

//component style
import styles from './nav-bar.module.css';

export default function NavBar () {
    const routerObject = useRouter();
    const [showSideBar, setShowSidebar] = useState<boolean>(false);

    const openSidebar = () => {
        setShowSidebar(true);
        console.log(showSideBar);
    }
    const closeSidebar = () => setShowSidebar(false);
    const toggleSidebar = () => setShowSidebar(!showSideBar);

    return (
        <>
            <div className={`${styles.navbar} mt-0`}>
                <div className='container hidden sm:flex md:flex lg:flex xl:flex justify-between'>
                    <div className='flex-1 text-left pt-1'>
                        <span className="mr-2 ml-0 relative">
                            {/* <span className={`${styles.icon} mr-2 mt-1`}><i className="fa fa-envelope-o" aria-hidden="true"></i></span> */}
                            <Image src='/images/official-logo-1.png' alt="official logo" width={'65px'} height={'38px'}/>
                            <span className={`${styles.logoText} absolute bottom-3`}>Blakedesignx</span>
                        </span>
                    </div>

                    <div className='flex-2 text-right pt-2'>
                        <span className={`mx-1 ${styles.navButton} ${routerObject.pathname === '/' ? styles.active : ''}`}>
                            <Link href="/">
                                <a>
                                    Home
                                </a>
                            </Link>
                        </span>

                        <span className={`mx-1 ${styles.navButton} ${routerObject.pathname === '/about' ? styles.active : ''}`}>
                            <Link href="/about">
                                <a>
                                    About
                                </a>
                            </Link>
                        </span>
                        <span className={`mx-1 ${styles.navButton} ${routerObject.pathname === '/services' ? styles.active : ''}`}>
                            <Link href="/services">
                                <a>
                                    Services
                                </a>                            
                            </Link>
                        </span>
                        <span className={`mx-1 ${styles.navButton} ${routerObject.pathname === '/portfolio' ? styles.active : ''}`}>
                            <Link href="/portfolio">
                                <a>
                                    Our portfolio
                                </a>                            
                            </Link>
                        </span>
                        <span className={`mx-1 ${styles.navButton} ${routerObject.pathname === '/contact' ? styles.active : ''}`}>
                            <Link href="/contact">
                                <a>
                                    Contact
                                </a>                            
                            </Link>
                        </span>

                    </div>
                </div>

                <div className="container flex justify-start sm:hidden md:hidden lg:hidden xl:hidden">
                    <div className="mr-4" onClick={() => openSidebar()}>
                        <button className="text-black text-3xl"  >
                            <FiMenu />
                        </button>
                    </div>
                    <div className="ml-8 text-center">
                        <span className="mr-2 ml-0 relative">
                            <Image src='/images/official-logo-1.png' alt="official logo" width={'85px'} height={'58px'}/>
                            <span className={`${styles.logoText} absolute bottom-5`}>Blakedesignx</span>
                        </span>
                    </div>
                </div>

                <div className={`
                    absolute left-0 top-0 bottom-0 h-full
                 bg-white text-left w-7/12 px-8 py-4 z-20
                    ${showSideBar ? 'block' : 'hidden'}
                 `}>
                    <div className="container text-right">
                        <button className="text-black text-3xl" onClick={() => closeSidebar()} >
                            <FaTimes />
                        </button>

                        <ul className="list-none">
                            <li className="py-8 text-xl hover:bg-gray-50">
                                <Link href="/">
                                    <a>
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li className="py-8 text-xl hover:bg-gray-50">
                                <Link href="/about">
                                    <a>
                                        About
                                    </a>
                                </Link>
                            </li>
                            <li className="py-8 text-xl hover:bg-gray-50">
                                <Link href="/services">
                                    <a>
                                        Services
                                    </a>                            
                                </Link>
                            </li>
                            <li className="py-8 text-xl hover:bg-gray-50">
                                <Link href="/portfolio">
                                    <a>
                                        Our portfolio
                                    </a>                            
                                </Link>
                            </li>
                            <li className="py-8 text-xl hover:bg-gray-50">
                                <Link href="/contact">
                                    <a>
                                        Contact
                                    </a>                            
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center">
                        <div className='flext justify-between pt-8 text-[#021B79]'>
                            <span className="mx-2 inline-block">
                                <Link href="#">
                                    <a className="text-lg sm:text-xl">
                                        <TbBrandTwitter />
                                    </a>
                                </Link>
                            </span>

                            <span className="mx-2 inline-block">
                                <Link href="#">
                                    <a className="text-lg sm:text-xl">
                                        <BsInstagram />
                                    </a>
                                </Link>
                            </span>
                            <span className="mx-2 inline-block">
                                <Link href="#">
                                    <a className="text-lg sm:text-xl">
                                        <BsBehance />
                                    </a>                            
                                </Link>
                            </span>
                            <span className="mx-2 inline-block">
                                <Link href="#">
                                    <a className="text-lg sm:text-xl">
                                        <FaFacebookF />
                                    </a>                            
                                </Link>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}