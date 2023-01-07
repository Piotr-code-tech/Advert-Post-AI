import styles from "./TextArea.module.css"

const TextArea = ( props : {
    setIsTextLengthAcceptable: (isTextLengthAcceptable: boolean) => void;
    setProductText: (text: string) => void;
}) => {
    const verifyTextLength  = (event: any) => {
        if(event.target.value.length >= 9){
            props.setIsTextLengthAcceptable(true);
            props.setProductText(event.target.value);
        }
        else {
            props.setIsTextLengthAcceptable(false);
        }
    }

    return(
        <textarea className={styles.TextArea} onChange={verifyTextLength}></textarea>
    );
}

export default TextArea;