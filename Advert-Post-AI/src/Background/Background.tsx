import styles from "./Background.module.scss";
import Header from "../Header/Header";
import PostGenerator from "../PostGenerator/PostGenerator";

const Background = () => {
    return(
        <div className={styles.background}>
            <Header></Header>
            <PostGenerator></PostGenerator>
        </div>
    );
}

export default Background;