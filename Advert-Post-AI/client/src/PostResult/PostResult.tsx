import styles from "./PostResult.module.css"
import TextareaAutosize from 'react-textarea-autosize';
import ShareButton from "../ShareButton/ShareButton";


const PostResult = (props: {
    adText: string;
}) => {

    return(
        <div className={styles.postResultContainer}>
            <div className={styles.contentContainer}>
                <TextareaAutosize
                    className={styles.textArea}
                    defaultValue={props.adText.trimStart()}
                ></TextareaAutosize>
                <ShareButton></ShareButton>
            </div>
        </div>
    );
}

export default PostResult;