import { Module } from '@nestjs/common';
import { AppController } from './controller/epi.controller';
import { AppService } from './service/epi.service';
import { EpiRepository } from './repository/epi.repository';
import { TreinamentoService } from './service/treinamento/treinamento.service';
import { TreinamentoRepository } from './repository/treinamento.repository';
import { TreinamentoController } from './controller/treinamento/treinamento.controller';
import { RiscoRepository } from './repository/risco.repository';
import { RiscoService } from './service/risco.service';
import { RiscoController } from './controller/risco.controller';
import { AuthService } from './service/auth/auth.service';
import { AuthController } from './controller/auth/auth.controller';

@Module({
  imports: [],
  controllers: [AppController, TreinamentoController, RiscoController, AuthController],
  providers: [AppService, EpiRepository, TreinamentoService, TreinamentoRepository, RiscoRepository, RiscoService, AuthService]
})
export class AppModule { }
