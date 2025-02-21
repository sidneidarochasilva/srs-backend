import { DatabaseModule } from './../../../database/database.module';
import { AuthController } from './auth.controller';
import { Module } from "@nestjs/common";
import { LocalStrategy } from "../../../../modules/auth/strategies/local.strategy";
import { ValidateUserUseCases } from '../../../../modules/auth/validateUserUseCases/validateUserUseCases';
import { UserModule } from '../user/user.module';


@Module({
    controllers: [AuthController],
    imports: [DatabaseModule,UserModule],
    providers: [LocalStrategy,
        ValidateUserUseCases,
    ],
})
export class AuthModule {

    
}
