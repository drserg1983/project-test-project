import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserRolsService } from './user-rols.service';
import { CreateUserRolDto } from './dto/create-user-rol.dto';
import { UpdateUserRolDto } from './dto/update-user-rol.dto';

@Controller('user-rols')
export class UserRolsController {
  constructor(private readonly userRolsService: UserRolsService) {}

  @Post()
  create(@Body() createUserRolDto: CreateUserRolDto) {
    return this.userRolsService.create(createUserRolDto);
  }

  @Get()
  findAll() {
    return this.userRolsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userRolsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserRolDto: UpdateUserRolDto) {
    return this.userRolsService.update(+id, updateUserRolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRolsService.remove(+id);
  }
}
