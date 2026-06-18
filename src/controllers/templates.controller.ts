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

  // @Get(":id")
  // async getTemplate(@Param('id') id: string) {
  //   // возвращаем объект {template, exercises}
  //   const template = await this.templatesService.getTemplate(id);

  //   if (!template) {
  //     return template;
  //   }

  //   const exercises = await this.templatesService.getTemplateExercises(template.id);
  //   return { template, exercises };
  // }

  @Get()
  getAllTemplates() {
    return this.templatesService.getAllTemplates();
  }

  // @Post(':id')
  // addExerciseToTemplate(@Param('id') id: string, @Body() exerciseId: number) {
  //   return this.templatesService.addExerciseToTemplate(id, exerciseId);
  // }
}
