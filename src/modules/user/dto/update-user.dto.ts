import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    readonly  firstName: string
    readonly lastName: string
    readonly phoneNumber: string
    readonly userRole: number
    email: string
    isActive: boolean
}
