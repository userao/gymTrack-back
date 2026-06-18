import { PrismaService } from 'src/services/prisma.service';
import { Injectable } from '@nestjs/common';
import { TemplateDTO } from 'src/dto/template.dto';
import { GroupItems, Template } from 'generated/prisma/client';

@Injectable()
export class TemplatesService {
  constructor(private prismaService: PrismaService) { }
  async createTemplate(templateDto: TemplateDTO): Promise<GroupItems> {
    const template = await this.prismaService.template.create({
      data: {
        name: templateDto.name
      }
    });
    return this.prismaService.groupItems.create({
      data: {
        itemId: template.id,
        groupId: templateDto.parentId,
        type: "TEMPLATE"
      }
    })
  }

  getAllTemplates(): Promise<Template[]> {
    return this.prismaService.template.findMany();
  }
}
