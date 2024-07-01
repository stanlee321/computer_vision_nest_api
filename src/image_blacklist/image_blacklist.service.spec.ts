import { Test, TestingModule } from '@nestjs/testing';
import { ImageBlacklistService } from './image_blacklist.service';

describe('ImageBlacklistService', () => {
  let service: ImageBlacklistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImageBlacklistService],
    }).compile();

    service = module.get<ImageBlacklistService>(ImageBlacklistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
