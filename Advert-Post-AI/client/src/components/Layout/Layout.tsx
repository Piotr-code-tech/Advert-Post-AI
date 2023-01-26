import {FC, PropsWithChildren} from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

export const Layout: FC<PropsWithChildren> = ({children}) => {
    return <div className={styles.background}>
        <Header />
        {children}
    </div>
}