
import styles from '../../styles/Layout.module.css';

const HeroSection = props => {

    return (
        <>
            <p className={styles.subTitle}>janne</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </>
    )
}

export default HeroSection;


