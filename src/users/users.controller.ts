import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users') // Prefixo da rota
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('signup')
    async signup(@Body() body: { username: string; password: string }) {
        return this.usersService.signup(body.username, body.password);
    }

    @Post('login')
    async login(@Body() body: { username: string; password: string }) {
        return this.usersService.login(body.username, body.password);
    }
}