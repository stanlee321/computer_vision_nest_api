import { Module } from '@nestjs/common';
import { ImageBlacklistService } from './image_blacklist.service';
import { ImageBlacklistController } from './image_blacklist.controller';

@Module({
  providers: [ImageBlacklistService],
  controllers: [ImageBlacklistController]
})
export class ImageBlacklistModule {}
