import { Test, TestingModule } from '@nestjs/testing';
import { ProcessedVideosController } from './processed_videos.controller';

describe('ProcessedVideosController', () => {
  let controller: ProcessedVideosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProcessedVideosController],
    }).compile();

    controller = module.get<ProcessedVideosController>(ProcessedVideosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
