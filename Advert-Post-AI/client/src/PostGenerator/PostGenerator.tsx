import styles from "./PostGenerator.module.css"
import TextAreaDescription from "./TextAreaDescription/TextAreaDescription";
import TextArea from "./TextArea/TextArea";
import GenerateButton from "./GenerateButton/GenerateButton";
import {useEffect, useState} from "react";
import HashLoader from "react-spinners/HashLoader";

const PostGenerator = (props:{
    adText: string,
    setAdText: (text: string) => void,
}) => {
    const [isTextLengthAcceptable, setIsTextLengthAcceptable] = useState(false);
    const [productText, setProductText] = useState("");
    const [isPostGeneratorVisible, setIsPostGeneratorVisible] = useState(true);

    useEffect(() => {
        console.log(props.adText)
    },[props.adText]);

    useEffect(()=>{
        console.log(isPostGeneratorVisible);
    }, [isPostGeneratorVisible])

    return(
        <div>
            {isPostGeneratorVisible && <div className={styles.postGeneratorBackground}>
                <div className={styles.contentContainer}>
                        <TextAreaDescription></TextAreaDescription>
                        <TextArea
                            setIsTextLengthAcceptable={setIsTextLengthAcceptable}
                            setProductText={setProductText}
                            productText={productText}
                        ></TextArea>
                        <GenerateButton
                            isTextLengthAcceptable={isTextLengthAcceptable}
                            productDescription={productText}
                            setIsPostGeneratorVisible={setIsPostGeneratorVisible}
                            setAdText={props.setAdText}
                        ></GenerateButton>
                </div>
            </div>}
            {!isPostGeneratorVisible &&
                <div className={styles.postGeneratorBackground}>
                    <HashLoader
                        color={'#d53369'}
                        loading={!isPostGeneratorVisible}
                        size={150}
                        aria-label="Hash Loader"
                    ></HashLoader>
                </div>

            }
        </div>

    )
}

export default PostGenerator;