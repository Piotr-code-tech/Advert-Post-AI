import {FC} from "react";
import HashLoader from "react-spinners/HashLoader";

import styles from "./Loader.module.css";

export const Loader: FC = () => {
    return <div className={styles.postGeneratorBackground}>
        <HashLoader
            color={'#d53369'}
            loading={true}
            size={150}
            aria-label="Hash Loader"
        ></HashLoader>
    </div>
}