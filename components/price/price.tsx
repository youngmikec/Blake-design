import { PriceCard } from "../price-card/price-card";
import styles from './price.module.css';

type Props = {
    background?: string;
    title: string;
}

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
                    <h3>{ title }</h3>

                    <div className="flex justify-between">
                        <div className="flex-1">
                            <PriceCard />
                        </div>
                        <div className="flex-1">
                            <PriceCard />
                        </div>
                        <div className="flex-1">
                            <PriceCard />
                        </div>
                        {/* <PriceCard />
                        <PriceCard /> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Price;