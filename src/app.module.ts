import { DatabaseModule } from './infra/database/database.module';
import { UserModule } from './infra/http/modules/user/user.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UserModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
