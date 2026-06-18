import { PrismaService } from 'src/services/prisma.service';
import { Injectable } from '@nestjs/common';
import { TemplateDTO } from 'src/dto/template.dto';
import {Template } from 'generated/prisma/client';

@Injectable()
export class TemplatesService {
  constructor(private prismaService: PrismaService) { }
  async createTemplate(templateDto: TemplateDTO) {
  }

  getAllTemplates() {
  }
}
