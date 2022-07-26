import styles from './sleek-button.module.css';
import Router from 'next/router';

type Props = {
    label: string;
    mode?: 'light' | 'dark';
    size?: 'sm' | 'md' | 'lg' | 'xlg';
    url?: string | any;
}

const SleekButton = ({label, mode, size, url}: Props) => {

    const navigate = (url: string) => {
        Router.push(url);
    }
    
    return (
        <>
            <button onClick={() => { navigate(url)}} className={
                `
                ${styles.button}
                ${ mode === 'light' ? styles.light : styles.dark}
                ${ styles[`${!size ? 'md' : size}`]}
            `}>{ label }</button>
        </>
    )
}

export default SleekButton;