import Image from 'next/image';
import styles from './custom-card.module.css';

type Props = {
    title: string;
    body: string;
    icon?: string;
}

export function CustomCard ({title, body, icon}: Props) {
    return (
        <>
            <div className={`${styles.card}`}>
                <div className={styles.cardHeader}>
                    { 
                        icon && <Image src={icon} width='35px' height='35px' alt='icon' />
                    }
                    <h3 className={`${styles.cardTitle} mt-3`}>{ title }</h3>
                </div>


                <div className={styles.cardBody}>
                    <p>
                        { body }
                    </p>
                </div>

            </div>
        </>
    )
} 