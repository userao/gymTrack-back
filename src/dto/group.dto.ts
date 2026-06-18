import { Prisma } from "generated/prisma/client";

export type GroupDTO = Prisma.GroupCreateInput & { userId: number, parentId?: number }