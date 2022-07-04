import Image from 'next/image';
import Link from 'next/link';
import styles from './top-bar.module.css';

export default function TopBar () {
    return (
        <>
            <div className={`${styles.topbar}`}>
                <div className='container flex justify-between '>
                    <div className='flex-1 text-left pt-7'>
                        <span className="mx-2">
                            <span className={`${styles.icon} mr-2 mt-1`}><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                            blakedesignx@gmail.com
                        </span>
                        <span className="mx-2">
                            <span className={`${styles.icon} mr-2 mt-1`}><i className="fa fa-phone" aria-hidden="true"></i></span>
                            +234 810 738 9617
                        </span>
                        <span className="mx-2">
                            <span className={`${styles.icon} mr-2 mt-1`}><i className="fa fa-clock-o" aria-hidden="true"></i></span>
                            24hrs Avaliable 
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