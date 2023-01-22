import {Module} from "@nestjs/common";
import {AdContentController} from "./adContent.controller";
import {AdContentService} from "./adContent.service";

@Module({
    controllers: [AdContentController],
    providers: [AdContentService]
})
export class AdContentModule {}
