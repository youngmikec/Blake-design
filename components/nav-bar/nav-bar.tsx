import Image from "next/image";
import Link from "next/link";
import styles from './nav-bar.module.css';

export default function NavBar () {
    return (
        <>
            <div className={`${styles.navbar}`}>
                <div className='container flex justify-between '>
                    <div className='flex-1 text-left pt-4'>
                        <span className="mr-2 ml-0 relative">
                            {/* <span className={`${styles.icon} mr-2 mt-1`}><i className="fa fa-envelope-o" aria-hidden="true"></i></span> */}
                            <Image src='/images/official-logo-1.png' alt="official logo" width={'85px'} height={'58px'}/>
                            <span className={`${styles.logoText} absolute bottom-5`}>Blakedesignx</span>
                        </span>
                    </div>

                    <div className='flex-1 text-right pt-8'>
                        <span className="mx-4">
                            <Link href="#">
                                <a>
                                    <Image src='/images/vectortwitter.png' width="22px" height="22px" alt="twitter account"/>
                                </a>
                            </Link>
                        </span>

                        <span className="mx-4">
                            <Link href="#">
                                <a>
                                    <Image src='/images/vectorinsta.png' width="22px" height="22px" alt="instagram account"/>
                                </a>
                            </Link>
                        </span>
                        <span className="mx-4">
                            <Link href="#">
                                <a>
                                    <Image src='/images/vectorinsta.png' width="22px" height="22px" alt="instagram account"/>
                                </a>                            
                            </Link>
                        </span>
                        <span className="mx-4">
                            <Link href="#">
                                <a>
                                    <Image src='/images/vectorfacebook.png' width="22px" height="22px" alt="facebook account"/>
                                </a>                            
                            </Link>
                        </span>

                    </div>
                </div>
            </div>
        </>
    )
}