import Banner from "../components/banner/banner";
import FormComp from "../components/form-section";

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
                <div className={'divider'}></div>
                <h1 className="h1 text-primary">How may we help you?</h1>
            </div>

            <FormComp />

        </>
    )
}