import styles from "./SocialShareBar.module.css"
import {FC} from "react";
import {FaInstagram, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";

const SocialShareBar: FC = () => {

    return(
        <div className={styles.shareButton}>
            <FaFacebook
                className={`${styles.buttonIcon} ${styles.facebook} `}
            />
            <FaInstagram className={`${styles.buttonIcon} ${styles.instagram} `}/>
            <FaTwitter className={`${styles.buttonIcon} ${styles.twitter} `}/>
            <FaLinkedin className={`${styles.buttonIcon} ${styles.linkedin} `}/>
        </div>
    );
}

export default SocialShareBar;