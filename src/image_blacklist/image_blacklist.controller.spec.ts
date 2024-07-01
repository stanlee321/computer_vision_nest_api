import { Test, TestingModule } from '@nestjs/testing';
import { ImageBlacklistController } from './image_blacklist.controller';

describe('ImageBlacklistController', () => {
  let controller: ImageBlacklistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageBlacklistController],
    }).compile();

    controller = module.get<ImageBlacklistController>(ImageBlacklistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
