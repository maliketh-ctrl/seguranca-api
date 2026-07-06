import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TreinamentoService } from 'src/service/treinamento/treinamento.service';

@Controller('treinamento')
export class TreinamentoController {
constructor(private readonly appService: TreinamentoService) { }


  @Get()
  getDados() {
    return this.appService.getDados()
  }
}