import Image from "next/image";
import SleekButton from "../sleek-button/sleek-button";
import styles from './index.module.css';

const FormComp = () => {
    return (
        <>
            <div className={`${styles.wrapper} w-full`}>
                <div className="container py-32 w-full">
                    <div className="flex justify-between">
                        <div className="flex-1 text-left mx-4">
                            <div className="pt-8 rounded-xlg">
                                <Image className="rounded-lg" src="/images/contact2.png" width="500px" height="740px" alt="form-picture" />
                            </div>
                        </div>
                        <div className="flex-1 text-white mx-4 ">
                            <h3 className="my-8 text-lg">Fill in the form</h3>
                            <form>
                                <div className="my-12">
                                    <input className="w-full rounded-lg border-0 px-6 py-3" type="text" name="name" id="name" placeholder="Your name" />
                                </div>
                                <div className="my-12">
                                    <input className="w-full rounded-lg border-0 px-6 py-3" type="text" name="phone" id="phone" placeholder="Phone number" />
                                </div>
                                <div className="my-12">
                                    <input className="w-full rounded-lg border-0 px-6 py-3" type="text" name="email" id="email" placeholder="Email address" />
                                </div>
                                <div className="my-12">
                                    <input className="w-full rounded-lg border-0 px-6 py-3" type="text" name="subject" id="subject" placeholder="Subject" />
                                </div>
                                <div className="my-12">
                                    <textarea className="w-full rounded-lg border-0 px-6 py-3" name="message" id="message" cols={30} rows={10}></textarea>
                                </div>

                                <div className="my-12">
                                    <SleekButton label="Submit" size="lg" mode="dark"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormComp;