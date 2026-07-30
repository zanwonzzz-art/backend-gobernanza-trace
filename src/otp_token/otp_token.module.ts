import { Module } from '@nestjs/common';
import { OtpTokenService } from './otp_token.service';
import { OtpTokenController } from './otp_token.controller';

@Module({
  controllers: [OtpTokenController],
  providers: [OtpTokenService],
})
export class OtpTokenModule {}
