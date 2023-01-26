import styles from "./TextArea.module.css"
import {FC} from "react";

interface Props {
    setIsTextLengthAcceptable: (isTextLengthAcceptable: boolean) => void,
    setProductText: (text: string) => void,
    productText: string
}

const TextArea: FC<Props> = ( {setProductText, setIsTextLengthAcceptable, productText} ) => {
    const verifyTextLength  = (event: any) => {
        if(event.target.value.length >= 9){
            setIsTextLengthAcceptable(true);
            setProductText(event.target.value);
        }
        else {
            setIsTextLengthAcceptable(false);
        }
    }

    return(
        <textarea
            className={styles.TextArea}
            onChange={verifyTextLength}
            defaultValue={productText}
        ></textarea>
    );
}

export default TextArea;