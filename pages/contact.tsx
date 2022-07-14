import Banner from "../components/banner/banner";
import Price from "../components/price/price";
import styles from '../styles/home.module.css';

export default function Contact () {
    return (
        <>
            <div style={{width: '100%'}}>
                <Banner 
                backgroundColor='transparent'
                bannerImage='/images/contact-image.png' 
                bannerText={`
                    Contact Us Now
                `} 
                applyOverlay={true} />
            </div>

            <div>
                <div className={styles.divider}></div>
                <h1 className="h1 text-primary">How may we help you?</h1>
            </div>

            <Price title='Choose Your Perfect Package' background='#E6EDFC' />

        </>
    )
}