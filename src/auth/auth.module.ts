import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'; // Importe o módulo de usuários
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'default_secret', // Defina sua chave secreta no arquivo .env
            signOptions: { expiresIn: '60s' }, // Tempo de expiração do token
        }),
    ],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}