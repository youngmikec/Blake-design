import Banner from "../components/banner/banner";
import Image from "next/image";

export default function Portfolio () {
    return (
        <>
            <div style={{width: '100%'}}>
                <Banner 
                backgroundColor='rgba(5, 117, 230, 0.55)'
                bannerImage='/images/contact-image.png' 
                bannerText={`
                    Our Portfolio
                `} 
                applyOverlay={true} />
            </div>

            <div>
                <div className={'divider'}></div>
                <h1 className="h1 text-primary">What we love doing</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <div className="mx-8 my-4">
                    <Image src='/images/app.png' height="400px" width="400px" alt="previous works"/>
                </div>
                <div className="mx-8 my-4">
                    <Image src='/images/tech-display.png' height="400px" width="400px" alt="previous works"/>
                </div>
                <div className="mx-8 my-4">
                    <Image src='/images/app.png' height="400px" width="400px" alt="previous works"/>
                </div>
                <div className="mx-8 my-4">
                    <Image src='/images/flyer.png' height="400px" width="400px" alt="previous works"/>
                </div>
                <div className="mx-8 my-4">
                    <Image src='/images/frame.png' height="400px" width="400px" alt="previous works"/>
                </div>
                <div className="mx-8 my-4">
                    <Image src='/images/flyer.png' height="400px" width="400px" alt="previous works"/>
                </div>
                <div className="mx-8 my-4">
                    <Image src='/images/poster.png' height="400px" width="400px" alt="previous works"/>
                </div>
                <div className="mx-8 my-4">
                    <Image src='/images/jotter.png' height="400px" width="400px" alt="previous works"/>
                </div>
                <div className="mx-8 my-4">
                    <Image src='/images/poster.png' height="400px" width="400px" alt="previous works"/>
                </div>
            </div>
        </>
    )
}