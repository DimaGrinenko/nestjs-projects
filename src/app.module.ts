import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UsersEntity } from './users/entity/users.entity';
import { BooksModule } from './books/books.module';
import { GenreModule } from './genre/genre.module';
import { AuthorModule } from './author/author.module';
import { PublishersModule } from './publishers/publishers.module';


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
    BooksModule,
    GenreModule,
    AuthorModule,
    PublishersModule,

  ],
})
export class AppModule {}