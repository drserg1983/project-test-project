import { Test, TestingModule } from '@nestjs/testing';
import { UserRolsController } from './user-rols.controller';
import { UserRolsService } from './user-rols.service';

describe('UserRolsController', () => {
  let controller: UserRolsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRolsController],
      providers: [UserRolsService],
    }).compile();

    controller = module.get<UserRolsController>(UserRolsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
