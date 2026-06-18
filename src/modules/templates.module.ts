import { Module } from '@nestjs/common';
import { TemplatesController } from 'src/controllers/templates.controller';
import { TemplatesService } from 'src/services/templates.service';

@Module({
  imports: [],
  providers: [TemplatesService],
  controllers: [TemplatesController]
})
export class TemplatesModule {}
