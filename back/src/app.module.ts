import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {        
        return {
          uri: configService.get('MONGO_SRV')
      }
    },
      inject: [ConfigService]
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }  
