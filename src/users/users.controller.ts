import {
  Controller,
  Post,
  Body,
  HttpException,
  BadRequestException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() newUser: CreateUserDto) {
    try {
      return this.usersService.createUser(newUser);
    } catch (error) {
      throw new BadRequestException('Something bad happened', {
        cause: new Error(),
        description: 'Some error description',
      });
    }
  }
}
