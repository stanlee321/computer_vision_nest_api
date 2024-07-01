import { Test, TestingModule } from '@nestjs/testing';
import { ProcessedImagesService } from './processed_images.service';

describe('ProcessedImagesService', () => {
  let service: ProcessedImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcessedImagesService],
    }).compile();

    service = module.get<ProcessedImagesService>(ProcessedImagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
