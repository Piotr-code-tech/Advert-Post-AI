import styles from "./PostGenerator.module.css"
import TextAreaDescription from "./TextAreaDescription/TextAreaDescription";
import TextArea from "./TextArea/TextArea";
import GenerateButton from "./GenerateButton/GenerateButton";
import {FC, useState} from "react";
import {Loader} from "../Loader/Loader";
import {generateAdText} from "../../services/generateAdText";

interface Props {
    setAdText: (text: string) => void,
}

const PostGenerator: FC<Props> = ({setAdText}) => {
    const [isTextLengthAcceptable, setIsTextLengthAcceptable] = useState(false);
    const [productText, setProductText] = useState("");
    const [isPostGeneratorVisible, setIsPostGeneratorVisible] = useState(true);
    const generateAddHandler = () => {
        setIsPostGeneratorVisible(false);
        generateAdText(productText).then(data => {
            setAdText(data.content);
            setIsPostGeneratorVisible(true);
        });
    }

    return(
        <div>
            <div className={styles.postGeneratorBackground}>
                <div className={styles.contentContainer}>
                    {isPostGeneratorVisible ? <>
                        <TextAreaDescription />
                        <TextArea
                            setIsTextLengthAcceptable={setIsTextLengthAcceptable}
                            setProductText={setProductText}
                            productText={productText}
                        />
                    </> : <Loader /> }
                    <GenerateButton
                        disabled={!isTextLengthAcceptable}
                        onClick={generateAddHandler}
                    />
                </div>
            </div>
        </div>

    )
}

export default PostGenerator;