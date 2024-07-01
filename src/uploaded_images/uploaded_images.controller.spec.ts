import { Test, TestingModule } from '@nestjs/testing';
import { UploadedImagesController } from './uploaded_images.controller';

describe('UploadedImagesController', () => {
  let controller: UploadedImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadedImagesController],
    }).compile();

    controller = module.get<UploadedImagesController>(UploadedImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
