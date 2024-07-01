import { Test, TestingModule } from '@nestjs/testing';
import { ProcessedImagesController } from './processed_images.controller';

describe('ProcessedImagesController', () => {
  let controller: ProcessedImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProcessedImagesController],
    }).compile();

    controller = module.get<ProcessedImagesController>(ProcessedImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
