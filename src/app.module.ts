import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
import { ProcessedVideosModule } from './processed_videos/processed_videos.module';
import { UploadedImagesModule } from './uploaded_images/uploaded_images.module';
import { ProcessedImagesModule } from './processed_images/processed_images.module';
import { ImageBlacklistModule } from './image_blacklist/image_blacklist.module';

@Module({
  imports: [UsersModule, VideosModule, ProcessedVideosModule, UploadedImagesModule, ProcessedImagesModule, ImageBlacklistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
