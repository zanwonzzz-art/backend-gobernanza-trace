import { Module } from '@nestjs/common';
import { AuditoriaLogService } from './auditoria_log.service';
import { AuditoriaLogController } from './auditoria_log.controller';

@Module({
  controllers: [AuditoriaLogController],
  providers: [AuditoriaLogService],
})
export class AuditoriaLogModule {}
