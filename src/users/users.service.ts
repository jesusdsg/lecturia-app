import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    /**
     * Import and inject the user repository to create methods and store in database
     */
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    createUser(user: CreateUserDto){
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }

    getUsers(){
        return this.userRepository.find();
    }
}
