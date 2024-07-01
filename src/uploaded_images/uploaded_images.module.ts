import { Module } from '@nestjs/common';
import { UploadedImagesService } from './uploaded_images.service';
import { UploadedImagesController } from './uploaded_images.controller';

@Module({
  providers: [UploadedImagesService],
  controllers: [UploadedImagesController]
})
export class UploadedImagesModule {}
