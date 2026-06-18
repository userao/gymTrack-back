import { Prisma } from "generated/prisma/client";

export type TemplateDTO = Prisma.TemplateCreateInput & { parentId: number }