import SleekButton from '../sleek-button/sleek-button';
import styles from './price-card.module.css';


export function PriceCard (props: any) {
    return (
        <>
            <div className={` ${styles.wrapper}`}>
                <h1>Diamond</h1>
                <p>Logo</p>
                <p>Business card</p>
                <p>Letter Head</p>
                <div className='mt-4 mb-6'>
                    <SleekButton label="$25" mode='light' size='md' />
                </div>
            </div>
        </>
    )
}