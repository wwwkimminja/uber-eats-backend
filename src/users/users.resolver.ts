import { UsersService } from './users.service';
import { Resolver, Query } from "@nestjs/graphql";
import { User } from "./entities/user.entity";


@Resolver(of => User)
export class UsersResolver {
    constructor(
        private readonly UsersService: UsersService
    ) { }

    @Query(returns => Boolean)
    hi() {
        return true
    }
}