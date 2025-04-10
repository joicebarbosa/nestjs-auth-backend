import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: 'http://localhost:3001', // Assumindo que seu React está rodando na porta 3001
        methods: 'POST', // Especifique os métodos que você precisa (pelo menos POST para signup)
        allowedHeaders: 'Content-Type', // Especifique os headers permitidos
        credentials: true, // Se você precisar de cookies
    });

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();