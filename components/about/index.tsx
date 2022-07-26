import Image from 'next/image';
import styles from './index.module.css';

const AboutUsComp = () => {
    return (
        <>
            <div className='my-32' >
                <div className="flex lg:justify-between sm:justify-center">
                    <div className="flex-1 lg:mr-4">
                        <div className={`${styles.backgroundImage1} py-8`}>
                            <Image src="/images/group.png" width="500px" height="400px" alt='group-image' />
                        </div>
                    </div>
                    <div className="flex-1 lg:ml-4">
                        <div className='relative right-0'>
                            <div className='relavtive py-4 text-left'>
                                <div className="divider w-1/12"></div>
                                <p className="text-blue-900 bg-white my-8 text-2xl absolute -top-3 right-24 px-4">About Us</p>
                            </div>
                            <h1 className='text-4xl text-blue-900 my-4'>Giving your brand <br /> the taste it deserved </h1>
                            <p className='text-gray-400 my-12'>Blakedesignx is a top notch company in the
                            design world that delivers the best of quality
                            designs to clients, bringing creativity to reality.
                            we also help our clinet to maintain its identity
                            to his audience.</p>
                        </div>

                        <div className='relative right-0'>
                            <div className='relavtive my-4 text-left'>
                                <div className="divider w-1/12"></div>
                                <p className="text-blue-900 bg-white my-8 text-2xl absolute -top-11 right-24 px-4">Our Mission</p>

                            </div>
                            <p className='text-gray-400 my-12'>We aspire to be the number one African innovation
                            and technology brand, emerging from the South East.
                            To connect people and technology, help people to 
                            access the best technology at a click of button and 
                            also delivering business solutions for the web and 
                            mobile world with digital strategies.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex lg:justify-between sm:justify-center my-16">
                    <div className="flex-1 lg:ml-4">
                        <div className='w-5/6'>
                            <h1 className='text-blue-900 text-2xl'>Get to know the founder </h1>

                            <p className='text-gray-400 my-4'>Joshua Chinonso is the CEO / Lead  of Blake Designs.
                            He is a Tech Enthusiast, Graphics Designer and a Brand identity
                            Designer. He is very creative and love playing with some design
                            tools. He has worked with different Teams and companies in building
                            products as a digital designer . He has branded and is still branding a 
                            lot of businesses. Contact him via email blakedesignx@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex-1 lg:mr-4" >
                        <div className={`${styles.backgroundImage2} py-10 text-right`}>
                            <Image src="/images/blake.png" width="400px" height="400px" alt='blake' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsComp;