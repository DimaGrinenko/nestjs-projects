import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'dima',
      password: '111111',
      database: 'bookCatalog',
      synchronize: true,
      autoLoadEntities: true,
    }),

  ],
})
export class AppModule {}