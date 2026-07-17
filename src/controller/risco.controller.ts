import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { RiscoService } from 'src/service/risco.service';

@Controller('riscos')
export class RiscoController {
  constructor(private readonly service: RiscoService) {}

  @Get()
  getDados() {
    return this.service.getDados();
  }

  @Get(':id')
  getEpi(@Param('id') id: string) {
    return this.service.getEpiById(Number(id));
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) { return this.service.delete(Number(id)); }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) { return this.service.update(Number(id), body); }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() body: any) { return this.service.patch(Number(id), body); }
}