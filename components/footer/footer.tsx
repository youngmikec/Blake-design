import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer () {
    return (
        <>
            <div className={`${styles.footerWrapper} mb-0`}>
                <div className={`${styles.overlay} text-center`}>
                    <div className='lg:w-7/12 sm:w-9/12 w-11/12 mt-24 mx-auto'>
                        <div className='flex justify-between'>
                            <div className='flex-1 text-left'>
                                <h1 className='lg:text-3xl text-xl'>
                                    <b>Contact Info</b>
                                </h1>
                                <div className=''>
                                    <p className={`my-4 ${styles.navButton}`}>
                                        <Link href="/">
                                            <a>
                                                <span className='mr-2 text-sm'><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                                                blakedesignx@gmail.com
                                            </a>
                                        </Link>
                                    </p>
                                    <p className={`my-4 ${styles.navButton}`}>
                                        <Link href="/">
                                            <a>
                                                <span className='mr-2 text-sm'><i className="fa fa-phone" aria-hidden="true"></i></span>
                                                +234 810 738 9617
                                            </a>                            
                                        </Link>
                                    </p>
                                    <p className={`my-4 ${styles.navButton}`}>
                                        <Link href="/">
                                            <a>
                                                <span className='mr-2 text-sm'><i className="fa fa-clock-o" aria-hidden="true"></i></span>
                                                24hrs Avaliable to deliver
                                            </a>                            
                                        </Link>
                                    </p>
                                </div>
                                <div className='mt-1 text-black pt-4'>
                                    <span className="mx-2">
                                        <Link href="#">
                                            <a>
                                                <Image src='/images/vectortwitter-dark.png' width="18.33px" height="18.33px" alt="twitter account"/>
                                            </a>
                                        </Link>
                                    </span>

                                    <span className="mx-2">
                                        <Link href="#">
                                            <a>
                                                <Image src='/images/vectorinsta-dark.png' width="18.33px" height="18.33px" alt="instagram account"/>
                                            </a>
                                        </Link>
                                    </span>
                                    <span className="mx-2">
                                        <Link href="#">
                                            <a>
                                                <Image src='/images/vectorbehance-dark.png' width="18.33px" height="18.33px" alt="instagram account"/>
                                            </a>                            
                                        </Link>
                                    </span>
                                    <span className="mx-2">
                                        <Link href="#">
                                            <a>
                                                <Image src='/images/Vectorfacebook-dark.png' width="18.33px" height="18.33px" alt="facebook account"/>
                                            </a>                            
                                        </Link>
                                    </span>

                                </div>
                            </div>

                            <div className='flex-1 text-right'>
                                <h1 className='lg:text-3xl text-xl'>
                                    <b>Quick links</b>
                                </h1>
                                <div className=''>
                                    <p className={`my-4 ${styles.navButton}`}>
                                        <Link href="/about">
                                            <a className='text-sm'>
                                                About
                                            </a>
                                        </Link>
                                    </p>

                                    <p className={`my-4 ${styles.navButton}`}>
                                        <Link href="/contact">
                                            <a className='text-sm'>
                                                Contact Us
                                            </a>                            
                                        </Link>
                                    </p>
                                    
                                    <p className={`my-4 ${styles.navButton}`}>
                                        <Link href="/portfolio">
                                            <a className='text-sm'>
                                                Our portfolio
                                            </a>                            
                                        </Link>
                                    </p>
                                    
                                    <p className={`my-4 ${styles.navButton}`}>
                                        <Link href="/updates">
                                            <a className='text-sm'>
                                                New Update
                                            </a>                            
                                        </Link>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-7/12 sm:w-9/12 w-10/12 mt-24 mx-auto lg:text-center text-left'>
                        
                    </div>
                </div>
            </div>
        </>
    )
}