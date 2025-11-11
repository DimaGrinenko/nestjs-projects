import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UsersEntity } from './users/entity/users.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'dima',
      password: '111111',
      database: 'book-catalog',
      synchronize: true,
      autoLoadEntities: true,
      entities: [UsersEntity],
    }),
    UsersModule,

  ],
})
export class AppModule {}