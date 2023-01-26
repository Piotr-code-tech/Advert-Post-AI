import PostGenerator from "../PostGenerator/PostGenerator";
import PostResult from "../PostResult/PostResult";
import {useEffect, useState} from "react";

const validateInput = (inputText: string = ''): boolean => {
    return !!inputText.length;
}

const AdGenerator = () => {
    const [adText, setAdText] = useState("");
    const [isAvailablePostText, setIsAvailableTextPost] = useState(false);

    useEffect(() => {
        setIsAvailableTextPost(validateInput(adText));
    }, [adText]);

    return(<>
        <PostGenerator setAdText={setAdText}/>
        {isAvailablePostText && <PostResult adText={adText} />}
    </>);
}

export default AdGenerator;