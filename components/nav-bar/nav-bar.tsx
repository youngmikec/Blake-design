import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from './nav-bar.module.css';

export default function NavBar () {
    const routerObject = useRouter();
    return (
        <>
            <div className={`${styles.navbar} mt-8`}>
                <div className='container flex justify-between '>
                    <div className='flex-1 text-left pt-4'>
                        <span className="mr-2 ml-0 relative">
                            {/* <span className={`${styles.icon} mr-2 mt-1`}><i className="fa fa-envelope-o" aria-hidden="true"></i></span> */}
                            <Image src='/images/official-logo-1.png' alt="official logo" width={'85px'} height={'58px'}/>
                            <span className={`${styles.logoText} absolute bottom-5`}>Blakedesignx</span>
                        </span>
                    </div>

                    <div className='flex-1 text-right pt-8'>
                        <span className={`mx-3 ${styles.navButton} ${routerObject.pathname === '/' ? styles.active : ''}`}>
                            <Link href="/">
                                <a>
                                    Home
                                </a>
                            </Link>
                        </span>

                        <span className={`mx-3 ${styles.navButton} ${routerObject.pathname === '/about' ? styles.active : ''}`}>
                            <Link href="/about">
                                <a>
                                    About
                                </a>
                            </Link>
                        </span>
                        <span className={`mx-3 ${styles.navButton} ${routerObject.pathname === '/services' ? styles.active : ''}`}>
                            <Link href="/services">
                                <a>
                                    Services
                                </a>                            
                            </Link>
                        </span>
                        <span className={`mx-3 ${styles.navButton} ${routerObject.pathname === '/portfolio' ? styles.active : ''}`}>
                            <Link href="/portfolio">
                                <a>
                                    Our portfolio
                                </a>                            
                            </Link>
                        </span>
                        <span className={`mx-3 ${styles.navButton} ${routerObject.pathname === '/contact' ? styles.active : ''}`}>
                            <Link href="/contact">
                                <a>
                                    Contact
                                </a>                            
                            </Link>
                        </span>
                        <span className={`mx-3 ${styles.navButton} ${routerObject.pathname === '/updates' ? styles.active : ''}`}>
                            <Link href="/updates">
                                <a>
                                    Updates
                                </a>                            
                            </Link>
                        </span>

                    </div>
                </div>
            </div>
        </>
    )
}