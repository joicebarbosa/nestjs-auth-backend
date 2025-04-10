import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'; // Ajuste o caminho conforme necessário
import { AuthModule } from './auth/auth.module'; // Se você tiver um módulo de autenticação

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql', // ou o tipo de banco de dados que você está usando
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '1712',
            database: 'usuario_db',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true, // Não use em produção
        }),
        UsersModule,
        AuthModule, // Se você tiver um módulo de autenticação
    ],
})
export class AppModule {}