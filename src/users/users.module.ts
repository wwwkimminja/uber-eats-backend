import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsersResolver, UsersService]
})
export class UsersModule { }
