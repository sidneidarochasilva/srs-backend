import { DatabaseModule } from './infra/database/database.module';
import { AuthModule } from './infra/http/modules/auth/auth.module';
import { UserModule } from './infra/http/modules/user/user.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UserModule, DatabaseModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
