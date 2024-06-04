import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { Body, Controller, Get, Post } from "@nestjs/common";


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    findAllUsers() {
        return this.usersService.findAll();
    };

    @Post()
    create(@Body() user: CreateUserDto) {
        return this.usersService.create(user);
    };
};