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
                    aria-label="Text result"
                    className={styles.textArea}
                    defaultValue={props.adText.trimStart()}
                ></TextareaAutosize>
                <ShareButton></ShareButton>
            </div>
        </div>
    );
}

export default PostResult;