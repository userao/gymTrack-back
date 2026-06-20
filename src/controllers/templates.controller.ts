import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import type { TemplateDTO } from 'src/dto/template.dto';
import { TemplatesService } from 'src/services/templates.service';

@Controller('templates')
export class TemplatesController {
  constructor(private templatesService: TemplatesService) { }

  @Post()
  createTemplate(@Body() templateDto: TemplateDTO) {
    return this.templatesService.createTemplate(templateDto)
  }

  @Get()
  getAllTemplates() {
    return this.templatesService.getAllTemplates();
  }

  @Get(":id")
  getTemplate(@Param('id') id: string) {
    return this.templatesService.getTemplate(id);
  }
}
