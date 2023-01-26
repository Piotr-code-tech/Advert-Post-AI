import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {AdContentService} from "./adContent.service";

@Controller("content")
export class AdContentController {
    constructor(private adContentService: AdContentService) {};

    @Post('text')
    generateAdText(@Body() text: any) {
        return(this.adContentService.generateAdText(text.text));
    }
}