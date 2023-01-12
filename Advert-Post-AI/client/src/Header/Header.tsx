import styles from "./Header.module.css";

const Header = () => {
    return(
        <div className={styles.headerBackground}>
            <h1 className={styles.header}>AdAI - Advert with AI</h1>
            <p className={styles.description}>Build and deploy an AI advertisement for Your product</p>
        </div>
    );
}

export default Header;