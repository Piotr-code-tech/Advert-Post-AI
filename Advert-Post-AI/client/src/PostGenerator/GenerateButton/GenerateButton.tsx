import styles from "./GenerateButton.module.css"
import axios from "axios";

async function generateAdText(productDescription: string) {

    try {
        return await axios.post('http://localhost:3333/content/text',
            {
            text: productDescription
            }, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        });
        //return data;
    }
    catch (error){
        console.error(error);
    }
    return;
}

const GenerateButton = (props:{
    isTextLengthAcceptable: boolean,
    productDescription: string,
    setIsPostGeneratorVisible: (state:boolean) => void,
    setAdText: (text: string) => void,
    setIsAvailableTextPost: (state: boolean) => void

}) => {
    async function clickButtonHandler(productDescription: string) {
        props.setIsPostGeneratorVisible(false);
        props.setIsAvailableTextPost(false);
        generateAdText(productDescription).then(res => {
            props.setAdText(res?.data.content);
            if(res?.data.error){
                alert(res.data.error.error.message);
            }
            props.setIsPostGeneratorVisible(true);
        });
    }

    return (
            <button
                className={`${styles.Button} ${props.isTextLengthAcceptable ? styles.GreenButton : styles.GreyButton}`}
                onClick={props.isTextLengthAcceptable
                    ? () => clickButtonHandler(props.productDescription)
                    : ()=> console.log("More characters required in product description")
                }
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                     aria-hidden="true" className={styles.GenerateIcon}>
                    <path
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p>Generate</p>
            </button>
    );
}

export default GenerateButton;