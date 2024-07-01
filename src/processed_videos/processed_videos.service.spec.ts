import { Test, TestingModule } from '@nestjs/testing';
import { ProcessedVideosService } from './processed_videos.service';

describe('ProcessedVideosService', () => {
  let service: ProcessedVideosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcessedVideosService],
    }).compile();

    service = module.get<ProcessedVideosService>(ProcessedVideosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
