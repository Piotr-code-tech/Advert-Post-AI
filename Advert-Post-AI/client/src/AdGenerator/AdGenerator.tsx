import styles from "./AdGenerator.module.css";
import Header from "../Header/Header";
import PostGenerator from "../PostGenerator/PostGenerator";
import PostResult from "../PostResult/PostResult";
import {useEffect, useState} from "react";

const AdGenerator = () => {
    const [adText, setAdText] = useState("");
    const [isAvailablePostText, setIsAvailableTextPost] = useState(false);

    useEffect(()=>{
        if(adText){
            if(adText.length > 0){
                setIsAvailableTextPost(true);
            }
            else {
                setIsAvailableTextPost(false);
            }
        }
    }, [adText]);

    return(
        <div className={styles.background}>
            <Header></Header>
            <PostGenerator
                adText={adText}
                setAdText={setAdText}
            ></PostGenerator>
            {isAvailablePostText &&
                <PostResult
                    adText={adText}
                ></PostResult>
            }
        </div>
    );
}

export default AdGenerator;