import styles from "./PostResult.module.css"
import TextareaAutosize from 'react-textarea-autosize';
import SocialShareButton from "../SocialShareButton/SocialShareBar";
import {useEffect} from "react";


const PostResult = (props: {
    adText: string;
}) => {
    const adText = props.adText;
    return(
        <div className={styles.postResultContainer}>
            <div className={styles.contentContainer}>
                <TextareaAutosize
                    aria-label="Text result"
                    className={styles.textArea}
                    value={adText.trimStart()}
                />
                <SocialShareButton></SocialShareButton>
            </div>
        </div>
    );
}

export default PostResult;