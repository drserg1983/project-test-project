import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { UserRolsModule } from './user-rols/user-rols.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    UserRolsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
