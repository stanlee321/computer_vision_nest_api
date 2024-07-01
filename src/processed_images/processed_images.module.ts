import { Module } from '@nestjs/common';
import { ProcessedImagesService } from './processed_images.service';
import { ProcessedImagesController } from './processed_images.controller';

@Module({
  providers: [ProcessedImagesService],
  controllers: [ProcessedImagesController]
})
export class ProcessedImagesModule {}
