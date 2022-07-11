import styles from './sleek-button.module.css';

type Props = {
    label: string;
    mode?: 'light' | 'dark';
    size?: 'sm' | 'md' | 'lg' | 'xlg'
}

const SleekButton = ({label, mode, size}: Props) => {
    return (
        <>
            <button className={
                `
                ${styles.button}
                ${ mode === 'light' ? styles.light : styles.dark}
                ${ styles[`${!size ? 'md' : size}`]}
            `}>{ label }</button>
        </>
    )
}

export default SleekButton;