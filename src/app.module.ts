import { Module } from '@nestjs/common';
import { FilmesModule } from './filmes/filmes.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [FilmesModule, PrismaModule],
})
export class AppModule {}
