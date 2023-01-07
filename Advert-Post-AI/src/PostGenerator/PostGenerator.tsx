import styles from "./PostGenerator.module.css"
import TextAreaDescription from "./TextAreaDescription/TextAreaDescription";
import TextArea from "./TextArea/TextArea";
import GenerateButton from "./GenerateButton/GenerateButton";
import {useState} from "react";

const PostGenerator = () => {
    const [isTextLengthAcceptable, setIsTextLengthAcceptable] = useState(false);
    const [productText, setProductText] = useState("");
    return(
        <div className={styles.postGeneratorBackground}>
            <div className={styles.contentContainer}>
                <TextAreaDescription></TextAreaDescription>
                <TextArea
                    setIsTextLengthAcceptable={setIsTextLengthAcceptable}
                    setProductText={setProductText}
                ></TextArea>
                <GenerateButton
                    isTextLengthAcceptable={isTextLengthAcceptable}
                    productDescription={productText}
                ></GenerateButton>
            </div>
        </div>
    )
}

export default PostGenerator;