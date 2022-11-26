import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config'
/**
 * Module to export and user the database provider for future DI
 */

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql', //Change depending of database
        host: configService.get('MYSQL_HOST'),
        port: configService.get('MYSQL_PORT'),
        username: configService.get('MYSQL_USER'),
        password: configService.get('MYSQL_PASSWORD'),
        database: configService.get('MYSQL_DATABASE'),
        entities: [
            __dirname + '/**/*.entity{.ts, js}',
        ],
        synchronize: true, //Only true for dev
        autoLoadEntities: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
export default DatabaseModule;
