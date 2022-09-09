import { PriceCard, PricePackage } from "../price-card/price-card";
import styles from './price.module.css';

type Props = {
    background?: string;
    title: string;
}

const packages: PricePackage[] = [
    {
        packageName: 'Silver',
        price: "$25",
        services: ["Logo", "Business Card", "Letter Head"]
    },
    {
        packageName: 'Gold',
        price: "$125",
        services: ["Logo", "Business Card", "Letter Head", "Banner guide", "UI/UX design"]
    },
    {
        packageName: 'Diamond',
        price: "$800",
        services: ["Logo", "Business Card", "Letter Head", "Banner guide", "UI/UX design", "Web Development"]
    },
]

const Price = ({background, title}: Props) => {
    return (
        <>
            <div
                className={styles.priceWrapper}
                style={{
                backgroundColor: background ? background : '#ffffff',
                position: 'relative'
            }}>
                <div className='container text-center pt-8'>
                    <div className={styles.divider} style={{color: "#021B79"}}></div>
                    <h1 className="text-[#021B79] text-3xl md:text-4xl py-4">{ title }</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 container ">

                        { 
                            packages.map((item: PricePackage, index: number) => {
                                
                                return <div className="flex-1" key={index}>
                                    <PriceCard packageName={item.packageName} price={item.price} services={item.services} />
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Price;