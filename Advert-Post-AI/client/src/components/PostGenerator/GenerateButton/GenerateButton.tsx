import styles from "./GenerateButton.module.css"
import {FC} from "react";

interface Props {
    disabled: boolean;
    onClick: () => void;
}

const GenerateButton: FC<Props> = ({ disabled = true, onClick}) =>
            <button
                className={`${styles.Button} ${!disabled ? styles.GreenButton : styles.GreyButton}`}
                disabled={disabled}
                onClick={onClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                     aria-hidden="true" className={styles.GenerateIcon}>
                    <path
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p>Generate</p>
            </button>;

export default GenerateButton;