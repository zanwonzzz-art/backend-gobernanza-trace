import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { OtpTokenModule } from './otp_token/otp_token.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RefreshTokenModule } from './refresh_token/refresh_token.module';
import { RefreshTokenModule } from './refresh_token/refresh_token.module';
import { AuditLogModule } from './audit_log/audit_log.module';
import { RolModule } from './rol/rol.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { AuditoriaLogModule } from './auditoria_log/auditoria_log.module';
import { OtpTokenModule } from './otp_token/otp_token.module';

@Module({
  imports: [UsuariosModule, OtpTokenModule, RefreshTokenModule, AuditLogModule, RolModule, RoleModule, UserModule, AuditoriaLogModule, UsuarioModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
