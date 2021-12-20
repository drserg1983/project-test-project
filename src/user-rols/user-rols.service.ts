import { Injectable } from '@nestjs/common';
import { CreateUserRolDto } from './dto/create-user-rol.dto';
import { UpdateUserRolDto } from './dto/update-user-rol.dto';

@Injectable()
export class UserRolsService {
  create(createUserRolDto: CreateUserRolDto) {
    return 'This action adds a new userRol';
  }

  findAll() {
    return `This action returns all userRols`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userRol`;
  }

  update(id: number, updateUserRolDto: UpdateUserRolDto) {
    return `This action updates a #${id} userRol`;
  }

  remove(id: number) {
    return `This action removes a #${id} userRol`;
  }
}
