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
                <div className='container text-center pt-16'>
                    <h1 className="h1 text-primary">{ title }</h1>

                    <div className="flex justify-between">

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