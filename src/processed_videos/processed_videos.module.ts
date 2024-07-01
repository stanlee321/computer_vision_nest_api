import { Module } from '@nestjs/common';
import { ProcessedVideosService } from './processed_videos.service';
import { ProcessedVideosController } from './processed_videos.controller';

@Module({
  providers: [ProcessedVideosService],
  controllers: [ProcessedVideosController]
})
export class ProcessedVideosModule {}
