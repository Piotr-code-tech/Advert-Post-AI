import {Body, Injectable} from "@nestjs/common";
import {getPostContent} from "../OpenAI/service";


@Injectable({})
export class AdContentService {
    generateAdText(text: string) {
        const resp = getPostContent(text);
        return(resp)
    }
}