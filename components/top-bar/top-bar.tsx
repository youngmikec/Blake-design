import Image from 'next/image';
import Link from 'next/link';
import { BsBehance, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { TbBrandTwitter } from 'react-icons/tb';
import styles from './top-bar.module.css';

export default function TopBar () {
    return (
        <>
            <div className={`${styles.topbar}`}>
                <div className='container justify-between hidden sm:flex md:flex lg:flex xl:flex '>
                    <div className='flex-1 text-left pt-4'>
                        <span className="mx-2">
                            <span className={`${styles.icon} mr-1 sm:mr-2 md:mr-2 lg:mr-3 mt-1`}><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                            blakedesignx@gmail.com
                        </span>
                        <span className="mx-2">
                            <span className={`${styles.icon} mr-1 sm:mr-2 md:mr-2 lg:mr-3 mt-1`}><i className="fa fa-phone" aria-hidden="true"></i></span>
                            +234 810 738 9617
                        </span>
                        <span className="mx-2">
                            <span className={`${styles.icon} mr-1 sm:mr-2 md:mr-2 lg:mr-3 mt-1`}><i className="fa fa-clock-o" aria-hidden="true"></i></span>
                            24hrs Avaliable 
                        </span>

                    </div>

                    <div className='flex-1 text-right py-3'>
                        <span className="mx-2 sm:mx-3 md:mx-4 lg:mx-4">
                            <Link href="#">
                                <a>
                                    <Image src='/images/vectortwitter.png' width="18px" height="18px" alt="twitter account"/>
                                </a>
                            </Link>
                        </span>

                        <span className="mx-2 sm:mx-3 md:mx-4 lg:mx-4 inline-block">
                                <Link href="#">
                                    <a className="text-lg sm:text-xl">
                                        <TbBrandTwitter />
                                    </a>
                                </Link>
                            </span>

                            <span className="mx-2 sm:mx-3 md:mx-4 lg:mx-4 inline-block">
                                <Link href="#">
                                    <a className="text-lg sm:text-xl">
                                        <BsInstagram />
                                    </a>
                                </Link>
                            </span>
                            <span className="mx-2 sm:mx-3 md:mx-4 lg:mx-4 inline-block">
                                <Link href="#">
                                    <a className="text-lg sm:text-xl">
                                        <BsBehance />
                                    </a>                            
                                </Link>
                            </span>
                            <span className="mx-2 sm:mx-3 md:mx-4 lg:mx-4 inline-block">
                                <Link href="#">
                                    <a className="text-lg sm:text-xl">
                                        <FaFacebookF />
                                    </a>                            
                                </Link>
                            </span>

                    </div>
                </div>
            </div>
        </>
    )
}