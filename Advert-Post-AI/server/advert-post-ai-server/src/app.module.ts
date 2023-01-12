import { Module } from '@nestjs/common';
import {AdContentModule} from "./adContent/adContent.module";

@Module({
  imports: [AdContentModule],
})
export class AppModule {}
