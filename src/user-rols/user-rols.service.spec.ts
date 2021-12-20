import { Test, TestingModule } from '@nestjs/testing';
import { UserRolsService } from './user-rols.service';

describe('UserRolsService', () => {
  let service: UserRolsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRolsService],
    }).compile();

    service = module.get<UserRolsService>(UserRolsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
