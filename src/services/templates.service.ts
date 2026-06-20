import { PrismaService } from 'src/services/prisma.service';
import { Injectable } from '@nestjs/common';
import { TemplateDTO } from 'src/dto/template.dto';
import { Template } from 'generated/prisma/client';

@Injectable()
export class TemplatesService {
  constructor(private prismaService: PrismaService) { }

  async createTemplate(templateDto: TemplateDTO): Promise<Template> {
    return this.prismaService.template.create({
      data: {
        name: templateDto.name,
        parentId: templateDto.parentId,
      }
    })
  }

  getAllTemplates(): Promise<Template[]> {
    return this.prismaService.template.findMany();
  }

  getTemplate(id: string) {
    return this.prismaService.template.findFirst({
      where: { id: +id },
      include: {
        templateExercises: {
          select: {
            exercise: true,
          }
        }
      }
    })
  }

  linkWithExercise(linkData: { templateId: number, exerciseId: number, sets: { reps: number, weight: number }[] }) {
    return this.prismaService.template.update({
      where: { id: linkData.templateId },
      data: {
        templateExercises: {
          create: {
            exerciseId: linkData.exerciseId,
            sets: {
              createMany: {data: linkData.sets}
            }
          }
        }
      }
    })
  }
}
