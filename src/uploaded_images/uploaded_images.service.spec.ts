import { Test, TestingModule } from '@nestjs/testing';
import { UploadedImagesService } from './uploaded_images.service';

describe('UploadedImagesService', () => {
  let service: UploadedImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadedImagesService],
    }).compile();

    service = module.get<UploadedImagesService>(UploadedImagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
